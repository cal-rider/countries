import React from 'react'
import styled from 'styled-components'
const LocationsContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border:1px solid #e6e6e6;
    background: #fff;
`

const LocationForm = (props) => {
    return (
        <LocationsContainer>
            <form onSubmit={props.handleSubmit}>
                <div>Where else would you like to go on your "{props.attributes.name}" trip?</div>
                <div className = "Field">
                    <input onChange={props.handleChange} value ={props.location.name} type="text" name="name" placeholder="Location Name"/>
                    <input onChange={props.handleChange} value ={props.location.description} type="text" name="description" placeholder="Description"/>
                </div>
                <button type="submit">Add Location</button>
            </form>
        </LocationsContainer>

    )

}
export default LocationForm