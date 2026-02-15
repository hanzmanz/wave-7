let userInfo = null; // Will store user information as an object (name, budget, email)
let expenses = []; // Array to store all expense objects
console.log("📋 User info initialised:", userInfo);
console.log("💰 Expenses array initialised:", expenses);

// API Key for Currency Conversion
const EXCHANGE_RATE_API_KEY = "e24bf7c29d659bfc5be859258e6626a2";

// references to all DOM elements for the app to interact with. then console log to confirm all elements were found

// User form elements
const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const monthlyBudgetInput = document.getElementById("monthlyBudget");
const userEmailInput = document.getElementById("userEmail");
const userInfoSection = document.getElementById("userInfoSection");
const userDisplay = document.getElementById("userDisplay");
const displayName = document.getElementById("displayName");
const displayBudget = document.getElementById("displayBudget");
const displayEmail = document.getElementById("displayEmail");
const resetUserBtn = document.getElementById("resetUserBtn");

// Expense form elements
const expenseForm = document.getElementById("expenseForm");
const expenseItemInput = document.getElementById("expenseItem");
const expenseCostInput = document.getElementById("expenseCost");
const expenseCategorySelect = document.getElementById("expenseCategory");
const expenseFormSection = document.getElementById("expenseFormSection");

// Display sections
const budgetOverview = document.getElementById("budgetOverview");
const expensesSection = document.getElementById("expensesSection");
const expensesList = document.getElementById("expensesList");
const filterSection = document.getElementById("filterSection");
const actionButtons = document.getElementById("actionButtons");

// Budget overview elements
const totalSpentSpan = document.getElementById("totalSpent");
const remainingSpan = document.getElementById("remaining");
const overallProgress = document.getElementById("overallProgress");
const categoryBreakdown = document.getElementById("categoryBreakdown");

// Action buttons
const filterCategorySelect = document.getElementById("filterCategory");
const downloadBtn = document.getElementById("downloadBtn");
const emailBtn = document.getElementById("emailBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");

// Currency converter elements
const currencyConverterSection = document.getElementById("currencyConverterSection");
const currencyForm = document.getElementById("currencyForm");
const fromCurrencyInput = document.getElementById("fromCurrency");
const toCurrencyInput = document.getElementById("toCurrency");
const convertAmountInput = document.getElementById("convertAmount");
const conversionResult = document.getElementById("conversionResult");
const conversionError = document.getElementById("conversionError");
const resultAmount = document.getElementById("resultAmount");
const exchangeRate = document.getElementById("exchangeRate");

console.log("All DOM elements selected successfully");

// function to load user info from localStorage if it exists. runs when the page loads to restore saved user information
function loadUserInfo() {
  // Get saved user info from localStorage
  const savedUserInfo = localStorage.getItem("budgetTrackerUser");
  
  if (savedUserInfo) {
    // If user info exists, parse and store it
    userInfo = JSON.parse(savedUserInfo);
    console.log("User info loaded from localStorage:", userInfo);
    
    // Show the user display section and hide the form
    showUserDisplay();
  } else {
    console.log("No saved user info found");
  }
}

// function to save user info to localStorage. save the user object as a JSON string
function saveUserInfo() {
  localStorage.setItem("budgetTrackerUser", JSON.stringify(userInfo));
  console.log("💾 User info saved to localStorage:", userInfo);
}

// function to handle user form submission. capture the user's name, budget, and email. then save the data and show the main app interface. console log to show the captured user data
function handleUserFormSubmit(e) {
  // Prevent the form from refreshing the page
  e.preventDefault();
  
  // Create a user info object from the form inputs
  userInfo = {
    name: userNameInput.value,
    budget: parseFloat(monthlyBudgetInput.value),
    email: userEmailInput.value
  };
  
  console.log("👤 User info captured:", userInfo);
  
  saveUserInfo(); // Save user info to localStorage
  
  showUserDisplay(); // Show the user display section
  
  userForm.reset(); // Reset the form
}

//  function to show user display and hide form. update the display with user info and shows all app sections
function showUserDisplay() {
  // Hide the user form section
  userInfoSection.style.display = "none";
  
  // Show the user display section
  userDisplay.style.display = "block";
  
  // Update the display with user information
  displayName.textContent = userInfo.name;
  displayBudget.textContent = userInfo.budget.toFixed(2);
  displayEmail.textContent = userInfo.email;
  
  // Show other sections of the app
  budgetOverview.style.display = "block";
  expenseFormSection.style.display = "block";
  filterSection.style.display = "block";
  expensesSection.style.display = "block";
  actionButtons.style.display = "flex";
  currencyConverterSection.style.display = "block";
  
  console.log("✅ User display shown, form hidden");
  
  // Update the budget overview
  updateBudgetOverview();
}

// function to reset user info. clear user data and show the form again
function resetUserInfo() {
  // Ask user to confirm
  const confirmReset = confirm("Are you sure you want to reset your user information? This will clear all your expenses too.");
  
  if (confirmReset) {
    // Clear user info
    userInfo = null;
    localStorage.removeItem("budgetTrackerUser");
    
    // Clear all expenses
    expenses = [];
    localStorage.removeItem("budgetTrackerExpenses");

    // Clear the expenses DOM
    expensesList.innerHTML = "";
    
    // Reset the filter dropdown to 'All Categories'
    filterCategorySelect.value = "all";

    // Show form, hide display (reverse of showUserDisplay)
    userInfoSection.style.display = "block";
    userDisplay.style.display = "none";
    budgetOverview.style.display = "none";
    expenseFormSection.style.display = "none";
    filterSection.style.display = "none";
    expensesSection.style.display = "none";
    actionButtons.style.display = "none";
    currencyConverterSection.style.display = "none";
    
    console.log("User info and expenses reset");
  }
}

// function to load expenses from localStorage. runs when the page loads to restore saved expenses
function loadExpenses() {
  const savedExpenses = localStorage.getItem("budgetTrackerExpenses");
  
  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
    console.log("✅ Expenses loaded from localStorage:", expenses);
  } else {
    console.log("ℹ️ No saved expenses found");
  }
}

// function to save expenses to localStorage. save the expenses array as a JSON string
function saveExpenses() {
  localStorage.setItem("budgetTrackerExpenses", JSON.stringify(expenses));
  console.log("💾 Expenses saved to localStorage:", expenses);
}

// function to handle adding a new expense. captures expense data from the form and adds it to the array
function handleExpenseFormSubmit(e) {
  // Prevent form from refreshing the page
  e.preventDefault();
  
  // Create a new expense object
  const newExpense = {
    id: Date.now(), // Unique ID using timestamp
    item: expenseItemInput.value,
    cost: parseFloat(expenseCostInput.value),
    category: expenseCategorySelect.value,
    date: new Date().toLocaleDateString() // Add current date
  };
  
  // Add the new expense to the beginning of the array
  expenses.unshift(newExpense);
  
  console.log("New expense added:", newExpense);
  
  saveExpenses(); // Save expenses to localStorage
  
  // Update the display
  renderExpenses(expenses);
  updateBudgetOverview();
  
  expenseForm.reset(); // Reset the form
}

// function to render expenses on the page. create expense cards for each expense in the array. takes an array parameter so it can render filtered expenses too
function renderExpenses(expensesToRender) {
  // Clear the expenses list
  expensesList.innerHTML = "";
  
  // Check if there are any expenses to display
  if (expensesToRender.length === 0) {
    expensesList.innerHTML = "<p style='text-align: center; color: #999;'>No expenses yet. Please add your first expense above!</p>";
    console.log("No expenses to render");
    return;
  }
  
  // Loop through each expense and create a card
  expensesToRender.forEach((expense) => {
    // Create the expense card element
    const expenseCard = document.createElement("div");
    expenseCard.classList.add("expense-card"); // Add class for styling
    
    // Get category emoji and name
    const categoryInfo = getCategoryInfo(expense.category);
    
    // set the HTML content for the card
    expenseCard.innerHTML = `
      <div class="expense-info">
        <div class="expense-item-name">${expense.item}</div>
        <div class="expense-details">📅 ${expense.date}</div>
        <div class="expense-cost">$${expense.cost.toFixed(2)}</div>
        <span class="expense-category-badge category-${expense.category}">
          ${categoryInfo.emoji} ${categoryInfo.name}
        </span>
      </div>
      <div class="expense-actions">
        <button class="edit-btn" data-id="${expense.id}">✏️ Edit</button>
        <button class="delete-btn" data-id="${expense.id}">🗑️ Delete</button>
      </div>
    `;
    
    // Append the card to the list
    expensesList.appendChild(expenseCard);
    
    console.log(`✅ Rendered expense: ${expense.item} - $${expense.cost}`);
  });
  
  // Add event listeners to all edit and delete buttons
  attachExpenseActionListeners();
}

// helper function to get category info. returns an object with emoji and display name for each category
function getCategoryInfo(category) {
  const categoryMap = {
    housing: { emoji: "🏠", name: "Housing & Utilities" },
    food: { emoji: "🍔", name: "Food" },
    transportation: { emoji: "🚗", name: "Transportation" },
    lifestyle: { emoji: "🎉", name: "Lifestyle & Personal" },
    savings: { emoji: "💎", name: "Savings & Investments" }
  };
  
  if (categoryMap[category]) {
    return categoryMap[category];
  } else {
    console.warn("⚠️ Unknown category:", category);
    return { emoji: "❓", name: "Unknown" };
  }
}

// function to attach event listeners to expense buttons. adds click handlers to all edit and delete buttons
function attachExpenseActionListeners() {
  // Get all delete buttons
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeleteExpense);
  });
  
  // Get all edit buttons
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", handleEditExpense);
  });
  
  console.log(`✅ Attached event listeners to ${deleteButtons.length} delete and ${editButtons.length} edit buttons`);
}

// function to handle deleting an expense. find expense by ID and remove it from the array
function handleDeleteExpense(e) {
  // Get the expense ID from the button's data attribute
  const expenseId = parseInt(e.target.getAttribute("data-id"));
  
  // Find the index of the expense in the array
  const expenseIndex = expenses.findIndex((exp) => exp.id === expenseId);
  
  if (expenseIndex !== -1) {
    const deletedExpense = expenses[expenseIndex];
    
    // Remove the expense from the array
    expenses.splice(expenseIndex, 1);
    
    console.log(`🗑️ Deleted expense: ${deletedExpense.item} - $${deletedExpense.cost}`);
    
    // Save and update display
    saveExpenses();
    renderExpenses(expenses);
    updateBudgetOverview();
  }
}

// function to handle editing an expense. finds the expense and populates the form with its data and then delete the old one
function handleEditExpense(e) {
  // Get the expense ID from the button's data attribute
  const expenseId = parseInt(e.target.getAttribute("data-id"));
  
  // Find the expense in the array
  const expense = expenses.find((exp) => exp.id === expenseId);
  
  if (expense) {
    // Populate the form with the expense data
    expenseItemInput.value = expense.item;
    expenseCostInput.value = expense.cost;
    expenseCategorySelect.value = expense.category;
    
    // Remove the expense (it will be re-added when user submits)
    const expenseIndex = expenses.findIndex((exp) => exp.id === expenseId);
    expenses.splice(expenseIndex, 1);
    
    console.log(`✏️ Editing expense: ${expense.item} - $${expense.cost}`);
    
    // Save and update display
    saveExpenses();
    renderExpenses(expenses);
    updateBudgetOverview();
    
    // Scroll to the form
    expenseFormSection.scrollIntoView({ behavior: "smooth" });
  }
}

// function to calculate total spent. adds up all expense costs
function calculateTotalSpent() {
  const total = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  console.log(`💰 Total spent: $${total.toFixed(2)}`);
  return total;
}

// function to calculate spending by category. creates an object with totals for each category
function calculateCategoryTotals() {
  const categoryTotals = {
    housing: 0,
    food: 0,
    transportation: 0,
    lifestyle: 0,
    savings: 0
  };
  
  // Add up expenses for each category
  expenses.forEach((expense) => {
    if (categoryTotals.hasOwnProperty(expense.category)) {
      categoryTotals[expense.category] += expense.cost;
    }
  });
  
  console.log("📊 Category totals:", categoryTotals);
  return categoryTotals;
}

// function to update the budget overview section. update all the visual elements (totals, progress bars, categories)
function updateBudgetOverview() {
  // Make sure user info exists
  if (!userInfo) {
    console.log("⚠️ Cannot update budget overview - no user info");
    return;
  }
  
  // Calculate totals
  const totalSpent = calculateTotalSpent();
  const remaining = userInfo.budget - totalSpent;
  const percentSpent = (totalSpent / userInfo.budget) * 100;
  
  // Update the display
  totalSpentSpan.textContent = totalSpent.toFixed(2);
  remainingSpan.textContent = remaining.toFixed(2);
  
  // Update color based on spending
  if (remaining < 0) {
    remainingSpan.style.color = "#e74c3c"; // Red if over budget
  } else if (remaining < userInfo.budget * 0.1) {
    remainingSpan.style.color = "#f39c12"; // Orange if close to budget
  } else {
    remainingSpan.style.color = "#27ae60"; // Green if safe
  }
  
  // Update overall progress bar
  const progressWidth = Math.min(percentSpent, 100); // Cap at 100%
  overallProgress.style.width = progressWidth + "%";
  overallProgress.textContent = percentSpent.toFixed(0) + "%";
  
  // Change color if over budget
  if (percentSpent > 100) {
    overallProgress.style.background = "linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)";
  } else {
    overallProgress.style.background = "linear-gradient(90deg, #667eea 0%, #764ba2 100%)";
  }
  
  // Update category breakdown
  updateCategoryBreakdown();
  
  console.log("📊 Budget overview updated - Spent: $" + totalSpent.toFixed(2) + ", Remaining: $" + remaining.toFixed(2));
}

// function to update the category breakdown section. create progress bars for each category
function updateCategoryBreakdown() {
  const categoryTotals = calculateCategoryTotals();
  
  // Clear the category breakdown section
  categoryBreakdown.innerHTML = "";
  
  // Define all categories (even if they have $0)
  const categories = ["housing", "food", "transportation", "lifestyle", "savings"];
  
  categories.forEach((category) => {
    const categoryInfo = getCategoryInfo(category);
    const total = categoryTotals[category];
    const percentage = userInfo.budget > 0 ? (total / userInfo.budget) * 100 : 0;
    
    // Create category item div
    const categoryItem = document.createElement("div");
    categoryItem.classList.add("category-item");
    
    categoryItem.innerHTML = `
      <div class="category-header">
        <span>${categoryInfo.emoji} ${categoryInfo.name}</span>
        <span class="category-amount">$${total.toFixed(2)}</span>
      </div>
      <div class="progress-container">
        <div class="progress-bar category-${category}" style="width: ${Math.min(percentage, 100)}%">
          ${percentage.toFixed(0)}%
        </div>
      </div>
    `;
    
    categoryBreakdown.appendChild(categoryItem);
  });
  
  console.log("📊 Category breakdown updated");
}

// function to filter expenses by category. show only expenses from the selected category
function filterExpensesByCategory() {
  const selectedCategory = filterCategorySelect.value;
  
  if (selectedCategory === "all") {
    // Show all expenses
    renderExpenses(expenses);
    console.log("🔍 Showing all expenses");
  } else {
    // Filter expenses by category
    const filteredExpenses = expenses.filter((expense) => expense.category === selectedCategory);
    renderExpenses(filteredExpenses);
    console.log(`🔍 Filtered by category: ${selectedCategory} - Found ${filteredExpenses.length} expenses`);
  }
}

// function to generate a text summary of the budget. create a formatted text summary for export or email
function generateBudgetSummary() {
  const totalSpent = calculateTotalSpent();
  const remaining = userInfo.budget - totalSpent;
  const categoryTotals = calculateCategoryTotals();
  
  // Build the summary text
  let summary = `📊 BUDGET SUMMARY FOR ${userInfo.name.toUpperCase()}\n`;
  summary += `${"=".repeat(50)}\n\n`;
  summary += `📧 Email: ${userInfo.email}\n`;
  summary += `💰 Monthly Budget: $${userInfo.budget.toFixed(2)}\n`;
  summary += `💸 Total Spent: $${totalSpent.toFixed(2)}\n`;
  summary += `💵 Remaining: $${remaining.toFixed(2)}\n`;
  summary += `📈 Budget Used: ${((totalSpent / userInfo.budget) * 100).toFixed(1)}%\n\n`;
  
  summary += `📂 SPENDING BY CATEGORY:\n`;
  summary += `${"-".repeat(50)}\n`;
  
  Object.keys(categoryTotals).forEach((category) => {
    const categoryInfo = getCategoryInfo(category);
    const total = categoryTotals[category];
    const percentage = (total / userInfo.budget) * 100;
    summary += `${categoryInfo.emoji} ${categoryInfo.name}: $${total.toFixed(2)} (${percentage.toFixed(1)}%)\n`;
  });
  
  summary += `\n📝 EXPENSE DETAILS:\n`;
  summary += `${"-".repeat(50)}\n`;
  
  if (expenses.length === 0) {
    summary += `No expenses recorded yet.\n`;
  } else {
    expenses.forEach((expense, index) => {
      const categoryInfo = getCategoryInfo(expense.category);
      summary += `${index + 1}. ${expense.item} - $${expense.cost.toFixed(2)} (${categoryInfo.emoji} ${categoryInfo.name}) - ${expense.date}\n`;
    });
  }
  
  summary += `\n${"=".repeat(50)}\n`;
  summary += `Generated on ${new Date().toLocaleString()}\n`;
  
  console.log("📄 Budget summary generated:\n" + summary);
  return summary;
}

// function to download the summary as a text file
function exportBudgetSummary() {
  const summary = generateBudgetSummary();
  
  // Create a Blob with the summary text
  const blob = new Blob([summary], { type: "text/plain" });
  
  // Create a download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `budget-summary-${userInfo.name.replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.txt`;
  
  // Trigger the download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log("📥 Budget summary exported");
}

// function to email the budget summary which opens the user's default email client with a pre-filled message
function emailBudgetSummary() {
  const summary = generateBudgetSummary();
  
  // Create email parameters
  const subject = encodeURIComponent(`Budget Summary for ${userInfo.name} - ${new Date().toLocaleDateString()}`);
  const body = encodeURIComponent(summary);
  
  // Create mailto link
  const mailtoLink = `mailto:${userInfo.email}?subject=${subject}&body=${body}`;
  
  // Open the email client
  window.location.href = mailtoLink;
  
  console.log("📧 Email client opened with budget summary");
}

// function to toggle dark mode. adds/removes the "dark" class on the body element and saves the preference to localStorage
function toggleDarkMode() {
  // Toggle the dark class on body
  document.body.classList.toggle("dark");
  
  // Check if dark mode is active
  const isDarkMode = document.body.classList.contains("dark");
  
  // Update button text
  toggleModeBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
  // Save theme preference
  localStorage.setItem("budgetTrackerTheme", isDarkMode ? "dark" : "light");
  
  console.log(`🌙 Dark mode ${isDarkMode ? "enabled" : "disabled"}`);
}

// load the saved theme function
function loadTheme() {
  const savedTheme = localStorage.getItem("budgetTrackerTheme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleModeBtn.textContent = "Light Mode";
    console.log("🌙 Dark theme loaded");
  } else {
    toggleModeBtn.textContent = "Dark Mode";
    console.log("☀️ Light theme loaded");
  }
}

// function to handle currency conversion. call the ExchangeRates API to convert between currencies
async function handleCurrencyConversion(e) {
  e.preventDefault();
  
  // Get input values and convert to uppercase e.g. usd to USD
  const fromCurrency = fromCurrencyInput.value.trim().toUpperCase();
  const toCurrency = toCurrencyInput.value.trim().toUpperCase();
  const amount = parseFloat(convertAmountInput.value);
  
  console.log(`💱 Converting ${amount} ${fromCurrency} to ${toCurrency}`);
  
  // Hide previous results and errors
  conversionResult.style.display = "none";
  conversionError.style.display = "none";
  
  try {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest`,
      {
        params: {
          access_key: EXCHANGE_RATE_API_KEY,
          base: fromCurrency,
          symbols: toCurrency
        }
      }
    );
    
    console.log("✅ API Response:", response.data);
    
    // Check if the API call was successful
    if (response.data.success && response.data.rates) {
      // Get the exchange rate
      const rate = response.data.rates[toCurrency];
      
      if (!rate) {
        throw new Error(`Currency ${toCurrency} not found`);
      }
      
      // Calculate the converted amount manually
      const convertedAmount = amount * rate;
      
      // Display the result
      resultAmount.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      exchangeRate.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
      
      // Show the result box with animation
      conversionResult.style.display = "block";
      
      console.log(`💰 Conversion successful: ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
      console.log(`📊 Exchange rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`);
    } else {
      // API returned an error
      throw new Error(response.data.error?.info || "Conversion failed");
    }
    
  } catch (error) {
    console.error("❌ Currency conversion error:", error);
    console.error("Error details:", error.response?.data);
    
    // Display error message
    let errorMessage = "Unable to convert currency. ";
    
    if (error.response) {
      // API returned an error response
      console.log("Status code:", error.response.status);
      console.log("Error data:", error.response.data);
      
      if (error.response.status === 401) {
        errorMessage = "Invalid API key. Please check your access key.";
      } else if (error.response.data.error?.code === 'base_currency_access_restricted') {
        errorMessage = "Free plan only supports EUR as base currency. Try converting from EUR or upgrade your plan.";
      } else if (error.response.status === 403) {
        errorMessage = "This endpoint is not available on the free plan. Try converting from EUR.";
      } else if (error.response.status === 429) {
        errorMessage = "Rate limit exceeded. Please try again later.";
      } else {
        errorMessage += error.response.data.error?.info || error.response.data.message || "Please check your currency codes and try again.";
      }
    } else if (error.request) {
      // Request was made but no response received
      errorMessage += "Network error. Please check your internet connection.";
    } else {
      // Something else went wrong. Seek immediate help!
      errorMessage += error.message;
    }
    
    conversionError.textContent = errorMessage;
    conversionError.style.display = "block";
  }
}

// add all event listeners function
function addEventListeners() {
  userForm.addEventListener("submit", handleUserFormSubmit); // User form submission
  
  resetUserBtn.addEventListener("click", resetUserInfo); // Reset user button
  
  expenseForm.addEventListener("submit", handleExpenseFormSubmit); // Expense form submission
  
  filterCategorySelect.addEventListener("change", filterExpensesByCategory); // Filter category dropdown
  
  downloadBtn.addEventListener("click", exportBudgetSummary); // Download button
  
  emailBtn.addEventListener("click", emailBudgetSummary); // Email button
  
  toggleModeBtn.addEventListener("click", toggleDarkMode); // Dark mode toggle
  
  currencyForm.addEventListener("submit", handleCurrencyConversion); // Currency converter form

  console.log("All event listeners attached");
}

// initialisation function
function initialiseApp() {
  console.log("Initialising Budget Tracker App...");
  
  loadTheme(); // Load saved theme
  
  loadUserInfo(); // Load user info
  
  loadExpenses(); // Load expenses
  
  addEventListeners(); // Add event listeners
  
  // check if user info exists. if yes, render expenses and update overview
  if (userInfo) {
    renderExpenses(expenses);
    updateBudgetOverview();
  }
  
  console.log("Budget Tracker App initialised successfully!");
}

console.log("Starting Budget Tracker App...");
initialiseApp();
