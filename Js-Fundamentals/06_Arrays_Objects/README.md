# 06 – Arrays & Objects (Wave 7)

## 1. What are arrays?

Arrays store **multiple values** in one variable — like a list.

Real-life examples:

- A playlist of songs
- A grocery list
- A list of mentees

Example:

```js
let snacks = ["Chips", "Chocolate", "Cookies"];
```

You access items using **indexes** (starts at 0):

```js
console.log(snacks[0]); // "Chips"
```

---

## 2. What are objects?

Objects store **descriptive data** using key/value pairs.

Real-life example:
A profile card:

- name
- age
- isStudent
- hobbies

Example:

```js
let person = {
  name: "Ana",
  age: 21,
  isStudent: true,
};
```

Accessing values:

```js
console.log(person.name);
console.log(person["age"]);
```

---

## 3. Why arrays & objects matter

Almost **everything** in real apps uses arrays & objects:

- API data comes as arrays of objects
- LocalStorage stores objects
- DOM lists are often built by looping arrays
- Props in frameworks are objects

This is why Wave 7 learns arrays & objects first — THEN array methods.

---

## 4. Mini Homework — “Simple Contact Card”

You will:

1. Create an **array** called `contacts`.
2. Each contact is an **object** with:
   - `name`
   - `phone`
   - `isFavorite`
3. Log:
   - total contacts
   - first contact’s name
4. Update:
   - change `isFavorite` of one contact
5. Add:
   - push a new contact object

Everything stays in the **console** — no DOM yet.

---
