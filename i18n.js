const translations = {
  ru: {
    'menu-about': 'О нас',
    'menu-products': 'Продукция',
    'menu-advantages': 'Преимущества',
    'menu-contacts': 'Контакты',
    'hero-title': 'ТОО "Торговый дом "Лира"',
    'hero-subtitle': 'Сертифицированные поставки для железнодорожной отрасли',
    'hero-button': 'Продукция',
    'about-title': 'О компании',
    'about-text': 'Специализируемся на поставках оборудования и комплектующих для предприятий железнодорожного транспорта. Работаем с сертифицированной продукцией, соответствующей стандартам отрасли.',
    'products-title': 'Продукция',
    'advantages-title': 'Почему мы?',
    'advantage-1': '✅ Сертификат качества продукции ORKA',
    'advantage-2': '✅ Специализация на ЖД отрасли',
    'advantage-3': '✅ Надёжная логистика',
    'advantage-4': '✅ Долгосрочное сотрудничество',
    'contacts-title': 'Контакты',
    'contacts-phone': 'Телефон: по запросу',
    'footer-year': '2025',
    'footer-privacy': 'Политика конфиденциальности'
  },
  en: {
    'menu-about': 'About',
    'menu-products': 'Products',
    'menu-advantages': 'Advantages',
    'menu-contacts': 'Contacts',
    'hero-title': 'Lira Trading House LLP',
    'hero-subtitle': 'Certified supplies for the railway industry',
    'hero-button': 'Products',
    'about-title': 'About Us',
    'about-text': 'We specialize in supplying equipment and components for railway transport enterprises. We work with certified products that meet industry standards.',
    'products-title': 'Products',
    'advantages-title': 'Why Us?',
    'advantage-1': '✅ ORKA product quality certificate',
    'advantage-2': '✅ Specialization in railway industry',
    'advantage-3': '✅ Reliable logistics',
    'advantage-4': '✅ Long-term cooperation',
    'contacts-title': 'Contacts',
    'contacts-phone': 'Phone: upon request',
    'footer-year': '2025',
    'footer-privacy': 'Privacy Policy'
  },
  kz: {
    'menu-about': 'Біз туралы',
    'menu-products': 'Өнімдер',
    'menu-advantages': 'Артықшылықтар',
    'menu-contacts': 'Байланыс',
    'hero-title': '«Лира» Сауда үйі ЖШС',
    'hero-subtitle': 'Темір жол саласына сертификатталған жеткізілімдер',
    'hero-button': 'Өнімдер',
    'about-title': 'Біз туралы',
    'about-text': 'Біз теміржол көлігі кәсіпорындарына жабдық пен компоненттерді жеткізуге маманданғанбыз. Біз саланың стандарттарына сәйкес келетін сертификатталған өнімдермен жұмыс істейміз.',
    'products-title': 'Өнімдер',
    'advantages-title': 'Неге біз?',
    'advantage-1': '✅ ORKA өнім сапасы сертификаты',
    'advantage-2': '✅ Теміржол саласына мамандану',
    'advantage-3': '✅ Сенімді логистика',
    'advantage-4': '✅ Ұзақ мерзімді ынтымақтастық',
    'contacts-title': 'Байланыс',
    'contacts-phone': 'Телефон: сұрау бойынша',
    'footer-year': '2025',
    'footer-privacy': 'Құпиялылық саясаты'
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-tr]');
  elements.forEach(el => {
    const key = el.getAttribute('data-tr');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.setAttribute('lang', lang);
  document.querySelector('.lang-switcher .active')?.classList.remove('active');
  document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');
  localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || 'ru';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
