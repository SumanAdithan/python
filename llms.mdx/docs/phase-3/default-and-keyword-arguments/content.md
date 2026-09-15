# Default & Keyword Arguments (/en/docs/phase-3/default-and-keyword-arguments)



## Default parameters [#default-parameters]

Give a parameter a default value, and it becomes optional to pass in — same idea as JS.

JavaScript:

```js
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}
```

Python:

```python
def greet(name="Guest"):
    print(f"Hello {name}")

greet()          # Hello Guest
greet("John")    # Hello John
```

## Keyword arguments [#keyword-arguments]

Python lets you call a function using `parameter_name=value`, in **any order**:

```python
def create_user(name, age):
    print(name, age)

create_user(age=25, name="John")   # John 25
```

JS has no direct equivalent for this — the closest you can get is destructuring an object
parameter, which forces the caller to pass named values instead of positional ones:

```js
function createUser({ name, age }) {
  console.log(name, age);
}

createUser({ age: 25, name: 'John' });
```

In Python you get that same "call by name" convenience for free, without wrapping anything
in an object — positional and keyword calls both work on the same function:

```python
create_user("John", 25)         # positional — still works
create_user(name="John", age=25) # keyword — also works
```

Keyword arguments are especially useful when a function has several parameters, since they
make each call self-documenting.
