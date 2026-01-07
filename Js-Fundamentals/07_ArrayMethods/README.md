# 07 – Array Methods (Wave 7)

## 1. What are array methods?

In the last units you learned:

- What arrays are
- How to loop through them with `for`
- How to read and update values by index

Now we level up with **array methods** – built-in helpers that let us:

- Add items
- Remove items
- Transform each item
- Filter items
- Run a function for every item

Instead of writing a lot of manual loops, array methods give us **shortcuts**.

---

## 2. Methods in this lesson

We focus on six core methods:

| Method       | What it does (short)                               | Simple example                                 |
| ------------ | -------------------------------------------------- | ---------------------------------------------- |
| `.push()`    | Add item to the **end** of the array               | `fruits.push("Mango")`                         |
| `.pop()`     | Remove and return the **last** item                | `let last = fruits.pop()`                      |
| `.shift()`   | Remove and return the **first** item               | `let first = fruits.shift()`                   |
| `.unshift()` | Add item to the **start** of the array             | `fruits.unshift("Apple")`                      |
| `.forEach()` | Run a function for **each** item                   | `fruits.forEach(f => ...)`                     |
| `.map()`     | Create a **new array**, transforming items         | `let upper = fruits.map(f => f.toUpperCase())` |
| `.filter()`  | Create a **new array** with items that pass a test | `let long = fruits.filter(f => f.length > 5)`  |

---

## 3. Real-life analogy

Imagine you have a row of cards on a table:

- `.push()` → add a card to the **right end**
- `.pop()` → remove the **rightmost** card
- `.unshift()` → add a card on the **left side**
- `.shift()` → remove the **leftmost** card
- `.forEach()` → look at each card and read it out loud
- `.map()` → make a new row where every card is transformed in some way
- `.filter()` → make a new row where only cards that match a rule are kept

These methods help you **manage, transform, and inspect** lists of data.

---

## 4. Mini Homework – "Mini Task List Manager" (`homework.html` + `homework.js`)

The homework is its own mini project.

**Goal:** Practice array methods on a small in-memory "task list".

You will:

1. Create an array called `tasks` that starts with 3 strings, e.g.:

   - `"Study JavaScript"`
   - `"Drink water"`
   - `"Go for a walk"`

2. Use `.push()` to add a new task.

3. Use `.unshift()` to add a priority task at the **beginning**.

4. Use `.pop()` to remove the last task and log which one was removed.

5. Use `.forEach()` to log each remaining task with a number:

   - `"1. Study JavaScript"`

6. Create a new array called `longTasks` using `.filter()`:

   - keep only tasks whose length is greater than, for example, 15 characters.

7. Log `longTasks` to see the filtered result.

Everything is still console-based.

---
