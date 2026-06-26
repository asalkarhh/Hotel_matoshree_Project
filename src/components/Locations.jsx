import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  UtensilsCrossed,
  Coffee,
  MapPin,
  Phone,
  Navigation,
  UserRound,
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { BRANCHES } from '../config.js';

const TYPE_ICONS = { hotel: UtensilsCrossed, tea: Coffee };

function DetailLine({ icon: Icon, children }) {
  if (!children) return null;

  return (
    <p className="flex items-start gap-2 text-sm text-ink/70">
      <Icon size={16} className="mt-0.5 shrink-0 text-brand" />
      <span>{children}</span>
    </p>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────
function StatCard({ value, suffix, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-deva text-4xl font-extrabold text-gold">
        {value}
        <span className="text-2xl">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
    </motion.div>
  );
}

// ─── Branch card ──────────────────────────────────────────────────────────
function BranchCard({ branch, lang, t }) {
  const [imgValid, setImgValid] = useState(true);
  const Icon    = TYPE_ICONS[branch.type] || UtensilsCrossed;
  const info    = branch[lang] || branch.mr;
  const cityName = lang === 'mr' ? branch.cityMr || branch.city : branch.city;
  const managerName = lang === 'mr' ? branch.managerNameMr || branch.managerName : branch.managerName;
  const isMainBranch = branch.id === 'hotel-dharashiv';
  const hasPhoto = branch.photo && !branch.photo.includes('{{') && imgValid;
  const telHref  = `tel:${(branch.mobile || '').replace(/[^\d+]/g, '')}`;
  const mapHref  = branch.mapLink && !branch.mapLink.includes('{{')
    ? branch.mapLink
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-soft ring-1 ring-black/5 transition-transform hover:-translate-y-1"
    >
      {/* Photo / placeholder */}
      <div className="relative h-44 shrink-0 overflow-hidden">
        {hasPhoto ? (
          <img
            src={branch.photo}
            alt={info.name}
            loading="lazy"
            onError={() => setImgValid(false)}
            style={{ objectPosition: branch.imagePosition || 'center' }}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              branch.imageFit === 'contain' ? 'bg-white object-contain p-2' : 'object-cover'
            }`}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center ${
              branch.type === 'tea'
                ? 'bg-gradient-to-br from-terracotta to-terracotta-light'
                : 'bg-gradient-to-br from-brand to-brand-light'
            }`}
          >
            <Icon size={48} className="text-white/80" />
          </div>
        )}
        <span className="absolute right-3 top-3 inline-flex min-w-24 items-center justify-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand backdrop-blur">
          <Icon size={13} />
          {cityName}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-deva text-lg font-bold text-ink">{info.name}</h4>

        <div className="mt-3 grid gap-2">
          <DetailLine icon={MapPin}>{info.address}</DetailLine>
          <DetailLine icon={UserRound}>
            {t('locations.manager', 'Manager')}: {managerName}
          </DetailLine>
          <DetailLine icon={Phone}>{branch.mobile}</DetailLine>
        </div>

        {isMainBranch ? (
          <p className="mt-3 rounded-xl bg-brand/5 px-3 py-2 text-xs font-medium leading-relaxed text-brand">
            {lang === 'mr' ? 'हॉटेल मातोश्रीची मुख्य शाखा' : 'Main branch of Hotel Matoshree'}
          </p>
        ) : null}

        <div className="mt-auto flex gap-2 pt-4">
          <a href={telHref} className="btn-brand flex-1 !px-4 !py-2.5 text-xs">
            <Phone size={15} />
            {t('locations.call')}
          </a>
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-brand/20 px-4 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/5"
          >
            <Navigation size={15} />
            {t('locations.directions')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────
export default function Locations() {
  const { t, i18n } = useTranslation();
  const stats = t('locations.stats', { returnObjects: true });
  const lang  = i18n.language === 'en' ? 'en' : 'mr';

  return (
    <section id="locations" className="section relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(212,160,23,0.18),transparent_50%)]" />

      <div className="container-max relative">
        <SectionHeader
          eyebrow={t('locations.eyebrow')}
          title={t('locations.title')}
          subtitle={t('locations.subtitle')}
          light
        />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

        {/* Branch cards */}
        <h3 className="mb-8 mt-16 text-center text-2xl font-bold text-white">
          {t('locations.branchesTitle')}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
