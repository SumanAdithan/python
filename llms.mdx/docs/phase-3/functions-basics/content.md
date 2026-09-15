# Defining Functions (/docs/phase-3/functions-basics)



## Defining a function [#defining-a-function]

JavaScript:

```js
function add(a, b) {
  return a + b;
}
```

Python:

```python
def add(a, b):
    return a + b
```

Notice the pattern you already know from earlier phases:

| JS/TS      | Python            |
| ---------- | ----------------- |
| `function` | `def`             |
| `{ }`      | `:` + indentation |
| `;`        | not required      |

## Calling a function [#calling-a-function]

Exactly the same as JS:

```python
result = add(2, 3)
print(result)   # 5
```

## Parameters [#parameters]

`a` and `b` above are **parameters** — the values a function expects when it's called.
Python doesn't require declaring their type (we'll add that with type hints next), it just
uses whatever value gets passed in.

## return [#return]

`return` works exactly like in JS — it sends a value back to the caller and immediately exits
the function.

```python
def is_adult(age):
    if age >= 18:
        return True
    return False

print(is_adult(20))   # True
```

If a Python function has no `return` statement, it returns `None` — the same idea as a JS
function with no `return` returning `undefined`.

```python
def greet(name):
    print(f"Hello {name}")

result = greet("John")
print(result)   # None
```
