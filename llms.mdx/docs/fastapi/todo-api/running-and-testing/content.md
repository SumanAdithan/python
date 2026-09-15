# Running & Testing Your API (/en/docs/fastapi/todo-api/running-and-testing)



You have a working endpoint. Time to actually run the server and try it.

## Starting the server [#starting-the-server]

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Breaking this down:

* **`uvicorn`** — the server program you installed back in Project Setup. Remember: your
  FastAPI code doesn't run itself; `uvicorn` is what actually starts a server process.
* **`main:app`** — tells `uvicorn` where to find your application: the module `main` (your
  `main.py`), and the variable `app` inside it (`app = FastAPI()`).
* **`--host 0.0.0.0`** — listen on all network interfaces, not just your own machine.
  `127.0.0.1` (the default) only accepts connections from your own computer; `0.0.0.0` also
  lets other devices on your network reach it — useful for testing from your phone, for
  example.
* **`--port 8000`** — which port to listen on. Your API is now reachable at
  `http://localhost:8000`.
* **`--reload`** — restarts the server automatically whenever you save a code change. Use
  this constantly during development — you'll rarely want to be without it. &#x2A;*Never use it in
  production.**

## Testing it — the interactive docs [#testing-it--the-interactive-docs]

Recall from "What is FastAPI?": every FastAPI app automatically gets interactive API docs.
Now you get to actually use them — open your browser to:

```text
http://localhost:8000/docs
```

You'll see every endpoint you've written listed here — right now, `POST /todos`. Expand it,
click **Try it out**, fill in a sample `title` and `description`, and send a real request —
straight from the browser, no separate tool required. You'll see the actual response your API
sent back, including the `id` your database assigned.

<Callout title="For you, coming from Express/Nest">
  In Express, you'd reach for Postman or `curl` to test an endpoint, since there's nothing
  built in. Nest gets you close with `@nestjs/swagger`, but it takes manual setup — decorators
  on every DTO and route. In FastAPI, this page exists the moment you write your first
  endpoint, generated from the same type hints and schemas you already wrote.
</Callout>
