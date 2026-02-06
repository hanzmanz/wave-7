// 11 – API MINI TASKS
// ----------------------------------------------
//
// We will use fetch + .then() to call real public APIs:
//
// - Advice API: https://api.adviceslip.com/advice
// - Cat Fact API: https://catfact.ninja/fact
// - NASA Space Photo API (APOD):
//   https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1
//
// IMPORTANT NOTE FOR NASA APOD:
// - Without "count=1", the API always returns TODAY’S photo.
// - Using "count=1" forces the API to return a RANDOM photo.
// - When using "count", the API returns an ARRAY, not an object.
//
// ==============================================
// SETUP – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - adviceBtn (id "adviceBtn")
//         - adviceText (id "adviceText")
//         - catFactBtn (id "catFactBtn")
//         - catFactText (id "catFactText")
//         - spaceBtn (id "activityBtn")
//         - spaceText (id "activityText")

const adviceBtn = document.getElementById("adviceBtn");
const adviceText = document.getElementById("adviceText");
const catFactBtn = document.getElementById("catFactBtn");
const catFactText = document.getElementById("catFactText");
const spaceBtn = document.getElementById("activityBtn");
const spaceText = document.getElementById("activityText");

// ==============================================
// TASK 1 – RANDOM ADVICE
// ==============================================
//
// STEP 2: Add a "click" event listener to adviceBtn.
//         Inside the listener function:
//         - Set adviceText.textContent to "Loading advice...".
//         - Call fetch("https://api.adviceslip.com/advice").
//         - In the first .then, return response.json().
//         - In the second .then:
//              * Access data.slip.advice.
//              * Set adviceText.textContent to that advice string.
//         - Add a .catch(...) at the end.
//           In the catch:
//              * Log the error to the console.
//              * Set adviceText.textContent to a friendly error message
//                like "Could not load advice. Try again."

adviceBtn.addEventListener("click", () => {
  adviceText.textContent = "Loading advice...";
  let data = fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let newAdviceText = data.slip.advice;
      adviceText.textContent = newAdviceText;
    })
    .catch(function (error) {
      console.log(error);
      adviceText.textContent = "Could not load advice. Try again.";
    });
});

// adviceBtn.addEventListener("click", () => {
//   fetch("https://api.adviceslip.com/advice")
//   .then(function (response))
// });

// ==============================================
// TASK 2 – RANDOM CAT FACT
// ==============================================
//
// STEP 3: Add a "click" event listener to catFactBtn.
//         Inside the listener:
//         - Set catFactText.textContent to "Loading cat fact...".
//         - Call fetch("https://catfact.ninja/fact").
//         - In the first .then, return response.json().
//         - In the second .then:
//              * Use data.fact.
//              * Set catFactText.textContent to that fact.
//         - Add a .catch(...) at the end.
//           In the catch:
//              * Log the error.
//              * Show a friendly error message in the UI.

catFactBtn.addEventListener("click", () => {
  catFactText.textContent = "Loading cat fact...";

  fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let newCatFactText = data.fact;
      catFactText.textContent = newCatFactText;
    })
    .catch(function (error) {
      console.log(error);
      catFactText.textContent = "Could not load cat fact. Try again.";
    });
});

// ==============================================
// TASK 3 – RANDOM SPACE PHOTO (NASA APOD)
// ==============================================

// We will use the NASA APOD API with "count=1" to get a RANDOM photo:

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1

// IMPORTANT:
// - When "count" is used, the API returns an ARRAY.
// - We must access the first item using data[0].

// Each APOD item can contain:
//   - title
//   - explanation
//   - url
//   - media_type ("image" or "video")

// STEP 4: Add a "click" event listener to spaceBtn (activityBtn).
//         Inside the listener:
//         - Set spaceText.innerHTML to "Loading space photo... 🚀".
//         - Call fetch() using the APOD URL with "&count=1".
//         - In the first .then:
//              * Check if response.ok is false.
//                If so, throw an error.
//              * Return response.json().
//         - In the next .then(data):
//              * Extract the first result from the array:
//                    const apod = data[0];
//              * Check apod.media_type:
//                    - If it is "video":
//                        • Display apod.title
//                        • Display apod.explanation
//                        • Show a clickable link to apod.url
//                    - Else (image):
//                        • Display apod.title
//                        • Display an <img> using apod.url
//                        • Display apod.explanation

// STEP 5: Add a .catch(...) at the end.
//         Inside the catch:
//         - Log the error to the console.
//         - Set spaceText.textContent to a friendly message like:
//           "Could not load the space photo. Try again later."


// Hannan's attempt:
// spaceBtn.addEventListener("click", function () {
//   spaceText.innerHTML = "Loading space photo... 🚀";

//   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
//     .then(function (response) {
//       if (response.ok === false) {
//         throw new Error("Network response was not ok");
//       } else {
//         return response.json();
//       }
//     })
//     .then(function(data) {
//       const apod = data[0];
//       if (apod.media_type === "video") {
//         spaceText.textContent = `Title: ${apod.title} \nExplanation: ${apod.explanation}`;
//       } else {
//         spaceText.textContent = `Title: ${apod.title} \nExplanation: ${apod.explanation}`;
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//       spaceText.textContent = "Could not load the space photo. Try again later.";
//     });
// });


// Copilot's tab attempt
spaceBtn.addEventListener("click", function () {
  spaceText.innerHTML = "Loading space photo... 🚀";

  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
    .then(function (response) {
      if (response.ok === false) {
        throw new Error("Network response was not ok");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      const apod = data[0];
      if (apod.media_type === "video") {
        spaceText.innerHTML = `<h3>${apod.title}</h3><p>${apod.explanation}</p><a href="${apod.url}" target="_blank">Watch Video</a>`;
      } else {
        spaceText.innerHTML = `<h3>${apod.title}</h3><img src="${apod.url}" alt="${apod.title}" style="max-width: 100%; height: auto;"><p>${apod.explanation}</p>`;
      }
    })
    .catch(function (error) {
      console.log(error);
      spaceText.textContent = "Could not load the space photo. Try again later.";
    });
});