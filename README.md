# agp-crackers

Static site for AGP Crackers, Sivakasi (hosted at agpcrackers.in).

After editing products, prices or FAQs in `js/data.js`, regenerate the
pre-rendered SEO pages and sitemap:

    node tools/build-seo.js

This rewrites `products.html`, the 16 category pages (`sparklers.html`, ...),
the category/featured blocks in `index.html`, the FAQ in `faq.html`, and
`sitemap.xml`.
