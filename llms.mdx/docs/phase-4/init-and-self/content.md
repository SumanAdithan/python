# __init__ & self (/en/docs/phase-4/init-and-self)



## **init** — the constructor [#init--the-constructor]

`__init__` is Python's constructor — it runs automatically when you create an object, just
like TypeScript's `constructor`.

TypeScript:

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User('John', 25);
```

Python:

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

user = User("John", 25)
```

## self — Python's this [#self--pythons-this]

`self` refers to the current object, same job as `this&#x60; in TypeScript. The key difference:
**`self` must be written explicitly as the first parameter of every method** — Python never
adds it for you invisibly like JS/TS does with `this`.

```python
def __init__(self, name, age):
    self.name = name   # self.<anything> = an instance variable
    self.age = age
```

## Instance variables [#instance-variables]

`self.name` and `self.age` are **instance variables** — data that belongs to that one
specific object, exactly like `this.name` in a TS class. Each object you create gets its own
copy:

```python
john = User("John", 25)
david = User("David", 30)

print(john.name)    # John
print(david.name)   # David
```
