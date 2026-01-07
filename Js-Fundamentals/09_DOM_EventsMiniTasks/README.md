# 09 – DOM + Events Mini Tasks (Clicks, Inputs, Live Updates)

Wave 7 – DOM + Events: this folder focuses on:

- Listening for user actions (clicks, typing)
- Updating the DOM **in real time**
- Combining:
  - selectors
  - textContent
  - style / classes
  - event listeners

No localStorage, no APIs yet — just **DOM + events**.

---

## 1. What is an event?

An **event** is something that happens in the page:

- A button is clicked
- A key is pressed
- The mouse moves
- An input value changes

We can "listen" for these events and run code in response.

Real-life analogy:

> Someone rings a doorbell (event) → you hear it and open the door (your code).

---

## 2. The event listener pattern

Basic syntax:

```js
element.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

Pieces:

- `element` → what we are listening on
- `"click"` → the type of event
- `function () { ... }` → the code to run when it happens

For inputs:

```js
input.addEventListener("input", function () {
  const currentValue = input.value;
  // use currentValue to update the page
});
```

---

## 3. Practice tasks overview (`index.html` + `script.js`)

All practice happens on a **pre-built HTML card** with:

- A title
- A description
- A “Change Title” button
- A “Toggle Highlight” button
- A counter display + “+1” button
- A text input + live preview area

You will wire up events so that:

1. Clicking the **Change Title** button updates the title text.
2. Clicking the **Toggle Highlight** button adds/removes a highlight class on the card.
3. Clicking the **+1** button increases a counter and updates the number shown on the page.
4. Typing in the input updates a preview text in real time.

---

## 4. Mini Homework – "Live Profile Card"

1. Have inputs for:
   - name
   - favorite color
   - a mood `<select>` (e.g. happy / focused / tired)
2. Add event listeners so that:
   - Typing in the **name** input updates a heading.
   - Typing in the **favorite color** input updates a color preview or description.
   - Changing the **mood** select updates a text line (“Current mood: …”).
3. Add a **Reset** button that:
   - Clears inputs
   - Resets the displayed values to defaults.

All without reloading the page.

---
