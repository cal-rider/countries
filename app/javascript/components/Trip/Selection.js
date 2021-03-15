import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #fff;
    padding: 120px;
    background: #000;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 12px;
    width: 60%; 
`

const Center = styled.div`
display: block;
margin-left: 30%;

`

const Selection = (props) => {
    const [countries, setCountries] = useState({})
    const [loaded, setLoaded] = useState(false)
    

    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`

        axios.get(url)
        .then( resp => {
            setCountries(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    }, [])




    return (
        <Wrapper>
            {
                loaded &&
                <Center>
                    <Select
                        name="name"
                        options={countries}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.name}
                        onChange={props.handleChange}
                        placeholder="Search for a Country"
                        isSearchable
                    />
                </Center>
            }
        </Wrapper>
    )
}
export default Selection
