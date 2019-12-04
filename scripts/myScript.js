var rIndex;
var table = document.getElementById("dataTable");


// validates form inputs
function validateInputs() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var isValid = true,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        email = document.getElementById("email").value,
        phoneNumber = document.getElementById("phoneNumber").value;

    if (fname === "") {
        document.getElementById("fnameErrorMsg").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("fnameErrorMsg").style.display = "none";
    }
    if (lname === "") {
        document.getElementById("lnameErrorMsg").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("lnameErrorMsg").style.display = "none";
    }
    if (email === "" || !email.match(mailformat)) {
        document.getElementById("emailErrorMsg").style.display = "block";
        document.getElementById("emailNotUniqErrorMsg").style.display = "none";
        isValid = false;
    } else {
        if (!rIndex && !isUniqueValue(email, 3)) {
            document.getElementById("emailNotUniqErrorMsg").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("emailNotUniqErrorMsg").style.display = "none";
        }
        document.getElementById("emailErrorMsg").style.display = "none";
    }
    if (phoneNumber === "" || phoneNumber.length !== 10 || parseInt(phoneNumber) < 0) {
        document.getElementById("pnErrorMsg").style.display = "block";
        document.getElementById("pnNotUniqlErrorMsg").style.display = "none";
        isValid = false;
    } else {
        if (!rIndex && !isUniqueValue(phoneNumber, 4)) {
            document.getElementById("pnNotUniqlErrorMsg").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("pnNotUniqlErrorMsg").style.display = "none";
        }
        document.getElementById("pnErrorMsg").style.display = "none";
    }
    return isValid;
}

//Check values are uniq or not
function isUniqueValue(value, columnNumber) {
    const tableLength = table.rows.length;
    for (let i = 1; i < tableLength; i++) {
        if (table.rows[i].cells[columnNumber].innerHTML === value) {
            return false;
        }
    }
    return true;

}

// add Row to table
function saveUser() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (validateInputs() && table) {
        if (document.getElementById("id").value && document.getElementById("id").value > 0) {
            editHtmlTbleSelectedRow();
        } else {
            var newRow = table.insertRow(table.length),
                cell0 = newRow.insertCell(0),
                cell1 = newRow.insertCell(1),
                cell2 = newRow.insertCell(2),
                cell3 = newRow.insertCell(3),
                cell4 = newRow.insertCell(4),
                cell5 = newRow.insertCell(5),
                cell6 = newRow.insertCell(6);

            cell0.innerHTML = newRow.rowIndex;
            cell1.innerHTML = document.getElementById("fname").value;
            cell2.innerHTML = document.getElementById("lname").value;
            cell3.innerHTML = document.getElementById("email").value;
            cell4.innerHTML = document.getElementById("phoneNumber").value;
            cell5.innerHTML = "Active";
            cell5.classList.add('active-status');

            var div = document.createElement('div');
            div.innerHTML = `<span id="editBtn" title="Edit User" class="glyphicon glyphicon-pencil edit-btn">
            </span> <span id="deleteBtn" title="Inactive User" class="glyphicon glyphicon-remove delete-btn" onclick="event.stopPropagation()"></span>`;
            cell6.appendChild(div);
            // call the function to set the event to the new row
            attachRowclickEvent(newRow.rowIndex);
            attachClickEventToEdit(newRow.rowIndex);
            attachClickEventToInactive(newRow.rowIndex);
            resetAll();
        }
    }
}

// edit selected row and save
function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        email = document.getElementById("email").value,
        phoneNumber = document.getElementById("phoneNumber").value;
    if (validateInputs()) {
        table.rows[rIndex].cells[1].innerHTML = fname;
        table.rows[rIndex].cells[2].innerHTML = lname;
        table.rows[rIndex].cells[3].innerHTML = email;
        table.rows[rIndex].cells[4].innerHTML = phoneNumber;

        if (table.rows[rIndex].cells[5].innerHTML === "Inactive") {
            table.rows[rIndex].cells[5].innerHTML = "Active";
            table.rows[rIndex].cells[5].classList.remove('inactive-status');
            table.rows[rIndex].cells[5].classList.add('active-status');
        }
        resetAll();
    }
}

function attachRowclickEvent(rowIndex) {
    // attach the event listener
    table.rows[rowIndex].addEventListener("click", function() {
        // get the seected row
        addValuesToForm(rowIndex);
    });
}

function attachClickEventToEdit(rowIndex) {
    var btnList = document.getElementsByClassName('edit-btn');
    // attach the event listener
    btnList[rowIndex - 1].addEventListener("click", function() {
        addValuesToForm(rowIndex - 1);
    });
}

// add selected table row data to form for edit
function addValuesToForm(rowindex) {
    const tableRow = table.rows[rowindex];
    rIndex = tableRow.rowIndex;
    document.getElementById("id").value = tableRow.cells[0].innerHTML;
    document.getElementById("fname").value = tableRow.cells[1].innerHTML;
    document.getElementById("lname").value = tableRow.cells[2].innerHTML;
    document.getElementById("email").value = tableRow.cells[3].innerHTML;
    document.getElementById("phoneNumber").value = tableRow.cells[4].innerHTML;
}

// Updates user status as inactive
function attachClickEventToInactive(rowIndex) {
    var btnList = document.getElementsByClassName('delete-btn');
    btnList[rowIndex - 1].addEventListener("click", function() {
        const tableRow = table.rows[rowIndex];
        rIndex = tableRow.rowIndex;
        tableRow.cells[5].innerHTML = "Inactive"
        tableRow.cells[5].classList.remove('active-status');
        tableRow.cells[5].classList.add('inactive-status');
    });
}

// delete selected row from table
function deleteSelectedRow() {
    if (rIndex > 0) {
        document.getElementById("deleteErrorMsg").style.display = "none";
        table.deleteRow(rIndex);
        resetAll();
        rIndex = 0;
    } else {
        document.getElementById("deleteErrorMsg").style.display = "block";
    }
}

function resetAll() {
    // clear input text
    rIndex = 0;
    document.getElementById("id").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    hideAllErrorMessages();
}

// hide all error messages
function hideAllErrorMessages() {
    var errorDivList = document.getElementsByClassName("invalid-feedback");
    const listLength = errorDivList.length
    for (let i = 0; i < listLength; i++) {
        errorDivList[i].style.display = "none";
    }
}
