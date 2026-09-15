# Optional & Nested Types (/docs/phase-7/optional-and-nested)



## Optional — a value that might be None [#optional--a-value-that-might-be-none]

You saw this briefly in Phase 3. `| None` marks a value as optional:

```python
name: str | None = None
```

TypeScript:

```ts
let name: string | null = null;
```

Read `str | None` as "a string, or `None`" — same union-type idea as TypeScript's
`string | null`, just with Python's own "no value" (Phase 1) instead of `null`.

This shows up constantly on function parameters that have a sensible default of "nothing
provided":

```python
def get_user(user_id: int, name: str | None = None) -> dict:
    ...
```

## Nested types [#nested-types]

Container hints can be combined — a list of dicts, a dict of lists, and so on. Read them
**inside-out**: figure out the innermost type first, then wrap outward.

```python
users: list[dict[str, str]]
```

Reading inside-out:

1. `dict[str, str]` — a dict where both the keys and values are strings
2. `list[...]` — a list of those dicts

So the whole thing means: &#x2A;*"a list, where each item is a dict of string to string."**

TypeScript:

```ts
let users: Array<Record<string, string>>;
```

You'll see this exact shape constantly — a list of dicts is how most APIs represent "many
records", each record being one dict (Phase 2's nested-data example, now with hints on it).

## That's enough for now [#thats-enough-for-now]

`str | None`, `list[...]`, and `dict[...]` cover the vast majority of type hints you'll write
day to day. Things like generics, `Protocol`, or `Callable` types are worth learning later,
once you actually hit a case that needs them — not before.
