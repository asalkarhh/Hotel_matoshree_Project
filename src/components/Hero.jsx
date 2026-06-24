import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-terracotta" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,160,23,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="container-max relative z-10 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <Star size={15} className="text-gold" fill="currentColor" />
            {t('hero.badge')}
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {t('hero.title')}
            <span className="mt-2 block text-gold">{t('hero.titleAccent')}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-white/85">{t('hero.subtitle')}</p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#apply" className="btn-primary">
              {t('hero.ctaApply')}
              <ArrowRight size={18} />
            </a>
            <a href="#franchises" className="btn-outline">
              {t('hero.ctaView')}
            </a>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wider text-white/70">
            {t('hero.trust')}
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
