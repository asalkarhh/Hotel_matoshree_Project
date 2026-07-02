import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ASSETS, TEXT_VARS } from '../config.js';

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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-dark shadow-soft">
            <img
              src={ASSETS.ownerPortrait}
              alt={t('about.ownerName', TEXT_VARS)}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-6 text-white">
              <p className="font-deva text-2xl font-bold">
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
          <p className="mt-3 font-semibold text-brand/80">{t('about.searchName')}</p>
          <p className="mt-5 text-ink/70">{t('about.p1')}</p>
          <p className="mt-4 text-ink/70">{t('about.p2')}</p>
          <a href="/manoj-surwase" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark">
            {t('about.ownerLink')}
            <ArrowRight size={18} />
          </a>

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
