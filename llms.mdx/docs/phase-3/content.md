# Phase 3 — Functions (/docs/phase-3)



Estimated time: **\~1 hour**.

## Goals [#goals]

By the end of this phase you should be comfortable with:

* parameters
* `return`
* default parameters
* keyword arguments
* type hints
* `*args`
* `**kwargs` basics

Type hints are especially important here — **FastAPI reads them** to validate requests and
generate docs automatically, so getting comfortable with them now pays off later.

Each topic is its own page in the sidebar, taught with a JS/TS → Python comparison, followed
by a small example.

## Cheat sheet [#cheat-sheet]

```text
JavaScript / TypeScript                       Python
────────────────────────────────────────────────────────────
function add(a, b) {                          def add(a, b):
  return a + b;                                   return a + b
}

function add(a = 1) { }                        def add(a=1):

function add(...rest) { }                      def add(*args):

function add({ ...obj }) { }                   def add(**kwargs):

function add(a: number, b: number): number {   def add(a: int, b: int) -> int:
  return a + b;                                    return a + b
}
```
