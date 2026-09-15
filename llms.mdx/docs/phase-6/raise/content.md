# raise (/en/docs/phase-6/raise)



`raise` is Python's `throw` — it stops the current code and hands control to the nearest
matching `except`.

JavaScript:

```js
throw new Error('Invalid value');
```

Python:

```python
raise ValueError("Invalid value")
```

## Built-in exception types instead of one generic Error [#built-in-exception-types-instead-of-one-generic-error]

JS mostly gives you one `Error` class and you distinguish errors by their message or a custom
subclass. Python instead has several **built-in exception types** for common situations, and
you pick the one that matches:

```python
raise ValueError("age must be positive")
raise TypeError("expected a string")
raise KeyError("user_id")
```

This is exactly why the previous page taught you to catch specific exception types — they're
the same names on both sides of `raise` and `except`.

## Catching what you raised [#catching-what-you-raised]

```python
def set_age(age):
    if age < 0:
        raise ValueError("age must be positive")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)   # age must be positive
```

Same pattern as JS:

```js
function setAge(age) {
  if (age < 0) {
    throw new Error('age must be positive');
  }
  return age;
}

try {
  setAge(-5);
} catch (error) {
  console.log(error.message); // age must be positive
}
```
