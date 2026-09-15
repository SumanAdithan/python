# Syntax & Indentation (/docs/phase-1/syntax-and-indentation)



This is probably the first thing you need to get used to, coming from JS/TS.

In JavaScript, `{ }` marks a block:

```js
if (age >= 18) {
  console.log('Adult');
}
```

In Python, a `:` starts a block, and **indentation** defines what belongs inside it. There
are no curly braces.

```python
if age >= 18:
    print("Adult")
```

Multiple lines can belong to the same block:

```python
if age >= 18:
    print("Adult")
    print("Can vote")

print("Done")
```

Here's how that breaks down:

```text
if block
├── print("Adult")
└── print("Can vote")

outside block
└── print("Done")
```

Python usually uses **4 spaces** for indentation.

### Wrong vs. right [#wrong-vs-right]

```python
# ❌ Wrong — missing indentation
if age >= 18:
print("Adult")
```

```python
# ❌ Also wrong — inconsistent indentation
if age >= 18:
    print("Adult")
        print("Can vote")
```

```python
# ✅ Correct
if age >= 18:
    print("Adult")
    print("Can vote")
```

### Quick comparison [#quick-comparison]

| JS/TS                  | Python       |
| ---------------------- | ------------ |
| `{ }`                  | indentation  |
| `( )` around condition | not required |
| `;`                    | not required |
