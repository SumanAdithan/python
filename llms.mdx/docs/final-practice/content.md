# Final Practice — Build a User Store (/en/docs/final-practice)



Estimated time: **\~1–2 hours**. 🧪 Don't watch videos for this part.

After studying Phases 1–8, close everything else and build this from memory, looking things
up only when you get stuck. If you copy the finished code below without typing it yourself,
you skip the part that actually makes it stick.

Tomorrow, you'll basically turn these exact functions into FastAPI HTTP endpoints — so
getting comfortable writing them now is real prep, not busywork.

## The store [#the-store]

A single in-memory list, just like the nested-data example from Phase 2:

```python
users = []
```

## Given — study these two first [#given--study-these-two-first]

These two are worked examples. Read them, understand *why* they're written this way, then
close this page before attempting the rest.

```python
def add_user(name: str, email: str):
    user = {
        "id": len(users) + 1,
        "name": name,
        "email": email,
        "active": True
    }

    users.append(user)
    return user
```

```python
def get_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user

    return None
```

Notice what these two are already using from earlier phases: type hints (Phase 3 & 7), a
dict as a "record" (Phase 2), and `for` + `if` to search a list by hand (Phase 1 & 2).

## Your turn [#your-turn]

Implement these five yourself. Each one below is a spec — the signature and exactly what it
should do — not the code. Write the body before looking at the solution at the bottom.

**1. Get all users**

```python
def get_all_users():
    ...
```

Return every user in the store.

**2. Update user**

```python
def update_user(user_id: int, name: str | None = None, email: str | None = None):
    ...
```

Find the user by `user_id`. Update `name` and/or `email` only if a new value was actually
passed in — leave a field untouched if its argument is `None`. Return the updated user, or
`None` if no user with that id exists.

**3. Delete user**

```python
def delete_user(user_id: int):
    ...
```

Remove the user with that id from `users`. Return `True` if a user was deleted, `False` if no
user with that id existed.

**4. Search users**

```python
def search_users(query: str):
    ...
```

Return every user whose `name` contains `query` (case-insensitive).

**5. Filter active users**

```python
def filter_active_users():
    ...
```

Return only the users where `active` is `True`.

<details>
  <summary>
    Solution — only open this after you've genuinely tried
  </summary>

  ```python
  def get_all_users():
      return users


  def update_user(user_id: int, name: str | None = None, email: str | None = None):
      user = get_user(user_id)

      if user is None:
          return None

      if name is not None:
          user["name"] = name
      if email is not None:
          user["email"] = email

      return user


  def delete_user(user_id: int):
      user = get_user(user_id)

      if user is None:
          return False

      users.remove(user)
      return True


  def search_users(query: str):
      return [user for user in users if query.lower() in user["name"].lower()]


  def filter_active_users():
      return [user for user in users if user["active"]]
  ```
</details>

## Where this goes tomorrow [#where-this-goes-tomorrow]

Each function here becomes one FastAPI route — same logic, wrapped in an endpoint:

```text
add_user             → POST   /users
get_all_users        → GET    /users
get_user             → GET    /users/{user_id}
update_user          → PUT    /users/{user_id}
delete_user          → DELETE /users/{user_id}
search_users         → GET    /users/search?q=...
filter_active_users  → GET    /users/active
```
