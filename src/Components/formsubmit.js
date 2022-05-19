import React, { Fragment } from "react";
import "./../style.css";

const FormSubmit = (props) => {
    return (
        <Fragment>
            <form className="form-submit" onSubmit={props.addCourse}>
                <input className="input-add-course" type="text" placeholder="Enter Your Course" value={props.current} onChange={props.updateCourse} />
                <button className="add-course" type="submit">Add</button>
            </form>
        </Fragment>
    )
}
export default FormSubmit;