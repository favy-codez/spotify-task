function RightSidebar(){
    return (
        <div className="rightsidebar">
            <div className="rightsidebar-content">
                <div className="shortcut">
                    <h2>Shortcuts</h2>
                    <div className="content">
                        <a href="www.facebook.com" className="custom">Chill Hits</a>
                    </div>
                </div>
                <div className="favArtiste">
                    <h2>Fav Artiste</h2>
                    <div className="favList">
                        <div className="favItem">
                            <div className="artist">
                                <img src="" alt="" />
                                <h5>Taylor Swift</h5>
                                <p>195 songs in library</p>
                            </div>
                            <div className="moreFav">
                                <i class="ri-more-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;