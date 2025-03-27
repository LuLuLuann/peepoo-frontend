import {NavLink} from "react-router-dom"
// import PeePooLogo from "../assets/images/PeePooLogo.png";


function NavBarHeader() {

   
    return (
    
        <nav style={styles}>

            {/* <a href  "../pages/AddBathroomPage.jsx">Add a new bathroom</a> */}
            
            <NavLink to="">HomePage
            </NavLink>

            {/* <NavLink to="/bathrooms/add-a-bathroom">Add a new Bathroom</NavLink> */}

            {/* Link to user Profile Page (if logged in) */}
           
                <NavLink to="user/SignUp-or-Login">Sign Up/Login /Log out</NavLink>
               
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarHeader;