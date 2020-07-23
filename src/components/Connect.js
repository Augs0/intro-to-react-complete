import React, { useState } from 'react'
import Emoji from '../components/Emoji'

function Connect() {
    const [likes, editLikes] = useState(0);
    const [gems, editGems] = useState(0);

    return (
        <div className="connect-bar">
            <button onClick={() => editLikes(likes + 1)} >
                <Emoji symbol="💙" label="like this profile" /> Likes:{likes}
            </button>
            <button onClick={() => editGems(gems + 1)}>
                <Emoji symbol="💎" label="give this user a gem" />Gems: {gems}
            </button>
        </div>
    )
}

export default Connect