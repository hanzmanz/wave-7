# 10 – localStorage Mini Tasks (Saving Small Pieces of State)

Wave 7 – localStorage basics: this folder focuses on:

- What `localStorage` is
- Saving simple values
- Loading values on page refresh
- Clearing saved data

No arrays-of-objects todo apps yet — just **tiny pieces of state**.

---

## 1. What is localStorage?

`localStorage` is a built-in browser feature that lets you save data
**in the user's browser** as key/value pairs (like a tiny dictionary).

- Data **stays** when you refresh.
- Data **stays** even if you close and reopen the tab/browser.
- Data is stored as **strings**.

Analogy:

> A tiny personal locker inside the browser.  
> Each item has:
>
> - a label (key)
> - the thing you store (value)

Example:

```js
localStorage.setItem("favoriteColor", "purple");
const color = localStorage.getItem("favoriteColor"); // "purple"
localStorage.removeItem("favoriteColor");
```

---

## 2. Limits (but OK for our level)

- Only strings are stored (we can handle objects later with JSON).
- Data is **per origin** (per site).
- Good for:
  - theme preference (dark/light)
  - username or nickname
  - small settings or last viewed tab

---

## 3. Practice tasks overview (`index.html` + `script.js`)

All practice happens on a **pre-built HTML card** with:

- A name input + "Save Name" / "Load Name" / "Clear Name" buttons.
- A visit counter area.
- A theme toggle button for light / dark card mode.

You will:

1. Save the name into `localStorage` with a key like `"savedName"`.
2. Load that name when the user clicks "Load Name" and show it in the page.
3. Clear it and update the UI when "Clear Name" is clicked.
4. Implement a visit counter:
   - read a `"visitCount"` value,
   - increase it by 1 on each load,
   - show the count in the page.
5. Save a theme preference (`"cardTheme"`) as `"light"` or `"dark"`,
   and apply it when the page loads.

All of this is **visual** and survives refresh.

---

## 4. Mini Homework – "Favorite Quote Saver" (`homework.html` + `homework.js`)

On a separate page you will create a tiny "favorite quote" saver:

1. There is a `<textarea>` where the user can type a quote.
2. There is a "Save Quote" button that:

   - saves the current textarea value to `localStorage` (key `"favoriteQuote"`),
   - updates the display area to show the quote.

3. On page load:

   - If a quote already exists in `localStorage`, show it in the display area
     and also in the textarea.

4. There is a "Clear Quote" button that:
   - removes `"favoriteQuote"` from `localStorage`,
   - clears the textarea,
   - resets the display area text.

Everything is done with **simple strings**, no JSON yet.

---
