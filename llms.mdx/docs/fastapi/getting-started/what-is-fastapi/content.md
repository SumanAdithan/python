# What is FastAPI? (/docs/fastapi/getting-started/what-is-fastapi)



You now understand *why* a backend exists. From here on, you'll learn to build one — using
**FastAPI**, a Python framework built specifically for writing APIs.

## A micro framework [#a-micro-framework]

FastAPI is a **micro framework** — it gives you a small, focused core (routing, request
handling) rather than a huge all-in-one system with a rigid structure. You choose your own
project layout and add only the pieces you actually need. This also makes it **flexible**:
there's no single "correct" way FastAPI forces your code into.

## Validation and docs, built in [#validation-and-docs-built-in]

FastAPI is built on top of two other libraries, and it's worth knowing their names because
you'll see them constantly:

* **Starlette** — handles the actual web layer underneath FastAPI: receiving requests,
  routing them to the right function, sending responses
* **Pydantic** — handles data validation, using the type hints you learned in Phase 7 of
  Python Notes

That second point is the big one. Write a type hint on your endpoint's data, like `age: int`,
and FastAPI automatically:

1. **Validates** incoming data against it — a request sending `age: "abc"` gets rejected
   automatically, before your code even runs
2. **Generates interactive documentation** for it — a page where anyone can see every
   endpoint, what data it expects, and try it out live, with zero extra code from you

That second point is genuinely one of FastAPI's best features: the moment you define an
endpoint with type hints, you get a working documentation page for free.

## Fast — genuinely fast [#fast--genuinely-fast]

"FastAPI" isn't just a name. Because it's built on **Starlette**, which supports Python's
`async`/`await` (Phase 8 of Python Notes), FastAPI can handle a very high volume of requests
efficiently. In real benchmarks, it performs competitively with — and sometimes faster than —
Node.js and Go, which is unusual for a Python framework.

## Less code, more power [#less-code-more-power]

Because type hints drive both validation and documentation automatically, you end up writing
far less repetitive code than frameworks that require separate, hand-written validation
schemas. The type hints you'd write anyway, just to describe your data, *are* the validation
rules.

## Great for ML and data apps [#great-for-ml-and-data-apps]

Python is the dominant language for machine learning and data science (NumPy, Pandas,
PyTorch, and so on). Because FastAPI is Python, it's a natural way to take a trained ML model
or a data pipeline and expose it as an API — no cross-language bridge required.

## Built on the OpenAPI standard [#built-on-the-openapi-standard]

FastAPI automatically generates an **OpenAPI** specification for your entire API — an
industry-standard, machine-readable description of every endpoint. This is what powers the
interactive **Swagger UI** docs mentioned above, available out of the box at `/docs` on any
FastAPI app you build, with no setup.

<Callout title="For you, coming from Express/Nest">
  Think of Starlette as FastAPI's equivalent of the HTTP layer Express itself provides, and
  Pydantic as replacing manual validation (`express-validator`, Zod) or Nest's DTOs +
  `class-validator` — except it's automatic from your type hints, not extra decorators or
  schemas you write by hand. And the auto-generated Swagger docs replace what you'd normally
  set up yourself with `swagger-jsdoc`/`swagger-ui-express` in Express, or `@nestjs/swagger` in
  Nest — in FastAPI, it's there from the first endpoint you write, automatically.
</Callout>
