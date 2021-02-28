import React from 'react'

const LocationForm = (props) => {
    return (
        <div className = "wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>wamt to add another location to the {props.attributes.name} trip?</div>
                <div className = "Field">
                    <input onChange={props.handleChange} value ={props.location.name} type="text" name="name" placeholder="Location Name"/>
                    <input onChange={props.handleChange} value ={props.location.description} type="text" name="description" placeholder="Description"/>
                </div>
                <button type="submit">Add Location</button>
            </form>
        </div>

    )

}
export default LocationForm