# Printing & String Interpolation (/en/docs/phase-1/printing-and-strings)



## Printing [#printing]

JavaScript:

```js
console.log('Hello');
```

Python:

```python
print("Hello")
```

You can print multiple values at once, separated by commas:

```python
name = "John"
age = 25

print(name, age)
```

## String interpolation [#string-interpolation]

You'll use this constantly.

JavaScript:

```js
const name = 'John';
console.log(`Hello ${name}`);
```

Python:

```python
name = "John"

print(f"Hello {name}")
```

The `f` before the quotes means **formatted string** (an "f-string"). You can put more than
one value inside it:

```python
name = "John"
age = 25

print(f"{name} is {age} years old")
```

Think of it this way:

| JS/TS                         | Python            |
| ----------------------------- | ----------------- |
| Template literal `` `${x}` `` | f-string `f"{x}"` |
