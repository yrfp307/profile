import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

export default function AboutCards() {
    return (
        <div>
        <Card className="card-border">
            <Card.Body>
            <Card.Title><h3>Who's Nita?</h3></Card.Title>
            <Card.Text>
                <h7>Hello, my name is Yuanita. But most of people call me Nita. My formal background is Electrical Engineering.
                    Currently doing remote internship at a software company in Polandia as jr.web developer. Nice to meet you here!
                </h7>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}