# break, continue & pass (/docs/phase-1/loop-control)



## break [#break]

Same concept as JS — stops the loop completely.

```python
for i in range(10):

    if i == 5:
        break

    print(i)
```

```text
0
1
2
3
4
```

## continue [#continue]

Skips the rest of this iteration and moves to the next one.

```python
for i in range(5):

    if i == 2:
        continue

    print(i)
```

```text
0
1
3
4
```

## pass [#pass]

This one is Python-specific — you'll occasionally see it.

```python
def some_function():
    pass
```

It means &#x2A;*"do nothing for now."** It's useful when you need syntactically valid code but
haven't implemented the logic yet:

```python
if condition:
    pass
```
