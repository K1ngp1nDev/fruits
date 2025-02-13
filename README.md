# Fruit Explorer 🍏🍎🍇🍋🟩

Fruit Explorer is a single-page application (SPA) built with [Nuxt 3](https://nuxt.com/) using `<script setup lang="ts">` and [Pinia](https://pinia.vuejs.org/) for state management. The application allows users to:

- View fruit cards displaying nutritional information.
- Filter fruits by various nutritional ranges (calories, fat, sugar, carbohydrates, protein).
- Add fruits to a favorites list with persistence across page reloads (using `localStorage`).
- View fruits by groups (family) on separate pages.

## Features

- **Fruit Cards:** Display essential fruit details and nutritional values.
- **Dynamic Filters:** Flexible filtering based on nutritional value ranges.
- **Favorites:** Add and remove fruits from a favorites list with persistent storage.
- **Family View:** Navigate to a page displaying fruits belonging to a specific family.

## Technologies

- **Nuxt 3** – Server-side rendering (SSR) and static site generation (SSG) with modern Vue 3 features.
- **Vue 3** – Composition API using `<script setup lang="ts">`.
- **TypeScript** – Strict typing for robust development.
- **Pinia** – Global state management.
- **SCSS/CSS** – Component styling.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_DIRECTORY>
    ```
2. **Install dependencies:**
    ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the application:**
    - Open [http://localhost:3000](http://localhost:3000) in your browser.
    - Explore the fruit cards and filters.
    - Add fruits to your favorites list.
    - Navigate to family pages to view fruits by group.
    - Enjoy exploring the fruits

## API

Fruit data is fetched from the [Fruityvice API](https://www.fruityvice.com/). To avoid CORS issues, a server-side proxy endpoint is used:

- **GET /api/fruit/all:** This endpoint makes a request to `https://www.fruityvice.com/api/fruit/all` and returns the data to the client.

## Favorites Persistence

Favorites are saved using `localStorage`. The Pinia store loads saved data from `localStorage` on the client side and synchronizes any changes back to it.

## Optimizations

- **Server-Side Rendering (SSR):** API requests are made on the server to bypass CORS restrictions.
- **Reactive Filters:** Filters update dynamically without unnecessary re-renders thanks to computed properties.
- **Performance:** Optimized usage of Pinia and lazy-loading for favorites.
- **Deployment:** The application can be deployed on free platforms like Vercel. To deploy:
    - Configure environment variables if necessary.
    - Connect your repository to Vercel.
    - Follow the Nuxt documentation for deployment instructions.
# fruits
