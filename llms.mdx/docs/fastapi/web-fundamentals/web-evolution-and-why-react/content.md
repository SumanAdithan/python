# Web 1.0, Web 2.0 & Why React (/docs/fastapi/web-fundamentals/web-evolution-and-why-react)



Websites haven't always worked the way they do today. To understand why tools like React
exist, you need to see the problem they were built to solve.

## Web 1.0 — read-only pages [#web-10--read-only-pages]

The earliest websites (roughly the 1990s) were **static and read-only** — closer to a digital
brochure than an app. A server had a folder of pre-written HTML files, and every visitor got
exactly the same page. There was no login, no comments, no personalization. You looked, you
didn't interact.

## Web 2.0 — the interactive web [#web-20--the-interactive-web]

Starting in the 2000s, the web became **interactive and user-driven**: logins, comments,
likes, posting your own content — think early Facebook, YouTube, blogs with comment sections.
The server now generated a *different* page for every user, built from data stored in a
database.

This is a huge leap forward — but under the hood, most Web 2.0 sites still worked the exact
same way as Web 1.0 for one crucial thing: &#x2A;*every click reloaded the entire page.**

## The full page reload problem [#the-full-page-reload-problem]

Click a link on a traditional website (even a modern-looking one built with plain
HTML/CSS/JS), and this happens:

<Mermaid
  chart="
graph TD
A[You click a link or submit a form] --> B[Browser throws away the entire current page]
B --> C[Browser sends a request for a brand new page]
C --> D[Server builds and sends a full HTML page]
D --> E[Browser reloads everything from scratch: HTML, CSS, JS, images]
E --> F[White flash, then the new page appears]
"
/>

Every single action — clicking a link, submitting a form, even liking a post — could mean
throwing away the whole page and rebuilding it from nothing. That means:

* A visible **white flash** while the old page disappears and the new one loads
* **Everything resets** — scroll position, an open dropdown, a half-filled form, a playing
  video — all gone, because the browser is starting over completely
* Re-downloading and re-running the *same* CSS and JS files you already had, every time

Imagine a chat app where sending one message reloaded the entire page, wiped your scroll
position, and re-downloaded the whole app — just to show one new message. That's not
acceptable for the kind of apps people expect today.

## Why React [#why-react]

React (and similar tools) exist to fix exactly this. The core idea: **load the page once,
then only update the small part that actually changed** — never throw away and rebuild the
whole thing again.

<Mermaid
  chart="
graph TD
A[You click a button] --> B[JavaScript intercepts the click - no reload]
B --> C[JavaScript asks the server for just the data it needs]
C --> D[Server sends back data - not a full HTML page]
D --> E[React updates only the changed part of the page]
"
/>

Notice the key difference from the diagram above: the server isn't sending a full HTML page
anymore — it's sending back **just the data**. That's the piece that matters most for this
course.

## Why this matters for a backend developer [#why-this-matters-for-a-backend-developer]

This shift changes what a backend server's job even is:

|                             | Web 1.0 / 2.0 style  | Modern React-style            |
| --------------------------- | -------------------- | ----------------------------- |
| Server sends back           | A complete HTML page | Just data (usually JSON)      |
| Who builds the page         | The server           | The browser (React), once     |
| What happens on each action | Full page reload     | Only the changed part updates |

**This is exactly why we're learning FastAPI**: FastAPI's job in this stack isn't to generate
HTML pages — it's to answer requests with data. A separate React app (running in the
browser) is responsible for turning that data into an actual page, and updating it without
ever reloading. Backend and frontend become two separate programs that talk to each other
purely through requests and responses of data.

<Callout title="For you, coming from Express/Nest">
  You've almost certainly already done this: an Express route that calls `res.json({ ... })`
  instead of rendering a template with something like EJS or Pug is *already* the "modern"
  approach — server as a pure data API, frontend as a separate React app. FastAPI works on that
  exact same principle, so this mental model isn't new to you at all — only the Python syntax
  around it will be.
</Callout>
