# Database Connection (/docs/fastapi/getting-started/database-connection)



You have a `DATABASE_URL` sitting in `.env`. Now you need actual code that reads it and
prepares a connection to the database. This lives in its own file, `database.py` — every
other file in the project that needs the database will import from here, rather than
connecting on its own.

## Three pieces SQLAlchemy needs [#three-pieces-sqlalchemy-needs]

Before the code, know what you're building:

* **Engine** — the actual connection to the database. It knows which database you're talking
  to and manages a pool of connections behind the scenes.
* **Session** — think of this as one conversation with the database, used to run queries and
  save changes. You'll create a new one per request, later.
* **Base** — a base class that every database model (table) you define in a future lesson
  will inherit from.

## database.py [#databasepy]

```python title="database.py"
from sqlalchemy import create_engine; # to connect python and database
from sqlalchemy.orm import sessionmaker, declarative_base; # each session lets you talk to the database, declarative_base is base class for your orm models
from dotenv import load_dotenv;
import os;

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False)
Base = declarative_base()
```

## Walking through it [#walking-through-it]

**`load_dotenv()`** reads your `.env` file and makes its values available through
`os.getenv()` — this must run before you try to read anything from it.

**`os.getenv("DATABASE_URL")`** reads the exact connection string you set up in the last
lesson.

**`create_engine(DATABASE_URL)`** hands that connection string to SQLAlchemy. It parses the
`mysql://` part and knows to use the MySQL driver (`mysqlclient`, installed back in Project
Setup) to talk to it. Worth knowing: this line doesn't actually open a connection yet — the
engine connects lazily, the first time it's actually used.

**`sessionmaker(bind=engine, autoflush=False)`** doesn't create a session either — it creates
a *factory*, `SessionLocal`, a function you'll call later (`SessionLocal()`) whenever a piece
of code needs an actual session to run queries with. `bind=engine` ties every session it
creates to the engine above; `autoflush=False` means SQLAlchemy won't automatically send
pending changes to the database before every query — you decide when that happens.

**`declarative_base()`** creates the `Base` class. Every table you define as a Python class in
a future lesson will inherit from this `Base`, which is how SQLAlchemy knows those classes
represent database tables.

## What's next [#whats-next]

This file only *prepares* the connection — nothing in your app uses it yet. In a future
lesson, you'll write a small function that hands out a `SessionLocal()` session to each
request that needs one, and closes it automatically when the request finishes. For now, your
project has everything it needs to actually reach the database.

<Callout title="For you, coming from Express/Nest">
  This is the same role as setting up a TypeORM `DataSource` or a Prisma `PrismaClient` — one
  shared connection object, created once, that the rest of the app imports and reuses instead
  of opening a new database connection per request. `engine` is the connection itself,
  `SessionLocal` is what you'd call to get a usable client/query-runner, and `Base` plays the
  role TypeORM's `@Entity()` base or Prisma's generated model types play for your future
  table classes.
</Callout>

## `database.py` so far [#databasepy-so-far]

```python title="database.py"
from sqlalchemy import create_engine; # to connect python and database
from sqlalchemy.orm import sessionmaker, declarative_base; # each session lets you talk to the database, declarative_base is base class for your orm models
from dotenv import load_dotenv;
import os;

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False)
Base = declarative_base()
```
