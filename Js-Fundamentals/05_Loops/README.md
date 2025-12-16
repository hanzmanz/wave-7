# 05 – Loops (Wave 7)

## 1. What are loops?

In real life, we repeat actions all the time:

- Do 10 squats.
- Send a message to each person in a group.
- Check every item in a to‑do list.

Instead of writing the same line of code many times, we use a **loop** so the computer can:

> “Do this action again and again, a certain number of times or until a condition changes.”

---

## 2. Loops in this lesson

We focus on two main loop types:

### `for` loop

Used when you **know** how many times you want to repeat something.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}
```

- `let i = 1;` → start value
- `i <= 5;` → condition to keep going
- `i++` → how we move to the next step

### `while` loop

Used when you **don’t know exactly** how many times in advance,
but you want to repeat until a condition becomes false.

```js
let count = 0;

while (count < 3) {
  console.log("Count is:", count);
  count = count + 1; // important: change something!
}
```

If we forget to change the variable, the condition might never become false → **infinite loop**.

---

## 3. Real-life analogy

Imagine a workout:

- You decide: “I’ll do **10 push‑ups**.”

  - This is like a `for` loop: you know it stops after 10.

- You decide: “I’ll keep walking **until** I hit 8,000 steps.”
  - This is like a `while` loop: you stop when a condition is met.

Loops are just a way for JavaScript to repeat actions **without copy‑pasting code**.

---

## 4. Files in this mini‑project

This folder has:

- `mentee/`

  - `index.html` – practice page (console‑focused)
  - `styles.css` – styling
  - `script.js` – Tasks 1–4 (instructions only)
  - `homework.html` – separate homework page
  - `homework.css` – styling for homework card
  - `homework.js` – homework steps (instructions only)

- `mentor/`
  - Same structure as above, but with **full JavaScript solutions**.

---

## 5. Practice tasks overview (`index.html` + `script.js`)

You have **4 small practice tasks**:

1. **Count up with a `for` loop**

   - Log numbers 1 through 10.
   - Practice the loop structure.

2. **Sum of numbers**

   - Use a `for` loop to sum numbers from 1 to `maxNumber`.
   - Log the final total.

3. **Count down**

   - Use a `for` loop to count down from 5 to 1.
   - Log each step.

4. **Loop over an array**
   - Create an array of favorite snacks or songs.
   - Use a `for` loop to log each item with its index.

All practice stays in the **console** — no DOM manipulation yet.

---

## 6. Mini Homework – "Multiplication Table Generator" (`homework.html` + `homework.js`)

The homework is its own mini project.

**Goal:** Use a loop to generate a multiplication table for a given number.

You will:

1. Create a variable called `baseNumber` (for example, 3, 5, or 7).
2. Use a `for` loop to go from 1 to 10.
3. For each step, calculate:  
   `result = baseNumber * currentMultiplier`
4. Log lines like:

   ```text
   --- MULTIPLICATION TABLE ---
   5 x 1 = 5
   5 x 2 = 10
   5 x 3 = 15
   ...
   5 x 10 = 50
   ```

You can change `baseNumber` to practice with different tables.

---
