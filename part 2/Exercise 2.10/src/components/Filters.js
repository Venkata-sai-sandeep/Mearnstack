import React from 'react'

const Filters = ({ onChange, value }) => {
    return (
        <div>
            filter shown with <input onChange={onChange} value={value}></input>
        </div>
    )
}

export default Filters