import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  Activity, ArrowLeft, ArrowRight, BadgeCheck, BicepsFlexed, CalendarDays,
  Check, ChevronDown, Dumbbell, Flame, Globe, HeartPulse, LockKeyhole,
  Mail, MapPin, Menu, MessageCircle, Phone, Send, ShieldCheck, ShowerHead,
  Sparkles, Target, Users, Wifi, X, Zap,
} from 'lucide-react';
import { CONTACT } from '../config.js';
import gymHero from '../assets/gym/matoshree-gym-hero.png';
import gymCardio from '../assets/gym/gym-cardio.png';
import gymPersonalTraining from '../assets/gym/gym-personal-training.png';
import gymFunctional from '../assets/gym/gym-functional.png';

const copy = {
  mr: {
    back: 'मुख्य वेबसाइटवर परत जा',
    nav: ['सुविधा', 'सदस्यत्व', 'उपकरणे', 'वेळा', 'संपर्क'],
    join: 'आजच जॉईन करा',
    eyebrow: 'धाराशिवचे प्रीमियम फिटनेस डेस्टिनेशन',
    title: ['तुमची ताकद.', 'तुमची शिस्त.', 'तुमचा बदल.'],
    intro: 'आधुनिक उपकरणे, तज्ज्ञ ट्रेनर आणि सकारात्मक वातावरणासह तुमच्या फिटनेस प्रवासाला योग्य दिशा द्या.',
    tour: 'मोफत जिम टूर बुक करा',
    stats: ['सोमवार ते रविवार', 'प्रेरणादायी कम्युनिटी', 'प्रमाणित ट्रेनर'],
    facilities: ['तुमच्यासाठी सर्व काही', 'वर्कआउटपेक्षा अधिक अनुभव', 'नवशिक्यांपासून अ‍ॅथलीटपर्यंत प्रत्येकासाठी सुरक्षित, स्वच्छ आणि प्रेरणादायी जागा.'],
    plans: ['सदस्यत्व योजना', 'तुमच्या ध्येयाला साजेशी योजना', 'कोणतेही लपविलेले शुल्क नाही. प्रत्येक योजनेत सर्व मुख्य वर्कआउट झोन्सचा समावेश.', 'सर्वाधिक लोकप्रिय', 'योजना निवडा', 'एकूण'],
    note: '* दाखवलेले दर प्राथमिक आहेत. अंतिम दर, चालू ऑफर आणि पर्सनल ट्रेनिंग शुल्कासाठी जिम टीमशी संपर्क साधा.',
    equipment: ['ट्रेन स्मार्ट', 'प्रत्येक ध्येयासाठी संपूर्ण उपकरणे'],
    timing: ['जिमच्या वेळा', 'तुमच्या दिवसाशी जुळणाऱ्या लवचिक बॅचेस.'],
    rules: 'सुरक्षित ट्रेनिंग, सर्वांसाठी',
    faq: 'नेहमी विचारले जाणारे प्रश्न',
    cta: ['तुमच्या बदलाचा पहिला दिवस आज आहे.', 'जिम पाहा, ट्रेनरशी बोला आणि तुमचा फिटनेस प्लॅन मिळवा.'],
    call: 'कॉल करा', whatsapp: 'व्हॉट्सअ‍ॅप करा',
    address: 'धाराशिव, महाराष्ट्र', rights: 'सर्व हक्क राखीव.',
  },
  en: {
    back: 'Back to main website',
    nav: ['Facilities', 'Membership', 'Equipment', 'Timings', 'Contact'],
    join: 'Join today',
    eyebrow: "Dharashiv's premium fitness destination",
    title: ['Your strength.', 'Your discipline.', 'Your transformation.'],
    intro: 'Move towards your strongest self with modern equipment, expert trainers and a motivating training environment.',
    tour: 'Book a free gym tour',
    stats: ['Open Monday to Sunday', 'Motivating community', 'Certified trainers'],
    facilities: ['Everything you need', 'More than just a workout', 'A safe, clean and motivating space built for everyone from first-timers to athletes.'],
    plans: ['Membership plans', 'A plan that fits your goal', 'No hidden charges. Every plan includes access to all principal workout zones.', 'Most popular', 'Choose plan', 'total'],
    note: '* Introductory rates shown. Contact the gym team for final pricing, active offers and personal-training charges.',
    equipment: ['Train smart', 'Complete equipment for every goal'],
    timing: ['Gym timings', 'Flexible batches that work with your day.'],
    rules: 'Safe training, for everyone',
    faq: 'Frequently asked questions',
    cta: ['Day one of your transformation is today.', 'Tour the gym, meet a trainer and get your personal fitness roadmap.'],
    call: 'Call now', whatsapp: 'WhatsApp us',
    address: 'Dharashiv, Maharashtra', rights: 'All rights reserved.',
  },
};

const plans = [
  { months: 1, mr: 'मासिक', en: 'Monthly', price: '999' },
  { months: 3, mr: 'त्रैमासिक', en: 'Quarterly', price: '2,499', popular: true },
  { months: 6, mr: 'सहामाही', en: 'Half-yearly', price: '4,499' },
  { months: 12, mr: 'वार्षिक', en: 'Yearly', price: '7,999' },
];

const facilities = [
  { icon: Dumbbell, mr: 'प्रीमियम उपकरणे', en: 'Premium equipment', mrDesc: 'स्ट्रेंथ, कार्डिओ आणि फंक्शनल ट्रेनिंगसाठी दर्जेदार मशीन्स.', enDesc: 'Quality machines for strength, cardio and functional training.' },
  { icon: Users, mr: 'तज्ज्ञ ट्रेनर', en: 'Expert trainers', mrDesc: 'योग्य फॉर्म, वर्कआउट प्लॅन आणि प्रगतीसाठी वैयक्तिक मार्गदर्शन.', enDesc: 'Guidance on form, workout planning and steady progress.' },
  { icon: Sparkles, mr: 'स्वच्छ वातावरण', en: 'Immaculate space', mrDesc: 'नियमित सॅनिटायझेशन, हवेशीर हॉल आणि स्वच्छ चेंजिंग एरिया.', enDesc: 'Regular sanitisation, ventilation and clean changing areas.' },
  { icon: ShieldCheck, mr: 'सुरक्षित स्पेस', en: 'Safe space', mrDesc: 'सीसीटीव्ही, फर्स्ट-एड आणि ट्रेनरच्या देखरेखीसह निश्चिंत सराव.', enDesc: 'CCTV, first aid and trainer supervision for peace of mind.' },
  { icon: ShowerHead, mr: 'चेंजिंग सुविधा', en: 'Changing facilities', mrDesc: 'स्वतंत्र चेंजिंग एरिया, लॉकर आणि फ्रेश-अप स्पेस.', enDesc: 'Separate changing areas, lockers and fresh-up space.' },
  { icon: Wifi, mr: 'म्युझिक व कनेक्टिव्हिटी', en: 'Music & connectivity', mrDesc: 'एनर्जेटिक म्युझिक, वाय-फाय आणि मोबाइल चार्जिंग पॉइंट्स.', enDesc: 'Energetic music, Wi-Fi and mobile charging points.' },
];

const equipment = [
  { icon: HeartPulse, mr: 'कार्डिओ झोन', en: 'Cardio zone', items: ['Treadmills', 'Cross trainers', 'Exercise bikes', 'Rowing machine', 'Stair climber'] },
  { icon: BicepsFlexed, mr: 'स्ट्रेंथ झोन', en: 'Strength zone', items: ['Chest & shoulder press', 'Lat pulldown', 'Leg press & extension', 'Cable crossover', 'Smith machine'] },
  { icon: Dumbbell, mr: 'फ्री वेट्स', en: 'Free weights', items: ['Dumbbells', 'Olympic barbells', 'Weight plates', 'Adjustable benches', 'Squat rack'] },
  { icon: Activity, mr: 'फंक्शनल झोन', en: 'Functional zone', items: ['Kettlebells', 'Battle ropes', 'TRX suspension', 'Plyo boxes', 'Resistance bands'] },
];

const serviceImages = [
  {
    image: gymCardio,
    number: '01',
    mr: 'कार्डिओ आणि स्टॅमिना',
    en: 'Cardio & endurance',
    mrDesc: 'आधुनिक कार्डिओ फ्लोअरवर तुमची ऊर्जा, सहनशक्ती आणि हृदयाचे आरोग्य वाढवा.',
    enDesc: 'Build energy, endurance and cardiovascular fitness on a modern cardio floor.',
  },
  {
    image: gymPersonalTraining,
    number: '02',
    mr: 'पर्सनल ट्रेनिंग',
    en: 'Personal training',
    mrDesc: 'योग्य फॉर्म, वैयक्तिक प्लॅन आणि सातत्यपूर्ण प्रगतीसाठी तज्ज्ञ प्रशिक्षकाची साथ.',
    enDesc: 'Expert coaching for correct form, a personal programme and consistent progress.',
  },
  {
    image: gymFunctional,
    number: '03',
    mr: 'फंक्शनल आणि ग्रुप ट्रेनिंग',
    en: 'Functional & group training',
    mrDesc: 'शक्ती, हालचाल आणि आत्मविश्वास वाढवणारे उत्साही कम्युनिटी वर्कआउट्स.',
    enDesc: 'High-energy community workouts that improve strength, movement and confidence.',
  },
];

const faqs = [
  { mrQ: 'नवशिक्यांसाठी ट्रेनर मदत करतात का?', enQ: 'Do trainers help beginners?', mrA: 'होय. इंडक्शन, मशीन ओरिएंटेशन आणि बेसिक वर्कआउट मार्गदर्शन सदस्यत्वात उपलब्ध आहे.', enA: 'Yes. Induction, equipment orientation and basic workout guidance are included.' },
  { mrQ: 'महिलांसाठी स्वतंत्र बॅच आहे का?', enQ: 'Is there a ladies-only batch?', mrA: 'उपलब्ध बॅचेससाठी जिम टीमशी संपर्क साधा; महिलांच्या सुरक्षितता आणि सोयीला प्राधान्य आहे.', enA: 'Please confirm current batch availability; women’s comfort and safety are prioritised.' },
  { mrQ: 'पर्सनल ट्रेनिंग मिळते का?', enQ: 'Is personal training available?', mrA: 'होय. फिटनेस असेसमेंटनंतर तुमच्या ध्येयानुसार स्वतंत्र प्लॅन आणि शुल्क दिले जाते.', enA: 'Yes. A goal-based plan and fee are provided after your fitness assessment.' },
  { mrQ: 'ट्रायल किंवा जिम टूर मिळू शकते का?', enQ: 'Can I take a trial or gym tour?', mrA: 'होय. कॉल किंवा व्हॉट्सअ‍ॅपवर वेळ ठरवून तुम्ही सुविधा पाहू शकता.', enA: 'Yes. Call or WhatsApp to schedule a guided visit.' },
];

export default function GymPage() {
  const [lang, setLang] = useState('mr');
  const isMr = lang === 'mr';
  const c = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const message = isMr
    ? 'नमस्कार, मला मातोश्री जिमच्या सदस्यत्वाबद्दल माहिती हवी आहे.'
    : 'Hello, I would like information about Matoshree Gym membership.';
  const whatsapp = 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(message);
  const linkIds = ['facilities', 'plans', 'equipment', 'timings', 'contact'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = isMr ? 'मातोश्री जिम | धाराशिव' : 'Matoshree Gym | Dharashiv';
  }, [isMr]);

  return (
    <div className="min-h-screen bg-[#090b0d] font-sans text-white selection:bg-amber-500 selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b0d]/90 backdrop-blur-xl">
        <div className="container-max flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500 text-black"><Dumbbell size={23} /></span>
            <span>
              <strong className="block text-lg leading-none tracking-tight">MATOSHREE <span className="text-amber-500">GYM</span></strong>
              <small className="text-[10px] uppercase tracking-[.28em] text-white/45">Strength • Fitness • Life</small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {linkIds.map((id, index) => (
              <a key={id} href={'#' + id} className="text-sm font-semibold text-white/65 transition hover:text-amber-400">{c.nav[index]}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <button type="button" onClick={() => setLang(isMr ? 'en' : 'mr')} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white/75 hover:bg-white/10">
              <Globe size={16} />{isMr ? 'English' : 'मराठी'}
            </button>
            <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold hover:border-amber-500 hover:text-amber-400">
              <ArrowLeft size={16} />{c.back}
            </a>
          </div>
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setLang(isMr ? 'en' : 'mr')}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs font-bold text-white/80 hover:border-amber-500 hover:text-amber-400"
              aria-label={isMr ? 'Change language to English' : 'मराठी भाषा निवडा'}
            >
              <Globe size={15} />{isMr ? 'English' : 'मराठी'}
            </button>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center" aria-label="Menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0d1013] px-4 py-5 lg:hidden">
            {linkIds.map((id, index) => <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)} className="block border-b border-white/5 py-3 font-semibold text-white/70">{c.nav[index]}</a>)}
            <a href="/" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-black"><ArrowLeft size={16} />{c.back}</a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16 lg:pt-20">
          <img src={gymHero} alt="Matoshree Gym modern strength training floor" className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.16] saturate-[1.08]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b0d]/85 via-transparent to-black/15" />
          <div className="container-max relative z-10 py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-amber-400"><Zap size={15} />{c.eyebrow}</div>
              <h1 className="text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                <span className="block">{c.title[0]}</span>
                <span className="block text-amber-500">{c.title[1]}</span>
                <span className="block">{c.title[2]}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{c.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-black text-black transition hover:bg-amber-300">{c.tour}<ArrowRight size={18} /></a>
                <a href="#plans" className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 font-bold backdrop-blur hover:bg-white/10">{c.plans[0]}</a>
              </div>
              <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
                {[[CalendarDays, c.stats[0]], [Users, c.stats[1]], [BadgeCheck, c.stats[2]]].map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3 text-sm font-semibold text-white/70"><Icon className="text-amber-500" size={20} />{label}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="facilities" className="py-20 sm:py-28">
          <div className="container-max">
            <SectionHeading eyebrow={c.facilities[0]} title={c.facilities[1]} sub={c.facilities[2]} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.en} className="group rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-amber-500/35 hover:bg-white/[.06]">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-black"><Icon size={24} /></span>
                    <h3 className="mt-5 text-xl font-black">{item[lang]}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{item[lang + 'Desc']}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-white/10 bg-[#0d1013] py-20 sm:py-28">
          <div className="container-max">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                eyebrow={isMr ? 'तुमचा वर्कआउट. तुमची पद्धत.' : 'Your workout. Your way.'}
                title={isMr ? 'प्रत्येक ध्येयासाठी प्रीमियम ट्रेनिंग' : 'Premium training for every goal'}
                sub={isMr ? 'स्वतःच्या गतीने धावा, ट्रेनरसोबत ताकद वाढवा किंवा कम्युनिटीसोबत पुढे जा.' : 'Run at your pace, build strength with a coach, or move forward with the community.'}
              />
              <p className="hidden items-center gap-2 pb-1 text-xs font-bold uppercase tracking-[.18em] text-white/35 md:flex">
                <ArrowRight size={16} className="text-amber-500" />
                {isMr ? 'अनुभव एक्सप्लोर करा' : 'Explore the experience'}
              </p>
            </div>

            <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
              {serviceImages.map((service, index) => (
                <article
                  key={service.en}
                  className={'group relative h-[430px] min-w-[84vw] snap-center overflow-hidden rounded-3xl border border-white/10 bg-black sm:min-w-[58vw] lg:min-w-0 ' + (index === 1 ? 'lg:-translate-y-5' : '')}
                >
                  <img
                    src={service.image}
                    alt={service[lang]}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-500 text-xs font-black text-black">{service.number}</span>
                      <span className="h-px flex-1 bg-white/20" />
                    </div>
                    <h3 className="text-2xl font-black sm:text-3xl">{service[lang]}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">{service[lang + 'Desc']}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-2 flex justify-center gap-1.5 lg:hidden" aria-hidden="true">
              {serviceImages.map((service) => <span key={service.number} className="h-1.5 w-6 rounded-full bg-amber-500/40" />)}
            </div>
          </div>
        </section>

        <section id="plans" className="border-y border-white/10 bg-[#0d1013] py-20 sm:py-28">
          <div className="container-max">
            <SectionHeading eyebrow={c.plans[0]} title={c.plans[1]} sub={c.plans[2]} centered />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <article key={plan.months} className={'relative flex flex-col rounded-3xl border p-6 ' + (plan.popular ? 'border-amber-500 bg-amber-500 text-black shadow-[0_20px_70px_-25px_rgba(245,158,11,.8)]' : 'border-white/10 bg-[#090b0d]')}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">{c.plans[3]}</span>}
                  <p className={'text-sm font-bold ' + (plan.popular ? 'text-black/60' : 'text-amber-500')}>{plan[lang]}</p>
                  <div className="mt-4 flex items-end gap-1"><span className="text-2xl font-black">₹</span><span className="text-5xl font-black tracking-tight">{plan.price}</span></div>
                  <p className={'mt-1 text-xs ' + (plan.popular ? 'text-black/55' : 'text-white/40')}>{plan.months} {isMr ? 'महिने' : plan.months === 1 ? 'month' : 'months'} • {c.plans[5]}</p>
                  <ul className={'my-6 space-y-3 text-sm ' + (plan.popular ? 'text-black/75' : 'text-white/60')}>
                    {(isMr ? ['सर्व वर्कआउट झोन्स', 'बेसिक ट्रेनर मार्गदर्शन', 'लॉकर सुविधा'] : ['All workout zones', 'Basic trainer guidance', 'Locker facility']).map((feature) => <li key={feature} className="flex gap-2"><Check size={16} className="shrink-0" />{feature}</li>)}
                  </ul>
                  <a href={whatsapp} target="_blank" rel="noreferrer" className={'mt-auto rounded-xl py-3 text-center text-sm font-black transition ' + (plan.popular ? 'bg-black text-white hover:bg-black/80' : 'bg-white/10 hover:bg-amber-500 hover:text-black')}>{c.plans[4]}</a>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-white/35">{c.note}</p>
          </div>
        </section>

        <section id="equipment" className="py-20 sm:py-28">
          <div className="container-max">
            <SectionHeading eyebrow={c.equipment[0]} title={c.equipment[1]} centered />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {equipment.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.en} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.07] to-transparent p-7">
                    <span className="absolute right-5 top-3 text-7xl font-black text-white/[.035]">0{index + 1}</span>
                    <Icon size={30} className="text-amber-500" />
                    <h3 className="mt-5 text-2xl font-black">{item[lang]}</h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">{item.items.map((part) => <span key={part} className="flex items-center gap-2 text-sm text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{part}</span>)}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="timings" className="border-y border-white/10 bg-[#0d1013] py-20">
          <div className="container-max grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-black uppercase tracking-[.2em] text-amber-500">{c.timing[0]}</span>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">{c.timing[1]}</h2>
              <div className="mt-8 space-y-3">
                {[
                  ['सकाळचे बॅच / Morning', '5:30 AM – 11:00 AM'],
                  ['संध्याकाळचे बॅच / Evening', '4:00 PM – 10:30 PM'],
                  ['रविवार / Sunday', '7:00 AM – 12:00 PM'],
                ].map(([label, time]) => <div key={label} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[.035] px-5 py-4"><span className="text-sm font-bold text-white/65">{label}</span><span className="whitespace-nowrap font-black text-amber-400">{time}</span></div>)}
              </div>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/[.06] p-8">
              <LockKeyhole className="text-amber-500" size={34} />
              <h3 className="mt-5 text-2xl font-black">{c.rules}</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-white/55">
                {(isMr ? [
                  'वर्कआउटसाठी स्वच्छ शूज आणि टॉवेल आवश्यक.',
                  'उपकरणे वापरल्यानंतर योग्य जागी ठेवा आणि सॅनिटाइज करा.',
                  'वैद्यकीय स्थिती किंवा दुखापत असल्यास ट्रेनरला पूर्वकल्पना द्या.',
                  'जड वजनासाठी स्पॉटर किंवा ट्रेनरची मदत घ्या.',
                ] : [
                  'Clean training shoes and a workout towel are required.',
                  'Re-rack and sanitise equipment after use.',
                  'Tell the trainer about any medical condition or injury before training.',
                  'Use a spotter or trainer for heavy lifts.',
                ]).map((rule) => <li key={rule} className="flex gap-3"><ShieldCheck size={18} className="mt-1 shrink-0 text-amber-500" />{rule}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-max">
            <SectionHeading eyebrow="FAQ" title={c.faq} centered />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {faqs.map((item) => <Faq key={item.enQ} q={isMr ? item.mrQ : item.enQ} a={isMr ? item.mrA : item.enA} />)}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20">
          <div className="container-max relative overflow-hidden rounded-[2rem] bg-amber-500 px-6 py-14 text-center text-black sm:px-12 sm:py-20">
            <Flame className="absolute -left-10 -top-10 h-48 w-48 text-black/[.05]" />
            <Target className="absolute -bottom-10 -right-10 h-48 w-48 text-black/[.05]" />
            <h2 className="relative text-4xl font-black sm:text-6xl">{c.cta[0]}</h2>
            <p className="relative mx-auto mt-4 max-w-2xl font-semibold text-black/65">{c.cta[1]}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a href={'tel:' + CONTACT.phoneDial} className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 font-black text-white"><Phone size={18} />{c.call}</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3.5 font-black"><MessageCircle size={18} />{c.whatsapp}</a>
            </div>
          </div>
          <GymMembershipForm isMr={isMr} />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="container-max grid gap-10 py-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500 text-black"><Dumbbell /></span><strong>MATOSHREE <span className="text-amber-500">GYM</span></strong></div>
            <p className="mt-4 text-sm text-white/40">Strength • Fitness • Life</p>
          </div>
          <div className="text-sm text-white/50">
            <h3 className="mb-4 font-black uppercase tracking-widest text-white">Contact</h3>
            <p className="mb-2 flex gap-2"><MapPin size={16} className="text-amber-500" />{c.address}</p>
            <a className="mb-2 flex gap-2 hover:text-amber-400" href={'tel:' + CONTACT.phoneDial}><Phone size={16} className="text-amber-500" />{CONTACT.phoneDisplay}</a>
            <a className="flex gap-2 hover:text-amber-400" href={'mailto:' + CONTACT.email}><Mail size={16} className="text-amber-500" />{CONTACT.email}</a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">© {new Date().getFullYear()} Matoshree Gym. {c.rights}</div>
      </footer>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={c.whatsapp} className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-110"><MessageCircle /></a>
      <Analytics />
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="text-xs font-black uppercase tracking-[.24em] text-amber-500">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 leading-7 text-white/50">{sub}</p>}
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold">
        <span>{q}</span><ChevronDown size={20} className={'shrink-0 text-amber-500 transition ' + (open ? 'rotate-180' : '')} />
      </button>
      {open && <p className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-white/50">{a}</p>}
    </div>
  );
}

function GymMembershipForm({ isMr }) {
  const initialForm = { name: '', mobile: '', age: '', plan: '', batch: '', goal: '', message: '' };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const text = isMr ? {
    eyebrow: 'सदस्यत्व अर्ज',
    title: 'मातोश्री जिमचे सदस्य व्हा',
    sub: 'खालील माहिती भरा. अर्ज व्हॉट्सअ‍ॅपवर तयार होईल आणि आमची टीम तुमच्याशी संपर्क साधेल.',
    name: 'पूर्ण नाव', namePh: 'तुमचे पूर्ण नाव',
    mobile: 'मोबाइल नंबर', mobilePh: '१० अंकी मोबाइल नंबर',
    age: 'वय', agePh: 'तुमचे वय',
    plan: 'सदस्यत्व योजना', planPh: 'योजना निवडा',
    batch: 'पसंतीची बॅच', batchPh: 'बॅच निवडा',
    goal: 'फिटनेस ध्येय', goalPh: 'ध्येय निवडा',
    message: 'अतिरिक्त माहिती (ऐच्छिक)', messagePh: 'दुखापत, आरोग्यविषयक माहिती किंवा प्रश्न',
    plans: ['१ महिना', '३ महिने', '६ महिने', '१२ महिने'],
    batches: ['सकाळची बॅच', 'संध्याकाळची बॅच', 'दोन्ही चालतील'],
    goals: ['वजन कमी करणे', 'मसल गेन', 'फिटनेस व स्टॅमिना', 'स्ट्रेंथ ट्रेनिंग', 'सामान्य आरोग्य'],
    required: 'कृपया ही माहिती भरा.',
    invalidMobile: 'वैध १० अंकी मोबाइल नंबर लिहा.',
    invalidAge: 'वय १४ ते ८० दरम्यान असावे.',
    submit: 'व्हॉट्सअ‍ॅपवर अर्ज पाठवा',
    privacy: 'तुमची माहिती फक्त सदस्यत्वाबाबत संपर्क करण्यासाठी वापरली जाईल.',
    application: 'मातोश्री जिम सदस्यत्व अर्ज',
  } : {
    eyebrow: 'Membership application',
    title: 'Become a Matoshree Gym member',
    sub: 'Complete the details below. Your application will be prepared on WhatsApp and our team will contact you.',
    name: 'Full name', namePh: 'Your full name',
    mobile: 'Mobile number', mobilePh: '10-digit mobile number',
    age: 'Age', agePh: 'Your age',
    plan: 'Membership plan', planPh: 'Select a plan',
    batch: 'Preferred batch', batchPh: 'Select a batch',
    goal: 'Fitness goal', goalPh: 'Select your goal',
    message: 'Additional information (optional)', messagePh: 'Injury, health information or questions',
    plans: ['1 month', '3 months', '6 months', '12 months'],
    batches: ['Morning batch', 'Evening batch', 'Either works'],
    goals: ['Weight loss', 'Muscle gain', 'Fitness & stamina', 'Strength training', 'General wellness'],
    required: 'Please complete this field.',
    invalidMobile: 'Enter a valid 10-digit mobile number.',
    invalidAge: 'Age must be between 14 and 80.',
    submit: 'Send application on WhatsApp',
    privacy: 'Your information will only be used to contact you about membership.',
    application: 'Matoshree Gym Membership Application',
  };

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    ['name', 'mobile'].forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = text.required;
    });
    if (form.mobile && !/^[6-9]\d{9}$/.test(form.mobile)) nextErrors.mobile = text.invalidMobile;
    if (form.age && (Number(form.age) < 14 || Number(form.age) > 80)) nextErrors.age = text.invalidAge;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const application = [
      '*' + text.application + '*',
      '',
      text.name + ': ' + form.name,
      text.mobile + ': ' + form.mobile,
      text.age + ': ' + form.age,
      text.plan + ': ' + form.plan,
      text.batch + ': ' + form.batch,
      text.goal + ': ' + form.goal,
      form.message ? text.message + ': ' + form.message : '',
    ].filter(Boolean).join('\n');
    window.open('https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(application), '_blank', 'noopener,noreferrer');
  };

  const inputClass = 'w-full rounded-xl border border-white/10 bg-white/[.055] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15';
  const labelClass = 'mb-2 block text-sm font-bold text-white/75';

  return (
    <div className="container-max mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1013]">
      <div className="grid lg:grid-cols-[.7fr_1.3fr]">
        <div className="border-b border-white/10 bg-gradient-to-br from-amber-500/15 to-transparent p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <span className="text-xs font-black uppercase tracking-[.22em] text-amber-500">{text.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{text.title}</h2>
          <p className="mt-4 text-sm leading-7 text-white/50">{text.sub}</p>
          <div className="mt-8 space-y-4 border-t border-white/10 pt-7 text-sm text-white/60">
            <a href={'tel:' + CONTACT.phoneDial} className="flex items-center gap-3 hover:text-amber-400"><Phone size={18} className="text-amber-500" />{CONTACT.phoneDisplay}</a>
            <a href={'mailto:' + CONTACT.email} className="flex items-center gap-3 hover:text-amber-400"><Mail size={18} className="text-amber-500" />{CONTACT.email}</a>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-amber-500" />{isMr ? 'धाराशिव, महाराष्ट्र' : 'Dharashiv, Maharashtra'}</p>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="grid gap-5 p-7 sm:grid-cols-2 sm:p-10">
          <FormField label={text.name} error={errors.name} required>
            <input name="name" value={form.name} onChange={update} className={inputClass} placeholder={text.namePh} autoComplete="name" required aria-required="true" />
          </FormField>
          <FormField label={text.mobile} error={errors.mobile} required>
            <input name="mobile" value={form.mobile} onChange={update} className={inputClass} placeholder={text.mobilePh} inputMode="numeric" maxLength={10} autoComplete="tel" required aria-required="true" />
          </FormField>
          <FormField label={text.age} error={errors.age}>
            <input name="age" value={form.age} onChange={update} className={inputClass} placeholder={text.agePh} type="number" min="14" max="80" />
          </FormField>
          <FormField label={text.plan} error={errors.plan}>
            <select name="plan" value={form.plan} onChange={update} className={inputClass}>
              <option value="" className="bg-[#15191d]">{text.planPh}</option>
              {text.plans.map((option) => <option key={option} value={option} className="bg-[#15191d]">{option}</option>)}
            </select>
          </FormField>
          <FormField label={text.batch} error={errors.batch}>
            <select name="batch" value={form.batch} onChange={update} className={inputClass}>
              <option value="" className="bg-[#15191d]">{text.batchPh}</option>
              {text.batches.map((option) => <option key={option} value={option} className="bg-[#15191d]">{option}</option>)}
            </select>
          </FormField>
          <FormField label={text.goal} error={errors.goal}>
            <select name="goal" value={form.goal} onChange={update} className={inputClass}>
              <option value="" className="bg-[#15191d]">{text.goalPh}</option>
              {text.goals.map((option) => <option key={option} value={option} className="bg-[#15191d]">{option}</option>)}
            </select>
          </FormField>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="gym-message">{text.message}</label>
            <textarea id="gym-message" name="message" value={form.message} onChange={update} rows={4} className={inputClass} placeholder={text.messagePh} />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 font-black text-black transition hover:bg-amber-300">
              <Send size={18} />{text.submit}
            </button>
            <p className="mt-3 text-center text-xs text-white/30">{text.privacy}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, error, required = false, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/75">
        {label}{required && <span className="ml-1 text-amber-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-red-400">{error}</p>}
    </div>
  );
}
