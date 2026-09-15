# What is a Database? (/docs/fastapi/web-fundamentals/what-is-a-database)



The last lesson established that the backend is a trusted boundary — the client never
touches secrets, source code, or raw data directly. But the backend needs somewhere to
actually **keep** that data. That's what a database is for.

## Why not just store data in a variable? [#why-not-just-store-data-in-a-variable]

You could imagine a backend that keeps everything in a plain Python list, like the `users`
list from your Final Practice exercise back in the Python Notes. That works while the program
is running — but it has a fatal flaw: &#x2A;*the moment the server restarts, everything is gone.**
A crash, a deploy, a simple reboot — all of it wipes the list clean.

A real application needs data to:

* **Survive** restarts and crashes
* Be **searched and filtered** quickly, even with millions of records
* Be **shared safely** across many requests happening at the same time

That's a job for a dedicated piece of software — a **database**.

## What a database actually is [#what-a-database-actually-is]

A database is a separate program (often running as its own server) whose entire purpose is
storing data reliably and retrieving it fast. Think of it as a very well-organized set of
spreadsheets:

* A **table** is one spreadsheet — for example, a `users` table, or a `videos` table
* A **row** is one record in that spreadsheet — one specific user, one specific video
* A **column** defines one piece of information every row has — `id`, `name`, `email`

```text
users table
┌────┬─────────┬───────────────────┐
│ id │ name    │ email             │
├────┼─────────┼───────────────────┤
│ 1  │ John    │ john@example.com  │
│ 2  │ David   │ david@example.com │
└────┴─────────┴───────────────────┘
```

This should look familiar — it's the same shape as the list-of-dicts you already worked with
in Python Notes' Phase 2 and Final Practice. A database table is essentially that same idea,
made permanent and searchable at scale.

## Only the backend talks to the database [#only-the-backend-talks-to-the-database]

<Mermaid
  chart="
graph LR
A[Client] -- request to a URL --> B[Backend]
B -- reads / writes data --> C[(Database)]
B -- only the resulting data --> A
"
/>

The client never connects to the database directly — it never even knows the database
exists. It only ever talks to the backend, and the backend decides what to read, what to
write, and what to send back. This is the same trusted-boundary idea from the last lesson,
just with a concrete example of what's actually being hidden.

## The kind of database you'll use in this course [#the-kind-of-database-youll-use-in-this-course]

There are different families of databases, but the most common kind — and the one this course
uses with FastAPI — is a **relational database** (like PostgreSQL or MySQL): data organized
into clearly defined tables with columns, similar to the `users` table above. You'll get
hands-on with this properly in a later lesson — for now, just hold onto the mental picture:
&#x2A;*tables, rows, and columns, living inside a server only the backend can reach.**

<Callout title="For you, coming from Express/Nest">
  Exactly the same relationship as `pg`, Prisma, or TypeORM talking to a Postgres/MySQL
  database from an Express/Nest server — the client still only ever calls your API, never the
  database itself. FastAPI will use its own tools for this (you'll meet them soon), but the
  architecture is identical to what you already do.
</Callout>
