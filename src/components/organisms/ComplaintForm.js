import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

class ComplaintForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      complaint: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        complaint: this.state.complaint
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ name: '', email: '', complaint: '' });
      })
      .catch(err => {
        console.log(err);
      });
      
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <FormField 
        type="text" 
        name="name" 
        label="Name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <br />
        <FormField 
        type="text" 
        name="email" 
        label="Email Address" 
        value={this.state.email}
        onChange={this.handleChange}
        /><br />
        <FormField 
        type="textarea" 
        name="complaint" 
        label="Complaint"
        value={this.state.complaint}
        onChange={this.handleChange} /><br />
        <Button type="submit">Complain</Button>
      </form>
    </div>
  );
  };
};

export default ComplaintForm;