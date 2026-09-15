# class & object (/en/docs/phase-4/classes-and-objects)



## class [#class]

A class is a blueprint for creating objects. The keyword is the same word you already know:

TypeScript:

```ts
class User {
}
```

Python:

```python
class User:
    pass
```

Same pattern as functions: `:` + indentation instead of `{ }`. `pass` just means "empty body
for now" (you saw this back in Phase 1).

## object [#object]

An **object** (Python calls it an **instance**) is a real value created from a class.

TypeScript:

```ts
const user = new User();
```

Python:

```python
user = User()
```

The one thing to unlearn: **Python has no `new` keyword**. Calling the class name like a
function creates the object.
