function NavBarFooter() {
    return (
        <footer style={styles}>
            <a href ="">Add a new Bathroom</a>
            <a href="">My Profile Page (if logged in)</a>
            <a href="">(Sign Up/Login)/(Logout)</a>
        </footer>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarFooter;