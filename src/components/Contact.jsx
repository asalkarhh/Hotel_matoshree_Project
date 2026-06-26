import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Mail, MapPin, Clock, UserRound, Instagram, Youtube } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { CONTACT, TEXT_VARS } from '../config.js';

export default function Contact() {
  const { t } = useTranslation();

  const hasMap = !CONTACT.mapEmbedSrc.includes('{{');

  const contactItems = [
    { icon: Phone,         label: t('contact.phoneLabel'),   value: CONTACT.phoneDisplay,       href: `tel:${CONTACT.phoneDial}` },
    { icon: MessageCircle, label: t('contact.whatsappLabel'),value: `+${CONTACT.whatsapp}`,     href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: Mail,          label: t('contact.emailLabel'),   value: CONTACT.email,              href: `mailto:${CONTACT.email}` },
    { icon: MapPin,        label: t('contact.addressLabel'), value: t('contact.address', TEXT_VARS) },
    { icon: UserRound,     label: t('locations.manager'),    value: 'Prof. Manoj Surwase' },
    { icon: Clock,         label: t('contact.hoursLabel'),   value: t('contact.hours') },
  ];

  const socialLinks = [
    { icon: Instagram, href: CONTACT.social.instagram },
    { icon: Youtube,   href: CONTACT.social.youtube },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info card */}
          <div className="card">
            <ul className="space-y-5">
              {contactItems.map((item, i) => {
                const inner = (
                  <span className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <item.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-ink/50">
                        {item.label}
                      </span>
                      <span className="block font-medium text-ink">{item.value}</span>
                    </span>
                  </span>
                );
                return (
                  <li key={i}>
                    {item.href ? (
                      <a href={item.href} className="block transition-opacity hover:opacity-75">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Social links */}
            <div className="mt-6 border-t border-black/5 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t('contact.followLabel')}
              </span>
              <div className="mt-3 flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white transition-transform hover:scale-110"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            {hasMap ? (
              <>
                <iframe
                  title={t('contact.mapTitle')}
                  src={CONTACT.mapEmbedSrc}
                  className="h-full min-h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand shadow-soft transition-colors hover:bg-brand hover:text-white"
                >
                  <MapPin size={16} />
                  {t('locations.directions')}
                </a>
              </>
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-brand/5 p-8 text-center">
                <MapPin size={40} className="text-brand/40" />
                <p className="mt-3 text-sm text-ink/50">{t('contact.mapTitle')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
