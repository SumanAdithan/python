# def, async def & await (/docs/phase-8/async-and-await)



## def vs. async def [#def-vs-async-def]

A normal function runs synchronously, start to finish, exactly like a normal JS function:

```python
def get_user():
    ...
```

Adding `async` before `def` makes it an **asynchronous function** — one that can pause and
resume, without blocking the rest of the program while it waits:

```python
async def get_user():
    ...
```

```js
async function getUser() {
  // ...
}
```

Same keyword, same idea, just placed before `def` instead of before `function`.

## await [#await]

Inside an `async def` function, `await` pauses at that line until whatever you're awaiting
finishes — then resumes with its result. This is the exact same mental model as JS:

```python
async def get_user():
    data = await fetch_data()
    return data
```

```js
async function getUser() {
  const data = await fetchData();
  return data;
}
```

Just like JS, `await` can only be used **inside** an `async def` function — not in a regular
one.

## A real difference from JS: calling an async function [#a-real-difference-from-js-calling-an-async-function]

In JS, calling an async function starts running it immediately, whether or not you `await`
the result. In Python, calling an `async def` function does **not** run it at all — it just
creates a "coroutine" object that sits there, inert, until something actually awaits or
schedules it:

```python
get_user()   # does nothing yet! just creates a coroutine object
```

To actually run one at the top level of a plain script, Python needs an event loop:

```python
import asyncio

result = asyncio.run(get_user())
```

You won't usually write `asyncio.run()` yourself once you're inside a framework — in
FastAPI, you just write your route handlers as `async def`, and FastAPI's own event loop
runs them for you. This "nothing happens until awaited" behavior is the one habit worth
internalizing now, since it's the most common source of confusion moving from JS to Python.
