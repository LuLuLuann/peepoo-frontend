import {NavLink} from "react-router-dom"

function NavBarHeader() {
    return (
        <nav style={styles}>

            {/* <a href  "../pages/AddBathroomPage.jsx">Add a new bathroom</a> */}
            <ul>
                <li>
            <NavLink to "../pages/AddBathroomPage.jsx">Add a new Bathroom</NavLink>
            </li>
            <li>
                <NavLink to "">Sign Up/Login Page</NavLink>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarHeader;