# Delete Todo (/docs/fastapi/todo-api/delete-todo)



The last CRUD operation: removing a todo entirely.

## The route [#the-route]

```python
#DELETE - Delete Todo
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id:int,  db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    db.delete(todo)
    db.commit()
    return {"message":"Todo deleted successfully"}
```

## Walking through it [#walking-through-it]

**`@app.delete("/todos/{todo_id}")`** — the `DELETE` method, same path parameter pattern as
fetching or updating a single todo. Notice there's no `response_model` this time — once a
todo is deleted, there's no `Todo` left to shape a response around.

**Find it, or 404** — the same lookup-then-check pattern from Fetch a Single Todo and Update
Todo: query by id, and raise `HTTPException(404, ...)` if nothing matches. By now you've
written this exact pattern three times — a good sign it could be pulled into a single shared
dependency later, once you're comfortable with how `Depends()` works.

**`db.delete(todo)`** stages the row for removal — the delete equivalent of `db.add()&#x60;.
&#x2A;*`db.commit()`** actually removes it from the database.

**`return {"message":"Todo deleted successfully"}`** — a plain Python dict, not a `Todo`.
Since there's no `response_model` on this route, FastAPI just serializes whatever you return
directly to JSON. Returning a small confirmation message like this is the normal choice for
a delete endpoint — there's nothing meaningful left to hand back.

<Callout title="For you, coming from Express/Nest">
  `db.delete(todo)` + `db.commit()` is the same job as `todo.destroy()` in Sequelize,
  `repository.remove(todo)` in TypeORM, or `prisma.todo.delete()` in Prisma. And returning a
  plain `{"message": "..."}` instead of the deleted resource is exactly what you'd do with
  `res.json({ message: 'Deleted' })` in Express — nothing FastAPI-specific about that choice.
</Callout>

## `main.py` so far [#mainpy-so-far]

Every CRUD operation is now in place: create, read all, read one, update, delete.

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

#DELETE - Delete Todo
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id:int,  db:Session = Depends(get_db)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    db.delete(todo)
    db.commit()
    return {"message":"Todo deleted successfully"}
```
