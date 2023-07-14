import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsLinkedin, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                             
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/
shivam-kumar-529410220" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                
                               
                                <li>
                                    <a rel="noreferrer" href="https://www.google.com/" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/shivamverma-9984" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
                                        <BsYoutube />
                                    </a>
                                </li> 
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small> Developed and Designed  by Shivam Kumar Verma </small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;