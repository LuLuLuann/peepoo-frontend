import {NavLink} from "react-router-dom"

function NavBarHeader() {
    return (
        <nav style={styles}>
            <NavLink>Insert Link 1</NavLink>
            <NavLink>Insert Link 2</NavLink>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarHeader;