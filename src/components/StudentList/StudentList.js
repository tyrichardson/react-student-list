import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    return (
      <div>

       <table>
         <thead>
         <tr>
         <th>Saved GitHub User</th>
         <th>Action</th>
         </tr>
         </thead>
         <tbody>
            {
              this.props.studentList.map(student => {
               return (
               <tr>
               <td key={student._id}>{student.github}</td>
               <td><button>Get More Info</button> </td>
              </tr>
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
