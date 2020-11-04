import React from 'react';
import { Container,
         Tab,
         Tabs } from 'react-bootstrap';
import AboutCards from './AboutCards';
import ContactCards from './ContactCards';
import '../App.css';

export default function HomeTabs() {
    return (
        <Container fluid>
            <Tabs className="home-tabs justify-content-center" defaultActiveKey="about">
            <Tab eventKey="about" title="About">
                <AboutCards />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <ContactCards />
            </Tab>
            </Tabs>
        </Container>
    )
}