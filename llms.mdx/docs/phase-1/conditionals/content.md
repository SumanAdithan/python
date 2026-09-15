# if / elif / else (/docs/phase-1/conditionals)



## if [#if]

JavaScript:

```js
if (age >= 18) {
  console.log('Adult');
}
```

Python:

```python
if age >= 18:
    print("Adult")
```

Notice:

| JS/TS                  | Python       |
| ---------------------- | ------------ |
| `{ }`                  | indentation  |
| `( )` around condition | not required |
| `;`                    | not required |

## elif [#elif]

JavaScript's `else if` becomes Python's `elif`.

```js
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teen');
} else {
  console.log('Child');
}
```

```python
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")
```

## Nested conditions [#nested-conditions]

You'll see this kind of logic a lot in backend code.

```python
age = 25
is_active = True

if age >= 18:
    if is_active:
        print("Active adult user")
```
