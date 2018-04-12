import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    return (
      <div>

       <table>
         <thead>
         <tr>
         <th>Saved GitHub User</th>
         </tr>
         </thead>
         <tbody>
            {
              this.props.studentList.map(student => {
               return (
               <tr key={student._id}>{student.github}</tr>
               )  
              })
              }
          </tbody>
        </table>

      </div>
    )
  }
  }


export default StudentList;
