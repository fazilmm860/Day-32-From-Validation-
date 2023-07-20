import React from 'react'

const BasicForm = () => {
    return (
        <form autoComplete='off'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' placeholder='Enter your emial' />
        </form>
    )
}

export default BasicForm
