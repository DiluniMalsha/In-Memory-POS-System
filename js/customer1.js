var index, tbl = document.getElementById("table-1");

function addCustomerTable() {

    var tbl1 = document.getElementById("table-1");
    var raw = tbl1.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);
    var cell6 = raw.insertCell(5);
    var cell7 = raw.insertCell(6);


    var cid = document.getElementById("inputID").value;
    var name1 = document.getElementById("inputFirstName").value;
    var name2 = document.getElementById("inputLastName").value;
    var email = document.getElementById("inputEmail").value;
    var address = document.getElementById("inputAddress").value;
    var tell = document.getElementById("inputTelephone").value;


    cell1.innerHTML = '<div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>';
    cell2.innerHTML = cid;
    cell3.innerHTML = name1;
    cell4.innerHTML = name2;
    cell5.innerHTML = email;
    cell6.innerHTML = address;
    cell7.innerHTML = tell;

    select()

}


function select() {

    for (var i = 1; i < tbl.rows.length; i++) {

        tbl.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("inputID").value = this.cells[1].innerHTML;
            document.getElementById("inputFirstName").value = this.cells[2].innerHTML;
            document.getElementById("inputLastName").value = this.cells[3].innerHTML;
            document.getElementById("inputEmail").value = this.cells[4].innerHTML;
            document.getElementById("inputAddress").value = this.cells[5].innerHTML;
            document.getElementById("inputTelephone").value = this.cells[6].innerHTML;
        }

    }
    select();

}

function update() {


    var cid = document.getElementById("inputID").value,
        name1 = document.getElementById("inputFirstName").value,
        name2 = document.getElementById("inputLastName").value,
        email = document.getElementById("inputEmail").value,
        address = document.getElementById("inputAddress").value,
        tell = document.getElementById("inputTelephone").value;


    tbl.rows[index].cells[1].innerHTML = cid;
    tbl.rows[index].cells[2].innerHTML = name1;
    tbl.rows[index].cells[3].innerHTML = name2;
    tbl.rows[index].cells[4].innerHTML = address;
    tbl.rows[index].cells[5].innerHTML = email;
    tbl.rows[index].cells[6].innerHTML = tell;

}

function remove() {
    tbl.deleteRow(index);
    confirm("Are you sure to delete this record");

}