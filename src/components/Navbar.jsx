import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { ASSETS } from '../config.js';

const NAV_LINKS = [
  { id: 'about',      key: 'nav.about' },
  { id: 'franchises', key: 'nav.franchises' },
  { id: 'locations',  key: 'nav.locations' },
  { id: 'process',    key: 'nav.process' },
  { id: 'faq',        key: 'nav.faq' },
  { id: 'contact',    key: 'nav.contact' },
];

export function LangToggle({ className = '' }) {
  const { i18n, t } = useTranslation();
  const next = i18n.language === 'mr' ? 'en' : 'mr';

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t('nav.langAria')}
      className={`inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/80 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white ${className}`}
    >
      <Globe size={16} />
      {t('nav.langToggle')}
    </button>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isHeroHeader = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-soft backdrop-blur' : 'bg-ink/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="relative flex h-11 w-28 items-center overflow-hidden rounded bg-ink p-1 shadow-sm">
            <img src={ASSETS.logo} alt={t('nav.brand')} className="absolute inset-1 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] object-contain" />
          </span>
          <span className="leading-tight">
            <span className={`block font-deva text-lg font-extrabold ${isHeroHeader ? 'text-white' : 'text-brand'}`}>
              {t('nav.brand')}
            </span>
            <span className={`block text-[11px] font-medium ${isHeroHeader ? 'text-white/70' : 'text-ink/60'}`}>
              {t('nav.tagline')}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-semibold transition-colors ${
                  isHeroHeader ? 'text-white/90 hover:text-gold' : 'text-ink/80 hover:text-brand'
                }`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle className={isHeroHeader ? '!border-white/25 !bg-white/10 !text-white hover:!bg-white hover:!text-brand' : ''} />
          <a href="#apply" className="btn-primary">
            {t('nav.apply')}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle className={isHeroHeader ? '!border-white/25 !bg-white/10 !text-white hover:!bg-white hover:!text-brand' : ''} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t(menuOpen ? 'common.close' : 'common.menu')}
            aria-expanded={menuOpen}
            className={`grid h-10 w-10 place-items-center rounded-lg ${isHeroHeader ? 'text-white' : 'text-brand'}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="container-max flex flex-col gap-1 border-t border-black/5 bg-cream pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink/80 hover:bg-brand/5 hover:text-brand"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#apply" onClick={closeMenu} className="btn-primary w-full">
                {t('nav.apply')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
