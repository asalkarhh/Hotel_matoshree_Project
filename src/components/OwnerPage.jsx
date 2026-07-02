import { ArrowLeft, Building2, MapPin, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ASSETS, CONTACT } from '../config.js';
import SEO from './SEO.jsx';

export default function OwnerPage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <>
      <SEO page="owner" lang={i18n.language} />
      <header className="border-b border-black/5 bg-cream">
        <div className="container-max flex min-h-16 items-center justify-between py-3">
          <a href="/" className="font-deva text-lg font-extrabold text-brand">
            Hotel Matoshree Dharashiv
          </a>
          <button
            type="button"
            onClick={() => i18n.changeLanguage(isEnglish ? 'mr' : 'en')}
            className="rounded-full border border-brand/25 px-4 py-2 text-sm font-semibold text-brand"
          >
            {isEnglish ? 'मराठी' : 'English'}
          </button>
        </div>
      </header>

      <main>
        <section className="section bg-gradient-to-b from-brand-dark to-brand text-white">
          <div className="container-max grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <img
              src={ASSETS.ownerPortrait}
              alt="Prof. Manoj Surwase, owner and founder of Hotel Matoshree Dharashiv"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-soft"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gold">
                {isEnglish ? 'Owner and Founder' : 'मालक व संस्थापक'}
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">Prof. Manoj Surwase</h1>
              <p className="mt-5 max-w-2xl text-lg text-white/85">
                {isEnglish
                  ? 'Prof. Manoj Surwase is the owner and founder of Hotel Matoshree Dharashiv (Hotel Dharashiv Che Matoshree), a Maharashtrian restaurant and franchise brand based in Dharashiv.'
                  : 'प्रा. मनोज सुरवसे हे हॉटेल मातोश्री धाराशिव (हॉटेल धाराशिवचे मातोश्री) या महाराष्ट्रीयन रेस्टॉरंट व फ्रँचायझी ब्रँडचे मालक आणि संस्थापक आहेत.'}
              </p>
              <a href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink">
                <ArrowLeft size={18} />
                {isEnglish ? 'Visit Hotel Matoshree' : 'हॉटेल मातोश्री वेबसाइट'}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-max">
            <h2 className="text-3xl text-brand sm:text-4xl">
              {isEnglish ? 'Manoj Surwase and Hotel Matoshree' : 'मनोज सुरवसे आणि हॉटेल मातोश्री'}
            </h2>
            <p className="mt-5 max-w-3xl text-ink/75">
              {isEnglish
                ? 'From the flagship restaurant in Dharashiv, the Hotel Matoshree network has grown to more than 32 franchise locations. The brand is known for Maharashtrian food, chicken dum biryani and franchise support across Maharashtra.'
                : 'धाराशिवमधील मुख्य रेस्टॉरंटपासून हॉटेल मातोश्रीचे जाळे ३२ पेक्षा अधिक फ्रँचायझींपर्यंत वाढले आहे. हा ब्रँड महाराष्ट्रीयन जेवण, चिकन दम बिर्याणी आणि महाराष्ट्रातील फ्रँचायझी मार्गदर्शनासाठी ओळखला जातो.'}
            </p>

            <dl className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="card">
                <UserRound className="text-brand" />
                <dt className="mt-3 font-bold">{isEnglish ? 'Role' : 'भूमिका'}</dt>
                <dd className="mt-1 text-ink/70">{isEnglish ? 'Owner and Founder' : 'मालक व संस्थापक'}</dd>
              </div>
              <div className="card">
                <Building2 className="text-brand" />
                <dt className="mt-3 font-bold">{isEnglish ? 'Business' : 'व्यवसाय'}</dt>
                <dd className="mt-1 text-ink/70">Hotel Matoshree Dharashiv</dd>
              </div>
              <div className="card">
                <MapPin className="text-brand" />
                <dt className="mt-3 font-bold">{isEnglish ? 'Location' : 'ठिकाण'}</dt>
                <dd className="mt-1 text-ink/70">Tambari Vibhag, Dharashiv, Maharashtra 413501</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={CONTACT.mapLink} target="_blank" rel="noreferrer" className="btn-brand">
                {isEnglish ? 'View on Google Maps' : 'Google Maps वर पहा'}
              </a>
              <a href={`tel:${CONTACT.phoneDial}`} className="btn-primary">
                {isEnglish ? 'Contact Hotel Matoshree' : 'हॉटेल मातोश्रीशी संपर्क'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
