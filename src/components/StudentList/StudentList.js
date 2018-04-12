import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StudentList extends Component {
  render() {
    return (
      <div>
      {/* <pre>{JSON.stringify(this.props.studentList)}</pre> */ }
      < ul >
      { this.props.studentList.map(student => <li key={student.id}>{student.github}.</li>) }
          </ul >
      </div>
    )
  }
  }





export default StudentList;