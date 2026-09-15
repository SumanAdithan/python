# Creating the Todo Schema (/en/docs/fastapi/todo-api/creating-the-todo-schema)



`models.py` describes the `todo` table in your database. Now you need something different: a
way to describe what data looks like when it travels **in and out of your API** over HTTP.
That's what a **schema** is — and it's a separate concept from a model, on purpose.

## Why not just reuse the model? [#why-not-just-reuse-the-model]

It's tempting to think "I already described a `Todo`, why describe it again?" A few real
reasons this doesn't work:

* **Different fields for different situations.** When a client *creates* a todo, they
  shouldn't have to send `id` — the database assigns it, and it doesn't exist yet. But when
  the API *returns* a todo, you want `id` included. One shape can't represent both.
* **Control over what leaves your API.** A database model can end up with fields you never
  want a client to see. A schema is where you decide, explicitly, what actually gets sent
  back.
* **Different tools for different jobs.** `models.py` uses SQLAlchemy's `Base` — it's built
  for talking to the database. Schemas use **Pydantic**'s `BaseModel` — the same validation
  library from the very first FastAPI lesson — and it's what FastAPI actually uses to
  validate requests and generate your API docs.

## schemas.py [#schemaspy]

```python title="schemas.py"
from pydantic import BaseModel

class TodoBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False

# create
class TodoCreate(TodoBase):
    pass

# response
class Todo(TodoBase):
    id: int
    class Config:
        orm_mode = True # for automatic json parsing
```

## Walking through it [#walking-through-it]

**`TodoBase`** holds the fields shared by every shape a todo can take — `title`,
`description`, and `completed`, each written once. Both schemas below build on it. Because
`completed` has a default (`False`), it's optional wherever it's inherited — a client can
leave it out entirely and still get a valid todo.

**`TodoCreate(TodoBase)`** is what a client sends to create a new todo. It doesn't add
anything beyond `TodoBase` — everything a client is allowed to provide (`title`,
`description`, optionally `completed`) is already there. Keeping it as its own class means
you can add creation-only fields later without touching the shape used for reading a todo
back.

**`Todo(TodoBase)`** is what the API sends **back**. It adds `id` — the one field that only
exists once a todo has actually been saved to the database, which is exactly why it's not on
`TodoCreate`.

**`class Config: orm_mode = True`** is the detail that connects this back to your SQLAlchemy
model. By default, a Pydantic schema expects to be built from a plain dict. `orm_mode = True`
tells it "it's also fine to build this from an object with matching attributes" — which is
exactly what a `models.Todo` instance is. It's what lets you return a SQLAlchemy object
straight from a route, and have FastAPI convert it into this schema automatically, field by
field — the "automatic json parsing" in the comment.

<Callout title="Pydantic version note">
  `orm_mode` is the Pydantic v1 name for this setting. Newer Pydantic versions renamed it to
  `from_attributes` (set via `model_config = ConfigDict(from_attributes=True)`), but both do
  exactly the same job — you may see either spelling depending on the Pydantic version a
  project uses.
</Callout>

## Two `Todo`s, on purpose [#two-todos-on-purpose]

Notice `models.py` has a `Todo` class, and now `schemas.py` has one too. That's intentional
and completely safe — they live in separate files, so you refer to them as `models.Todo` and
`schemas.Todo`. It's a common enough pattern that you'll recognize it instantly once you've
seen it:

|            | `models.py` (SQLAlchemy)  | `schemas.py` (Pydantic)            |
| ---------- | ------------------------- | ---------------------------------- |
| Describes  | A database table          | An API request/response shape      |
| Used by    | The ORM, to talk to MySQL | FastAPI, to validate and serialize |
| Base class | `Base`                    | `BaseModel`                        |

<Callout title="For you, coming from Express/Nest">
  This is precisely the separation Nest already pushes you toward: a `CreateTodoDto` (validated
  with `class-validator`) versus a TypeORM `@Entity()` — "what the API accepts/returns" kept
  apart from "what the table looks like." In plain Express, it's the difference between a Zod
  or Joi validation schema and a Sequelize/TypeORM model. A Pydantic schema is FastAPI's version
  of a DTO — same idea, same reason for existing.
</Callout>

## `schemas.py` so far [#schemaspy-so-far]

```python title="schemas.py"
from pydantic import BaseModel

class TodoBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False

# create
class TodoCreate(TodoBase):
    pass

# response
class Todo(TodoBase):
    id: int
    class Config:
        orm_mode = True # for automatic json parsing
```
