import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    return (
      <div>

        <ul>
          {
            this.props.studentList.map(student => {
               return (
               <li key={student._id}>{student.github}</li>
               )  
              })
          }
        </ul>

      </div>
    )
  }
  }


export default StudentList;
