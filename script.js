var products;
products=[];

var costs;
costs=[];

var total=0;

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
    costs.forEach(function(cost) {
        total= total + parseInt(cost);
        $(".overallCost").text("Price:" + total);
        console.log(cost);
        });       
});

$(".purchaseItems").click(function() {
    alert("Thank you for purchasing " + products[0] + ", your total is $" + total + ".");
});


