import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../config.js';

export default function FloatingButtons() {
  const { t } = useTranslation();
  const msg      = encodeURIComponent(t('floating.whatsappMsg'));
  const waHref   = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
  const callHref = `tel:${CONTACT.phoneDial}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('floating.whatsapp')}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-110"
      >
        <MessageCircle size={26} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          {t('floating.whatsapp')}
        </span>
      </a>

      {/* Call */}
      <a
        href={callHref}
        aria-label={t('floating.call')}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-soft transition-transform hover:scale-110"
      >
        <Phone size={24} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          {t('floating.call')}
        </span>
      </a>
    </div>
  );
}
