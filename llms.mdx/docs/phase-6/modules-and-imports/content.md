# Modules & Imports (/docs/phase-6/modules-and-imports)



## Every file is a module [#every-file-is-a-module]

In JS/TS, a file only shares something if you explicitly `export` it:

```js
// users.js
export function getUser() {
  // ...
}
```

```js
// main.js
import { getUser } from './users.js';
```

In Python, **every `.py` file is automatically a module** — anything defined at the top
level (functions, classes, variables) can be imported by another file, with no `export`
keyword at all:

```python
# users.py
def get_user():
    ...
```

```python
# main.py
from users import get_user
```

The module's name is just the filename without `.py` — `users.py` becomes the module
`users`.

## Two ways to import [#two-ways-to-import]

**Import a specific name** — use it directly, no prefix:

```python
from users import get_user

get_user()
```

**Import the whole module** — access everything through its name:

```python
import json

json.dumps({"name": "John"})
```

This second style maps to JS's namespace import:

```js
import * as fs from 'fs';

fs.readFileSync('file.txt');
```

`json` here is one of Python's **built-in modules** — it ships with Python itself, no install
needed (similar to Node's built-in `fs` or `path`).

## "Private" by convention, not enforcement [#private-by-convention-not-enforcement]

A name starting with an underscore (`_helper`) is a signal that it's internal and not meant
to be imported elsewhere — but like the `MAX_USERS` constant convention from Phase 1, Python
doesn't actually stop you from importing it. It's a convention other developers rely on, not
a hard rule.
