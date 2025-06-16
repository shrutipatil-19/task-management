import React, { useState, useEffect } from 'react';

const Home = () => {
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost/task-management/api/hello')
            .then(res => res.json())
            .then(data => setMsg(data.message));
    }, []);
    return (
        <div>
            <h1>Hello {msg ? msg : '...'}</h1> {/* Show ... while loading */}
        </div>
    );
};

export default Home;
