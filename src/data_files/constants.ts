import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "technosheen",
  tagline: "Web Developer + Growth Consultant",
  description: "Accelerate your online presence with expert web development and strategic marketing insights. Discover growth opportunities and actionable strategies for sustainable success",
  description_short: "Unlock digital success with our expert web development and marketing strategies.",
  url: "technhosheen.com",
  author: "Sean Mahoney",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Web Developer & Growth Consultant`,
  description: "Accelerate your online presence with expert web development and strategic marketing insights. Discover growth opportunities and actionable strategies for sustainable success.",
  image: ogImageSrc,
};
