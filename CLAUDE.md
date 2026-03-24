# CLAUDE.md — Go Cuba (Frontend)

## Project Overview

Go Cuba is a car rental platform for Cuba. This is the **customer-facing Next.js app** (`yava-app`). Users can search, filter, and book cars from local owners.

A separate **backoffice** lives in `../../backoffice/gc-backoffice`.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **UI**: MUI v7 + Emotion
- **Backend/DB**: Supabase (auth + storage + database)
- **Forms**: React Hook Form + Yup
- **Data fetching**: TanStack Query v5
- **i18n**: next-intl (Spanish + English)
- **Animations**: GSAP, Motion (Framer Motion), Three.js
- **Carousels**: Swiper

## Project Structure

```
src/
  app/              # Next.js App Router pages
    login/          # Auth pages
    register/
    search/         # Car search with filters
    car/[id]/       # Car detail page
    about/
    support/
  actions/          # Server Actions
    auth/           # login, logout, create-user
    cars/           # get-cars, get-filtered-cars
    owners/
  components/
    containers/     # Feature-level components (ExploreCars, FilteredCars, etc.)
    layout/         # Layout components (navbar, footer)
    ui/             # Reusable UI pieces (banner, etc.)
  hooks/            # Custom hooks (useCarFilters, useFilterSync, useResponsive, useSnackbar)
  interfaces/       # TypeScript interfaces (ICar, IOwner, IUser)
  lib/
    supabase/       # Supabase client/server/proxy setup
    schemas/        # Yup validation schemas
    utils/
  providers/        # React context providers
  constants/        # App-wide constants
  i18n/             # next-intl config
  theme/            # MUI theme
messages/
  en.json           # English translations
  es.json           # Spanish translations
seed/               # Seed scripts for Supabase data
```

## Commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Environment Variables

Requires a `.env.local` with Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Key Conventions

- Server Actions go in `src/actions/` grouped by domain.
- Use `src/lib/supabase/server.ts` for server-side Supabase calls, `client.ts` for client-side.
- All text visible to users must be added to `messages/en.json` and `messages/es.json`.
- Car types: `sedan | suv | sports | pickup | van`
- Power types: `gasoline | diesel | electric | hybrid`
- Transmission: `manual | automatic`
