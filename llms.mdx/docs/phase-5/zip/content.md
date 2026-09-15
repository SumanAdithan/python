# zip (/en/docs/phase-5/zip)



`zip()` pairs up items from two (or more) lists by position, so you can loop over them
together.

```python
names = ["John", "David"]
ages = [25, 30]

for name, age in zip(names, ages):
    print(name, age)
```

```text
John 25
David 30
```

JS/TS has no built-in equivalent — you'd normally loop by index instead:

```js
const names = ['John', 'David'];
const ages = [25, 30];

for (let i = 0; i < names.length; i++) {
  console.log(names[i], ages[i]);
}
```

`zip()` reads more directly ("loop over these two lists together") instead of managing an
index manually.

## Uneven lengths [#uneven-lengths]

If the lists aren't the same length, `zip()` just stops at the **shorter** one — it doesn't
raise an error:

```python
names = ["John", "David", "Sam"]
ages = [25, 30]

list(zip(names, ages))
# [("John", 25), ("David", 30)]  — "Sam" is silently dropped
```
