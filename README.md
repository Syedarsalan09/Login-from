# Northstar — Complete Animated React Frontend

A frontend-only React/Vite project using your navy, cyan, orange, Manrope/Inter, and square-corner design tokens. No backend is required to run the UI. Form submission states are demos until connected to APIs.

## Run locally

```bash
npm install
npm run dev
```

## Pages

- `src/pages/Login.jsx` — animated login, social sign-in UI, remember-me, password visibility, validation and demo feedback
- `src/pages/Register.jsx` — account creation UI and terms checkbox
- `src/pages/ForgotPassword.jsx` — password recovery flow and success state
- `src/pages/About.jsx` — about page and feature cards
- `src/pages/Contact.jsx` — validated contact form and confirmation state
- `src/pages/NotFound.jsx` — animated 404 page
- `src/pages/SitePage.jsx` — shared public-page layout

## Reusable components (one component per file)

`src/components/` includes `Button.jsx`, `Input.jsx`, `PasswordInput.jsx`, `FormField.jsx`, `Checkbox.jsx`, `Select.jsx`, `Modal.jsx`, `ConfirmDialog.jsx`, `Skeleton.jsx`, `Loader.jsx`, `PriceTag.jsx`, `Rating.jsx`, `EmptyState.jsx`, `ErrorState.jsx`, `Pagination.jsx`, `ProtectedRoute.jsx`, `ErrorBoundary.jsx`, `Brand.jsx`, and `AuthShell.jsx`, plus `index.js` exports.

## Routes

`/`, `/login`, `/register`, `/forgot-password`, `/about`, `/contact`, and a wildcard 404 route.

## Notes

- Motion includes ambient gradients, floating objects, orbital animation, and entrance transitions. `prefers-reduced-motion` is respected in CSS.
- Google/Apple buttons are presentation-only; wire OAuth to enable them.
- Login, registration, reset, and contact submissions are frontend demos. Connect Express API endpoints for real operations.
- `ProtectedRoute` is a client-side UI guard, not a substitute for server authorization.
