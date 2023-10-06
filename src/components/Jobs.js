// JobSection.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
const JobSection = () => {
    const [jobListing, setJobListing] = useState([])


    useEffect(() => {
        getJobs()
    }, [])

    async function getJobs() {
        const { data } = await axios.get('http://localhost:5000/api/v1/blog');
        setJobListing(data.blog)

    }

    return (
        <section className="bg-blue-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Job Openings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobListing && jobListing.map((job, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <img src={job?.imageUrl} alt={job?.title} className="w-32 h-32 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{job?.title}</h3>
                            <p className="text-gray-600">{job?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobSection;
