// Services.js

import React from 'react';

function Services() {
    return (
        <section className="bg-blue-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0">
                    <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Service 3</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
