import React from 'react'

const MusicCardsContainer = ({ musicData }) => {
    return (
        <div className='musicCardContainer'>
            <p>My Play List</p>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Time</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {musicData.map((music, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{music.name}</td>
                            <td>{music.artists.map((artist) => (artist.name))}</td>
                            <td>{new Date(music.duration_ms).toISOString().slice(11, 19)}</td>
                            <td>Album</td>
                        </tr>
                    ))}

                    {/* <tr className='active-row'>
                        <td>02</td>
                        <td>5150</td>
                        <td>Chelsea</td>
                        <td>Chelsea</td>
                        <td>Chelsea</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default MusicCardsContainer
