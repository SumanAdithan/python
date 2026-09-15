# Update Todo — PUT vs PATCH (/docs/fastapi/todo-api/update-todo)



Updating a resource can mean two different things: replacing it completely, or changing just
one field. HTTP has a separate method for each — `PUT` and `PATCH` — and this lesson covers
both.

## PUT — replace the whole thing [#put--replace-the-whole-thing]

```python
# PUT - Update Todo
@app.put("/todos/{todo_id}", response_model=TodoSchema)
def update_todo(todo_id:int, updated: TodoCreate, db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    for key, value in updated.dict().items():
        setattr(todo, key, value)
    db.commit()
    db.refresh(todo)
    return todo
```

The lookup and not-found handling are exactly what you already saw in Fetch a Single Todo.
What's new:

**`updated: TodoCreate`** — reusing the same schema from creating a todo. That's deliberate:
`TodoCreate` requires `title`, so a client calling this route **must** send a full,
complete todo — that's the definition of `PUT`.

**`for key, value in updated.dict().items(): setattr(todo, key, value)`** — this loops over
every field in the incoming data and uses Python's built-in `setattr(object, name, value)` to
set it on `todo`, one field at a time. It's the same as writing `todo.title = value`,
`todo.description = value`, and `todo.completed = value` individually — just without
repeating yourself for every field.

**`db.commit()` / `db.refresh(todo)` / `return todo`** — save the changes, reload the
instance, and return it, the same pattern as creating a todo.

## PATCH — change only what was sent [#patch--change-only-what-was-sent]

`PUT` above always overwrites every field, because `TodoCreate` requires all of them. `PATCH`
is for the opposite case: a client wants to update **just one field** — say, marking a todo
`completed` — without having to resend the title and description too.

This needs a schema where every field is optional:

```python title="schemas.py (new)"
class TodoUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    completed: bool | None = None
```

And a route that only touches the fields actually provided:

```python title="main.py (new)"
# PATCH - Partially Update Todo
@app.patch("/todos/{todo_id}", response_model=TodoSchema)
def partial_update_todo(todo_id: int, updated: TodoUpdate, db: Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    for key, value in updated.dict(exclude_unset=True).items():
        setattr(todo, key, value)
    db.commit()
    db.refresh(todo)
    return todo
```

The one detail that makes this actually work as a *partial&#x2A; update is
&#x2A;*`exclude_unset=True`**. Without it, `updated.dict()` would include every field on
`TodoUpdate` — and any field the client didn't send would show up as `None`, wiping it out in
the database. `exclude_unset=True` means "only include fields the client actually sent in the
request" — so `{"completed": true}` updates just `completed`, and leaves `title` and
`description` untouched.

<Callout title="This route isn't in your project yet">
  Unlike the earlier lessons, this `TodoUpdate` schema and `partial_update_todo` route are a
  worked example for this topic, not code pulled from your `fastapi-todo` project — add them
  yourself if you want `PATCH` support, then let me know and I'll sync this lesson to your
  actual code, the same as every other topic.
</Callout>

## PUT vs PATCH [#put-vs-patch]

|               | `PUT`                          | `PATCH`                             |
| ------------- | ------------------------------ | ----------------------------------- |
| Meaning       | Replace the entire resource    | Update part of it                   |
| Client sends  | Every field                    | Only the fields changing            |
| Schema needs  | Required fields (`TodoCreate`) | Every field optional (`TodoUpdate`) |
| Omitted field | Overwritten (often cleared)    | Left unchanged                      |

A useful way to remember it: &#x2A;*PUT says "here's the whole new version"; PATCH says "here's
what changed."**

<Callout title="For you, coming from Express/Nest">
  Same distinction Nest already makes with `@Put()` versus `@Patch()` decorators, or Express's
  `router.put()` versus `router.patch()` — the HTTP methods and their meaning don't change.
  What's different is FastAPI leaning on two separate Pydantic schemas (required vs. all
  `Optional`) to enforce the distinction, instead of validating a DTO's completeness by hand.
</Callout>

## `main.py` so far [#mainpy-so-far]

This reflects your actual project — the `PUT` route only. The `PATCH` example above isn't
included here, since it's not part of `fastapi-todo` yet.

```python title="main.py"
from fastapi import FastAPI, Depends, HTTPException
from schemas import Todo as TodoSchema, TodoCreate
from sqlalchemy.orm import Session
from database import SessionLocal, Base, engine
from models import Todo

Base.metadata.create_all(bind = engine)
app = FastAPI()

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# POST - Create TODO
@app.post("/todos", response_model=TodoSchema)
def create(todo: TodoCreate, db:Session = Depends(get_db)):
    db_todo = Todo(**todo.dict())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

# GET - All Todos
@app.get("/todos", response_model = list[TodoSchema])
def read_todos(db:Session = Depends(get_db)):
    return db.query(Todo).all()

@app.get("/todos/{todo_id}", response_model = TodoSchema)
def read_todo(todo_id: int,db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

# PUT - Update Todo
@app.put("/todos/{todo_id}", response_model=TodoSchema)
def update_todo(todo_id:int, updated: TodoCreate, db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    for key, value in updated.dict().items():
        setattr(todo, key, value)
    db.commit()
    db.refresh(todo)
    return todo
```
