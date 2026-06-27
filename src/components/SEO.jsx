import { useEffect } from 'react';
import { CONTACT } from '../config.js';

const SITE_URL = 'https://www.hotelmatoshree.in';

const pages = {
  home: {
    title: 'Hotel Dharashiv Che Matoshree | Hotel & Tea Franchise Maharashtra',
    description: 'Hotel Dharashiv Che Matoshree by Prof. Manoj Surwase offers hotel and tea franchise opportunities in Maharashtra, plus Dhavara Special and special chicken dum biryani in Dharashiv.',
    keywords: 'Hotel Matoshree, Hotel Dharashiv Che Matoshree, Dharashiv ch Matoshree, hotel franchise Maharashtra, tea franchise Maharashtra, Matoshree tea franchise, Manoj Surwase, Dhavara Special, special chicken biryani Dharashiv, chicken dum biryani Dharashiv, restaurant franchise Dharashiv',
    path: '/',
    image: '/seo-hotel-matoshree.png',
    imageAlt: 'Hotel Dharashiv Che Matoshree hotel and tea franchise',
  },
  gym: {
    title: 'Matoshree Gym Dharashiv | Fitness, Cardio & Personal Training',
    description: 'Join Matoshree Gym in Dharashiv for strength training, cardio, functional workouts, modern equipment and personal training. Book a gym tour or ask about membership.',
    keywords: 'Matoshree Gym, gym in Dharashiv, best gym Dharashiv, fitness centre Dharashiv, personal trainer Dharashiv, cardio gym Dharashiv, strength training Dharashiv, gym membership Dharashiv, Manoj Surwase',
    path: '/gym',
    image: '/seo-matoshree-gym.png',
    imageAlt: 'Matoshree Gym strength and fitness centre in Dharashiv',
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function setStructuredData(data) {
  let script = document.head.querySelector('script[data-site-schema]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.siteSchema = 'true';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function homeSchema(image) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
        name: 'Hotel Dharashiv Che Matoshree',
        alternateName: ['Hotel Matoshree', 'Dharashiv Ch Matoshree'],
        url: `${SITE_URL}/`, logo: `${SITE_URL}/favicon.png`, image,
        founder: { '@type': 'Person', name: 'Prof. Manoj Surwase' },
        email: CONTACT.email, telephone: CONTACT.phoneDial,
        sameAs: [CONTACT.social.instagram, CONTACT.social.youtube],
      },
      {
        '@type': 'Restaurant', '@id': `${SITE_URL}/#restaurant`,
        name: 'Hotel Dharashiv Che Matoshree', image, url: `${SITE_URL}/`,
        telephone: CONTACT.phoneDial, email: CONTACT.email, priceRange: '₹₹',
        servesCuisine: ['Maharashtrian', 'Chicken Dum Biryani', 'Dhavara Special', 'Indian'],
        address: {
          '@type': 'PostalAddress', streetAddress: 'MH SH 67, Tambari Vibhag',
          addressLocality: 'Dharashiv', addressRegion: 'Maharashtra',
          postalCode: '413501', addressCountry: 'IN',
        },
        founder: { '@type': 'Person', name: 'Prof. Manoj Surwase' },
        parentOrganization: { '@id': `${SITE_URL}/#organization` }, hasMap: CONTACT.mapLink,
      },
      {
        '@type': 'Service', '@id': `${SITE_URL}/#franchise`,
        name: 'Hotel and Tea Franchise Opportunities',
        serviceType: ['Hotel Franchise', 'Restaurant Franchise', 'Tea Franchise'],
        areaServed: { '@type': 'State', name: 'Maharashtra' },
        provider: { '@id': `${SITE_URL}/#organization` }, url: `${SITE_URL}/#franchises`,
      },
      {
        '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`,
        name: 'Hotel Dharashiv Che Matoshree', inLanguage: ['mr-IN', 'en-IN'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

function gymSchema(image) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsActivityLocation', '@id': `${SITE_URL}/gym#business`,
        name: 'Matoshree Gym', description: pages.gym.description,
        url: `${SITE_URL}/gym`, image, logo: `${SITE_URL}/favicon.png`, telephone: CONTACT.phoneDial, priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress', addressLocality: 'Dharashiv',
          addressRegion: 'Maharashtra', addressCountry: 'IN',
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage', '@id': `${SITE_URL}/gym#webpage`, url: `${SITE_URL}/gym`,
        name: pages.gym.title, description: pages.gym.description,
        inLanguage: ['mr-IN', 'en-IN'], about: { '@id': `${SITE_URL}/gym#business` },
      },
    ],
  };
}

export default function SEO({ page = 'home', lang = 'mr' }) {
  useEffect(() => {
    const current = pages[page];
    const canonical = `${SITE_URL}${current.path}`;
    const image = new URL(current.image, SITE_URL).href;

    document.title = current.title;
    document.documentElement.lang = lang === 'en' ? 'en-IN' : 'mr-IN';
    upsertLink('canonical', canonical);
    upsertMeta('meta[name="description"]', { name: 'description', content: current.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: current.keywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
    upsertMeta('meta[name="author"]', { name: 'author', content: 'Prof. Manoj Surwase' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Hotel Dharashiv Che Matoshree' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'en' ? 'en_IN' : 'mr_IN' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: current.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: current.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: current.imageAlt });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: current.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: current.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    setStructuredData(page === 'gym' ? gymSchema(image) : homeSchema(image));
  }, [page, lang]);

  return null;
}
