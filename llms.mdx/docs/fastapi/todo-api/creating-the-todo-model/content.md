# Creating the Todo Model (/docs/fastapi/todo-api/creating-the-todo-model)



`database.py` gave you a `Base` class, but nothing inherits from it yet — there's no table
described anywhere. This lesson creates the first one: a `Todo` model, for the app this
course is building.

## What a model actually is [#what-a-model-actually-is]

In an ORM, a **model** is a Python class that represents one database table. Each class
**attribute** represents one **column** in that table. You'll create actual rows later by
creating instances of this class — but the class itself just describes the *shape* of the
table.

## models.py [#modelspy]

```python title="models.py"
from sqlalchemy import Column, Integer, String, Boolean;
from database import Base;

class Todo(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(String(500))
    completed = Column(Boolean, default=False)
```

## Walking through it [#walking-through-it]

**`class Todo(Base):`** — inheriting from `Base` (from `database.py`) is what tells
SQLAlchemy "this class describes a database table," not just a normal Python class.

**`__tablename__ = "todo"`** — the actual table name SQLAlchemy will use in the database.

**Each `Column(...)`** describes one field:

* `id = Column(Integer, primary_key=True, index=True)` — a whole number that uniquely
  identifies each row. `primary_key=True` means the database guarantees it's unique, and
  will fill it in automatically (1, 2, 3, ...) — you never set it yourself.
* `title = Column(String(200), nullable=False)` — text, capped at 200 characters, and
  `nullable=False` means every todo **must** have a title — the database will reject a row
  without one.
* `description = Column(String(500))` — also text, capped at 500 characters, but optional:
  since `nullable` isn't set, it defaults to `True`, so a todo can exist without a
  description.
* `completed = Column(Boolean, default=False)` — true/false, and every new todo starts as
  `False` unless you say otherwise.

<Callout title="Why String needs a length here">
  MySQL's `VARCHAR` type **requires** an explicit maximum length — unlike some other databases,
  it simply won't let you create a text column without one. Leave the length off, and you
  won't notice anything wrong until the moment SQLAlchemy actually tries to create this table,
  when it'll fail with `VARCHAR requires a length on dialect mysql`. Pick whatever limit makes
  sense for the field — there's nothing special about 200 or 500 here, just reasonable caps for
  a title and a description.
</Callout>

## What this doesn't do yet [#what-this-doesnt-do-yet]

Writing this class doesn't create the `todo` table in your actual MySQL database — it just
*describes* it. Telling SQLAlchemy to actually create the table is a separate step, coming up
next.

<Callout title="For you, coming from Express/Nest">
  This is the same job as a TypeORM `@Entity()` class with `@Column()` decorators, or a Mongoose
  schema — a class that describes a table's shape, which the ORM later uses to generate SQL.
  `primary_key=True` is the same idea as TypeORM's `@PrimaryGeneratedColumn()`, and
  `nullable=False` matches marking a column `NOT NULL` (or a required field in a Mongoose
  schema).
</Callout>

## `models.py` so far [#modelspy-so-far]

```python title="models.py"
from sqlalchemy import Column, Integer, String, Boolean;
from database import Base;

class Todo(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(String(500))
    completed = Column(Boolean, default=False)
```
