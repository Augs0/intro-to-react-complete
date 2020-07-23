import React, { useState } from 'react'

function Contact({ clicked }) {
    const [message, handleClick] = useState('')

    function changeMessage() {
        handleClick(message => 'Message sent!')
    }

    return (
        <div>
            {clicked ?
                <>
                    <form id="contact-user">
                        <p className="sent-success">{message}</p>
                        <label htmlFor="name">Name: </label>
                        <input name="name" type="text" placeholder="Your name" />
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                        <button onClick={changeMessage} type="button">Send</button>
                    </form>
                </>
                : ''}
        </div>
    )
}

export default Contact