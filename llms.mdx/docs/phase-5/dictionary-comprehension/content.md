# Dictionary Comprehension (/docs/phase-5/dictionary-comprehension)



Same idea as a list comprehension, but it builds a `dict` — with a `key: value` pair on
each side instead of a single expression.

```python
squares = {
    x: x * x
    for x in range(5)
}

print(squares)   # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

```text
{key: value for item in iterable}
```

JS has no direct equivalent this clean — you'd normally build an array of `[key, value]`
pairs and convert it with `Object.fromEntries()`:

```js
const squares = Object.fromEntries(
  Array.from({ length: 5 }, (_, x) => [x, x * x]),
);
```

This is one of the cases where Python is noticeably more ergonomic than JS/TS. It also
supports the same `if` filter as a list comprehension:

```python
even_squares = {x: x * x for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
