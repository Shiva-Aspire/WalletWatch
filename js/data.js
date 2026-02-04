// This file manages the income and expense data input for each month.
// It includes functions to collect data from the input fields and store it for chart rendering.

const incomeData = {};
const expenseData = {};

function collectData() {
  const months = getMonthsShort();
  for (let month of months) {
    const income =
      parseFloat(document.getElementById(`income-${month}`).value) || 0;
    const expense =
      parseFloat(document.getElementById(`expense-${month}`).value) || 0;
    incomeData[month] = income;
    expenseData[month] = expense;
  }
  console.log("Data collected:", { incomeData, expenseData });
}

function getMonthsShort() {
  return [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
}

function getMonthsLong() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function getIncomeData() {
  collectData();
  return Object.values(incomeData);
}

function getExpenseData() {
  collectData();
  return Object.values(expenseData);
}

function getIncomeDataObject() {
  collectData();
  return incomeData;
}

function getExpenseDataObject() {
  collectData();
  return expenseData;
}
 