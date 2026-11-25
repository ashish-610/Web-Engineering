# Short Notes

## CSR vs SSR vs SSG

- **CSR (Client-Side Rendering):** The browser renders the UI using JavaScript. Use it for highly interactive dashboards behind authentication.
- **SSR (Server-Side Rendering):** The server generates HTML for each request. Use it for pages needing request-specific data and good initial load performance.
- **SSG (Static Site Generation):** Pages are generated at build time. Use it for mostly static content such as blogs or documentation.

## Hydration

Hydration is when the client attaches React event handlers and state to server-rendered HTML, making the existing page interactive without replacing it.

## When Context Is the Wrong Tool

Context is the wrong tool for frequently changing or highly localized state, or state that many independent components need to update; it can cause unnecessary re-renders. Prefer local state, props, or a state management library for those cases.

## Styling systems

- **Grid vs Flexbox:** Use Grid for two-dimensional page layouts; use Flexbox to arrange content along one axis.
- **Utility-first CSS pros:** Fast styling without inventing class names; consistent design values.
- **Utility-first CSS cons:** Markup can become noisy; utility names take time to learn.
- **Design tokens:** Tokens centralize colours, so one change updates the whole UI and keeps themes consistent. Hard-coded colours require scattered edits and can drift.

## Server state and Redux Toolkit

- **React Query:** Keeps fetched server data cached. The 30-second `staleTime` lets the users list remain fresh while navigating to a detail page and back.
- **Cache invalidation:** With a real API, prefer `invalidateQueries` after a mutation so the server remains the source of truth and the cache refreshes with its canonical data. The demo API does not persist creates, so the new user is patched into the cache instead.
- **Redux Toolkit:** Use it for complex shared client state with coordinated updates across many parts of an app; it is unnecessary for simple local UI state or remote data already managed by React Query.

## Server state vs client state

- **Server state vs client state:** Server state is remote data owned by a backend and must be fetched, cached, and synchronized. Client state is local UI or session data owned by the browser.
- **Redux Toolkit vs Zustand:** Choose Redux Toolkit when an app needs a predictable, strongly structured state architecture with DevTools, reducers, middleware, and coordinated shared updates.
- **`staleTime`:** It defines how long a successful query remains fresh, so React Query avoids automatically refetching it during that period even after remounting or navigating.
