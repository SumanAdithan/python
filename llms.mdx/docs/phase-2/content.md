# Phase 2 — Collections (/docs/phase-2)



Estimated time: **\~2 hours**.

This is probably the **most important** Python section for backend development. Almost every
API you write will pass data around as lists and dicts.

## Goals [#goals]

By the end of this phase you should be comfortable with:

* `list`
* `tuple`
* `set`
* `dict` (especially this one)
* indexing
* slicing
* `append`, `remove`, `pop`
* `get`, `keys`, `values`, `items`
* `in`

Each topic is its own page in the sidebar, taught with a JS/TS → Python comparison, followed
by a small example.

## Cheat sheet [#cheat-sheet]

```text
JavaScript / TypeScript        Python
──────────────────────────────────────────
Array                          list
Object                         dict
Set                            set
frozen array / tuple-like       tuple

arr.push(x)                    list.append(x)
arr.pop()                      list.pop()
arr.splice(i, 1)                del list[i]
arr.filter(v => v !== x)        list.remove(x)

arr[0]                         list[0]
arr.at(-1)                      list[-1]
arr.slice(1, 3)                  list[1:3]

Object.keys(obj)                dict.keys()
Object.values(obj)               dict.values()
Object.entries(obj)              dict.items()
obj.x ?? obj["x"]                 dict.get("x")

'x' in obj                       'x' in dict
arr.includes(x)                   x in list
```
