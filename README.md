# Voyagr 🌐

**A creator-powered showcase and community platform.**  
Discover, promote, and engage with creators — all in one place.

---

## 🚀 Project Overview

Voyagr is a web application where content creators can:  
- Create their own showcase page with social links, embedded content, and stats  
- Engage with fans via a personal community forum (like their own subreddit)  
- Get discovered through a public, sortable creator directory  
- Promote themselves with featured listings (micro-SaaS business model)  

Fans can:  
- Browse and follow creators by category, popularity, or content type  
- Engage in community discussions within each creator's space  
- Support their favorite creators via tips or subscriptions  

---

## 🛠️ Tech Stack

### Frontend  
- React (with Vite)  
- TypeScript  
- Tailwind CSS  
- React Router  
- SWR (or React Query) for data fetching  

### Backend & Database  
- Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions)  
- JWT-based Auth via Supabase Auth  
- Stripe integration (via Supabase Edge Functions or direct SDK)  

---

## 📦 Features

- 🔐 User authentication and profile management (Supabase Auth)  
- 📄 Creator onboarding with free trial period  
- 🌐 Public creator profile pages with:  
  - Social links  
  - Embedded Twitch/YouTube streams  
  - Bio and follower count  
- 💬 Dedicated community forum per creator  
- 📊 Public directory of creators sortable by follower count, trending status, and category  
- 💸 Premium "featured creator" listings as a micro-SaaS revenue stream  
- 🛎️ Admin dashboard for moderation and featured listing management  

---

## 📁 Database Schema (Supabase)

| Table             | Description                            |
|-------------------|-------------------------------------|
| `users`           | User profiles and authentication info |
| `creators`        | Creator-specific profiles and metadata |
| `forums`          | Forums scoped to individual creators  |
| `forum_posts`     | Posts and comments in forums           |
| `subscriptions`   | Fan subscriptions to creators          |
| `tips`            | One-time tips/donations to creators    |
| `featured_creators` | Featured listing periods and status  |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >=16  
- npm or yarn  
- A [Supabase](https://supabase.com/) account and project  
- Stripe account (for payments)  