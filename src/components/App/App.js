import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component {
  constructor(props) {
    super(props);
    // Keep track of the student list
    this.state = {
      studentList: [],
    };

    // Give our function access to `this`
    this.addStudent = this.addStudent.bind(this);
    this.getStudent = this.getStudent.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getStudent();
  }

  // GET data here
    getStudent() {
    // GET data here
    axios({
      method: 'GET',
      url: '/students'
    })
      .then( (response) => {
        console.log('response sent back from GET', response);
        this.setState({
          studentList: response.data
        });
        console.log('studentList array in STATE from response', this.state.studentList);
      }).catch((error) => {
        console.log('error sent back from POST', error)
      });
  }


  // This function is called by the StudentForm when the submit button is pressed
  addStudent(newStudent) {
    console.log(newStudent);
    // POST your data here
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent
    })
    .then( (response) => {
      console.log('response sent back from POST', response);
      this.setState({
        studentList: response.data
      });
    }).catch( (error) => {
      console.log('error sent back from POST', error)
    });
    this.getStudent();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <p>Student list goes here.</p>
      </div>
    );
  }
}

export default App;
