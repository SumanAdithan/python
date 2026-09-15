# set (/docs/phase-2/sets)



A `set` stores **unique values only** — duplicates are automatically dropped, and there's no
guaranteed order.

JavaScript:

```js
const numbers = new Set([1, 2, 2, 3]);
```

Python:

```python
numbers = {1, 2, 2, 3}

print(numbers)   # {1, 2, 3}
```

Notice sets use curly braces `{ }`, just like a dict — but with plain values instead of
key-value pairs. (An empty `{}` in Python actually creates a `dict`, not a set — use `set()`
for an empty set.)

## Adding and removing [#adding-and-removing]

```python
numbers = {1, 2, 3}

numbers.add(4)
print(numbers)   # {1, 2, 3, 4}

numbers.remove(2)
print(numbers)   # {1, 3, 4}
```

Same idea as JS's `set.add()` and `set.delete()`.

## Why use a set? [#why-use-a-set]

The most common reason: removing duplicates from a list.

```python
fruits = ["apple", "banana", "apple", "cherry"]

unique_fruits = list(set(fruits))
print(unique_fruits)   # ["apple", "banana", "cherry"] (order not guaranteed)
```

Sets are also very fast for checking whether a value exists — you'll see this combined with
the `in` keyword later in this phase.
