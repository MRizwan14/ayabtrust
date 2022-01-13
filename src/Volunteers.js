import axios from "axios";
import React, { Component } from "react";

class Volunteers extends Component {
  state = {
    volunteerData: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/volunteer")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ volunteerData: data });
        console.log(this.state.volunteerData);
      });
  }

  handleDelete = (id) => {
    console.log(id);
    axios.delete("http://localhost:5000/volunteer/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      volunteerData: this.state.volunteerData.filter((el) => el._id !== id),
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Our Volunteers</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Volunteer Name</th>
                <th scope="col">Assistance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.volunteerData.map((details) => (
                <tr>
                  <td>{details.FirstName}</td>
                  <td>{details.hyh}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={(e) => this.handleDelete(details._id)}
                    >
                      Delete
                    </button>
                    <button type="button" class="btn btn-outline-success ms-2">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Volunteers;
