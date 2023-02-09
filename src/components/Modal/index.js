import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import { useState } from 'react'
import './layout.css'

export default function Layout() {
    const[show, setShow] = useState(false);
    const[fullscreen, setFullscreen] = useState(true);
    
    const handleClose = () => setShow(false);
    // const handleFullscreen () => set
    const handleShow = () => setShow(true);

    return (    
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h1 style={{textAlign:"center",color:"white"}}>Top Gun</h1>

                    <Image 
                        src="https://www.indiewire.com/wp-content/uploads/2022/05/37507-original.jpeg?w=780" 
                        fluid rounded
                        onClick={handleShow} />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                        <Modal.Body>
                            <iframe width="100%" height="85%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <Button 
                                variant="secondary"
                                onClick={handleClose}>Close</Button>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}