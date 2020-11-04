import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

export default function ContactCards() {
    return (
        <div>
        <Card className="card-border">
            <Card.Body>
            <Card.Title><h3>Can I send you e-mail?</h3></Card.Title>
            <Card.Text>
                <h7>Yes, of course you can! Just send your message through yrfp307@gmail.com,
                    or telegram @yrfp307 I'll be waiting! <br/>Thank you!
                </h7>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}