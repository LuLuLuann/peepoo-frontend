function NavBarHeader() {
    return (
        <nav style={styles}>
            <a href="">Insert Link 1</a>
            <a href="">Insert Link 2</a>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBarHeader;