# Phase 4 — Python OOP (/en/docs/phase-4)



Estimated time: **\~1.5 hours**.

Don't go deep here — just enough OOP to read and write simple classes. Your TypeScript
knowledge makes this easy, since Python classes work almost exactly the same way.

## Goals [#goals]

By the end of this phase you should understand:

* `class`
* object
* `__init__`
* `self`
* instance variables
* methods
* inheritance
* `super()`

Each topic is its own page in the sidebar, taught with a TypeScript → Python comparison,
followed by a small example.

## Cheat sheet [#cheat-sheet]

```text
TypeScript                             Python
──────────────────────────────────────────────────
class User {                           class User:
  name: string;

  constructor(name: string) {              def __init__(self, name):
    this.name = name;                          self.name = name
  }

  greet(): string {                        def greet(self):
    return `Hello ${this.name}`;              return f"Hello {self.name}"
  }
}

new User("John")                       User("John")

this.name                              self.name

class Dog extends Animal {             class Dog(Animal):
  constructor(name: string) {              def __init__(self, name):
    super(name);                               super().__init__(name)
  }
}
```
