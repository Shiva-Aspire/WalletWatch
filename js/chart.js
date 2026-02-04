// This file is responsible for rendering the bar chart using the chart library.
// It retrieves the data from data.js and uses it to create the chart visualization.

let chart = null;

function initializeChart() {
  const ctx = document.getElementById("income-expense-chart");
  if (!ctx) {
    console.error("Canvas element not found!");
    return;
  }

  const context = ctx.getContext("2d");

  chart = new Chart(context, {
    type: "bar",
    data: {
      labels: getMonthsLong(),
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(40, 167, 69, 0.8)",
          borderColor: "rgba(40, 167, 69, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [],
          backgroundColor: "rgba(220, 53, 69, 0.8)",
          borderColor: "rgba(220, 53, 69, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return "$" + value.toLocaleString();
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Monthly Income vs Expenses",
        },
      },
    },
  });
}

function updateChart() {
  if (!chart) {
    initializeChart();
  }

  const incomeData = getIncomeData();
  const expenseData = getExpenseData();

  chart.data.datasets[0].data = incomeData;
  chart.data.datasets[1].data = expenseData;
  chart.update();

  console.log("Chart updated with data:", { incomeData, expenseData });
}

// Initialize chart when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit to ensure all scripts are loaded
  setTimeout(() => {
    initializeChart();
  }, 100);
});
 