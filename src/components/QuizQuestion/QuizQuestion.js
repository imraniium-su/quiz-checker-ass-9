import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ quiz }) => {
    const parse = require('html-react-parser');
    const { question, options, id, correctAnswer } = quiz;

    const checkAnswer = () => {


    }

    const toastBtn = () => {
        toast(correctAnswer);
    };
    return (
        <div className='w-3/5 mx-auto rounded-md bg-slate-300 p-4  my-8 drop-shadow-xl'>

            <div className='flex justify-center'>
                <p className='mb-3 text-2xl ml-10
            '>{parse(question)}</p>
                <button onClick={toastBtn} className='ml-auto '><FontAwesomeIcon icon={faEye} /></button><ToastContainer />
            </div>
            <div className='mb-3 grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                {options.map(option => (<div className='p-3 bg-slate-200 my-3 w-11/12 drop-shadow-xl rounded-md'><input className='mr-4' type="radio" name={id} onClick={checkAnswer} />{option}</div>))}
            </div>

        </div>
    );
};

export default QuizQuestion;