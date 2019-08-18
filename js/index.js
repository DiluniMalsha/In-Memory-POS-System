


function addRow() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;


    var table = document.getElementsByTagName('table')[0];


    var newRow = table.insertRow(table.rows.length / 2 + 1);


    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);


    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = age;
}


