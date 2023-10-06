// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-xl">&copy; 2023 Your Company. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#" className="text-white mx-2">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="text-white mx-2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="#" className="text-white mx-2">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
