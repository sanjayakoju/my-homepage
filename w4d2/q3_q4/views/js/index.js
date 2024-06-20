$(() => {
    function addedSuccess(data) {
        $("#success-message").text("Product added to cart!").show().delay(3000).fadeOut();
        $("#cart-count").text(data.cartCount);
    }

    function noSuccess() {
        $("#success-message").text("Unable to reach server").show().delay(3000).fadeOut();
    }

    $("#add-to-cart-form").submit(function(event) {
        event.preventDefault();
        const data = {
            name: $("#add-to-cart-form input[name='name']").val(),
            price: $("#add-to-cart-form input[name='price']").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
        }).done(addedSuccess).fail(noSuccess);
    });
});
