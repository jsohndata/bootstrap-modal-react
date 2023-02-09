import Nav from 'react-bootstrap/Nav'
import './nav.css'
export default function Navmain () {

    return (

        <Nav className="justify-content-center flex-row">
            <Nav.Item>
                <Nav.Link href="/home">
                    <span variant="text-danger">Home</span>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/portfolio">
                    Portfolio
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/about">
                    About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/contact">
                    Contact
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/login" disabled>
                    Login
                </Nav.Link>
            </Nav.Item>



        </Nav>

    )
}