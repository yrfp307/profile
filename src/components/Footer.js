import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,
         faGithub,
         faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="icons-list">
            <a className="faLinkedin app-link social-media-list"
            href="https://www.linkedin.com/in/yuanita-retno-fatmalasari-78734493/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a className="faGithub app-link social-media-list"
            href="https://github.com/yrfp307"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a className="faInstagram app-link social-media-list"
            href="https://instagram.com/nhytanyuita"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}