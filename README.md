# Aamir Mahboob – Portfolio (Next.js)

A modern, dark-themed portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
aamir-portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── BgBlobs.tsx       # Animated background blobs
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Hero section with avatar
│   ├── Stats.tsx         # Animated counters (5+, 30+, 24+)
│   ├── Projects.tsx      # Featured projects grid
│   ├── Skills.tsx        # Tech stack grid
│   ├── Services.tsx      # Services cards
│   ├── Testimonials.tsx  # Client testimonials
│   ├── CTA.tsx           # Call to action banner
│   ├── Contact.tsx       # Contact form + info
│   ├── Footer.tsx        # Footer
│   └── SectionHeader.tsx # Shared section header
├── public/               # Static assets (add your photo here)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Customization

### Update your personal info
Edit these files with your real details:

| What to change | File |
|---|---|
| Name, bio, title | `components/Hero.tsx` |
| Stats numbers | `components/Stats.tsx` |
| Projects list | `components/Projects.tsx` |
| Tech stack | `components/Skills.tsx` |
| Services | `components/Services.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Email/address/phone | `components/Contact.tsx` |
| Social links | `components/Hero.tsx` |
| Page metadata | `app/layout.tsx` |

### Add your photo
1. Add your photo as `public/avatar.jpg`
2. In `components/Hero.tsx`, replace the `<span>AM</span>` avatar with:
```tsx
import Image from "next/image";
// ...
<Image src="/avatar.jpg" alt="Aamir Mahboob" fill className="object-cover" />
```

### Connect the contact form
In `components/Contact.tsx`, update the `handleSubmit` function to use:
- [EmailJS](https://www.emailjs.com/) (free, no backend needed)
- [Formspree](https://formspree.io/) (simple POST)
- Or create an API route at `app/api/contact/route.ts`

### Change colors
In `app/globals.css`, update the CSS variables:
```css
:root {
  --accent: #00d4ff;   /* Cyan – primary accent */
  --accent2: #7c3aed;  /* Purple – secondary */
  --accent3: #f59e0b;  /* Amber – highlights */
}
```

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npx vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com)

### Netlify
```bash
npm run build
# Upload the .next folder or connect via GitHub
```

---

## 📦 Tech Stack
- **Next.js 14** – App Router
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first styling
- **CSS Variables** – Theming
- **React Hooks** – Scroll tracking, counters, form state
