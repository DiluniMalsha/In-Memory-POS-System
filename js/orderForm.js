
function item(code, name, qty, price) {
    this.code=code;
    this.name=name;
    this.qty=qty;
    this.price=price;
}
function customer(id, fname, lname) {
    this.id=id;
    this.fname=fname;
    this.lname=lname;
}
var items=[
    new item("I001","Anchor",350.00,12),
    new item("I002","Lux",50.00,60),
    new item("I003","Sunlight",55.00,50),
    new item("I004","Velvet",60.00,50),

];
var customers = [
    new customer("C001","Diluni","Malsha"),
    new customer("C002","Malsha","Peiris"),
    new customer("C003","Kavindu","Dhananjaya"),
    new customer("C004","Kalana","Sasanka"),
    new customer("C005","Chamodi","Tharukshika"),
];

$(document).ready(function () {
    for (var i = 0; i < items.length; i++) {
        $("#inputItemCode").append("<option>"+items[i].code+"</option>");
    }
    for (var i = 0; i < items.length; i++) {
        $("#inputCustomerID").append("<option>"+customers[i].id+"</option>");
    }


    $("#inputCustomerID").change(function () {
        var x = $(this).val();
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id== x){
                $('#inputCustomerID').val(customers[i].id);
                $('#inputFirstName').val(customers[i].fname);
                $('#inputLastName').val(customers[i].lname);
            }
        }
    });

    $("#inputItemCode").change(function () {
        var x = $(this).val();
        for (var i = 0; i < items.length; i++) {
            if (items[i].code== x){
                $('#inputItemCode').val(items[i].code);
                $('#inputItemName').val(items[i].name);
                $('#inputAvailableQty').val(items[i].qty);
                $('#inputUnitPrice').val(items[i].price);
            }
        }
    });

    $("#add").click(function () {
        if ($("#inputAvailableQty").val()!="" && $("#inputQty").val()!="" && Number.parseInt($("#inputAvailableQty").val())>Number.parseInt($("#inputQty").val())) {
            var bol=false;
            var row;
            var newQ=Number.parseInt($("#inputQty").val());
            $("tbody tr").each(function () {
                if ($(this).find("td:first").text()== $("#inputItemCode").val()){
                    bol=true;
                    row=$(this);
                }
            });
            var i;
            for (i = 0; i < items.length; i++) {
                if (items[i].code == $("#inputItemCode").val()) {
                    items[i].qty-=newQ;
                    $("#inputAvailableQty").val(items[i].qty);
                }
            }
            if (bol){
                var old =Number.parseInt($(row).find("td:eq(2)").text());

                $(row).find("td:eq(2)").text(newQ+old);
            } else {

                $("table tbody").append(
                    "<tr>" +
                    "<td>" + $("#inputItemCode").val() + "</td>" +
                    "<td>" + $("#inputItemName").val() + "</td>" +
                    "<td>" + $("#inputUnitPrice").val() + "</td>" +
                    "<td>" + $("#inputQty").val() + "</td>" +
                    "<td>" + ($("#inputQty").val()) * ($("#inputUnitPrice").val()) + "</td>" +
                    "<td><button class='ui inverted red button' type='button' id='remove_btn' onclick='deleteOrderRow(this)'><i class=\"fas fa-trash-alt\"></i></button></td>" +
                    "</tr>"
                );
            }
            countTotal();
        }else {
            alert("More than Avilable Qontity")
        }

    });

    $("#final-discount").change(function () {
        var dis = Number.parseFloat($(this).val());
        var tot = Number.parseFloat($("#final-total").val());
        var x= tot*(1-dis*0.01);
        if (!isNaN(x)) {
            $("#inputTotal").val(x);
        }
    });
    $("#paid-amount").change(function () {
        var x = Number.parseFloat($(this).val());
        var y = Number.parseFloat($("#sub-total").val());
        if (x>y && !isNaN(x)) {
            $("#balance").val(x - y);
        }else {
            alert("invalid paid amount");
        }
    });
});

function deleteOrderRow(x) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].code==$(x).parents("tr").find("td:eq(0)").text()){
            items[i].qty+=Number.parseInt($(x).parents("tr").find("td:eq(02)").text());
            $('#item option:first').click();
        }
    }
    $(x).parents("tr").remove();
    $("#final-total").val("");
    $("#final-discount").val("");
    $("#inputTotal").val("");
    countTotal();

}

function countTotal() {
    var tot=0;
    $("tbody tr").each(function () {
        var qty = Number.parseInt($(this).find("td:eq(2)").text());
        var  price =Number.parseInt($(this).find("td:eq(3)").text());
        tot+=qty*price;
    });
    $("#final-total").val(tot);
    if ($("#final-discount").val() == "") {
        $("#inputTotal").val(tot);
    }else {
        var dis = Number.parseFloat($("#final-discount").val());
        var x= tot*(1-dis*0.01);
        $("#inputTotal").val(x);

    }
    if ($("#inputTotal").val()!=""||$("#inputTotal").val()!="0"){
        $("#paid-amount").removeAttr('disabled');
    } else {
        $("#paid-amount").prop('disabled',true);
    }
}
$("#order_form").submit(false);
