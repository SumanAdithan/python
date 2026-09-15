# for, range() & while (/docs/phase-1/loops)



## for loop [#for-loop]

This is one of the biggest syntax changes from JS.

JavaScript:

```js
const users = ['John', 'David'];

for (const user of users) {
  console.log(user);
}
```

Python:

```python
users = ["John", "David"]

for user in users:
    print(user)
```

Much cleaner — no `const`, no `of` keyword.

## range() [#range]

Python commonly uses `range()` for number-based loops.

```python
for i in range(5):
    print(i)
```

```text
0
1
2
3
4
```

**Important:** `range(5)` stops *before* 5 — similar to `for (let i = 0; i < 5; i++)`.

### Start and end [#start-and-end]

```python
for i in range(2, 6):
    print(i)
```

```text
2
3
4
5
```

### Step [#step]

```python
for i in range(0, 10, 2):
    print(i)
```

```text
0
2
4
6
8
```

Think of it as `range(start, stop, step)`.

## while [#while]

JavaScript:

```js
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

Python:

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

Notice: `count++` is **not** valid Python syntax. Use `count += 1` instead.
