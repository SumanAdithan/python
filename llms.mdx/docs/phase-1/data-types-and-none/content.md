# Data Types & None (/docs/phase-1/data-types-and-none)



## Basic data types [#basic-data-types]

You'll need these four every day.

```python
name = "John"       # str
age = 25             # int
price = 99.50        # float
is_active = True     # bool
is_admin = False      # bool
```

Notice the capitalization difference from JS/TS:

| Python  | JavaScript |
| ------- | ---------- |
| `True`  | `true`     |
| `False` | `false`    |
| `None`  | `null`     |

## None [#none]

Python's equivalent of `null` is `None`:

```python
user = None
```

You'll see this constantly in backend code (for example FastAPI). To check it:

```python
if user is None:
    print("User not found")
```

For now, just remember: &#x2A;*`None` means "no value"**. We'll cover `is` properly later.

## Checking a type [#checking-a-type]

Python has a built-in `type()` function:

```python
name = "John"
age = 25

print(type(name))   # <class 'str'>
print(type(age))    # <class 'int'>
```

You can also check a type with `isinstance()`:

```python
isinstance(age, int)   # True
```
