import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import { TEXT_VARS } from '../config.js';

export default function About() {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });

  return (
    <section id="about" className="section">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2">
        {/* Image / owner card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-terracotta shadow-soft">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-white/20 font-deva text-4xl font-extrabold text-gold">
                म
              </div>
              <p className="mt-6 font-deva text-2xl font-bold">
                {t('about.ownerName', TEXT_VARS)}
              </p>
              <p className="mt-1 text-white/80">{t('about.ownerRole')}</p>
            </div>
          </div>

          {/* Stat badge */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-soft ring-1 ring-black/5">
            <div className="font-deva text-3xl font-extrabold text-brand">32+</div>
            <div className="text-xs font-medium text-ink/60">
              {t('about.statLabel')}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">{t('about.title')}</h2>
          <p className="mt-5 text-ink/70">{t('about.p1')}</p>
          <p className="mt-4 text-ink/70">{t('about.p2')}</p>

          <h3 className="mt-8 text-lg font-bold text-brand">{t('about.pointsTitle')}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
