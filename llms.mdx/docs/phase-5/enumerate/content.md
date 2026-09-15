# enumerate (/docs/phase-5/enumerate)



`enumerate()` wraps an iterable so each loop turn gives you both the **index** and the
**value**.

```python
users = ["John", "David"]

for index, user in enumerate(users):
    print(index, user)
```

```text
0 John
1 David
```

JS has a couple of ways to get the same result:

```js
const users = ['John', 'David'];

users.forEach((user, index) => {
  console.log(index, user);
});

// or, if you need a real `for` loop:
for (const [index, user] of users.entries()) {
  console.log(index, user);
}
```

`arr.entries()` is the closest match — it also gives you `[index, value]` pairs, same shape
as Python's `enumerate()`.

## Starting from a different number [#starting-from-a-different-number]

Pass `start` if you don't want to begin counting at `0`:

```python
for index, user in enumerate(users, start=1):
    print(index, user)
```

```text
1 John
2 David
```
