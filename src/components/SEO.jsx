import { useEffect } from 'react';
import { CONTACT } from '../config.js';

const SITE_URL = 'https://www.hotelmatoshree.in';

const pages = {
  home: {
    title: 'Hotel Matoshree Dharashiv | By Manoj Surwase',
    description: 'Manoj Surwase is the owner and founder of Hotel Matoshree Dharashiv, a Dharashiv hotel known for Maharashtrian food and special biryani.',
    keywords: 'Manoj Surwase, Hotel Matoshree, Dharashiv hotel, Hotel Matoshree Dharashiv, Hotel Matoshree by Manoj Surwase, Manoj Surwase owner of Hotel Matoshree, Hotel Dharashiv Che Matoshree, restaurant in Dharashiv',
    path: '/',
    image: '/seo-hotel-matoshree.png',
    imageAlt: 'Hotel Matoshree Dharashiv restaurant, tea and franchise',
  },
  gym: {
    title: 'Matoshree Gym Dharashiv | Fitness, Cardio & Personal Training',
    description: 'Join Matoshree Gym in Dharashiv for strength training, cardio, functional workouts, modern equipment and personal training. Book a gym tour or ask about membership.',
    keywords: 'Matoshree Gym, gym in Dharashiv, best gym Dharashiv, fitness centre Dharashiv, personal trainer Dharashiv, cardio gym Dharashiv, strength training Dharashiv, gym membership Dharashiv, Manoj Surwase',
    path: '/gym',
    image: '/seo-matoshree-gym.png',
    imageAlt: 'Matoshree Gym strength and fitness centre in Dharashiv',
  },
  owner: {
    title: 'Prof. Manoj Surwase | Owner of Hotel Matoshree Dharashiv',
    description: 'Prof. Manoj Surwase is the owner and founder of Hotel Matoshree Dharashiv, a Maharashtrian restaurant and franchise brand in Dharashiv.',
    keywords: 'Manoj Surwase, Prof Manoj Surwase, Hotel Matoshree owner, Hotel Matoshree founder, Manoj Surwase Dharashiv, Hotel Matoshree Dharashiv',
    path: '/manoj-surwase',
    image: '/seo-manoj-surwase.png',
    imageAlt: 'Prof. Manoj Surwase, owner and founder of Hotel Matoshree Dharashiv',
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
        name: 'Hotel Matoshree Dharashiv',
        alternateName: ['Hotel Matoshree', 'Hotel Dharashiv Che Matoshree', 'Dharashiv Ch Matoshree', 'Hotel Matoshree by Manoj Surwase'],
        url: `${SITE_URL}/`, logo: `${SITE_URL}/favicon.png`, image,
        founder: { '@id': `${SITE_URL}/#manoj-surwase` },
        email: CONTACT.email, telephone: CONTACT.phoneDial,
        sameAs: [CONTACT.social.instagram, CONTACT.social.youtube],
      },
      {
        '@type': 'Restaurant', '@id': `${SITE_URL}/#restaurant`,
        name: 'Hotel Matoshree Dharashiv', image, url: `${SITE_URL}/`,
        telephone: CONTACT.phoneDial, email: CONTACT.email, priceRange: '₹₹',
        servesCuisine: ['Maharashtrian', 'Chicken Dum Biryani', 'Dhavara Special', 'Indian'],
        address: {
          '@type': 'PostalAddress', streetAddress: 'MH SH 67, Tambari Vibhag',
          addressLocality: 'Dharashiv', addressRegion: 'Maharashtra',
          postalCode: '413501', addressCountry: 'IN',
        },
        founder: { '@id': `${SITE_URL}/#manoj-surwase` },
        parentOrganization: { '@id': `${SITE_URL}/#organization` }, hasMap: CONTACT.mapLink,
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00', closes: '23:30',
        }],
      },
      {
        '@type': 'Person', '@id': `${SITE_URL}/#manoj-surwase`,
        name: 'Manoj Surwase', honorificPrefix: 'Prof.', jobTitle: 'Owner and Founder of Hotel Matoshree',
        url: `${SITE_URL}/manoj-surwase`,
        worksFor: { '@id': `${SITE_URL}/#organization` },
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
        name: 'Hotel Matoshree Dharashiv', inLanguage: ['mr-IN', 'en-IN'],
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

function ownerSchema(image) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${SITE_URL}/#manoj-surwase`,
        name: 'Manoj Surwase', honorificPrefix: 'Prof.',
        jobTitle: 'Owner and Founder of Hotel Matoshree Dharashiv',
        description: pages.owner.description, url: `${SITE_URL}/manoj-surwase`, image,
        worksFor: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
        name: 'Hotel Matoshree Dharashiv', alternateName: ['Hotel Matoshree', 'Hotel Dharashiv Che Matoshree'],
        url: `${SITE_URL}/`, founder: { '@id': `${SITE_URL}/#manoj-surwase` },
      },
      {
        '@type': 'ProfilePage', '@id': `${SITE_URL}/manoj-surwase#webpage`,
        url: `${SITE_URL}/manoj-surwase`, name: pages.owner.title,
        description: pages.owner.description, inLanguage: ['mr-IN', 'en-IN'],
        mainEntity: { '@id': `${SITE_URL}/#manoj-surwase` },
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
    upsertMeta('meta[name="author"]', { name: 'author', content: 'Manoj Surwase' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: page === 'owner' ? 'profile' : 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Hotel Matoshree Dharashiv' });
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
    const schema = page === 'gym' ? gymSchema(image) : page === 'owner' ? ownerSchema(image) : homeSchema(image);
    setStructuredData(schema);
  }, [page, lang]);

  return null;
}
