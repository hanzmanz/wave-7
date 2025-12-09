# 04 – Conditionals (Wave 7)

## 1. What are conditionals?

In real life, we constantly make decisions:

- **If** it’s raining → take an umbrella.
- **If** you’re hungry → make food.
- **Otherwise** → keep working.

In JavaScript, we do the same thing with **conditional statements**:

```js
if (condition) {
  // run this code if condition is true
} else {
  // otherwise, run this code
}
```

Conditionals let our code **react** to different situations.

---

## 2. Pieces that work together

To use conditionals, we combine:

1. **Values / variables**  
   e.g. `score`, `age`, `moneyLeft`

2. **Comparison operators**  
   e.g. `>`, `<`, `>=`, `<=`, `===`, `!==` `==`
   They compare values and produce a **boolean** (`true` or `false`).

3. **`if / else if / else` blocks**  
   Decide **which code** should run based on those booleans.

Example:

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Keep practicing!");
}
```

---

## 3. Real-life analogy

Think of a **door bouncer** at a club:

- Checks your ID (the **condition**).
- If age ≥ 18 → “You can come in.”
- Else → “Sorry, you can’t enter.”

The bouncer is the `if` statement.  
Your age is the value.  
The rule `age >= 18` is the **condition**.

---

## 4. Files in this mini-project

This folder has:

- `mentee/`

  - `index.html` – practice page (console-focused)
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

1. **Basic `if` with a boolean**

   - Use a boolean like `isRaining`.
   - Log different messages depending on true/false.

2. **Age check**

   - Check if `age` is >= 18.
   - `if / else` to log “Adult” vs “Minor”.

3. **Score to grade (`if / else if / else`)**

   - Use a `score` variable.
   - Chain `if / else if / else` to output A/B/C/D/F.

4. **Multiple conditions with `&&` and `||` (gently)**
   - Example: can you watch a movie if you have **ticket AND popcorn**?
   - Or: is it a “chill day” if it’s weekend **OR** you have a day off?

All of this is still **console-based** – no DOM changes yet.

---

## 6. Mini Homework – "Access Checker" (`homework.html` + `homework.js`)

The homework is its own mini project.

**Goal:** Use conditionals to decide if a user can access something.

You will create variables like:

- `userAge` (number)
- `hasTicket` (boolean)
- `isMember` (boolean)

Then:

1. Use `if / else` to decide if the user is **old enough**:

   - If `userAge >= 18` → log “Age check passed.”
   - Else → log “Age check failed.”

2. Use another conditional to check if they have a ticket or membership:

   - If `hasTicket === true` **OR** `isMember === true` → log “Entry permitted.”
   - Else → log “No ticket or membership, entry denied.”

3. Combine the logic into a more complete check:

   - If age check passes **AND** they have a ticket or membership →  
     log something like:  
     `"Access granted. Enjoy the event!"`

   - Otherwise →  
     `"Access denied. Please check age and ticket/membership."`

All decisions and feedback are printed with `console.log`.

---

## 7. How mentee vs mentor versions work

### Mentee

- Only has comments in `script.js` and `homework.js`.
- They must:
  - Write the `if`, `else if`, `else`,
  - Use comparison operators,
  - Use `&&` and `||` carefully.

### Mentor

- Has complete working solutions in both files.
- Can demo:
  - How changing variable values changes the outputs.
  - How `&&` and `||` change the logic.

---

## 8. Suggested teaching flow

1. Recap variables, data types, and operators.
2. Explain booleans + comparisons → show `>`, `<`, `===`, etc.
3. Live demo with a simple `if` (like `isRaining`).
4. Let mentees work through Tasks 1–3.
5. Introduce `&&` and `||` in Task 4 with plain language:
   - `&&` = “both must be true”
   - `||` = “at least one must be true”
6. Use the **Access Checker** homework to solidify:
   - combining multiple conditions,
   - giving clear user feedback.

Next unit after this: **Loops**, which will reuse conditions inside `for`/`while` structures.
