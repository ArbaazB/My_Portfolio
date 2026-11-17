// Chart.js visualizations use clearly labelled illustrative data.
// Replace these arrays with verified project data before publishing.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Chart === "undefined") return;

  Chart.defaults.color = "#a6b1c4";
  Chart.defaults.font.family = '"DM Sans", sans-serif';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: { legend: { position: "bottom", labels: { padding: 18 } } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#a6b1c4" } },
      y: { beginAtZero: true, grid: { color: "rgba(255,255,255,.08)" }, ticks: { color: "#a6b1c4" } }
    }
  };

  const trendCanvas = document.getElementById("trendChart");
  if (trendCanvas) {
    new Chart(trendCanvas, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          { label: "Revenue", data: [50000, 60000, 55000, 70000, 75000, 80000], borderColor: "#70e1d1", backgroundColor: "rgba(112,225,209,.10)", tension: .35, fill: true, borderWidth: 2 },
          { label: "Expenses", data: [30000, 35000, 32000, 40000, 42000, 45000], borderColor: "#8aa7ff", tension: .35, borderWidth: 2 },
          { label: "Profit", data: [20000, 25000, 23000, 30000, 33000, 35000], borderColor: "#f4d38a", tension: .35, borderWidth: 2 }
        ]
      },
      options: commonOptions
    });
  }

  const revenueCanvas = document.getElementById("revenueChart");
  if (revenueCanvas) {
    new Chart(revenueCanvas, {
      type: "bar",
      data: {
        labels: months,
        datasets: [{ label: "Revenue", data: [50000, 60000, 55000, 70000, 75000, 80000], backgroundColor: "rgba(112,225,209,.72)", borderRadius: 6, maxBarThickness: 38 }]
      },
      options: commonOptions
    });
  }

  const allocationCanvas = document.getElementById("allocationChart");
  if (allocationCanvas) {
    new Chart(allocationCanvas, {
      type: "doughnut",
      data: {
        labels: ["Category A", "Category B", "Category C"],
        datasets: [{ data: [40, 35, 25], backgroundColor: ["#70e1d1", "#8aa7ff", "#f4d38a"], borderColor: "#111a2e", borderWidth: 4, hoverOffset: 7 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: { legend: { position: "bottom", labels: { padding: 20, usePointStyle: true } } }
      }
    });
  }
});
