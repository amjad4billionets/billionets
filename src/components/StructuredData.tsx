import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "home" | "about" | "services" | "contact";
}

export const StructuredData = ({ type }: StructuredDataProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Billionets",
    "description": "AI-first digital agency helping businesses in Dubai and the UAE scale with intelligent automation and high-performance digital products",
    "url": "https://billionets.com",
    "logo": "https://billionets.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-123-4567",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["en", "ar"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://linkedin.com/company/billionets",
      "https://twitter.com/billionets",
      "https://instagram.com/billionets"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Billionets",
    "image": "https://billionets.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971-50-123-4567",
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Billionets",
    "url": "https://billionets.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://billionets.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency Services",
    "provider": {
      "@type": "Organization",
      "name": "Billionets"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions & Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        }
      ]
    }
  };

  const getSchemas = () => {
    switch (type) {
      case "home":
        return [organizationSchema, websiteSchema];
      case "about":
        return [organizationSchema];
      case "services":
        return [organizationSchema, servicesSchema];
      case "contact":
        return [organizationSchema, localBusinessSchema];
      default:
        return [organizationSchema];
    }
  };

  return (
    <Helmet>
      {getSchemas().map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
