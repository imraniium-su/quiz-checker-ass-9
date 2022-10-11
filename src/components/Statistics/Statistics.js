import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData();
    const statistics = data.data;
    console.log(statistics);
    return (
        <div>
            <h1>This statistics</h1>
            <p>{statistics.total}</p>
        </div>
    );
};

export default Statistics;