# try / except (/docs/phase-6/try-except)



## The basic shape [#the-basic-shape]

JavaScript:

```js
try {
  doSomethingRisky();
} catch (error) {
  console.log('Something went wrong');
}
```

Python:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

`except` is Python's `catch`. The rest reads the same: code that might fail goes in the first
block, recovery logic goes in the second.

**A gotcha coming from JS:** `10 / 0` in JavaScript doesn't throw — it quietly gives you
`Infinity`. In Python, dividing by zero **raises an exception**. Different languages, different
rules for what counts as an error.

## Catch specific errors, not everything [#catch-specific-errors-not-everything]

JS's `catch (error)` catches anything, no questions asked. Python encourages you to name the
**specific exception type** you expect, like `ZeroDivisionError` above. Common built-in ones
you'll run into:

```text
ZeroDivisionError   dividing by zero
ValueError          a value has the right type but a bad value (e.g. int("abc"))
KeyError            a dict key doesn't exist
IndexError           a list index is out of range
TypeError            an operation got the wrong type
```

You can still catch broadly with `except Exception`, and read the message via `str(e)` —
similar to reading `error.message` in JS:

```python
try:
    result = 10 / 0
except Exception as e:
    print(str(e))   # "division by zero"
```

Prefer naming the specific exception when you know what you're guarding against — it's the
idiomatic Python style, and it stops you from accidentally swallowing an unrelated bug.

## finally [#finally]

Just like JS, `finally` always runs, whether or not an exception happened:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Done trying")
```
