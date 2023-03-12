import React from 'react';

const Main= ()=>{
    return (
    <div className="main">
        <nav>
            <div className="arrows">
                <i class="ri-arrow-left-line"></i>
                <i class="ri-arrow-right-line"></i>
            </div>
            <div className="searchbar">
                <input type="search" placeholder="Search..." />
            </div>
        </nav>
        <div className="container">
            <div className="trend">
                <h5>What's hot</h5>
                <div className="trends">
                    <div className="trending">
                        <h2>Trending</h2> 
                    </div>
                    <div className="more">
                        <div className="moreh">
                            <h5>More</h5>
                        </div>
                        <div className="moreArrow">
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                </div>
                <div className="topArtiste">
                    <div className="onTop">
                        <h5>Artiste</h5>
                        <h2>On Top <br /> Of The World</h2>
                    </div>
                    <div className="bottomCard">
                        <div className="playFollow">
                            <button className="play">PLAY</button>
                            <button className="follow">FOLLOW</button>
                        </div>
                        <div className="monthly">
                            <h5>Monthly Listener</h5>
                            <p>32,475</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-playlist">
                <div className="playlistContainer">
                    <div className="playlistNav1">
                        <h1>MY PLAYLIST</h1>
                    </div>
                    <div className="playlistNav2">
                        <a href="www.facebook.com"><h5>Show All</h5></a>
                    </div>
                </div>
                <table>
                    <tr>
                        <th className='id'>#</th>
                        <th>TITLE</th>
                        <th>ARTISTE</th>
                        <th>TIME</th>
                        <th>ALBUM</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </table>

            </div>
        </div>

    </div>)
}


export default Main