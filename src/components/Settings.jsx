import React from 'react'
import { Link } from 'react-router-dom'
function Settingspage() {
    const H=()=>{
        location.href = 'https://www.instagram.com/notenetofficial182019'
    }
    return (
        <div className='mt-20' >
            <div>
                <h1>i' settings page</h1>
              <button onClick={H} >Instagram</button>
            </div>
        </div>

    )
}

export default Settingspage