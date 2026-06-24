import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Wrench, Users, ShieldCheck, Truck, Headphones } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const ICONS = [Award, Wrench, Users, ShieldCheck, Truck, Headphones];

export default function WhyUs() {
  const { t } = useTranslation();
  const items = t('why.items', { returnObjects: true });

  return (
    <section className="section">
      <div className="container-max">
        <SectionHeader
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="card group hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink/70">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
