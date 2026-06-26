// ─── Contact & Social Config ────────────────────────────────────────────
// Replace every {{PLACEHOLDER}} with the real value before going live.

import logo from './assets/new/Logo.png';
import heroPoster from './assets/new/Mainbranch_Poster.png';
import ownerPortrait from './assets/new/Owner1.png';
import ownerAtBranch from './assets/new/Owner.png';
import hotelBanner from './assets/new/Banner.png';
import teaBanner from './assets/new/Tea-Banner.png';
import dishStrip from './assets/new/Dish.png';
import chicken from './assets/new/Chicken.png';
import mutton from './assets/new/Mutton.png';
import dhavaraSpecial from './assets/new/Dhavara_Special.png';
import specialBiryani from './assets/new/Special_Biryani.png';
import specialChicken from './assets/new/Special_Chicken.png';
import specialThali from './assets/new/Special_Thali.png';
import agreement from './assets/new/Aggriment.png';
import franchiseRequirement from './assets/new/Franchieses_Req.jpg';
import franchiseRequirement1 from './assets/new/Franchieses_Requirement1.jpg';
import franchiseRequirement2 from './assets/new/Franchieses_Requirement2.jpg';
import franchiseRequirement3 from './assets/new/Franchieses_Requirement3.jpg';
import franchiseRequirement4 from './assets/new/Franchieses_Requirement4.jpg';
import franchiseRules from './assets/new/Franchieses_rules.jpg';
import franchiseRules2 from './assets/new/Franchieses_rules2.jpg';
import teaRequirement from './assets/new/Franchieses_Tea_Requirement.jpg';
import franchiseAgreement from './assets/new/Frenchieses_aggriment.jpg';
import franchiseAgreement2 from './assets/new/Frenchieses_aggriment2.jpg';
import franchiseAgreement3 from './assets/new/Frenchieses_aggriment3.jpg';

export const ASSETS = {
  logo,
  heroPoster,
  ownerPortrait,
  ownerAtBranch,
  hotelBanner,
  teaBanner,
  dishStrip,
};

export const CONTACT = {
  phoneDisplay: '+91 91753 79695 / +91 73705 03858',
  phoneDial: '+919175379695',
  whatsapp: '919175379695',
  email: 'hello@hotelmatoshree.in',
  mapEmbedSrc: 'https://www.google.com/maps?q=Hotel%20Dharashiv%20Che%20Matoshree%2C%20MH%20SH%2067%2C%20Tambari%20Vibhag%2C%20Dharashiv%2C%20Maharashtra%20413501&output=embed',
  mapLink: 'https://maps.app.goo.gl/Lq13y2dUTosuMHUg7',
  social: {
    instagram: 'https://www.instagram.com/hotelmatoshree_dharashiv/?hl=en',
    youtube: 'https://www.youtube.com/@ShivamShorts6m/videos',
  },
};

// ─── Text Placeholders (interpolated into i18n strings) ──────────────────
export const TEXT_VARS = {
  OWNER_NAME: 'Prof. Manoj Surwase',
  ADDRESS_LINE: 'Hotel Dharashiv Che Matoshree, MH SH 67, Tambari Vibhag, Dharashiv',
  PARTNER_1_NAME: '{{PARTNER_1_NAME}}',
  PARTNER_2_NAME: '{{PARTNER_2_NAME}}',
  PARTNER_3_NAME: '{{PARTNER_3_NAME}}',
  CITY_1: '{{CITY_1}}',
  CITY_2: '{{CITY_2}}',
  CITY_3: '{{CITY_3}}',
};

// ─── Franchise Financial Details ─────────────────────────────────────────
export const FRANCHISE_VARS = {
  INVESTMENT_MIN: '10,00,000',
  INVESTMENT_MAX: '25,00,000',
  HOTEL_AREA: '800 – 1200',
  HOTEL_ROI: '12 – 18',
  HOTEL_AGREEMENT_YEARS: '5',
  TEA_INVESTMENT_MIN: '2,00,000',
  TEA_INVESTMENT_MAX: '5,00,000',
  TEA_AREA: '150 – 300',
  TEA_ROI: '6 – 10',
  TEA_AGREEMENT_YEARS: '3',
};

// ─── Branch Locations ────────────────────────────────────────────────────
export const BRANCHES = [
  {
    id: 'hotel-dharashiv',
    type: 'hotel',
    city: 'Dharashiv',
    photo: heroPoster,
    imagePosition: 'center top',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Prof. Manoj Surwase',
    mobile: '+91 91753 79695',
    mapLink: 'https://maps.app.goo.gl/i2yUfGdSwU6sjuMt6',
    timings: '11:00 AM to 11:30 PM',
    format: 'Flagship dine-in + delivery',
    specialty: 'Chicken dum biryani, dhavara mutton, veg and non-veg thali',
    note: 'Main Dharashiv branch anchors the Matoshree hotel franchise story with strong local recall.',
    mr: { name: 'Hotel Dharashiv Che Matoshree', address: 'MH SH 67, Tambari Vibhag, Dharashiv, Maharashtra 413501' },
    en: { name: 'Hotel Dharashiv Che Matoshree', address: 'MH SH 67, Tambari Vibhag, Dharashiv, Maharashtra 413501' },
  },
  {
    id: 'hotel-barshi',
    type: 'hotel',
    city: 'Barshi',
    photo: specialChicken,
    imagePosition: 'center',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Nikhil Dabade',
    mobile: '+91 77750 61970',
    mapLink: 'https://maps.app.goo.gl/HbHprbHvf9weURj2A',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 2',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 2)', address: '6MHM+J64, Chatrapati Colony, Barshi, Maharashtra 413411' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 2)', address: '6MHM+J64, Chatrapati Colony, Barshi, Maharashtra 413411' },
  },
  {
    id: 'hotel-tuljapur',
    type: 'hotel',
    city: 'Tuljapur',
    photo: specialBiryani,
    imagePosition: 'center',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Rahul Rajendr Jagadale',
    mobile: '+91 96654 11400',
    mapLink: 'https://maps.app.goo.gl/Nt7fdC9jYz4J3cWo7',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 3',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 3)', address: 'Malba Hospital, Samor Chavan Complex, Parbhani, Tuljapur, Maharashtra 413601' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 3)', address: 'Malba Hospital, Samor Chavan Complex, Parbhani, Tuljapur, Maharashtra 413601' },
  },
  {
    id: 'hotel-latur',
    type: 'hotel',
    city: 'Latur',
    photo: dhavaraSpecial,
    imagePosition: 'center 42%',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Mangesh Badgire',
    mobile: '+91 89993 22258',
    mapLink: 'https://maps.app.goo.gl/mzjSjZmdniJPfbzs5?g_st=ic',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 5',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 5)', address: 'Shop No 1 Main Road, near Bus Stop, Kashilingeshwar Nagar, Maharashtra 413531' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 5)', address: 'Shop No 1 Main Road, near Bus Stop, Kashilingeshwar Nagar, Maharashtra 413531' },
  },
  {
    id: 'hotel-solapur',
    type: 'hotel',
    city: 'Solapur',
    photo: specialThali,
    imagePosition: 'center 38%',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Pratik Pawar',
    mobile: '+91 90117 29090',
    mapLink: 'https://maps.app.goo.gl/78cPCvPoiFUqBNbT9',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 11',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 11)', address: 'Azad Hind Chowk, Mechanic Chowk, Solapur, Maharashtra 413002' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 11)', address: 'Azad Hind Chowk, Mechanic Chowk, Solapur, Maharashtra 413002' },
  },
  {
    id: 'hotel-ahilyanagar',
    type: 'hotel',
    city: 'Ahilyanagar',
    photo: chicken,
    imagePosition: 'center',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Pravin (Anna) Dhabekar',
    mobile: '+91 98509 11111',
    mapLink: 'https://maps.app.goo.gl/hxjDFPZc7CQteLoE7',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 18',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 18)', address: 'Near Sai Anand Lawns, Pokhardi, Ahilyanagar, Maharashtra' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 18)', address: 'Near Sai Anand Lawns, Pokhardi, Ahilyanagar, Maharashtra' },
  },
  {
    id: 'hotel-latur-ausa',
    type: 'hotel',
    city: 'Latur',
    photo: mutton,
    imagePosition: 'center',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Shrikant Subhash Salunke',
    mobile: '+91 70200 32898',
    mapLink: 'https://maps.app.goo.gl/tmLUM1ShQ56YEr5e6',
    timings: '11:00 AM to 11:00 PM',
    format: 'Hotel Franchise',
    specialty: 'Special chicken dum biryani, veg and non-veg thali',
    note: 'Branch Number - 24',
    mr: { name: 'Hotel Dharashiv Che Matoshree (Shakha 24)', address: 'Rajiv Gandhi Chowk, beside RJ Complex, Ausa Rd, Latur, Maharashtra 413512' },
    en: { name: 'Hotel Dharashiv Che Matoshree (Shakha 24)', address: 'Rajiv Gandhi Chowk, beside RJ Complex, Ausa Rd, Latur, Maharashtra 413512' },
  },
  {
    id: 'tea-dharashiv',
    type: 'tea',
    city: 'Dharashiv',
    photo: teaBanner,
    imageFit: 'contain',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Prof. Manoj Surwase',
    mobile: '+91 91753 79695',
    mapLink: 'https://maps.google.com/?q=Jijau+Chowk+Barshi+Naka+Dharashiv+Maharashtra',
    timings: '7:00 AM to 11:00 PM',
    format: 'Kiosk + standing cafe',
    specialty: 'Chaha, vadapav, bhaje, pohe',
    note: 'Compact tea format built around daily repeat cups and quick local breakfast demand.',
    mr: { name: 'Hotel Matoshree Chahawala', address: 'Jijau Chowk, Barshi Naka, Dharashiv, Maharashtra' },
    en: { name: 'Hotel Matoshree Chahawala', address: 'Jijau Chowk, Barshi Naka, Dharashiv, Maharashtra' },
  },
  {
    id: 'tea-latur',
    type: 'tea',
    city: 'Latur',
    photo: teaBanner,
    imageFit: 'contain',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Matoshree Tea Team',
    mobile: '+91 73705 03858',
    mapLink: 'https://maps.google.com/?q=Latur+Maharashtra',
    timings: '7:30 AM to 10:30 PM',
    format: 'Compact lounge format',
    specialty: 'Chaha, vadapav, pohe, South Indian add-ons',
    note: 'Practical sample model for partners who want tea plus breakfast sales in a visible location.',
    mr: { name: 'Matoshree Tea + Vadapav Format', address: 'Sample tea franchise format, Latur, Maharashtra' },
    en: { name: 'Matoshree Tea + Vadapav Format', address: 'Sample tea franchise format, Latur, Maharashtra' },
  },
  {
    id: 'tea-maharashtra',
    type: 'tea',
    city: 'Maharashtra',
    photo: teaBanner,
    imageFit: 'contain',
    ownerName: 'Prof. Manoj Surwase',
    managerName: 'Matoshree Supply Team',
    mobile: '+91 86682 50149',
    mapLink: 'https://maps.google.com/?q=Maharashtra',
    timings: '8:00 AM to 11:00 PM',
    format: 'Mall-adjacent cafe kiosk',
    specialty: 'Tea premix masala and controlled supply support',
    note: 'For selected tea partners, premix supply can support consistency when franchise terms are suitable.',
    mr: { name: 'Matoshree Premix Supply Model', address: 'Available for selected partner locations across Maharashtra' },
    en: { name: 'Matoshree Premix Supply Model', address: 'Available for selected partner locations across Maharashtra' },
  },
];

const OLD_BRANCHES = [
  {
    id: 1,
    type: 'hotel',
    photo: '/branches/branch-1.jpg',
    mobile: '+91 {{BRANCH_1_MOBILE}}',
    mapLink: '{{BRANCH_1_MAP_LINK}}',
    mr: { name: 'हॉटेल मातोश्री — कोथरूड', address: 'कोथरूड, पुणे, महाराष्ट्र' },
    en: { name: 'Hotel Matoshree — Kothrud', address: 'Kothrud, Pune, Maharashtra' },
  },
  {
    id: 2,
    type: 'tea',
    photo: '/branches/branch-2.jpg',
    mobile: '+91 {{BRANCH_2_MOBILE}}',
    mapLink: '{{BRANCH_2_MAP_LINK}}',
    mr: { name: 'मातोश्री चहा — हडपसर', address: 'हडपसर, पुणे, महाराष्ट्र' },
    en: { name: 'Matoshree Tea — Hadapsar', address: 'Hadapsar, Pune, Maharashtra' },
  },
  {
    id: 3,
    type: 'hotel',
    photo: '/branches/branch-3.jpg',
    mobile: '+91 {{BRANCH_3_MOBILE}}',
    mapLink: '{{BRANCH_3_MAP_LINK}}',
    mr: { name: 'हॉटेल मातोश्री — दादर', address: 'दादर, मुंबई, महाराष्ट्र' },
    en: { name: 'Hotel Matoshree — Dadar', address: 'Dadar, Mumbai, Maharashtra' },
  },
  {
    id: 4,
    type: 'tea',
    photo: '/branches/branch-4.jpg',
    mobile: '+91 {{BRANCH_4_MOBILE}}',
    mapLink: '{{BRANCH_4_MAP_LINK}}',
    mr: { name: 'मातोश्री चहा — कॉलेज रोड', address: 'कॉलेज रोड, नाशिक, महाराष्ट्र' },
    en: { name: 'Matoshree Tea — College Road', address: 'College Road, Nashik, Maharashtra' },
  },
  {
    id: 5,
    type: 'hotel',
    photo: '/branches/branch-5.jpg',
    mobile: '+91 {{BRANCH_5_MOBILE}}',
    mapLink: '{{BRANCH_5_MAP_LINK}}',
    mr: { name: 'हॉटेल मातोश्री — सिताबर्डी', address: 'सिताबर्डी, नागपूर, महाराष्ट्र' },
    en: { name: 'Hotel Matoshree — Sitabuldi', address: 'Sitabuldi, Nagpur, Maharashtra' },
  },
  {
    id: 6,
    type: 'tea',
    photo: '/branches/branch-6.jpg',
    mobile: '+91 {{BRANCH_6_MOBILE}}',
    mapLink: '{{BRANCH_6_MAP_LINK}}',
    mr: { name: 'मातोश्री चहा — राजारामपुरी', address: 'राजारामपुरी, कोल्हापूर, महाराष्ट्र' },
    en: { name: 'Matoshree Tea — Rajarampuri', address: 'Rajarampuri, Kolhapur, Maharashtra' },
  },
];

// ─── Franchise Types ─────────────────────────────────────────────────────
export const FRANCHISE_TYPES = [
  {
    id: 'hotel',
    i18nKey: 'hotel',
    icon: 'UtensilsCrossed',
    accent: 'brand',
    termsImages: [
      franchiseRequirement1,
      franchiseRequirement2,
      franchiseRequirement3,
      franchiseRequirement4,
      franchiseRules,
      franchiseAgreement,
      franchiseAgreement2,
      agreement,
      franchiseRules2,
      franchiseAgreement3,
    ],
  },
  {
    id: 'tea',
    i18nKey: 'tea',
    icon: 'Coffee',
    accent: 'terracotta',
    termsImages: [
      franchiseRequirement,
      teaRequirement,
    ],
  },
];
