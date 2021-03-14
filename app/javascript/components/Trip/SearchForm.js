import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #fff;
    padding: 20px;
    background: #000;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 0 10px 0;
    border:1px solid #e6e6e6;
`
const Field = styled.div`
    border-radius: 4px;

    input{
        min-height: 30px;
        border-radius: 4px;
        border: 1px solid $e6e6e6;
        margin: 12px 0;
        padding: 12px;
        width: 60%;

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
const Headline = styled.div`
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`
const SearchButton = styled.button`
    color: #fff;
    background: #006400;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 80%;
    margin-top: 30px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }

`


const SearchForm = (props) =>{
    const [value, setValue] = useState ({})
   

    useEffect(()=>{


     //   axios.get(url)
     //   .then( resp => console.log(resp))
     //   .catch( resp => console.log(resp))
        
    })

    const handleChange = (e) => {
        e.preventDefault()
        
        setValue(Object.assign({},value,{[e.target.name]: e.target.value}))
    
        console.log('value', value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('value during submit', value)
        const url = `https://restcountries.eu/rest/v2/name/` +value.value

        axios.get(url)
        .then( resp => console.log(resp))
        .catch( resp => console.log(resp))
     console.log('submitted')
    }

    return(
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Headline>Search for a country</Headline>
                <Field><input onChange={handleChange} value ={props.value} type="text" name="value" placeholder="Search"/></Field>
                <SearchButton>search</SearchButton>            
            </form>
        </Wrapper>
        
    )
}
export default SearchForm