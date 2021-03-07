import React from 'react'

const Location = (props) => {
    console.log(props.attributes)

    const {name, description} = props.attributes
    

    return(
        <div className='card'>
            <div className='name'>{name}</div>
            <div className='description'>{description}</div>
            
        </div>
    )

}

export default Location