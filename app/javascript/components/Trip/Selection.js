import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import styled from 'styled-components'

const Selection = (props) => {
    const [countries, setCountries] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [selection, setSelection] = useState({})
    

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
        <div>
            {
                loaded &&
                <Select
                    options={countries}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.name}
                    onChange={setSelection}
                    placeholder="Search for a Country"
                    isSearchable
                />
            }
        </div>
    )
}
export default Selection