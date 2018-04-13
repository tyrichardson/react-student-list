import React, { Component } from 'react';
import Button from 'material-ui/Button';


class StudentListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    }
  }

  handleShow = () => {
    //show the data
    this.setState({
      isShown: !this.state.isShown
    })
  }

  render() {
    const imagePath = `https://github.com/${this.props.student.github}.png?size=50`;
    let listItem;
    if (this.state.isShown) {
      listItem = (
        <div>
        <li><img src={imagePath} />
        {this.props.student.github}
        <Button onClick={this.handleShow}>Hide</Button>
        </li>
        <br />
        </div>
      )
    } else {
      //DONT RENDER THE NORMAL THING
      listItem = (
        <li>{this.props.student.github}
        <Button onClick={this.handleShow}>Show</Button>
        </li>
      )
    }
    return (
      listItem
    )
  }
}

export default StudentListItem;
