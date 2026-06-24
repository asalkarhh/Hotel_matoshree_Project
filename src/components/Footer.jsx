import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { LangToggle } from './Navbar.jsx';
import { CONTACT, TEXT_VARS } from '../config.js';

const FOOTER_LINKS = [
  { id: 'about',      key: 'nav.about' },
  { id: 'franchises', key: 'nav.franchises' },
  { id: 'locations',  key: 'nav.locations' },
  { id: 'process',    key: 'nav.process' },
  { id: 'faq',        key: 'nav.faq' },
  { id: 'apply',      key: 'nav.apply' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-max grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand font-deva text-lg font-extrabold text-gold">
              म
            </span>
            <span className="font-deva text-lg font-extrabold text-white">{t('nav.brand')}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {t('footer.about')}
          </p>
          <div className="mt-5">
            <LangToggle className="!border-white/20 !bg-white/5 !text-white hover:!bg-white hover:!text-brand" />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {t('footer.quickLinks')}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {t('footer.contactTitle')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold" />
              <a href={`tel:${CONTACT.phoneDial}`} className="hover:text-gold">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-gold" />
              <span>{t('contact.address', TEXT_VARS)}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {t('nav.brand')}. {t('footer.rights')}
          </p>
          <p>{t('footer.madeFor')}</p>
        </div>
      </div>
    </footer>
  );
}
