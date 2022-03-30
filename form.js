var count = 1;
function add_more_field() {
  count += 1;
  html =
    '<div class="row" id="row' +
    count +
    '">\
    <h5>' +
    count +
    '. Family Member Details</h5>\
    <div class="col-md-1">\
        <label for="inputSirname" class="form-label">Title</label>\
        <select id="inputSirname" name="title' +
    count +
    '" class="form-select">\
            <option selected>Title</option>\
            <option>Mr.</option>\
            <option>Mrs.</option>\
            <option>Miss.</option>\
        </select>\
    </div>\
    <div class="col-md-6">\
        <label for="inputFirstname" class="form-label">First Name</label>\
        <input type="name" name="firstName' +
    count +
    '" class="form-control" id="inputFirstname" placeholder="Enter first name">\
    </div>\
    <div class="col-md-5">\
        <label for="inputSecondName" class="form-label">Last Name</label>\
        <input type="name" name="lastName' +
    count +
    '" class="form-control" id="inputSecondName" placeholder="Enter last name">\
    </div>\
    <div class="col-md-12">\
        <label for="inputFirstname" class="form-label">Father/Husband Name</label>\
        <input type="name" name="fathername' +
    count +
    '" class="form-control" id="inputFirstname" placeholder="First name">\
    </div>\
    <div class="col-md-12">\
        <label for="inputFirstname" class="form-label">Mothers Name</label>\
        <input type="name" name="mothername' +
    count +
    '" class="form-control" id="inputFirstname" placeholder="First name">\
    </div>\
    <div class="col-12">\
        <label for="inputcontact" class="form-label">Contact Number</label>\
        <input type="number" name="contact' +
    count +
    '" class="form-control" id="inputcontact" placeholder="Enter your mobile number">\
    </div>\
    <div class="col-12">\
        <label for="inputemail" class="form-label">Email</label>\
        <input type="text" name="email' +
    count +
    '" class="form-control" id="inputemail" placeholder="Enter your email">\
    </div>\
    <div class="col-md-6">\
        <label for="inputCity" class="form-label">Date of Birth</label>\
        <select id="inputCity" class="form-select" name="dob' +
    count +
    '">\
            <option selected>Enter Date of birth</option>\
        </select>\
    </div>\
    <div class="col-md-6">\
        <label for="inputState" class="form-label">Blood Group</label>\
        <select id="inputState" class="form-select" name="bg' +
    count +
    '">\
            <option selected>Select BloodGroup</option>\
            <option>A</option>\
            <option>B</option>\
            <option>C</option>\
        </select>\
    </div>\
    <div class="col-md-6">\
        <label for="inputCity" class="form-label">Date of Marriage</label>\
        <select id="inputCity" class="form-select" name="dom' +
    count +
    '">\
            <option selected>Enter Date of Marriage</option>\
        </select>\
    </div>\
    <div class="col-md-6">\
        <label for="inputState" class="form-label">Gender</label>\
        <select id="inputState" class="form-select" name="gender' +
    count +
    '">\
            <option selected>Select Gender</option>\
            <option>Male</option>\
            <option>Female</option>\
            <option>Other</option>\
        </select>\
    </div>\
    <div class="col-md-8">\
        <label for="inputState" class="form-label">Aadhar Number</label>\
        <input type="number" class="form-control" name="aadhar' +
    count +
    '" id="inputAadhar" placeholder="Enter Aadhar Number">\
    </div>\
    <div class="col-md-6">\
        <label for="inputFirstname" class="form-label">Highest Qualification</label>\
        <select id="inputQualification" class="form-select" name="hq' +
    count +
    '">\
            <option selected>Select Qualification</option>\
            <option>Primary</option>\
            <option>Secondary</option>\
            <option>Graduate</option>\
            <option>Post-graduate</option>\
        </select>\
    </div>\
    <div class="col-md-6">\
        <label for="inputFirstname" class="form-label">Details</label>\
        <input type="name" name="details' +
    count +
    '" class="form-control" id="inputFirstname" placeholder="Qualification Details">\
    </div>\
    <div class="occupation_text" style="display: inline-flex; justify-content: center; margin-top: 5vh;">\
        <span>\
            <h3><b>Occupation Details:</b></h3>\
        </span>\
    </div>\
    <div class="col-md-8">\
        <label for="inputWork" class="form-label">Type of Work</label>\
        <select id="inputWork" name="tow' +
    count +
    '" class="form-select">\
            <option selected>Select Work Type</option>\
            <option>Businessman</option>\
            <option>Service Provider</option>\
            <option>Professional</option>\
            <option>Shop Owner</option>\
        </select>\
    </div>\
    <div class="col-md-8">\
        <label for="inputOccupation" class="form-label">Occupation</label>\
        <select id="inputOccupation" name="occupation' +
    count +
    '" class="form-select">\
            <option selected>Occupation</option>\
            <option>Whole Seller</option>\
            <option>Retailer</option>\
            <option>Manufacturer</option>\
            <option>Distrubuter</option>\
        </select>\
    </div>\
    <div class="col-md-8">\
        <label for="inputState" class="form-label">Details</label>\
        <input type="textarea" name="occupationdetails' +
    count +
    '" class="form-control" id="inputOccupationdetails" placeholder="Enter Details">\
    </div>\
    <div class="col-12">\
        <label for="inputAddress" class="form-label">Residential Address</label>\
        <input type="text" class="form-control" id="inputAddress" placeholder="Addressline 1" name="ad' +
    count +
    '">\
        <br>\
        <input type="text" class="form-control" id="inputAddress" placeholder="Addressline 2" name="ad' +
    count +
    '">\
    </div>\
    <div class="col-md-3">\
        <label for="inputCity" class="form-label">Village/Area</label>\
        <select id="inputCity" class="form-select" name="village' +
    count +
    '">\
            <option selected>Select</option>\
            <option>State 1</option>\
            <option>State 2</option>\
            <option>State 3</option>\
        </select>\
    </div>\
    <div class="col-md-3">\
        <label for="inputState" class="form-label">District</label>\
        <select id="inputState" class="form-select" name="district' +
    count +
    '">\
            <option selected>Select</option>\
            <option>State 1</option>\
            <option>State 2</option>\
            <option>State 3</option>\
        </select>\
    </div>\
    <div class="col-md-3">\
        <label for="inputState" class="form-label">Tehsil</label>\
        <select id="inputState" class="form-select" name="tehsil' +
    count +
    '">\
            <option selected>Select</option>\
            <option>State 1</option>\
            <option>State 2</option>\
            <option>State 3</option>\
        </select>\
    </div>\
    <div class="col-md-3">\
        <label for="inputPinCode" class="form-label">Pin Code</label>\
        <select id="inputPinCode" class="form-select" name="pincode' +
    count +
    '">\
            <option selected>Select Pincode</option>\
            <option>Pincode 1</option>\
            <option>Pincode 2</option>\
            <option>Pincode 3</option>\
        </select>\
    </div>\
    <button class="btn btn-danger float-right mt-2" id="'+count+'" onclick="remove(this)">Delete Member -</button>\
</div>\
<hr>';
  var form = document.getElementById("family-member-form");
  form.innerHTML += html;
}

function remove(button){
    let number = button.id
    let row = document.getElementById('row'+number)
    row.remove()
    // console.log(number)
}