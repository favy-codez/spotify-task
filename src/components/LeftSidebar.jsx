function Sidebar(){
    return (
        <div className="leftsidebar">
            <div className="leftsidebar-content">
                <div className="basics">
                    <div className="home">
                        <i class="ri-home-line"></i>
                        <h3>Home</h3>
                    </div>
                    <div className="trendsNav">
                        <i class="ri-line-chart-line"></i>
                        <h3>Trends</h3>
                    </div>
                    <div className="feed">
                        <i class="ri-compass-3-line"></i>
                        <h3>Feed</h3>
                    </div>
                </div>
                <div className="discovery">
                    <p>DISCOVER</p>
                    <div className="new">
                        <i class="ri-apps-2-line"></i>
                        <h3>New And Notable</h3>
                    </div>
                    <div className="release">
                        <i class="ri-calendar-2-line"></i>
                        <h3>Release Calender</h3>
                    </div>
                    <div className="event">
                        <i class="ri-coupon-2-line"></i>
                        <h3>Events</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;