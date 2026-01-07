# 08 – DOM Mini Tasks (Selectors, textContent, style, create/remove)

Wave 7 – DOM basics: this folder focuses on:

- Selecting elements
- Reading / changing `textContent`
- Updating simple `style` properties / classes
- Creating and removing elements

No events yet, no localStorage, no APIs — just **DOM wiring**.

---

## 1. What is the DOM?

The **DOM (Document Object Model)** is how the browser represents your HTML as a
tree of JavaScript objects.

You can think of it as:

> The HTML page is a family tree of elements, and JavaScript can visit them,
> read them, and change them.

Example:

```html
<h1 id="title">Hello</h1>
```

```js
const titleElement = document.getElementById("title");
titleElement.textContent = "Hi Wave 7!";
```

---

## 2. Tools in this lesson

### Selectors

- `document.getElementById("idName")`
- `document.querySelector(".className")`
- `document.querySelectorAll("li")`

### Changing text

- `element.textContent = "New text"`

### Styling

- `element.style.color = "red"`
- `element.style.backgroundColor = "#0f172a"`
- or add/remove classes:
  - `element.classList.add("highlight")`
  - `element.classList.remove("highlight")`

### Creating / removing elements

- `document.createElement("li")`
- `parent.appendChild(newElement)`
- `element.remove()`

---

## 3. Mini Homework – "Favorite Movies DOM Card"

On a separate page you will:

1. Select heading and list elements.
2. Change heading text.
3. Use `textContent` to show how many movies are in the list.
4. Create and append a new `<li>` with a movie name.
5. Remove one existing `<li>`.

Again, this is all visible directly in the page (no events yet).

---
