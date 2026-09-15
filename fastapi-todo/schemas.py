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
