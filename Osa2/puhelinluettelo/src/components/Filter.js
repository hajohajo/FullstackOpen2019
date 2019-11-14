import React from 'react'

const Filter = ({filterCondition, handleFilterCondition}) => {
    return (
        <div>
            Filter shown persons with: <input value={filterCondition} onChange={handleFilterCondition}/>
        </div>
    )
}

export default Filter;