function Contact() {
return(
    <>

            <div className="contact-bg">
                <h2>contact us</h2>
                <p className="text">For any inquiry, feel free to reach out to us.</p>
            </div>


            <div className="contact-body">
                <div className="contact-info">
                    <div>
                        <span><i className="fas fa-mobile-alt"></i></span>
                        <span>Phone No.</span>
                        <span className="text">+254123456789</span>
                    </div>
                    <div>
                        <span><i className="fas fa-envelope-open"></i></span>
                        <span>E-mail</span>
                        <span className="text">info@carhire.com</span>
                    </div>
                    <div>
                        <span><i className="fas fa-map-marker-alt"></i></span>
                        <span>Address</span>
                        <span className="text">Nakuru, Kenya</span>
                    </div>
                    <div>
                        <span><i className="fas fa-clock"></i></span>
                        <span>Opening Hours</span>
                        <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
                    </div>
                </div>

                <div className="contact-form">
                    <form>
                        <div>
                            <input type="text" className="form-control" placeholder="First Name"/>
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div>
                            <input type="email" className="form-control" placeholder="E-mail"/>
                            <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                        <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                        <input type="submit" className="send-btn" value="send message"/>
                    </form>
                    <div>

                        <img src="imgs/contact-png.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
        )
        }

        export default Contact