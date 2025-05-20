function Footer() {

    return(
        <>
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="upper">
                            <div className="topic">About us</div>
                            <p>We deal with car hire services. Get the chance to choose your perfect ride
                                from our wide variety of car brands and models</p>
                        </div>
                        <div className="lower">
                            <div className="topic">Contact us</div>
                            <div className="phone">
                                <a href="#"><i className="fas fa-phone-volume"></i>+254 1234 5678</a>
                            </div>
                            <div className="email">
                                <a href="#"><i className="fas fa-envelope"></i>info@carhire.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Quick Links</div>
                        <div><a href="index.html">Home</a></div>
                        <div><a href="about.html">About Us</a></div>
                        <div><a href="contact.html">Contact Us</a></div>
                    </div>
                    <div className="right box">
                        <div className="topic">Subscribe To Our Newsletter</div>
                        <form action="#">
                            <input type="text" placeholder="Enter email address"/>
                            <input type="submit" name="" value="Send"/>

                        </form>
                    </div>
                </div>
                <div className="bottom">
                    <p>Copyright © 2025 <a href="#">Car Hire</a> All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer