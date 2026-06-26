import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  UtensilsCrossed, Coffee, CheckCircle, ArrowRight,
  DollarSign, Maximize2, TrendingUp, X, ChevronLeft, ChevronRight, ZoomIn,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import { FRANCHISE_TYPES, FRANCHISE_VARS } from '../config.js';
import Accordion from './Accordion.jsx';

const ICON_MAP = { UtensilsCrossed, Coffee };
const TERMS_PREVIEW_COUNT = 4;
const TERM_PREVIEW_LENGTH = 48;

function splitTermText(text) {
  if (text.length <= TERM_PREVIEW_LENGTH) {
    return { preview: text, rest: '' };
  }

  const splitAt = text.lastIndexOf(' ', TERM_PREVIEW_LENGTH);
  const safeSplit = splitAt > 40 ? splitAt : TERM_PREVIEW_LENGTH;

  return {
    preview: text.slice(0, safeSplit).trim(),
    rest: text.slice(safeSplit).trim(),
  };
}

// ─── Lightbox ────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onIndex, labels = {} }) {
  const total = images.length;

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onIndex((index - 1 + total) % total);
      if (e.key === 'ArrowRight') onIndex((index + 1) % total);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [index, total, onClose, onIndex]);

  const img = images[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={24} />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + total) % total); }}
            aria-label={labels.prev}
            className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % total); }}
            aria-label={labels.next}
            className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <figure className="max-h-[88vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt || ''}
          className="mx-auto max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
          onError={(e) => {
            const div = document.createElement('div');
            div.className = 'grid h-72 w-72 place-items-center rounded-lg bg-white/10 text-white/60';
            div.textContent = labels.missing || 'Image not added';
            e.currentTarget.replaceWith(div);
          }}
        />
        {total > 1 && (
          <figcaption className="mt-3 text-center text-sm text-white/70">
            {index + 1} / {total}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body,
  );
}

// ─── Terms image thumbnail ────────────────────────────────────────────────
function TermsImage({ src, alt, onOpen, placeholder }) {
  const [valid, setValid] = useState(true);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/5 transition-all hover:ring-2 hover:ring-brand/40"
    >
      {valid ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setValid(false)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="flex flex-col items-center gap-2 p-4 text-center text-xs text-ink/40">
          <ZoomIn size={28} className="text-ink/20" />
          {placeholder}
        </span>
      )}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
        <ZoomIn size={22} className="text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
      </span>
    </button>
  );
}

// ─── Main Franchises section ──────────────────────────────────────────────
export default function Franchises() {
  const { t } = useTranslation();
  const [activeId, setActiveId]     = useState(FRANCHISE_TYPES[0].id);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [termsExpanded, setTermsExpanded] = useState(false);

  const active     = FRANCHISE_TYPES.find((f) => f.id === activeId);
  const i18nBase   = `franchises.${active.i18nKey}`;
  const termsImages = active.termsImages || [];
  const visibleTermsImages = termsExpanded
    ? termsImages
    : termsImages.slice(0, TERMS_PREVIEW_COUNT);
  const hiddenTermsCount = Math.max(termsImages.length - visibleTermsImages.length, 0);
  const IconComp   = ICON_MAP[active.icon] || UtensilsCrossed;

  const includes = t(`${i18nBase}.includes`, { returnObjects: true, ...FRANCHISE_VARS });
  const termsRaw = t(`${i18nBase}.terms`,    { returnObjects: true, ...FRANCHISE_VARS });
  const termsAccordion = termsRaw.map((text, i) => {
    const { preview, rest } = splitTermText(text);
    return { q: `${i + 1}.`, a: rest, preview };
  });

  const stats = [
    { icon: DollarSign, label: t('franchises.labels.investment'), value: t(`${i18nBase}.investment`, FRANCHISE_VARS) },
    { icon: Maximize2,  label: t('franchises.labels.area'),       value: t(`${i18nBase}.area`,       FRANCHISE_VARS) },
    { icon: TrendingUp, label: t('franchises.labels.roi'),        value: t(`${i18nBase}.roi`,        FRANCHISE_VARS) },
  ];

  const handleSwitch = (id) => {
    setActiveId(id);
    setLightboxIdx(null);
    setTermsExpanded(false);
  };

  return (
    <section id="franchises" className="section bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow mb-4">{t('franchises.eyebrow')}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">{t('franchises.title')}</h2>
          <p className="mt-4 text-ink/70">{t('franchises.subtitle')}</p>
        </div>

        {/* Tab switcher */}
        <div className="mx-auto mb-10 flex max-w-md gap-2 rounded-full bg-cream p-1.5">
          {FRANCHISE_TYPES.map((ft) => {
            const Icon = ICON_MAP[ft.icon] || UtensilsCrossed;
            const isActive = ft.id === activeId;
            return (
              <button
                key={ft.id}
                type="button"
                onClick={() => handleSwitch(ft.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
                  isActive ? 'bg-brand text-white shadow-soft' : 'text-ink/60 hover:text-brand'
                }`}
              >
                <Icon size={18} />
                {t(`franchises.${ft.i18nKey}.name`)}
              </button>
            );
          })}
        </div>

        {/* Content (animated on tab change) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:grid-cols-5"
          >
            {/* Left — details */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-brand">{t(`${i18nBase}.name`)}</h3>
              <p className="mt-2 text-ink/70">{t(`${i18nBase}.tagline`)}</p>

              {/* Stats */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-2xl bg-cream p-5">
                    <s.icon size={22} className="text-gold" />
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {s.label}
                    </div>
                    <div className="mt-1 font-deva text-lg font-extrabold text-ink">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <h4 className="mt-8 text-lg font-bold text-ink">{t('franchises.labels.includes')}</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#apply" className="btn-brand mt-8">
                {t('franchises.labels.applyNow')}
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right — terms accordion */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 text-lg font-bold text-ink">{t('franchises.labels.terms')}</h4>
              <Accordion items={termsAccordion} defaultOpen={-1} showPreview />
            </div>

            {/* Full-width — official terms images */}
            {termsImages.length > 0 && (
              <div className="lg:col-span-5">
                <div className="mt-4 rounded-2xl border border-brand/15 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex flex-col gap-3 border-b border-black/5 pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-ink">
                        {t('franchises.labels.officialTerms')}
                      </h4>
                      <p className="mt-1 text-sm text-ink/60">{t('franchises.officialNote')}</p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-cream px-3 py-1 text-xs font-bold text-brand">
                      {termsImages.length} pages
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {visibleTermsImages.map((src, i) => (
                      <TermsImage
                        key={i}
                        src={src}
                        alt={`${t(`${i18nBase}.name`)} — ${t('franchises.labels.terms')} ${i + 1}`}
                        placeholder={t('franchises.imagePlaceholder')}
                        onOpen={() => setLightboxIdx(i)}
                      />
                    ))}
                  </div>

                  {termsImages.length > TERMS_PREVIEW_COUNT && (
                    <div className="mt-5 flex justify-center border-t border-black/5 pt-5">
                      <button
                        type="button"
                        onClick={() => setTermsExpanded((v) => !v)}
                        aria-expanded={termsExpanded}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand/20 bg-cream px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        {termsExpanded
                          ? 'Show less'
                          : `Read more (${hiddenTermsCount} more)`}
                        {termsExpanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && termsImages.length > 0 && (
        <Lightbox
          images={termsImages.map((src, i) => ({
            src,
            alt: `${t(`${i18nBase}.name`)} — ${t('franchises.labels.terms')} ${i + 1}`,
          }))}
          index={lightboxIdx}
          onIndex={setLightboxIdx}
          onClose={() => setLightboxIdx(null)}
          labels={{
            close:   t('common.close'),
            prev:    t('common.prev'),
            next:    t('common.next'),
            missing: t('franchises.imagePlaceholder'),
          }}
        />
      )}
    </section>
  );
}
