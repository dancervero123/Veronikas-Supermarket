var products;
products=[];

var costs;
costs=[];



$(".addProduct").click(function() {
    var productName = $(".productName").val();
    var productPrice = $(".price").val();
    products.push(productName);
    console.log(productName);
    var numProducts= products.length;
    $(".numItems").text("Items in Cart: " + numProducts);
    costs.push(productPrice);
    $(".rowLeft").append("<li>" + productName + "</li>");
    $(".rowRight").append("<li>"+ "$" + productPrice + "</li>");
    var total=0;
    costs.forEach(function(cost) {
        total= total + parseInt(cost);
        $(".overallCost").text("Price: $" + total);
        console.log(cost);
        });       
});

$(".purchaseItems").click(function() {
    var total=0;
    alert("Thank you for purchasing " + products[0] + ", your total is $" + total + ".");
});


