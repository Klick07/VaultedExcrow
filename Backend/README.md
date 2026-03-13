# Template Project (Node.js + Express + PostgreSQL)

A lightweight starter template for building node-based APIs with authentication, health checks, observability metrics, and PostgreSQL integration. Designed for hackathons and fast prototyping.

---

## ✅ Key Features

- **JWT-based auth** (access + refresh tokens)
- **PostgreSQL-backed user store** (with refresh token rotation)
- **Rate limiting** (protects against brute-force requests)
- **Request metrics** (throughput, latency, error rate)
- **Health checks** (liveness + readiness)
- **Validation + error handling**

---

## 🧰 Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (v12+ recommended)
- A terminal (PowerShell / Command Prompt)

---

## ⚙️ Environment Variables

Create a `.env` file at the project root with the following values:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=template
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>

ACCESSTOKENSECRET=<a-long-random-secret>
```

> 💡 `ACCESSTOKENSECRET` is used to sign JWT access tokens. Use a long random string.

---

## 🗄️ Database Setup

This project expects a PostgreSQL database and includes a sample migration script at `migrations/auth.migration`.

### Run the migration (example)

1. Start PostgreSQL.
2. Run the SQL script via `psql`:

```sh
psql -U <your-db-user> -f migrations/auth.migration
```

> ✅ This will create the `template` database and the required tables.

---

## 🚀 Run the App

Install dependencies:

```sh
npm install
```

Start in development mode (auto-reload):

```sh
npm run dev
```

Start in production mode:

```sh
npm start
```

---

## 🧩 API Endpoints

### Auth (`/user`)

| Method | Path         | Description | Body |
|-------|--------------|-------------|------|
| POST  | `/user/verify` | Register a new user | `{ "username": "...", "password": "...", "role": "..." }` |
| POST  | `/user/login`  | Login and receive access + refresh tokens | `{ "username": "...", "password": "..." }` |
| POST  | `/user/refresh` | Rotate refresh token & issue new access token | `{ "refreshToken": "..." }` |
| POST  | `/user/logout`  | Revoke refresh token | `{ "refreshToken": "..." }` |

> 🔐 Passwords must be 8-12 characters and pass `isStrongPassword` validation.

---

## 📊 Metrics & Observability

### Metrics endpoint

- `GET /metrics/observability`

Returns:

- throughput (req/s)
- average latency
- error rate
- total requests
- total errors

---

## ❤️ Health Checks

- `GET /health/live` - Liveness (server running)
- `GET /health/ready` - Readiness (DB connectivity + system info)
- `GET /health/metrics` - System resource metrics (CPU, memory, uptime)

---

## 🧠 Project Structure

Key directories:

- `controllers/` – request handlers
- `services/` – business logic
- `repositories/` – database access
- `middlewares/` – express middlewares (metrics, validation, errors)
- `utils/` – helpers (JWT, crypto, bcrypt, system metrics)
- `routers/` – express routers
- `migrations/` – SQL scripts

---

## 🔒 Notes

- JWT access tokens expire after **15 minutes**.
- Refresh tokens are stored hashed in the database and rotated on refresh.
- Rate limiting is set to **100 requests per minute**.

---

## 🛠️ Improvements (Ideas)

- Add automated migrations (e.g., `node-pg-migrate` or `knex`)
- Add request logging to a file or external service
- Add unit/integration tests
- Add RBAC / permissions

---

## 📌 License

This project uses the **ISC** license (as defined in `package.json`).
