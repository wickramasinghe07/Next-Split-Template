# NextJS split template

This is an opinionated [Next.js](https://nextjs.org/) template bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This tries to maintain a separation between API and Client side UI, which is not
the intended use of NextJS 14.

## Stack

      - [NextJS](https://nextjs.org/) + [React](https://react.dev/)
      - [TypeScript](https://www.typescriptlang.org/)
      - [PostgreSQL](https://www.postgresql.org/)
      - [Drizzle ORM](https://orm.drizzle.team/)
      - [TailwindCSS](https://tailwindcss.com/)
      - [React Aria](https://react-spectrum.adobe.com/react-aria/)
      - [Lucia Auth](https://lucia-auth.com/)

### Other libraries used

      - [Zod](https://zod.dev/)

## Getting Started

      1. Have docker (or podman + docker support) installed.
      2. Have NodeJS 20 or higher _even number_ installed. (You can use
         [Volta](https://volta.sh/) or [NVM](https://github.com/nvm-sh/nvm) to manage
         multiple NodeJS versions.)
      3. Create a copy of the file `.env.example`, rename it to `.env` and change
         values if needed.
      4. Run `docker compose up` in project root directory (or alternative) to start a
         postgresql server.
      5. Have pnpm installed (this is faster than npm): `npm i -g pnpm`.
      6. Run `pnpm install` to install dependencies.
      7. Run `pnpm dev` to start the development server.
      8. Open [http://localhost:3000](http://localhost:3000) with your browser to see
         the result.

### Running database migrations

      1. Use `pnpm drizzle-kit studio` to view database content in browser. Or use
         a tool like HeidiSQL or DBeaver.
      2. When you are in development mode and trying out things locally, use
         `pnpm drizzle-kit push:pg` to update the db according to your schemas at any
         time. Never use this in production.
      3. Before committing, run `pnpm drizzle-kit generate:pg` to generate migration
         scripts.
      4. Run `pnpm tsx migrate-db.ts` in production/staging to run database
         migrations.

## Conventions

      - Write TypeScript.
      - Use `app/api` for (json) API routes.
      - Keep core logic/views inside `modules` folder organized by feature. Core logic
     **shouldn't depend on NextJS-specific APIs**. Use your best judgement.
      - Keep database schemas in relevant feature `modules` and make sure to name them
        `schema.ts`.
      - Keep common code that glue NextJS to other parts of the app inside `lib`.
      - Keep reusable React components inside `components`.  
           - `IconButton` 👍 Do
           - `DashboardView` 👎 Don't
      - Keep pages for each route in the corresponding folder.  
              e.g., Page to show orders by a user  
           example url: `users/123/orders`  
        route handler: `app/users/[id]/orders/page.tsx`
      - [Change the theme](https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme)
        in `tailwind.config.ts` according to your design system and use them
        consistently and try to avoid
        [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

## Learn More

To learn more about Next.js, take a look at the following resources:

      - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
      - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Other:

      - [Writing commit messages](https://cbea.ms/git-commit/)

## Introduction to tailwind CSS 

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes to help quickly build modern and responsive web interfaces. Unlike traditional CSS frameworks that come with pre-designed components, Tailwind focuses on providing low-level utility classes that enable the creation of custom designs without leaving your HTML or in our case JSX.

Installing Tailwind CSS

            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p

Font size and styling:
Increase a font size of an element in tailwind is set much like the colors. By using the text and then adding the desired size which ranges from xs to 9xl with xs being extra small which is 14px or 0.875rem and 9xl being the biggest size the text can go which is about 8rem or 128px. Changing the font style is very similar to changing the font size. We start with the font and add your desired style. Example, font-bold, font-serif, font-semibold etc.

## Padding and margin: 
Tailwind CSS has a design system that would help you keep a consistent scale across your designs. All you have to know is the syntax for applying each utility. The utilities for adding padding are:

      · p — which denotes padding across the whole element

      · pb — which denotes padding-bottom

      · pl — which denotes padding-left

      · pr — which denotes padding-right

      · pt — which denotes padding-top

      · py — which denotes padding on the top and bottom

      · px — which denotes padding on left and right.

## The utilities for margin the same just replace the p in padding with m for margin they are:

      · m — which denotes margin on all sides of the element

      · mb — which denotes margin-bottom

      · ml — which denotes margin-left

      · mr — denotes margin-right

      · mt — denotes margin-top

      · mx — denotes margin on the left and right

      · my — denotes margin on the top and bottom.

To apply them though, you’d have to use the appropriate numbers provided by Tailwind CSS. These numbers range from 0 to 96 with zero as 0px and 96 as 384px or 24rem.

Flex:
To use flex in Tailwind CSS you just need to add a class of flex and the then the desired flex direction. You can customize the layout by using different Flexbox utility classes provided by Tailwind CSS. For example, justify-between, items-center, flex-col, etc.

Grid:
Much like flexbox, you need to use the grid class and the desired grid direction. The layout can be customized by using the different grid utility classes provided by Tailwind CSS.

## Responsive design: 
In Tailwind CSS, responsive classes allow you to apply styles based on the screen size or viewport width. Tailwind uses a mobile-first approach, meaning styles are applied by default and can be overridden at larger screen sizes. Responsive classes are added using a specific syntax which are:

      · sm — min-width 640px

      · md — min-width 768px

      · lg — min-width 1024px

      · xl– min-width 1280px

      · 2xl — min-width 1536px
