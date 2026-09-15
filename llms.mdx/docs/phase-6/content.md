# Phase 6 — Exceptions + Modules (/en/docs/phase-6)



Estimated time: **\~1 hour**.

## Goals [#goals]

By the end of this phase you should understand:

* `try` / `except`
* `raise`
* modules — `import`, `from ... import ...`
* how files and modules relate to each other

Each topic is its own page in the sidebar, taught with a JS/TS → Python comparison, followed
by a small example.

## Cheat sheet [#cheat-sheet]

```text
JavaScript / TypeScript                     Python
──────────────────────────────────────────────────────
try {                                       try:
  doSomethingRisky();                           result = 10 / 0
} catch (error) {                           except ZeroDivisionError:
  console.log(error.message);                  print("Cannot divide by zero")
}

throw new Error("Invalid value")            raise ValueError("Invalid value")

// users.js                                 # users.py
export function getUser() { }               def get_user():
                                                 ...

// main.js                                  # main.py
import { getUser } from './users.js';       from users import get_user

import * as fs from 'fs';                   import json
fs.readFileSync(...)                         json.dumps(...)
```
