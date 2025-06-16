import React, { useState, useEffect } from 'react';

const About = () => {
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost/task-management/api/about')
            .then(res => res.json())
            .then(data => setMsg(data.message));
    }, []);
    return (
        <div>
            <h1>Hello {msg ? msg : '...'}</h1> {/* Show ... while loading */}
        </div>
    );
};

export default About;
