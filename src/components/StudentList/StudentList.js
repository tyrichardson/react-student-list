import React, { Component } from 'react';
import StudentListItem from '../StudentList/StudentListItem/StudentListItem.js'

class StudentList extends Component {

  render() {
    let students = this.props.studentList.map((student) => {
      return (
        <StudentListItem
          key={student._id}
          student={student}
          handleGetMoreInfo={this.props.handleGetMoreInfo}/>
      )
    });


    return (
      <ul>
        {students}
      </ul>
    )
  }
}

export default StudentList;
