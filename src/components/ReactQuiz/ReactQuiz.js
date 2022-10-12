import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';


const ReactQuiz = () => {
    const questiones = useLoaderData();
    const quizquestion = questiones.data.questions;

    return (
        <div className='my-10'>
            <p className='text-3xl font-bold mb-3 '>Quiz Practise of {questiones.name}</p>

            {
                quizquestion.map((quizPractise, index, idx) => <QuizQuestion quizPractise={quizPractise} index={index} key={idx}></QuizQuestion>)
            }
        </div>
    );
};

export default ReactQuiz;