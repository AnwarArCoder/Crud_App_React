import React, { Component, Fragment } from "react";
import FormSubmit from "./Components/formsubmit";
import List from "./Components/list";
import "./style.css";

class App extends Component {
    state = {
        courses : [
            { name : 'HTML' },
            { name : 'Css' },
            { name : 'JavaScript' }
        ],
        current : ''
    }


    // Update Courses
    updateCourse = (event) => {
        // console.log( event.target.value )
        this.setState({
            current : event.target.value
        })
    }



    // Add Courses
    addCourse = (event) => {
        // console.log( "Course Added" );
        event.preventDefault()
        
        if( this.state.current === '' ){
            return false
        } else {
            let current = this.state.current;
            let courses = this.state.courses;
            courses.push({ name : current })
            this.setState({
                courses : courses,
                current : ''
            })
        }
    }

    deleteCourse = (index) => {
        let courses = this.state.courses
        courses.splice( index, 1 )
        this.setState({
            courses : courses
        })
    }

    editCourse = (index, newValue) => {
        let courses = this.state.courses
        let course = courses[index]
        course['name'] = newValue
        this.setState({courses : courses})
    }

    render() { 
        const {courses} = this.state;
        // const coursesList = courses.map( (course, index) => {
        //     return <List key={index} nameCourse={course} update={this.handelChange} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        // } )


        let lengthCourses = courses.length;
        const coursesList = lengthCourses ? (
            courses.map( (course, index) => {
                return <List key={index} nameCourse={course} update={this.handelChange} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
            } )
            ) : ( <li><p className="no-item">There Is No item to Show</p></li> )

        return (
            <Fragment>
                <section className="app">
                    <h1 className="name-project">Course App</h1>
                    <FormSubmit updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
                    <ul className="courses-list">
                        {coursesList}
                    </ul>
                </section>
            </Fragment>
        );
    }
}
 
export default App;