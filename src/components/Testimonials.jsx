import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { TEXT_VARS } from '../config.js';

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true, ...TEXT_VARS });
  const [idx, setIdx] = useState(0);

  const move = (dir) => setIdx((prev) => (prev + dir + items.length) % items.length);
  const current = items[idx];

  return (
    <section className="section">
      <div className="container-max">
        <SectionHeader
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
        />

        <div className="relative mx-auto max-w-3xl">
          <Quote size={48} className="mx-auto text-gold/40" />

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <p className="text-xl font-medium leading-relaxed text-ink/90">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="font-deva text-lg font-bold text-brand">{current.name}</div>
                  <div className="text-sm text-ink/60">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="‹"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx ? 'w-6 bg-brand' : 'w-2.5 bg-brand/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="›"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
