# Level 2 Final Project - Personal Budget Tracker

## User flow
- Enter your name, monthly budget, email
- Add new expenses based on 5 general categories: Housing & Utilities, Food, Transportation, Lifestyle & Personal, and Savings & Investments
- User can download summary (.txt file in case of no internet connection) or Email summary
- User can filter existing expenses by All or any of the 5 existing categories
- User can convert currency in case of buying something in a foreign currency (LIMITATION: can only convert from EUR to other currencies using free API key)

## Background
I decided to build a personal budget tracker to better record my expenses throughout the month and identify where my money gets funneled to. I tried my best to include all the JavaScript concepts learnt in level 2 as well as all the required concepts for the level 2 final project:
- DOM manipulation
- localStorage persistence
- responsive design
- API integration
- contact form
- email

## Key learnings: 
- Learnt (copied) how to create a summary blob and download it as a text file 
- Learnt you can create functions and later add them on to an event listener using a dedicated function (line 679)
- Learnt how to use display = none/block/flex to make stuff appear or disappear based on the current state
- Learnt to not underestimate reading documentation especially for trying to get APIs to work (only discovered free API limitations after reading more of the official documentation)
- Learnt how valuable console logging is to determine source of an issue which would have saved me hours of struggle.

Along the way, the feature list grew based on real life requirements and learnt new concepts or found new applications for existing concepts
- generating a summary report using innerHTML
- downloading a .txt file to keep track of budgets for a certain period
