import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardList, Phone, FileSignature, Settings, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const STEP_ICONS = [ClipboardList, Phone, FileSignature, Settings, Rocket];

export default function Process() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id="process" className="section bg-white">
      <div className="container-max">
        <SectionHeader
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <div className="relative grid gap-8 md:grid-cols-5">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-brand/20 via-gold/40 to-brand/20 md:block" />

          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-cream bg-brand text-white shadow-soft">
                  <Icon size={26} />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-extrabold text-ink">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
