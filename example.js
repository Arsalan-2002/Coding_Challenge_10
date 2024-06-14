
function loadAndDisplayData() {

    d3.dsv(",", "purchase_orders.csv", function(d) {
        return {
            customerName: d.customerName,
            orderId: d.orderId,
            purchaseAmount: parseFloat(d.purchaseAmount)
        };
    }).then(data => {
        
        const ul = d3.select("#purchase-orders");

        // Overhere I create an LI element for each data entry
        data.forEach(d => {
            ul.append("li")
              .text(`${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: $${d.purchaseAmount.toFixed(2)}`);
        });
    }).catch(error => {
        console.error("Error loading the CSV file:", error);
    });
}

loadAndDisplayData();
