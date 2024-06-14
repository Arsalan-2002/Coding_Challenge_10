// example.js

// Function to load and display purchase order data
function loadAndDisplayData() {
    d3.csv("data/purchase_orders.csv").then(data => {
        // Select the UL element
        const ul = d3.select("#purchase-orders");

        // Create an LI element for each data entry
        data.forEach(d => {
            ul.append("li")
              .text(`${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: $${d.purchaseAmount}`);
        });
    }).catch(error => {
        console.error("Error loading the CSV file:", error);
    });
}

// Call the function to load and display data
loadAndDisplayData();
