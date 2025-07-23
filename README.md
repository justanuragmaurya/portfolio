# Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## 🚀 Features

- **Modern Design**: Built with Next.js 15 and React 19
- **Database Integration**: PostgreSQL with Prisma ORM
- **Responsive UI**: Tailwind CSS with dark/light theme support
- **Contact Form**: Integrated contact functionality with database storage
- **Analytics**: Site visitor tracking
- **Performance**: Turbopack for faster development
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL
- **ORM**: Prisma
- **UI Components**: Shadcn UI
- **Package Manager**: pnpm
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [PostgreSQL](https://www.postgresql.org/) database

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/justanuragmaurya/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"

# Add other environment variables as needed
```

### 4. Database Setup

Initialize and migrate the database:

```bash
# Generate Prisma client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate dev --name init

# (Optional) Seed the database if you have seed data
pnpm prisma db seed
```

### 5. Start the development server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📦 Available Scripts

- **Development**:
  ```bash
  pnpm dev          # Start development server with Turbopack
  ```

- **Production**:
  ```bash
  pnpm build        # Build the application for production
  pnpm start        # Start production server (runs migrations first)
  ```

- **Database**:
  ```bash
  pnpm prisma generate              # Generate Prisma client
  pnpm prisma migrate dev           # Create and apply new migration
  pnpm prisma migrate reset         # Reset database and apply all migrations
  pnpm prisma db push               # Push schema changes to database
  pnpm prisma studio               # Open Prisma Studio (database GUI)
  ```

- **Utilities**:
  ```bash
  pnpm postinstall  # Run after install (generates Prisma client)
  ```

## 🗄️ Database Schema

The project uses PostgreSQL with the following models:

- **Message**: Stores contact form submissions
- **SiteAnalytics**: Tracks site visitor statistics

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4. Configuration can be found in:
- `tailwind.config.js`
- `postcss.config.mjs`

### Next.js

Next.js configuration is in `next.config.ts` with Turbopack enabled for development.

### Prisma

Database schema and configuration:
- Schema: `prisma/schema.prisma`
- Migrations: `prisma/migrations/`

## 📝 Development Workflow

1. **Start development**:
   ```bash
   pnpm dev
   ```

2. **Make database changes**:
   ```bash
   # Edit prisma/schema.prisma
   pnpm prisma migrate dev --name your_migration_name
   ```

3. **View database**:
   ```bash
   pnpm prisma studio
   ```

4. **Build and test**:
   ```bash
   pnpm build
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

If you encounter any issues, please [create an issue](https://github.com/justanuragmaurya/portfolio/issues) on GitHub.

---

Made with ❤️ by [Anurag Maurya](https://github.com/justanuragmaurya)