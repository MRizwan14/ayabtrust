import React, { Component } from "react";
import axios from "axios";
import "./OfferHelp.css";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      age: "",
      gender: "select",
      occupation: "",
      address: "",
      phoneNumber: "",
      city: "select",
      province: "select",
      donation: "",
      formErrors: {},
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const {
      FirstName,
      LastName,
      age,
      gender,
      occupation,
      address,
      phoneNumber,
      city,
      province,
      donation,
    } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //First name
    if (!FirstName) {
      formIsValid = false;
      formErrors["FirstNameErr"] = "First Name is required.";
    }
    //Last name
    if (!LastName) {
      formIsValid = false;
      formErrors["LastNameErr"] = "Last Name is required.";
    }
    //Address
    if (!address) {
      formIsValid = false;
      formErrors["AddressErr"] = "Address is required.";
    }
    //Occupation
    if (!occupation) {
      formIsValid = false;
      formErrors["occupationErr"] = "Occupation is required.";
    }
    //donate
    if (!donation) {
      formIsValid = false;
      formErrors["donateErr"] = "Amount is required.";
    }

    //Age
    if (!age) {
      formIsValid = false;
      formErrors["ageErr"] = "Age is required.";
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }

    //Phone number
    if (!phoneNumber) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = "Phone number is required.";
    }

    //City
    if (city === "" || city === "select") {
      formIsValid = false;
      formErrors["cityErr"] = "Select city.";
    }

    //Province
    if (province === "" || province === "select") {
      formIsValid = false;
      formErrors["provinceErr"] = "Select province.";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    if (this.handleFormValidation()) {
      alert("Your request has been successfully submitted.");
      this.setState(this.state);
    }
    axios
      .post("http://localhost:5000/donate/add", this.state)
      .then((res) => console.log(res.data));
  };

  render() {
    const {
      FirstNameErr,
      LastNameErr,
      ageErr,
      genderErr,
      occupationErr,
      phoneNumberErr,
      AddressErr,
      cityErr,
      provinceErr,
      donateErr,
    } = this.state.formErrors;

    return (
      <div className="container formDiv">
        <h3 style={{ textAlign: "center" }}>Donate</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  value={this.state.FirstName}
                  onChange={this.handleChange}
                  placeholder="First name"
                  className={FirstNameErr ? " showError" : ""}
                />
                {FirstNameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {FirstNameErr}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  value={this.state.LastName}
                  onChange={this.handleChange}
                  placeholder="Last name"
                  className={LastNameErr ? " showError" : ""}
                />
                {LastNameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {LastNameErr}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="Age">Age</label>
                <input
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="Age"
                  className={ageErr ? " showError" : ""}
                />
                {ageErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {ageErr}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  onChange={this.handleChange}
                  className={genderErr ? " showError" : ""}
                  value={this.state.gender}
                >
                  <option value="select">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                </select>
                {genderErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {genderErr}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="Occupation">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={this.state.occupation}
                  onChange={this.handleChange}
                  placeholder="Occupation"
                  className={occupationErr ? " showError" : ""}
                />
                {occupationErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {occupationErr}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
                  placeholder="Phone Number"
                  className={phoneNumberErr ? " showError" : ""}
                />
                {phoneNumberErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {phoneNumberErr}
                  </div>
                )}
              </div>
              <div className="">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="Address"
                  className={AddressErr ? " showError" : ""}
                />
                {AddressErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {AddressErr}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="city">City</label>
                <select
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  className={cityErr ? " showError" : ""}
                >
                  <option value="select">--Select--</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                {cityErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {cityErr}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="province">Province</label>
                <select
                  name="province"
                  value={this.state.province}
                  onChange={this.handleChange}
                  className={provinceErr ? " showError" : ""}
                >
                  <option value="select">--Select--</option>
                  <option value="Punjab">Punjab</option>
                  <option value="KPK">KPK</option>
                  <option value="Sindh">Sindh</option>
                </select>
                {provinceErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {provinceErr}
                  </div>
                )}
              </div>

              <div className="">
                <label htmlFor="donate">Donate</label>
                <input
                  type="text"
                  name="donation"
                  onChange={this.handleChange}
                  value={this.state.donation}
                  placeholder="Enter Amount"
                  className={donateErr ? " showError" : ""}
                />
                {donateErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {donateErr}
                  </div>
                )}
              </div>

              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Donate;
