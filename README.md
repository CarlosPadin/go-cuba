# Go Cuba

Platform for renting cars in Cuba. This repository contains the customer-facing web app built with Next.js and Supabase.

## Features

- Browse and search cars by city, type, fuel, transmission, and date range
- Car detail pages with gallery, characteristics, and owner info
- User authentication (register, login, logout)
- Bilingual interface (Spanish / English)
- Responsive design with animated UI

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | MUI v7 + Emotion |
| Backend / DB | Supabase |
| Forms | React Hook Form + Yup |
| Data fetching | TanStack Query v5 |
| i18n | next-intl |
| Animations | GSAP, Motion, Three.js |

## Getting Started

### Prerequisites

- Node.js 20+
- A Supabase project

### Installation

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint with ESLint
```

## Project Structure

```
src/
  app/           # Pages (App Router)
  actions/       # Server Actions grouped by domain (auth, cars, owners)
  components/    # UI components (containers, layout, ui)
  hooks/         # Custom React hooks
  interfaces/    # TypeScript interfaces
  lib/           # Supabase clients, schemas, utils
  providers/     # React context providers
  constants/     # App-wide constants
  theme/         # MUI theme config
  i18n/          # next-intl configuration
messages/        # Translation files (en.json, es.json)
seed/            # Scripts to seed Supabase with sample data
```

## Seeding the database

```bash
node seed/seedOwners.js
node seed/seedCars.js
```

## Related

- **Backoffice**: `../backoffice/gc-backoffice` — admin panel for managing listings
