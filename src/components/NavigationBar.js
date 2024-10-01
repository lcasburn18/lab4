// Import necessary components from 'react-bootstrap' for creating a responsive navigation bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Define a functional component called 'NavigationBar'
const NavigationBar = () => {
    // The Navbar component is used to create a navigation bar
    return (
        // 'bg="dark"' applies a dark background, and 'data-bs-theme="dark"' applies Bootstrap's dark theme
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {/* Nav.Link is used to create individual links in the navigation bar */}
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/read">Read</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
// Export the 'NavigationBar' component so it can be imported and used in other files
export default NavigationBar;