import React, { useState, useEffect, Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import styled from 'styled-components'

const Selection = (props) => {
    const [countries, setCountries] = useState({})
    const [loaded, setLoaded] = useState(false)
    

     

    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`

        axios.get(url)
        .then( resp => {
            setCountries(resp.data)
            setLoaded(true)
            
            console.log(resp.data)
        })
        .catch( resp => console.log(resp))
    }, [])



    return (
        <div>
            {
                loaded &&
                <Select
                    options={countries}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.name}
                />
            }
        </div>
    )
}
export default Selection