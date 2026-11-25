import { CAREER_COURSES_12 } from '../data/careerCourses12';

const SITE_URL = 'https://futureitindustry.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/brand/future_it_emblem.png`;

export interface RouteSeoMetadata {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  breadcrumbs: { name: string; item: string }[];
  courseJsonLd?: Record<string, unknown>;
}

const PRIVATE_HASH_PREFIXES = [
  '#admin',
  '#admin-portal',
  '#control-center',
  '#admin-panel',
  '#admin-leads',
  '#leads',
  '#hr-settings',
  '#dashboard',
  '#mylearning',
  '#my-learning',
  '#learning',
  '#wallet',
  '#withdraw',
  '#earnings',
  '#earn',
  '#earncash',
  '#earn-cash',
  '#referral',
  '#income',
  '#payment-success',
  '#payment-failure',
];

function normalizePath(pathname: string): string {
  const clean = (pathname || '/').replace(/\/+$/, '');
  return clean === '' ? '/' : clean.toLowerCase();
}

export function resolvePublicRouteSeo(pathname: string, hash: string): RouteSeoMetadata {
  const path = normalizePath(pathname);
  const baseHash = (hash || '').split('?')[0].toLowerCase();

  // Private / authenticated / admin routes -> noindex
  if (
    PRIVATE_HASH_PREFIXES.includes(baseHash) ||
    path.startsWith('/admin') ||
    path.startsWith('/dashboard') ||
    path.startsWith('/wallet') ||
    path.startsWith('/api')
  ) {
    return {
      title: 'Student Portal | FUTURE IT INDUSTRY',
      description: 'Authenticated workspace on Future IT Industry.',
      canonical: `${SITE_URL}/`,
      robots: 'noindex, nofollow',
      breadcrumbs: [{ name: 'Home', item: `${SITE_URL}/` }],
    };
  }

  // Individual Course Pages (/courses/:id)
  if (path.startsWith('/courses/')) {
    const slug = path.replace('/courses/', '').trim();
    const course = CAREER_COURSES_12.find((c) => c.id.toLowerCase() === slug);
    if (course) {
      const courseUrl = `${SITE_URL}/courses/${course.id}`;
      const numericPrice = course.price.replace(/[^0-9]/g, '');
      const toolsText = course.tools.map((t) => t.name).join(', ');
      return {
        title: `${course.title} Course | FUTURE IT INDUSTRY`,
        description: `${course.shortDesc} Learn ${toolsText} with interactive visual learning and bilingual English/Hindi AI mentorship at Future IT Industry.`,
        canonical: courseUrl,
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Courses', item: `${SITE_URL}/courses` },
          { name: course.title, item: courseUrl },
        ],
        courseJsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.title,
          description: course.shortDesc,
          url: courseUrl,
          inLanguage: ['en', 'hi'],
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Future IT Industry',
            sameAs: `${SITE_URL}/`,
          },
          ...(numericPrice
            ? {
                offers: {
                  '@type': 'Offer',
                  price: numericPrice,
                  priceCurrency: 'INR',
                  url: courseUrl,
                },
              }
            : {}),
        },
      };
    }
  }

  // Courses Directory (/courses)
  if (path === '/courses' || baseHash === '#courses') {
    return {
      title: 'Career-Focused IT & AI Courses | FUTURE IT INDUSTRY',
      description:
        'Explore job-oriented courses in Data Analytics with GenAI, Data Science & Agentic AI, ML Engineering, AI Engineering, Full Stack Web Development, and Live AI Builder classes.',
      canonical: `${SITE_URL}/courses`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'Courses', item: `${SITE_URL}/courses` },
      ],
    };
  }

  // ATS Resume Checker
  if (
    path === '/ats-resume-checker' ||
    path === '/ats' ||
    baseHash === '#ats' ||
    baseHash === '#ats-resume-checker'
  ) {
    return {
      title: 'ATS Resume Score Checker | FUTURE IT INDUSTRY',
      description:
        'Analyze your resume for Applicant Tracking System (ATS) compatibility, keyword strength, and recruiter readiness with the Future IT Industry ATS Resume Checker.',
      canonical: `${SITE_URL}/ats-resume-checker`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'ATS Resume Checker', item: `${SITE_URL}/ats-resume-checker` },
      ],
    };
  }

  // About Us
  if (
    path === '/about' ||
    path === '/about-us' ||
    ['#about', '#about-us', '#aboutus', '#company'].includes(baseHash)
  ) {
    return {
      title: 'About Us | FUTURE IT INDUSTRY (Power Green Industries)',
      description:
        'Learn about Future IT Industry, operated by Power Green Industries — an Indian IT & AI education platform focused on visual learning, coding practice, and career readiness.',
      canonical: `${SITE_URL}/about`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'About Us', item: `${SITE_URL}/about` },
      ],
    };
  }

  // Contact Us
  if (
    path === '/contact' ||
    path === '/contact-us' ||
    ['#contact', '#contact-us', '#contactus'].includes(baseHash)
  ) {
    return {
      title: 'Contact Us & Support | FUTURE IT INDUSTRY',
      description:
        'Reach Future IT Industry official student support by phone (+91 8210778369), email (subodh.mscit@gmail.com), or WhatsApp. Registered office in Bakarpur, Bihar, India.',
      canonical: `${SITE_URL}/contact`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'Contact Us', item: `${SITE_URL}/contact` },
      ],
    };
  }

  // Terms & Conditions
  if (
    path === '/terms' ||
    path === '/terms-and-conditions' ||
    ['#terms', '#terms-and-conditions', '#termsandconditions', '#terms-conditions'].includes(baseHash)
  ) {
    return {
      title: 'Terms & Conditions | FUTURE IT INDUSTRY',
      description: 'Official Terms and Conditions governing the use of Future IT Industry courses and services.',
      canonical: `${SITE_URL}/terms`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'Terms & Conditions', item: `${SITE_URL}/terms` },
      ],
    };
  }

  // Privacy Policy
  if (
    path === '/privacy' ||
    path === '/privacy-policy' ||
    ['#privacy', '#privacy-policy', '#privacypolicy'].includes(baseHash)
  ) {
    return {
      title: 'Privacy Policy | FUTURE IT INDUSTRY',
      description: 'Official Privacy Policy explaining how Future IT Industry protects learner data and privacy.',
      canonical: `${SITE_URL}/privacy`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'Privacy Policy', item: `${SITE_URL}/privacy` },
      ],
    };
  }

  // Refund Policy
  if (
    path === '/refund' ||
    path === '/refund-policy' ||
    ['#refund', '#refund-policy', '#refundpolicy', '#cancellation', '#cancellation-policy'].includes(baseHash)
  ) {
    return {
      title: 'Refund & Cancellation Policy | FUTURE IT INDUSTRY',
      description: 'Official Refund and Cancellation Policy for Future IT Industry educational programs.',
      canonical: `${SITE_URL}/refund`,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', item: `${SITE_URL}/` },
        { name: 'Refund Policy', item: `${SITE_URL}/refund` },
      ],
    };
  }

  // Default Homepage
  return {
    title: 'FUTURE IT INDUSTRY | Learn Today. Earn Tomorrow.',
    description:
      'Future IT Industry offers interactive visual learning, bilingual English/Hindi AI Mentor guidance, coding & DSA practice, ATS resume checking, mock interviews, and career-focused IT & AI courses.',
    canonical: `${SITE_URL}/`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [{ name: 'Home', item: `${SITE_URL}/` }],
  };
}

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonicalLink(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertDynamicJsonLd(id: string, data: Record<string, unknown> | null): void {
  const existing = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  let script = existing;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function applySeoMetadata(pathname: string, hash: string): void {
  if (typeof document === 'undefined') return;
  const meta = resolvePublicRouteSeo(pathname, hash);

  document.title = meta.title;
  upsertMetaTag('name', 'description', meta.description);
  upsertMetaTag('name', 'robots', meta.robots);
  upsertCanonicalLink(meta.canonical);

  upsertMetaTag('property', 'og:title', meta.title);
  upsertMetaTag('property', 'og:description', meta.description);
  upsertMetaTag('property', 'og:url', meta.canonical);
  upsertMetaTag('property', 'og:image', DEFAULT_IMAGE);

  upsertMetaTag('name', 'twitter:title', meta.title);
  upsertMetaTag('name', 'twitter:description', meta.description);

  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: meta.breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: b.item,
    })),
  };
  upsertDynamicJsonLd('fii-dynamic-breadcrumb-ld', breadcrumbSchema);
  upsertDynamicJsonLd('fii-dynamic-course-ld', meta.courseJsonLd || null);
}
