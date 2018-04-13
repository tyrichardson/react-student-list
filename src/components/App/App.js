import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  constructor(props) {
    super(props);
    // Keep track of the student list
    this.state = {
      studentList: [
       { id: '', github: ''}
      ],
    };

    // Give our function access to `this`; used arrow functions, so this is not necessary
    // this.addStudent = this.addStudent.bind(this);
    // this.getStudent = this.getStudent.bind(this);

  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getStudent();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent(newStudent) {
    console.log('new student added in input newStudent', newStudent);
    // POST your data here
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent
    })
      .then((response) => {
        console.log('response sent back from POST', response);
        this.getStudent();
      }).catch((error) => {
        console.log('error sent back from POST', error)
      });
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
        console.log('studentList array in STATE from GET response', this.state.studentList);
      }).catch((error) => {
        console.log('error sent back from POST', error)
      });
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>

        <br/>

        <StudentForm addStudent={this.addStudent}/>

        <p>Student List:</p>
        {/* This next line connects the component to this App.js page */}
          <StudentList studentList={this.state.studentList}/>
      
      </div>
    );
  }
}

export default App;
