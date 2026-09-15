# Operators (/en/docs/phase-1/operators)



## Arithmetic operators [#arithmetic-operators]

```python
a = 10
b = 3

print(a + b)    # 13
print(a - b)    # 7
print(a * b)    # 30
print(a / b)    # 3.3333333333333335
```

Python has two operators JS/TS doesn't have directly:

**Floor division** — divides and rounds down to a whole number:

```python
10 // 3   # 3
```

**Modulus** — the remainder after division:

```python
10 % 3   # 1
```

**Power** — exponent:

```python
2 ** 3   # 8
```

Full list:

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | addition       |
| `-`      | subtraction    |
| `*`      | multiplication |
| `/`      | division       |
| `//`     | floor division |
| `%`      | remainder      |
| `**`     | power          |

## Comparison operators [#comparison-operators]

These should feel familiar:

```python
a == b
a != b
a > b
a < b
a >= b
a <= b
```

**Important:** Python doesn't have a strict-equality operator like `===`. There's only `==`.

## Logical operators [#logical-operators]

JS/TS uses symbols; Python uses words.

| JS/TS  | Python |
| ------ | ------ |
| `&&`   | `and`  |
| `\|\|` | `or`   |
| `!`    | `not`  |

```python
age >= 18 and is_active
is_admin or is_manager
not is_active
```
