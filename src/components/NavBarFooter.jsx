function NavBarFooter() {
    return (
        <footer style={styles}>
            <a href="/bathrooms/add-a-bathroom">Add a new Bathroom</a>

                    <a href="user/SignUp-or-Login">Sign Up/Login/ Logout</a>
        </footer>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarFooter;