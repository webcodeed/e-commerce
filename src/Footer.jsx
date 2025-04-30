function Footer() {
    return (
        <footer className="footer">
            <form action="#" className="footer_form">
                <h2>New to E-shop</h2>
                <p>Subscribe to our newsletter to get our latest updates</p>
                <input
                
                    className="footer_email_class"
                    type="email"
                    name="email"
                    id="footer_email_id"
                    placeholder="Enter your email address"
                    required
                />
                <button className="footer_submit_button" type="button">
                    SUBMIT
                </button>
                <div className="footer_form_checkbox">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="footer_checkbox_id"
                        className="footer_checkbox_class"
                        required

                    />
                    <label htmlFor="footer_checkbox_id">
                        I agree to E-shop's Privacy and Cookie Policy. You can
                        unsubscribe from newsletters at any time.
                    </label>
                </div>
            </form>
            <div className="footer_items">
                <ul className="footer_list1">
                    <h2>Shop</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Location</li>
                    <li>FAQ</li>
                </ul>
                <ul className="footer_list2">
                    <h2>Categories</h2>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul className="footer_list2">
                    <h2>Contact</h2>
                    <li>+234 905 744 9447</li>
                    <li>otegbadee@gmail.com</li>
                    <li>Lagos, Nigeria.</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
