# append, remove & pop (/docs/phase-2/list-methods)



## append — add to the end [#append--add-to-the-end]

JavaScript:

```js
const fruits = ['apple', 'banana'];
fruits.push('cherry');
```

Python:

```python
fruits = ["apple", "banana"]
fruits.append("cherry")

print(fruits)   # ["apple", "banana", "cherry"]
```

`append()` is Python's `push()` — it always adds to the **end** of the list.

## remove — delete by value [#remove--delete-by-value]

Python's `remove()` deletes the **first matching value**, not an index.

```python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")

print(fruits)   # ["apple", "cherry"]
```

JS doesn't have a direct "remove by value" method — you'd normally write
`arr.filter(f => f !== 'banana')` to get a new array without it.

**Note:** if the value doesn't exist, `remove()` raises an error, so make sure it's actually
in the list first (more on checking that with `in` later in this phase).

## pop — remove and return [#pop--remove-and-return]

`pop()` removes an item and gives it back to you.

```python
fruits = ["apple", "banana", "cherry"]

last = fruits.pop()
print(last)      # "cherry"
print(fruits)    # ["apple", "banana"]
```

Just like JS's `arr.pop()`. But Python's `pop()` also accepts an **index**, which JS's
`pop()` doesn't support directly:

```python
fruits = ["apple", "banana", "cherry"]

first = fruits.pop(0)
print(first)     # "apple"
print(fruits)    # ["banana", "cherry"]
```
