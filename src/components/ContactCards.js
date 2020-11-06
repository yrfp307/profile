import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

export default function ContactCards() {
    return (
        <div>
        <Card className="card-border">
            <Card.Body>
            <Card.Title><h3>How to contact me?</h3></Card.Title>
            <Card.Text>
                <h7>So simple! Just send your message through yrfp307@gmail.com
                    or telegram @yrfp307<br/>Thank you!
                </h7>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}