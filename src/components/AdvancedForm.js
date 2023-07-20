import React from 'react'

const AdvancedForm = () => {
    return (
        <form autoComplete='off'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Enter your username' />
        </form>
    )
}

export default AdvancedForm
