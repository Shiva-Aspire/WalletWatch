// This file serves as the main JavaScript entry point for the application.
// It handles tab switching between the Data and Chart tabs and initializes the input forms.

document.addEventListener("DOMContentLoaded", function () {
  console.log("App initialized");

  // Initialize event listeners
  initializeEventListeners();

  // Initialize chart when page loads
  if (typeof initializeChart === "function") {
    initializeChart();
  }
});

function initializeEventListeners() {
  // Submit button event listener
  const submitButton = document.getElementById("submit-data");
  if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      handleDataSubmit();
    });
  }

  // Tab switch event listeners
  const chartTab = document.getElementById("chart-tab");
  if (chartTab) {
    chartTab.addEventListener("shown.bs.tab", function () {
      console.log("Chart tab activated");
      // Update chart when switching to chart tab
      setTimeout(() => {
        if (typeof updateChart === "function") {
          updateChart();
        }
      }, 100);
    });
  }

  // Add input change listeners for real-time updates
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input) => {
    input.addEventListener("change", function () {
      console.log("Input changed:", this.id, this.value);
    });
  });
}

function handleDataSubmit() {
  console.log("Data submitted");

  // Collect and validate data
  if (typeof collectData === "function") {
    collectData();
  }

  // Update chart
  if (typeof updateChart === "function") {
    updateChart();
  }

  // Switch to chart tab
  const chartTab = document.getElementById("chart-tab");
  if (chartTab) {
    const tab = new bootstrap.Tab(chartTab);
    tab.show();
  }

  // Show success message
  showMessage("Data updated successfully!", "success");
}

function showMessage(message, type = "info") {
  // Create a simple toast/alert
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  alert.style.top = "20px";
  alert.style.right = "20px";
  alert.style.zIndex = "1050";
  alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  document.body.appendChild(alert);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (alert && alert.parentNode) {
      alert.parentNode.removeChild(alert);
    }
  }, 3000);
}
 