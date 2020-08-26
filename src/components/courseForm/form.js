import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current} onChange={props.updateCourse} required />
            <input className="btn" type="submit"  value="Add Course" />
        </form>
    )
}

export default Form;