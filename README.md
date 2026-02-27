# AI Bio Generator

Generate perfect Instagram/Twitter bios powered by AI. Free to try, $5 for unlimited generations.

## Features

- **Free Tier**: 3 bios generated per day
- **Premium ($5/month)**: Unlimited generations, all styles
- Multiple platforms: Instagram, Twitter/X, LinkedIn, TikTok
- Multiple tones: Professional, Fun, Witty, Minimal, Bold

## Tech Stack

- Next.js 14 (App Router)
- OpenRouter (free AI tier)
- Simple pricing with Stripe-ready UI

## Quick Start

```bash
cd ai-bio-generator
npm install
npm run dev
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `OPENROUTER_API_KEY`
4. Deploy!

## Environment Variables

```env
OPENROUTER_API_KEY=your_key_here
```

Get free API key at: https://openrouter.ai/
