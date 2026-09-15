# *args & **kwargs (/docs/phase-3/args-and-kwargs)



## \*args — any number of positional arguments [#args--any-number-of-positional-arguments]

`*args` collects every extra positional argument into a **tuple**.

```python
def total(*numbers):
    return sum(numbers)

total(1, 2, 3)       # 6
total(1, 2, 3, 4, 5) # 15
```

JS's equivalent is rest parameters:

```js
function total(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

Same idea, different symbol — Python uses `*`, JS uses `...`.

## \*\*kwargs — any number of keyword arguments [#kwargs--any-number-of-keyword-arguments]

`**kwargs` collects every extra `name=value` argument into a **dict**.

```python
def create_user(**details):
    print(details)

create_user(name="John", age=25)
# {"name": "John", "age": 25}
```

The closest JS equivalent is just accepting an object:

```js
function createUser(details) {
  console.log(details);
}

createUser({ name: 'John', age: 25 });
```

The difference: in Python the caller doesn't wrap anything in braces — `**kwargs` gathers up
whatever named arguments were passed directly.

## Naming is just convention [#naming-is-just-convention]

`args` and `kwargs` aren't keywords — only the `*` and `**` matter. You could name them
anything, but `*args`/`**kwargs` is the convention you'll see in almost all Python code.

## Using them together [#using-them-together]

A function can accept regular parameters, `*args`, and `**kwargs` all at once — always in
this order:

```python
def example(a, b, *args, **kwargs):
    print(a, b, args, kwargs)

example(1, 2, 3, 4, x=5, y=6)
# 1 2 (3, 4) {'x': 5, 'y': 6}
```
