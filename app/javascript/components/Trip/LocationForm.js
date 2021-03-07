import React from 'react'
import styled from 'styled-components'
const LocationsContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 0 10px 0;
    border:1px solid #e6e6e6;
    background: #fff;
`

const Headline = styled.div`
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`

const Field = styled.div`
    border-radius: 4px;

    input{
        min-height: 30px;
        border-radius: 4px;
        border: 1px solid $e6e6e6;
        margin: 12px 0;
        padding: 12px;
        width: 80%;

    }

    textarea{
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid $e6e6e6;
        margin: 12px 0;
        padding: 12px;
    }

`

const Wrapper = styled.div`
    background: #fff;
    padding: 20px;
    background: #000;
    height: 100vh;
    padding-top: 100px;
`

const AddButton = styled.button`
    color: ##00cc00;
    background: #333;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 100%;
    margin-top: 30px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }

`

const LocationForm = (props) => {
    return (
        <LocationsContainer>
            <Wrapper>
                
            <form onSubmit={props.handleSubmit}>
                <Headline>Where's the next location on your "{props.attributes.name}" trip?</Headline>
                <Field> <input onChange={props.handleChange} value ={props.location.name} type="text" name="name" placeholder="Location Name"/>    </Field>
                    <Field><input onChange={props.handleChange} value ={props.location.description} type="text" name="description" placeholder="Description"/> </Field>
            
                <AddButton>Add Location</AddButton>
            </form>

            </Wrapper>
        </LocationsContainer>

    )

} 


export default LocationForm