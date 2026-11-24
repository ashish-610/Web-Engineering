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
