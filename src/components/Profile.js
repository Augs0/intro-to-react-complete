import React, { useState } from 'react'
import ProfileData from '../components/data/profile'
import Header from '../components/Header'
import Connect from '../components/Connect'
import Contact from '../components/Contact'

function Profile() {
    const [clicked, setClick] = useState(false);

    return (
        <>
            <div className="wrapper">
                {ProfileData.map((info) => {
                    return <div key={info.id} >
                        <Header />
                        <div className="details">
                            <p>Name: {info.name}</p>
                            <p>Skills: {info.tech}</p>
                            <p>Tabs or spaces? {info.tabsorspaces}</p>
                            <Connect />
                            <button onClick={() => setClick(clicked => !clicked)}>{clicked === true ? 'Hide contact form' : "Contact this user"}</button>
                        </div>
                    </div>
                })}
            </div >
            <Contact clicked={clicked} />
        </>

    )
}

export default Profile