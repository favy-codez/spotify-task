import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MusicCardsContainer from '../components/MusicCardsContainer'
import Sidenav from '../components/Sidenav'
import Topnav from '../components/Topnav'

const Music = () => {

    const navigate = useNavigate("")
    const [musicData, setMusicData] = useState()

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.localStorage.setItem("token", token)
            window.location.hash = ""
        }

        getMusics()
    }, [])

    const logout = () => {
        window.localStorage.removeItem("token")
        navigate('/')
    }
    // "BQAVoJWwNBjqVDKCHNu-pmfBaAHxvqjWNNp1s06n5z_2oVDU1MlCAdQtRT8hC0zl8vfAJjnbLT_geyf8Eze0l-h4v8ESuvFi5EGDi8it_fqi6BdZEBztSdafA0lmCBaZLiGuQXev7HcN5a_D0pnlmxy1lJkHuEK26KyJGXsY1B7D_GHp-Tiw89XSlykr9QuQ6con"
    async function getMusics() {
        let token = window.localStorage.getItem("token")
        const response = await fetch("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response)
        const data = await response.json()
        if (response.ok) {
            setMusicData(data.albums[2].tracks.items)
        }
        if (!response.ok) {
            console.log(data.error)
        }
    }
    console.log(musicData)


    return (
        <div>
            <div className='sideNav__MusicCardContainer'>
                <Sidenav logout={logout} />
                {musicData && <MusicCardsContainer musicData={musicData} />}
            </div>
            {/* <button onClick={getMusics}>Get Music Albums</button> */}
        </div>
    )
}

export default Music

// "BQBOqLnIoBbErDFN9sop8As0qJAU1SjbOq-Y63s3sGAObv59ysnofTho2NHnqXEKpA-hgg-tk4arDzxqNDBbDea9McvuApMjml45TKLELjyHpaEuA7meukZ2kriE6kH5OR95eLv1nJANkmNSxSSPz9cbj8gqZF_DkKuL6jJ0DCrHSXFy3739US8oIxFoAXPgWuvz"