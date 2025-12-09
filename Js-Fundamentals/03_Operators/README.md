e# 03 – Operators (Wave 7)

## 1. What are operators?

In math and in real life, we constantly **do things to values**:

- Add money to a wallet
- Subtract time from a timer
- Multiply a price by the number of items
- Divide a total bill between friends

In JavaScript, we use **operators** to tell the computer what to do with our values.

---

## 2. Operators in this lesson

We’ll focus on **basic arithmetic and assignment operators**:

| Operator | Name               | Example  | Description                      |
| -------- | ------------------ | -------- | -------------------------------- |
| `+`      | addition           | `5 + 3`  | Add numbers OR join strings      |
| `-`      | subtraction        | `10 - 4` | Subtract one number from another |
| `*`      | multiplication     | `6 * 2`  | Multiply numbers                 |
| `/`      | division           | `20 / 5` | Divide numbers                   |
| `%`      | remainder / modulo | `7 % 3`  | Remainder after division         |
| `+=`     | plus equals        | `x += 2` | Same as `x = x + 2`              |
| `-=`     | minus equals       | `x -= 1` | Same as `x = x - 1`              |

We **will** use these operators later together with:

- conditionals (`if`)
- comparisons (`>`, `<`, `===`, etc.)
- loops

For now, the goal is to get comfortable **using and reading** arithmetic and assignment expressions.

---

## 3. Real-life analogy

Imagine you have a **wallet** and you track your money:

- Start with 500 pesos → `let wallet = 500;`
- You get paid 200 pesos → `wallet = wallet + 200;` (or `wallet += 200;`)
- You buy a coffee for 60 pesos → `wallet = wallet - 60;` (or `wallet -= 60;`)

JavaScript is just doing the same steps with numbers, but very fast and very consistently.

---

## 4. Mini Homework – "Simple Budget Calculator" (`homework.html` + `homework.js`)

The homework is its own mini project.

**Goal:** Use operators to calculate how much money is left after expenses.

You will create variables like:

- `monthlyIncome` (number)
- `rentCost` (number)
- `foodCost` (number)
- `transportCost` (number)
- `funBudget` (number)

Then:

1. Calculate `totalExpenses` using `+`.
2. Calculate `moneyLeft` as `monthlyIncome - totalExpenses`.
3. Use `console.log` to print a clear summary, for example:

   ```text
   --- SIMPLE BUDGET ---
   Monthly income: 12000
   Total expenses: 8500
   Money left: 3500
   ```

4. Update one of the expense values (for example, increase `funBudget` with `+=`)
   and recalculate `totalExpenses` and `moneyLeft`.

5. Log the **updated summary** so you can compare before vs after.

Again: this is focused on **operators**.  
We’re not doing conditionals (`if`) yet here, just **math with variables**.

---
