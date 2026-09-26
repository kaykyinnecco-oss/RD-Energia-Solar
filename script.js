const WHATSAPP_NUMBER = '5522999413111';
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const header = document.querySelector('.site-header');
const mobileContact = document.querySelector('.mobile-contact');
const quoteForm = document.querySelector('#quote-form');
const formError = document.querySelector('#form-error');
const applianceSelect = document.querySelector('#aparelhos');
const applianceDetails = document.querySelector('#appliance-details-wrap');
applianceSelect?.addEventListener('change', () => { applianceDetails.hidden = applianceSelect.value !== 'Sim'; });

const maintenanceForm = document.querySelector('#maintenance-form');
maintenanceForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!maintenanceForm.reportValidity()) return;
  const data = new FormData(maintenanceForm);
  const message = [
    'Olá! Gostaria de solicitar informações sobre manutenção do meu sistema de energia solar.',
    '',
    `Quantidade de painéis: ${String(data.get('paineis') || '').trim()}.`,
    `Cidade: ${String(data.get('cidade') || '').trim()}.`,
    `Tipo de telhado: ${String(data.get('telhado') || '').trim()}.`,
    `Tipo de inversor: ${String(data.get('inversor') || '').trim()}.`,
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const metricsSection = document.querySelector('.metrics-section');
const counters = [...document.querySelectorAll('[data-counter]')];
if (metricsSection && counters.length && 'IntersectionObserver' in window) {
  metricsSection.classList.add('metrics-pending');
  const formatter = new Intl.NumberFormat('pt-BR');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealCounters = () => {
    metricsSection.classList.add('metrics-visible');
    if (reducedMotion) return;
    counters.forEach((counter, index) => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';
      const delay = index * 100;
      counter.textContent = `0${suffix}`;
      const start = performance.now() + delay;
      const duration = 1200;
      const draw = (now) => {
        if (now < start) return requestAnimationFrame(draw);
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - ((1 - progress) ** 4);
        counter.textContent = `${formatter.format(Math.round(target * eased))}${suffix}`;
        if (progress < 1) requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    });
  };
  const metricsObserver = new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      revealCounters();
      observer.disconnect();
    }
  }, { threshold: 0.35 });
  metricsObserver.observe(metricsSection);
}

document.querySelectorAll('[data-scroll]').forEach((button) => button.addEventListener('click', () => {
  const track = button.closest('.project-section, .media-panel')?.querySelector('[data-carousel]');
  if (track) track.scrollBy({ left: (button.dataset.scroll === 'next' ? 1 : -1) * track.clientWidth * 0.78, behavior: 'smooth' });
}));

const mediaTabs = document.querySelectorAll('[role="tab"]');
mediaTabs.forEach((tab) => tab.addEventListener('click', () => {
  mediaTabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
}));

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mainNav?.setAttribute('data-open', String(!isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.setAttribute('data-open', 'false');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

let scrollTicking = false;
const updateScrollState = () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    header?.classList.toggle('is-scrolled', window.scrollY > 28);
    scrollTicking = false;
  });
};
window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

if ('IntersectionObserver' in window && mobileContact) {
  const hero = document.querySelector('.hero');
  const formSection = document.querySelector('#orcamento');
  const maintenanceSection = document.querySelector('#manutencoes');
  let pastHero = false;
  let formInView = false;
  let maintenanceInView = false;
  let footerInView = false;
  const syncMobileContact = () => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const visible = isMobile && pastHero && !formInView && !maintenanceInView && !footerInView;
    mobileContact.setAttribute('data-visible', String(visible));
    document.body.classList.toggle('mobile-contact-visible', visible);
  };
  const heroObserver = new IntersectionObserver(([entry]) => {
    pastHero = !entry.isIntersecting;
    syncMobileContact();
  }, { threshold: 0.05 });
  const formObserver = new IntersectionObserver(([entry]) => {
    formInView = entry.isIntersecting;
    syncMobileContact();
  }, { threshold: 0.08 });
  const maintenanceObserver = new IntersectionObserver(([entry]) => {
    maintenanceInView = entry.isIntersecting;
    syncMobileContact();
  }, { threshold: 0.08 });
  const footerObserver = new IntersectionObserver((entries) => {
    footerInView = entries.some((entry) => entry.isIntersecting);
    syncMobileContact();
  }, { threshold: 0.04 });
  if (hero) heroObserver.observe(hero);
  if (formSection) formObserver.observe(formSection);
  if (maintenanceSection) maintenanceObserver.observe(maintenanceSection);
  const closingSection = document.querySelector('.closing-cta');
  const footer = document.querySelector('.site-footer');
  if (closingSection) footerObserver.observe(closingSection);
  if (footer) footerObserver.observe(footer);
  window.addEventListener('resize', syncMobileContact, { passive: true });
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealTargets = document.querySelectorAll('.section-copy, .benefit-list, .section-heading, .project-card, .coverage-copy, .quote-copy, .quote-form, .project-cta-inner');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => {
    element.classList.add('will-reveal');
    revealObserver.observe(element);
  });
}

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formError.textContent = '';
  if (!quoteForm.reportValidity()) return;

  const data = new FormData(quoteForm);
  const name = String(data.get('nome') || '').trim();
  const city = String(data.get('cidade') || '').trim();
  const property = String(data.get('imovel') || '').trim();
  const roof = String(data.get('telhado') || '').trim();
  const phone = String(data.get('telefone') || '').trim();
  const email = String(data.get('email') || '').trim();
  const appliances = String(data.get('adicionar_aparelho') || '').trim();
  const appliance = String(data.get('aparelho') || '').trim();
  const bill = Number(data.get('conta'));
  if (!name || !city || !phone || !property || !roof || !appliances || !Number.isFinite(bill) || bill <= 0) {
    formError.textContent = 'Confira os campos obrigatórios antes de continuar.';
    return;
  }

  const formattedBill = new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL', maximumFractionDigits: 2,
  }).format(bill);
  const message = [
    'Olá! Vim pelo site da RD Energia Solar e gostaria de receber uma simulação para meu imóvel.',
    '',
    `Meu nome é ${name}, moro em ${city}. Telefone: ${phone}${email ? `; e-mail: ${email}` : ''}.`,
    `Imóvel: ${property}; telhado: ${roof}.`,
    `Conta de energia aproximada: ${formattedBill} por mês.`,
    `Pretendo adicionar aparelho elétrico: ${appliances}${appliances === 'Sim' && appliance ? ` (${appliance})` : ''}.`,
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
