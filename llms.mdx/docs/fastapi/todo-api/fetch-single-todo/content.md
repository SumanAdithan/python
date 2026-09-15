# Fetch a Single Todo (/docs/fastapi/todo-api/fetch-single-todo)



Fetching every todo is useful, but you also need to fetch **one specific** todo — by its id.
This introduces two new ideas: reading a value straight out of the URL, and telling the
client clearly when something doesn't exist.

## The route [#the-route]

```python
@app.get("/todos/{todo_id}", response_model = TodoSchema)
def read_todo(todo_id: int,db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo
```

## Path parameters [#path-parameters]

**`@app.get("/todos/{todo_id}", ...)`** — the `{todo_id}` inside the path is a **path
parameter**: a placeholder that matches whatever value actually appears there. Visit
`/todos/5`, and `todo_id` becomes `5`.

**`def read_todo(todo_id: int, ...)`** — the parameter name has to match the `{todo_id}` in
the path exactly. FastAPI reads the value straight from the URL and converts it to whatever
type you annotate — `int` here — validating it along the way. Visit `/todos/abc`, and
FastAPI rejects the request automatically, before your function even runs, because `"abc"`
isn't a valid `int`.

## Filtering a query [#filtering-a-query]

Fetch All Todos used `.all()` — every row, no filtering. This route needs exactly one:

```python
todo = db.query(Todo).filter(Todo.id == todo_id).first()
```

**`.filter(Todo.id == todo_id)`** narrows the query down to rows where the `id&#x60; column
matches. &#x2A;*`.first()`** runs the query and returns just the first matching row — or `None` if
nothing matched, instead of raising an error the way you might expect.

## Handling "not found" [#handling-not-found]

```python
if not todo:
    raise HTTPException(status_code=404, detail="Todo not found")
```

Since `.first()` returns `None` for no match, and `None` is falsy, `if not todo:` reads as
"if nothing was found." `HTTPException` is FastAPI's way of turning a `raise` (Phase 6 of
Python Notes) into an actual HTTP error response: raising it here stops the function and
sends the client a real `404` status code, with `{"detail": "Todo not found"}` as the body —
instead of your API returning something confusing, or crashing.

<Callout title="For you, coming from Express/Nest">
  A FastAPI path parameter is the same idea as Express's `req.params.id` or Nest's
  `@Param('id') id: number` — except FastAPI also converts and validates the type for you
  automatically, the way Nest's pipes do. Raising `HTTPException(status_code=404, ...)` is
  exactly `throw new HttpException(...)` in Nest, or `res.status(404).json({...})` written by
  hand in Express — a clean way to end a request early with a specific error response.
</Callout>

## `main.py` so far [#mainpy-so-far]

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
```
