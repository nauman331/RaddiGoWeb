import React from 'react'

// Article structured data for the guide pages. Only dateModified is
// included — the guides were first published before this change, and
// their original publish date is not recorded, so no datePublished is
// claimed. The date is the real date of the latest edit.
const ArticleJsonLd: React.FC<{ headline: string; description: string; url: string }> = ({
    headline,
    description,
    url,
}) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline,
                description,
                author: { '@type': 'Organization', name: 'RaddiGo', url: 'https://www.raddigo.tech' },
                publisher: { '@type': 'Organization', name: 'RaddiGo', url: 'https://www.raddigo.tech' },
                dateModified: '2026-11-17',
                inLanguage: 'en',
                mainEntityOfPage: url,
            }),
        }}
    />
)

export default ArticleJsonLd
