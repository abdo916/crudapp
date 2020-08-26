import React, {Component} from 'react';
import Form from './components/courseForm/form';
import List from './components/courseList/list';


class App extends Component {

  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Python'}
    ],
    current : ''
  }


  //update course
  updateCourse = (e) => {
    this.setState ({
      current: e.target.value
    })
  }

  // add course
  addCourse = (e) => {
    e.preventDefault();
    let {current} = this.state;
    let {courses} = this.state;
    courses.push({name: current});
    this.setState ({
      courses: courses,
      current:''
    });
    //e.currentTarget.reset();
 
  }

  //delete course 
  deleteCourse=(index) => {
    let {courses} = this.state;
    courses.splice(index, 1);
    this.setState({
      courses: courses
    })
    

  }

  //edit course
  editCourse = (index, value) => {
    let {courses} = this.state;
    let course = courses [index];
    course['name'] = value;
    this.setState ({
      courses
    })

  }

  render() {
    const {courses} = this.state;
    const listed = courses.map( (course, index) => {
      return <List details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return(
      <section className="App">
        <h2>Add Course</h2>
        <Form current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>{listed}</ul>
      </section>
    )
  }
}

export default App;
