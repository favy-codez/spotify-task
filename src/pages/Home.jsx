import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const CLIENT_ID = "f4ae0671441040cabf84d78292d985b1"
    const REDIRECT_URI = "http://localhost:5173/musics"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    return (
        <div>
            <header className="App-header">
                <h1 className='welcome-text'>Bee music</h1>
                <Link to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to spotify</Link>
                {/* <button onClick={getToken}>Login to spotify</button> */}
            </header>
        </div>
    )
}

export default Home