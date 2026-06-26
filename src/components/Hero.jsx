import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../config.js';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative mt-16 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden lg:mt-20 lg:min-h-[calc(100vh-5rem)]"
    >
      {/* Background layers */}
      <img
        src={ASSETS.heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-max relative z-10 flex min-h-[calc(100vh-4rem)] items-end justify-center pb-28 pt-20 text-white lg:min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apply" className="btn-primary">
              {t('hero.ctaApply')}
              <ArrowRight size={18} />
            </a>
            <a href="#franchises" className="btn-outline">
              {t('hero.ctaView')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
