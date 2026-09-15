# Container Hints (/en/docs/phase-7/container-hints)



So far the type hints have described a single value. Containers need one more piece of
information: **what's inside them**.

## list\[...] [#list]

TypeScript:

```ts
let users: string[] = ['John', 'David'];
// or: Array<string>
```

Python:

```python
users: list[str] = ["John", "David"]
```

`list[str]` reads as "a list, of strings" — the type inside the brackets describes every
item in the list.

## dict\[...] [#dict]

TypeScript's closest match is `Record<KeyType, ValueType>`:

```ts
const users: Record<number, string> = {
  1: 'John',
  2: 'David',
};
```

Python:

```python
users: dict[int, str] = {1: "John", 2: "David"}
```

The general shape is `dict[KeyType, ValueType]` — key type first, value type second, in that
order.

```text
list[ItemType]
dict[KeyType, ValueType]
```

Keep this reading habit — it's the same pattern you'll use to build up the nested types on
the next page.
