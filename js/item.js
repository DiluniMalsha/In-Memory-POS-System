var index, tbl = document.getElementById("table-2");

function addItemTable() {


    var tbl2 = document.getElementById("table-2");
    var raw = tbl2.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);
    var cell6 = raw.insertCell(5);
    var cell7 = raw.insertCell(6);


    var itmCode = document.getElementById("inputCode").value;
    var itmName = document.getElementById("inputName").value;
    var price = document.getElementById("inputPrice").value;
    var date = document.getElementById("inputAddedDate").value;
    var total = document.getElementById("inputTotalQuantity").value;
    var returned = document.getElementById("inputReturned").value;


    cell1.innerHTML = '<div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>';
    cell2.innerHTML = itmCode;
    cell3.innerHTML = itmName;
    cell4.innerHTML = price;
    cell5.innerHTML = date;
    cell6.innerHTML = total;
    cell7.innerHTML = returned;

    select()

}


function select() {

    for (var i = 1; i < tbl.rows.length; i++) {

        tbl.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("inputCode").value = this.cells[1].innerHTML;
            document.getElementById("inputName").value = this.cells[2].innerHTML;
            document.getElementById("inputPrice").value = this.cells[3].innerHTML;
            document.getElementById("inputAddedDate").value = this.cells[4].innerHTML;
            document.getElementById("inputTotalQuantity").value = this.cells[5].innerHTML;
            document.getElementById("inputReturned").value = this.cells[6].innerHTML;
        }

    }
    select();


}

function update() {

    var itmCode = document.getElementById("inputCode").value,
        itmName = document.getElementById("inputName").value,
        price = document.getElementById("inputPrice").value,
        date = document.getElementById("inputAddedDate").value,
        total = document.getElementById("inputTotalQuantity").value,
        returned = document.getElementById("inputReturned").value;


    tbl.rows[index].cells[1].innerHTML = itmCode;
    tbl.rows[index].cells[2].innerHTML = itmName;
    tbl.rows[index].cells[3].innerHTML = price;
    tbl.rows[index].cells[4].innerHTML = date;
    tbl.rows[index].cells[5].innerHTML = total;
    tbl.rows[index].cells[6].innerHTML = returned;

}

function remove() {
    tbl.deleteRow(index);
    confirm("Are you sure to delete this record");

}