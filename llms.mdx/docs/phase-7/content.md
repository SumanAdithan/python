# Phase 7 — Type Hints (/en/docs/phase-7)



Estimated time: **\~1 hour**. ⭐⭐⭐

Spend real time here — from tomorrow onward you'll see type hints on almost every function
and data model you touch, especially with FastAPI.

Phase 3 already introduced type hints on function parameters and return values. This phase
goes wider: annotating plain variables, and describing the **shape** of containers like
lists and dicts — not just "it's a list", but "a list of what".

## Goals [#goals]

By the end of this phase you should be comfortable reading and writing:

```python
name: str
age: int
price: float
active: bool
```

```python
def get_user(user_id: int) -> dict:
    ...
```

```python
users: list[str]
```

```python
users: dict[int, str]
```

```python
name: str | None = None
```

```python
users: list[dict[str, str]]
```

Don't worry about anything more advanced than this yet — generics, `Protocol`, `Callable`,
and so on can wait until you actually need them.

## Cheat sheet [#cheat-sheet]

```text
TypeScript                                   Python
──────────────────────────────────────────────────────────
let name: string                             name: str
let age: number                              age: int
let price: number                            price: float
let active: boolean                          active: bool

function getUser(id: number): object         def get_user(user_id: int) -> dict:

string[]  /  Array<string>                    list[str]
Record<number, string>                        dict[int, str]

string | null                                 str | None

Array<Record<string, string>>                 list[dict[str, str]]
```
