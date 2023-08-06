import React from "react";
import "./Contact.css"
import Footer from "./Footer"

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div class="contact-form">
                    <h2>Contact Us</h2>
                    <form action="#" method="post">
                        <label id="labels" for="username">Username:</label>
                        <input   type="text" id="username" name="username" placeholder="belcaketerdal" required />

                        <label  id="labels" for="email">Email:</label>
                        <input  type="email" id="email" name="email" placeholder="belcaketerdal123@gmail.com" required />

                        <label id="labels"  for="inquiry">Select your inquiry:</label>
                        <select id="inquiry" name="inquiry" required>
                            <option value="" disabled selected>Select an option</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Technical Support">Online Support</option>
                            <option value="Billing and Payments">Price - Payments</option>
                            <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                        </select>


                        <label  id="labels" for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>


                        <button id="submit" type="submit" value="Submit" > SUBMIT </button>
                    </form>
                </div>
            </div>
            <div className="footer">
                    <Footer />
            </div>
        </div>
    )
}

export default Contact;