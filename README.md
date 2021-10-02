# Burnna Next.js Commerce

Burnna's e-commerce website built with Next.js and Shopify Storefront API.

This project was bootstraped using [Next.js Commerce](https://nextjs.org/commerce).

![Burnna App icon](/public/seo_card_1200x630.jpg)

## Tech Stack

**Programming Language**: Typescript.

**Framework**: Next.js

**Components Library**: Material-UI

**Data Fetching and Cache**: SWR

**Query Language**: GraphQL

**API**: Shopify’s Storefront API

## Features

- Data caching
- SPA
- Server-Side Rendering
- Multiple Layouts
- Cookies Management
- PWA (Progressive Web App)
- Incremental SSG
- Internacionalization: en-US / es
- Accessibility and UX enhanced experience
- SEO

## Configuration

### How to change providers

Open `.env.local` and change the value of `COMMERCE_PROVIDER` to the provider you would like to use, then set the environment variables for that provider (use `.env.template` as the base).

The setup for Shopify would look like this for example:

```
COMMERCE_PROVIDER=shopify
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=xxxxxxx.myshopify.com
NEXT_PUBLIC_SHOPIFY_STORE_CHECKOUT_DOMAIN=checkout.xxxxxxx.com
```

And check that the `tsconfig.json` resolves to the chosen provider:

```
"@framework": ["framework/shopify"],
"@framework/*": ["framework/shopify/*"]
```

That's it!

## Deployment

I recommend deploy this project to Vercel, but you can deploy to any PaaS.

## Support

For support, email christiandp7@gmail.com.

## Documentation

Please check the [Next.js Commerce documentation](https://github.com/vercel/commerce#readme)
