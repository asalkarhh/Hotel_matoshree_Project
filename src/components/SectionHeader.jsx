import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className={`mt-4 text-3xl sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/80' : 'text-ink/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
