import React from 'react';
import { PieChart, Pie, Sector, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reachart = ({ statistics }) => {
    console.log(statistics)


    // const { total } = statistics;
    return (
        <div>
            <div className='text-3xl font-bold bg-emerald-100 p-3 rounded-md drop-shadow-xl w-3/5 mx-auto my-8'>Line chart Showing total number of quiz</div>

            <div className='flex justify-center mt-8'>

                <LineChart width={400} height={300} data={statistics}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey='total' stroke="#82ca9d" />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='text-3xl font-bold bg-emerald-100 p-3 rounded-md drop-shadow-xl w-3/5 mx-auto my-8'>Bar chart Showing total number of quiz</div>
            <div className='flex justify-center mt-8'>
                <BarChart width={500} height={200} data={statistics}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey='total' fill="#8884d8" />

                </BarChart>
            </div>
            <div className='text-3xl font-bold bg-emerald-100 p-3 rounded-md drop-shadow-xl w-3/5 mx-auto my-8'>Pie chart Showing total number of quiz</div>
            <div className='flex justify-center mt-8'>
                <PieChart width={400} height={400}>
                    <Pie data={statistics} dataKey='total' cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={statistics} dataKey='total' cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>

        </div>
    );
};

export default Reachart;