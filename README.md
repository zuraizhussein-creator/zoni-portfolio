# Zoni Portfolio

Personal portfolio website for **Zuraiz Hussain (Zony)**, built with Next.js, React, Tailwind CSS and Lucide icons. Hosted free on Vercel.

## Run it on your computer

You need [Node.js](https://nodejs.org) (LTS version) installed.

```bash
npm install      # first time only: downloads the building blocks
npm run dev      # starts the site at http://localhost:3000
```

Open **http://localhost:3000** in your browser. Press `Ctrl + C` in the terminal to stop it.

To check that the site is ready to publish:

```bash
npm run build
```

## Edit your content

All text, links, skills and projects live in one file:

**`data/portfolio.js`**

- `profile`: name, headline, bio, labels
- `contact`: **replace the placeholder email and LinkedIn URL here**
- `skills`: skill cards in About Me
- `projects`: project cards in Experience & Projects
- `seo`: the title and description shown in Google and browser tabs

Save the file and the browser updates automatically while `npm run dev` is running.

## Folder structure

```
app/            page layout, global styles, SEO metadata
components/     one file per section (Navbar, Hero, About, Projects, Contact, Footer, Avatar)
data/           portfolio.js: all your editable content
```

## Publish updates

The site is connected to GitHub, and Vercel rebuilds it automatically whenever GitHub changes.

**From the terminal:**

```bash
git add .
git commit -m "Describe what you changed"
git push
```

**Or in the browser:** open the repository on github.com, click a file, click the ✏️ pencil icon, make your edit, then click **Commit changes**.

After about a minute, your live `.vercel.app` site shows the change.
