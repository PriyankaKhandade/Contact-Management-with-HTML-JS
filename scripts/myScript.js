<!DOCTYPE html>
<html>

<head>
    <title>user Contacts</title>
    <meta charset="windows-1252">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>

<body>
    <div class="wrapper">
        <div class="row info">
            <h3>Application workflow</h3>
            <ul>
                <li>This is user contact management web page, using HTML, css and javascript.</li>
                <li>In this application you can add, delete user contact details in the table using contact details form.</li>
                <li>You can edit and Inactive contact details using icons provided in each row.</li>
                <li>you can reactive a inactive user by open it in edit mode and save.</li>
            </ul>
        </div>
        <div class="row">
            <form class="col-sm-4 form">
                <div hidden class="form-group">
                    <label class="form-lbl" for="id">Id : </label>
                    <input type="text" name="id" id="id">
                </div>
                <div class="form-group">
                    <label class="form-lbl" for="fname">First Name :</label>
                    <input type="text" name="fname" id="fname">
                    <div class="invalid-feedback" id="fnameErrorMsg" style="display : none;">
                        Please provide a valid First Name.
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-lbl" for="lname">Last Name :</label>
                    <input type="text" name="lname" id="lname">
                    <div class="invalid-feedback" id="lnameErrorMsg" style="display : none;">
                        Please provide a valid Last Name.
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-lbl" for="email">Email :</label>
                    <input type="email" name="email" id="email">
                    <div class="invalid-feedback" id="emailErrorMsg" style="display : none;">
                        Please provide a valid Email.
                    </div>
                    <div class="invalid-feedback" id="emailNotUniqErrorMsg" style="display : none;" min="1">
                        Email is already registred with other user.
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-lbl" for="phoneNumber">Phone Number :</label>
                    <input type="number" name="phoneNumber" id="phoneNumber">
                    <div class="invalid-feedback" id="pnErrorMsg" style="display : none;">
                        Please provide a valid Phone Number.
                    </div>
                    <div class="invalid-feedback" id="pnNotUniqlErrorMsg" style="display : none;">
                        Phone Number is already registred with other user.
                    </div>
                </div>

                <button type="button" class="btn btn-success" onclick="saveUser();">Save</button>
                <button type="button" class="btn btn-info" onclick="resetAll();">Reset</button>
                <button type="button" class="btn btn-danger" onclick="deleteSelectedRow();">Delete</button>
                <div class="invalid-feedback" id="deleteErrorMsg" style="display : none;">
                    Please select a row to delete.
                </div>
            </form>

            <div class="col-sm-8">
                <table id="dataTable" class="table contacts-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Satus</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="scripts/myScript.js"></script>
</body>

</html>
