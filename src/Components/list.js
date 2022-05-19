import React, { Component, Fragment } from "react";
import "./../style.css";

class List extends Component {
    state = {
        isEdit : false
    }

    renderCourseItems = () => {
        return (
            <li className="item">
                <span className="name-course">{this.props.nameCourse.name}</span>
                <div>
                    <button className="edit-course" onClick={() => this.toggleState()}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="delete-course" onClick={() => this.props.deleteCourse(this.props.index)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </li>
        )
    }
    renderUpdateCourse = () => {
        return (
            <form className="update-course-form" onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input= v}} defaultValue={this.props.nameCourse.name} />
                <button className="update-course"><i className="fa-solid fa-pen"></i></button>
            </form>
        )
    }

    toggleState = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit : !isEdit
        })
    }

    updateCourseItem = (event) =>{
        event.preventDefault();
        this.props.editCourse(this.props.index, this.input.value )
        this.toggleState()
    }

    render() { 
        let {isEdit} = this.state
        return (
            <Fragment>
                {isEdit ? this.renderUpdateCourse() : this.renderCourseItems()}
            </Fragment>
        );
    }
}
 
export default List;