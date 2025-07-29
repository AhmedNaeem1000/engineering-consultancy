import Script from "next/script"

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "Article" | "Service" | "Review"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: "شركة الواحة الهندسية",
          alternateName: "Al-Waha Engineering",
          url: "https://alwaha-engineering.com",
          logo: "https://alwaha-engineering.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+966-11-234-5678",
            contactType: "customer service",
            areaServed: "SA",
            availableLanguage: ["Arabic", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "شارع الملك فهد، حي العليا",
            addressLocality: "الرياض",
            addressCountry: "SA",
          },
          sameAs: [
            "https://linkedin.com/company/alwaha-engineering",
            "https://twitter.com/alwaha_eng",
            "https://instagram.com/alwaha_engineering",
          ],
          ...data,
        }

      case "LocalBusiness":
        return {
          ...baseData,
          "@type": "ProfessionalService",
          name: "شركة الواحة الهندسية",
          image: "https://alwaha-engineering.com/hero-image.jpg",
          telephone: "+966-11-234-5678",
          address: {
            "@type": "PostalAddress",
            streetAddress: "شارع الملك فهد، حي العليا",
            addressLocality: "الرياض",
            postalCode: "11564",
            addressCountry: "SA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 24.7136,
            longitude: 46.6753,
          },
          url: "https://alwaha-engineering.com",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "18:00",
          },
          priceRange: "$$",
          ...data,
        }

      case "Article":
        return {
          ...baseData,
          headline: data.title,
          image: data.image,
          author: {
            "@type": "Person",
            name: data.author,
          },
          publisher: {
            "@type": "Organization",
            name: "شركة الواحة الهندسية",
            logo: {
              "@type": "ImageObject",
              url: "https://alwaha-engineering.com/logo.png",
            },
          },
          datePublished: data.publishedAt,
          dateModified: data.updatedAt,
          ...data,
        }

      case "Service":
        return {
          ...baseData,
          provider: {
            "@type": "Organization",
            name: "شركة الواحة الهندسية",
          },
          areaServed: "SA",
          ...data,
        }

      case "Review":
        return {
          ...baseData,
          itemReviewed: {
            "@type": "LocalBusiness",
            name: "شركة الواحة الهندسية",
          },
          ...data,
        }

      default:
        return baseData
    }
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}

// مكونات محددة للاستخدام السهل
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        foundingDate: "2006",
        numberOfEmployees: "65",
        slogan: "نبني المستقبل بإتقان وإبداع",
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <StructuredData
      type="LocalBusiness"
      data={{
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "280",
        },
      }}
    />
  )
}

export function ArticleSchema({
  title,
  image,
  author,
  publishedAt,
  updatedAt,
  description,
}: {
  title: string
  image: string
  author: string
  publishedAt: string
  updatedAt: string
  description: string
}) {
  return (
    <StructuredData
      type="Article"
      data={{
        title,
        image,
        author,
        publishedAt,
        updatedAt,
        description,
      }}
    />
  )
}
