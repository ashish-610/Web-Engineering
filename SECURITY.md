# Security Report

Assessment of the `users-api` against the OWASP Top 10 (2021), based on the
current implementation and integration security tests.

| OWASP category | How the API defends against it, or why it does not apply yet |
|---|---|
| **A01: Broken Access Control** | User routes enforce authentication and self/admin or admin-only policies, but existing access tokens can retain old privileges after a role change (see the remaining weakness below) (`src/routes/users.routes.js`, `src/auth/policies.js`). |
| **A02: Cryptographic Failures** | Passwords are stored as salted scrypt hashes, JWT verification pins HS256 and requires a sufficiently long secret, and refresh tokens are random values stored hashed (`src/utils/password.js`, `src/services/token.service.js`, `src/config/env.js`). |
| **A03: Injection** | Strict request schemas reject unexpected or malformed input; integration tests cover operator-shaped login input, an XSS-style name, and a prototype-pollution payload (`src/validators/user.schema.js`, `tests/integration/security.api.test.js`). |
| **A04: Insecure Design** | Higher-risk flows include OAuth state/PKCE checks and ownership checks for direct uploads (`src/controllers/auth.controller.js`, `src/services/avatar.service.js`). |
| **A05: Security Misconfiguration** | Helmet sets security headers, CORS uses configured origins, and refresh/logout requests validate Origin (`src/middleware/security.js`, `tests/integration/security.api.test.js`). |
| **A06: Vulnerable and Outdated Components** | The reviewed implementation and integration tests do not establish whether dependencies are free of known vulnerabilities; this requires a dependency audit of the lockfile. |
| **A07: Identification and Authentication Failures** | Failed login attempts are rate-limited by IP and email, and an integration test checks the failure threshold (`src/middleware/security.js`, `tests/integration/security.api.test.js`). |
| **A08: Software and Data Integrity Failures** | JWT algorithms are pinned, request schemas reject unknown keys, and OAuth uses state and PKCE (`src/services/token.service.js`, `src/auth/pkce.js`). |
| **A09: Security Logging and Monitoring Failures** | Requests log method, URL, status, duration, and request ID, while server errors are logged without exposing details to clients (`src/middleware/request-logger.js`, `src/middleware/error-handler.js`). |
| **A10: Server-Side Request Forgery (SSRF)** | The GitHub OAuth client uses fixed GitHub endpoints rather than fetching a destination supplied in a request (`src/services/github-oauth.client.js`). |

## Remaining weakness: stale authorization in access tokens

Access tokens contain a user's role, and verification trusts that token claim
without reloading the current user. As a result, a demoted or deleted
administrator can continue using an existing token on privileged routes until
it expires; the default access-token lifetime is 15 minutes
(`src/services/token.service.js`, `src/config/env.js`,
`src/routes/users.routes.js`).

**Recommended fix:** Check the user's current status and role when authorizing
requests, or introduce a role/version or revocation mechanism that invalidates
outstanding access tokens when privileges change.
