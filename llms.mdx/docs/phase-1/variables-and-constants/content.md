# Variables & Constants (/en/docs/phase-1/variables-and-constants)



## Variables [#variables]

JavaScript:

```js
const name = 'John';
let age = 25;
```

Python:

```python
name = "John"
age = 25
```

That's it. Python has no `const`, `let`, or `var` — you just assign a value, and Python
figures out the type from the value itself:

```python
name = "John"
age = 25
price = 99.99
active = True
```

Python is **dynamically typed**, so this is technically allowed:

```python
value = 10
value = "hello"
```

## Constants [#constants]

Python doesn't have a real `const` keyword. By convention, an **uppercase name** means
"treat this as a constant":

```python
MAX_USERS = 100
API_VERSION = "v1"
```

It's just a naming convention — nothing stops you from changing it. Python doesn't enforce it
the way `const` does in JS/TS.
