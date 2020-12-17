import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-banner" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/banner.jpg" + ")"}}>
                </div>
                <div className="Home-content">
                    <div className="Home-row">

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
