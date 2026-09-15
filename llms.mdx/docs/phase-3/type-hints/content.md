# Type Hints (/en/docs/phase-3/type-hints)



Once a function works, you can annotate it with **type hints** — they describe what type
each parameter and the return value should be.

```python
def add(a: int, b: int) -> int:
    return a + b
```

* `a: int` and `b: int` — each parameter's expected type
* `-> int` — the return type

This should look very familiar coming from TypeScript:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Important difference from TypeScript [#important-difference-from-typescript]

TypeScript's types are checked **at compile time** — the compiler will refuse to build code
that violates them. Python's type hints are **not enforced at all** by the language itself.
They're purely documentation for humans and tools:

```python
def add(a: int, b: int) -> int:
    return a + b

add("2", "3")   # runs fine and returns "23" — Python doesn't check the hints
```

Nothing crashes here — Python just runs the code as written. The hints only matter to tools
that choose to read them.

## Why they matter for FastAPI [#why-they-matter-for-fastapi]

This is the big one: **FastAPI reads your type hints at runtime** and uses them to validate
incoming requests, convert data automatically, and generate interactive API docs — without
you writing any extra validation code. So while plain Python ignores type hints, the
frameworks you're heading toward absolutely do not.

## Common types you'll use [#common-types-youll-use]

```python
def example(
    name: str,
    age: int,
    price: float,
    is_active: bool,
    tags: list,
    metadata: dict,
) -> None:
    pass
```

## Optional values [#optional-values]

If a value might be `None`, mark it explicitly:

```python
def greet(name: str | None = None):
    if name is None:
        print("Hello stranger")
    else:
        print(f"Hello {name}")
```

`str | None` reads as "a string, or `None`" — the same idea as TypeScript's
`string | null`.
