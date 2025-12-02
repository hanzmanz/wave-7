# 02 – Data Types (Wave 7)

## 1. What are data types?

In real life, we handle **different kinds of information**:

- A name → text
- An age → number
- A yes/no answer → true/false
- Something that is empty on purpose → nothing yet
- Something we haven’t filled in → not defined yet

JavaScript needs to know **what kind of data** we’re working with so it can treat it correctly.  
That “kind” is called a **data type**.

---

## 2. Main data types in this lesson

We focus on the most common **primitive** types:

| Type        | Example value   | Description                                   |
| ----------- | --------------- | --------------------------------------------- |
| `string`    | `"Jocelyn"`     | Text, inside quotes                           |
| `number`    | `32`, `3.14`    | Any numeric value (no separate int/float)     |
| `boolean`   | `true`, `false` | Yes/No, On/Off, 1/0 style answers             |
| `undefined` | `undefined`     | JS says: "this exists, but has no value… yet" |
| `null`      | `null`          | You say: "this should be empty on purpose"    |

We’ll also **mention** arrays and objects later, but they get their **own units**.

---

## 3. The `typeof` operator

JavaScript gives us a built-in tool to check the data type of a value: `typeof`.

Examples:

```js
typeof "Hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  (weird historical bug in JS!)
```

You’ll use `typeof` a lot in this lesson to see what type each variable has.

---

## 4. Real-life analogy

Imagine you are sorting info into different **columns in a spreadsheet**:

- Column A: Names (text/string)
- Column B: Ages (numbers)
- Column C: “Present?” (Yes/No)
- Column D: Optional notes (sometimes empty)

Each column holds a **type** of data.  
You wouldn’t try to **add** `"Maria"` + `"Carlos"` like numbers,  
but you _would_ add `20 + 5`.

JavaScript is doing something similar:  
It wants to know…

- “Is this **text** I should join together?”
- “Is this a **number** I can add, subtract, multiply?”
- “Is this a **boolean** that tells me yes/no?”

---

## 5. Mini Homework – "Daily Stats Summary" (`homework.html` + `homework.js`)

The homework is its own mini project:

**Goal:** Create a “daily stats” summary using different data types.

You will create variables like:

- `dayName` (string) – e.g. `"Monday"`
- `stepsWalked` (number) – e.g. `8423`
- `waterCups` (number) – e.g. `6`
- `didWorkout` (boolean) – `true` or `false`
- `eveningPlan` (null) – start as `null` (no plan yet), then change later
- `favoriteSnack` (undefined at first) – then assign a string later

Then:

1. Use `console.log` to print a readable **daily summary**, like:

   ```text
   --- DAILY STATS ---
   Day: Monday
   Steps walked: 8423
   Water cups: 6
   Worked out today? true
   Evening plan: null
   Favorite snack: undefined
   ```

2. Update `eveningPlan` to a real string (e.g. `"Movie night"`)  
   and assign a value to `favoriteSnack`.

3. Log the **updated summary** to show how the data changed.

Again: **no DOM**, just variables + types + console.

---
