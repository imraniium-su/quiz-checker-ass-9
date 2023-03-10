import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/img.jpg'
import Qui from '../Qui/Qui';
const Quiz = () => {
    const quizes = useLoaderData();
    const quizs = quizes.data

    return (
        <div>
            <div className='h-96 w-10/12  mt-14 flex mx-auto'>
                {/* <img className=' w-full  rounded-2xl drop-shadow-xl    ' src={img} alt="" /> */}
                <img className=' w-full  rounded-2xl drop-shadow-xl    ' src="https://media.istockphoto.com/photos/quiz-picture-id933914672?k=20&m=933914672&s=612x612&w=0&h=wJmODzzL7fCYd2jw6y-r9VULPl4BLPpTPnt0R1JBCNg=" alt="" />
            </div>
            <h2 className='text-3xl font-bold text-teal-400 drop-shadow-xl mt-2'>Quiz Hunter ! Test You Skill Knowledge</h2>
            <p className='text-1xl mt-2 font-bold'>Quiz hunter help the developer to juz their knowledge about their field. They can practice more and they find their mistake .They can skilled up their knowledge. </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-12'>
                {quizs.map(quiz => <Qui quiz={quiz} key={quiz.id}></Qui>)}
            </div>

        </div>
    );
};

export default Quiz;