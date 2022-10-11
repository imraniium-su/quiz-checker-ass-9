import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Reachart from './Reachart/Reachart';

const Statistics = () => {
    const data = useLoaderData();
    const statistics = data.data;
    console.log(statistics);
    return (
        <div>
            {
                <Reachart statistics={statistics}></Reachart>
            }


        </div>
    );
};

export default Statistics;