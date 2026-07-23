import { Helmet } from "react-helmet-async"
import { siteConfig } from "@/config/site"

interface SEOProps {
  title?: string
  description?: string
  url?: string
}

export function SEO({ title, description, url }: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageDescription = description || "Atuação jurídica estratégica, responsável e próxima em Esperantina e região norte do Piauí."
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  )
}
