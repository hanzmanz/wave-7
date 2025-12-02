# 01 – Variables (Wave 7)

## 1. What are variables?

Think of a **variable** like a **labeled box** or **sticky note** in your room.

- The **label** is the variable name (example: `firstName`).
- The **thing inside** is the value (example: `"Hanna"`).
- You can **look at** what’s inside any time.
- You can **change what’s inside** (if the box is a `let`).

In JavaScript, variables are how we:

- Remember information
- Reuse values
- Do math
- Build messages for the user

---

## 2. Syntax cheat sheet

| Keyword | Can change later? | Example                 | When to use                                |
| ------- | ----------------- | ----------------------- | ------------------------------------------ |
| `let`   | ✅ Yes            | `let age = 32;`         | For values that will change                |
| `const` | ❌ No             | `const pi = 3.14;`      | For values that should stay the same       |
| `var`   | 😵 Legacy         | `var name = "Jocelyn";` | Old JS. We will **not** focus on this now. |

We’ll focus on **`let`** and **`const`** only.

---

---

## 3. Practice tasks overview (index + script.js)

You have **4 small practice tasks** in `script.js`:

1. **Basic variables** – create and log `firstName`, `age`, `favoriteColor`.
2. **Reassignment** – change the value of a `let` variable.
3. **Sentence with variables** – build an introduction using template literals.
4. **let vs const** – see that `const` cannot be reassigned.

## 4. Mini Homework – "Profile Card (Console Edition)" (homework.html + homework.js)

The homework is in its **own separate page**:

- `homework.html` – pretty layout with a "Homework" card.
- `homework.js` – all steps for building the profile card, using **only variables + console.log**.

### Requirements (inside homework.js)

Create variables:

- `fullName` (string)
- `profileAge` (number)
- `country` (string)
- `favoriteHobby` (string)
- `isStudent` (boolean)

Then:

1. Use `console.log` to “print” a little profile card, example:

   ```text
   --- PROFILE CARD ---
   Name: Jocelyn
   Age: 32
   Country: Mexico
   Hobby: Coding & mentoring
   Is student? false
   ```

2. Change at least **one** variable (for example, change `favoriteHobby`) and log the card again.

The homework **does not yet touch the DOM**. The HTML/CSS are there to:

- Give structure
- Make it feel like a real mini project
- Keep the JavaScript focus purely on **variables**.

---
