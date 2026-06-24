import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader.jsx';
import Accordion from './Accordion.jsx';

export default function FAQ() {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true });

  return (
    <section id="faq" className="section bg-white">
      <div className="container-max">
        <SectionHeader eyebrow={t('faq.eyebrow')} title={t('faq.title')} />
        <div className="mx-auto max-w-3xl">
          <Accordion items={items} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
