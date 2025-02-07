# Conditional Tailwind Classes Removed During Purge in SSR
This repository demonstrates a bug where Tailwind CSS classes conditionally applied on the client-side are removed during the purge process in a server-side rendering (SSR) environment (like Next.js). This leads to missing styles on the client.

**Bug:**
When a Tailwind class is conditionally applied (e.g., based on user interaction or data fetched after hydration), and this condition is only true on the client-side, Tailwind's purge process might remove the unused class because it wasn't present during the server-side render.

**Solution:**
The solution involves either using `@layer` or `safelist` to explicitly tell Tailwind to keep these conditionally applied classes.