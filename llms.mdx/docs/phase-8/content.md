# Phase 8 — async / await (/docs/phase-8)



Estimated time: **\~45 minutes**. ⭐⭐⭐ — the last thing for today.

You already know this concept from JS — Python's version uses almost identical keywords.

## Goals [#goals]

```python
async def get_user():
    data = await fetch_data()
    return data
```

Understand:

* `def` — a normal function
* `async def` — an asynchronous function
* `await` — wait for an async operation to finish

That's genuinely enough for tomorrow — one more page on this, and you're done for today.

## Cheat sheet [#cheat-sheet]

```text
JavaScript / TypeScript                    Python
───────────────────────────────────────────────────────
function getUser() { }                     def get_user():

async function getUser() {                 async def get_user():
  const data = await fetchData();              data = await fetch_data()
  return data;                                 return data
}

await getUser()                             await get_user()   (only inside an async def)
```
