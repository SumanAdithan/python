# Putting It Together — How Does YouTube Work? (/en/docs/fastapi/web-fundamentals/how-youtube-works)



You now know the pieces: client, backend, database. This lesson puts them together through a
real example everyone already understands — **YouTube** — and along the way, uncovers one
more piece you haven't met yet.

## Two very different kinds of data [#two-very-different-kinds-of-data]

Think about everything YouTube needs to keep track of for a single video:

* Its **title**, **description**, **upload date**, **view count**, **like count**
* Its **comments**, and who posted each one
* The **actual video file** itself — and its thumbnail image

The first two are exactly what you just learned: rows in database tables. A `videos` table
with a `title` column and a `view_count` column fits perfectly.

But that video file? A single video can be hundreds of megabytes, even gigabytes. That raises
a real question:

**Can't we just save the video file in the database too, in some column?**

## Why databases aren't built for this [#why-databases-arent-built-for-this]

Technically, some databases can store large binary blobs — but doing this at YouTube's scale
would be a bad idea:

* Databases are built to be searched, filtered, and sorted quickly across *many small rows* —
  not to hold enormous files that nobody "searches" the *contents* of
* A database that also held every raw video file would become massive, making backups,
  replication, and queries all dramatically slower
* Databases aren't designed to **stream** a large file out to millions of viewers at once —
  that's a completely different kind of workload

So real applications split the two apart:

<Mermaid
  chart="
graph TD
A[Everything about a video] --> B[Structured data:<br/>title, description,<br/>views, comments]
A --> C[The actual files:<br/>video, thumbnail]
B --> D[(Database)]
C --> E[Storage Server]
"
/>

## Meet the storage server [#meet-the-storage-server]

A **storage server** (often called *object storage* — think AWS S3 or Google Cloud Storage)
is a service whose only job is storing and serving large files efficiently. The database
never holds the video itself — it only holds a **reference** to where that file lives on the
storage server (a URL or file path).

Large platforms also place a **CDN** (Content Delivery Network) in front of their storage —
copies of popular videos get cached on servers physically close to viewers all over the
world, so someone in India isn't fetching every byte from a server on the other side of the
planet. You don't need to build one of these yourself; it's a service you connect to, the
same way you'd connect to a database.

## The full picture [#the-full-picture]

<Mermaid
  chart="
graph LR
A[Client<br/>browser or app] -- requests --> B[Backend]
B -- structured data --> C[(Database)]
B -- file references --> D[Storage Server + CDN]
D -. video/image bytes .-> A
"
/>

## Walking through: uploading a video [#walking-through-uploading-a-video]

1. You select a video file and hit upload in the client.
2. The client sends the file to the **backend**.
3. The backend sends the actual video file to the **storage server** to be saved.
4. The storage server gives back a reference — where that file now lives.
5. The backend saves the **metadata** (title, description, your user id, and that file
   reference) as a new row in the **database**.

## Walking through: watching a video [#walking-through-watching-a-video]

1. You open a video page in the client.
2. The client asks the **backend** for that video's info.
3. The backend reads the row from the **database** — title, description, view count, and the
   stored file reference.
4. The backend sends that data back to the client, including where the actual video file
   lives.
5. The client's video player fetches the video bytes **directly from the storage server /
   CDN** — not routed back through the backend — so playback is fast and doesn't load down
   your API server.

## Why this matters going forward [#why-this-matters-going-forward]

This same split shows up in almost every real app you'll build: a database for structured,
searchable data, and a storage service for the files themselves (profile pictures, PDFs,
audio, video). In this course, you'll build the backend and database side yourself with
FastAPI; storage servers and CDNs are usually a cloud service you connect to, not something
you build from scratch.

With client, backend, database, and storage all in place, you now have the complete mental
map of how a real application is built — everything from here on is about learning the tools
to build the backend piece of it, properly.

<Callout title="For you, coming from Express/Nest">
  Same architecture you already know — an Express/Nest API talking to Postgres/MongoDB for
  structured data, and to S3 (or similar) for files, usually via a pre-signed upload URL or a
  multipart upload endpoint. FastAPI will follow the identical pattern; you're not learning a
  new architecture here, just new syntax for a shape you've already built before.
</Callout>
