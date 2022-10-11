import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';


const ReactQuiz = () => {
    const questiones = useLoaderData();
    const questionsname = questiones.data;
    const quizquestion = questionsname.questions;

    return (
        <div>
            <p className='text-3xl font-bold mb-3 '>Quiz Practise of {questionsname.name}</p>
            <div>
                {
                    quizquestion.map(quiz => <QuizQuestion quiz={quiz}></QuizQuestion>)
                }
            </div>

        </div>
    );
};

export default ReactQuiz;