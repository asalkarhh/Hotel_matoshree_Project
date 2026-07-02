import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Dumbbell } from 'lucide-react';
import { ASSETS } from '../config.js';

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="home"
      className="relative mt-16 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-black lg:mt-20 lg:min-h-[calc(100vh-5rem)]"
    >
      {/* Background layers */}
      <img
        src={ASSETS.heroPoster}
        alt="Hotel Matoshree Dharashiv — Maharashtrian thali and special chicken dum biryani"
        className="absolute inset-0 h-full w-full object-cover object-[center_top] blur-sm scale-105 sm:blur-0 sm:scale-100"
      />
      <img
        src={ASSETS.heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 block h-[68vh] min-h-[430px] max-h-[540px] w-full object-cover object-[center_top] sm:hidden"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-max relative z-10 flex min-h-[calc(100vh-4rem)] items-end justify-center overflow-hidden pb-6 pt-20 text-white sm:pb-8 lg:min-h-[calc(100vh-5rem)] lg:pb-10">
        <h1 className="sr-only">
          Hotel Matoshree Dharashiv — Dharashiv Matoshree by Prof. Manoj Surwase
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* CTAs */}
          <div className="flex w-full max-w-full flex-col items-center gap-3 px-1 sm:gap-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#apply" className="btn-primary !px-5 text-xs sm:!px-6 sm:text-sm">
                {t('hero.ctaApply')}
                <ArrowRight size={18} />
              </a>
              <a href="#franchises" className="btn-outline !px-5 text-xs sm:!px-6 sm:text-sm">
                {t('hero.ctaView')}
              </a>
            </div>
            <a
              href="/gym"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#f59e0b] bg-black/70 px-5 py-3 text-xs font-bold text-white shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[#f59e0b] hover:text-black sm:mt-4 sm:px-6 sm:text-sm"
            >
              <Dumbbell size={18} />
              {i18n.language === 'mr' ? 'मातोश्री जिम' : t('hero.ctaGym')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
