import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ quizPractise, index }) => {
    const parse = require('html-react-parser');
    const { question, options, id, correctAnswer } = quizPractise;

    const isCorrect = () => {
        toast.success('Correct');

    }
    const isWrong = () => {
        toast.error('Wrong');

    }
    const showToastMessage = () => {
        toast.success(correctAnswer, {
            toastId: 'id'
        });
        // const toastBtn = () => {
        //     toast(correctAnswer, {
        //         position: toast.POSITION.TOP_RIGHT
        //     });
    };
    return (
        <div className='flex'>
            <div className='w-3/5 mx-auto rounded-md bg-slate-300 p-4  my-8 drop-shadow-xl'>
                <h4 className='text-2xl'>Quiz:{index + 1}</h4>
                <div className='flex justify-evenly mb-4'>
                    <div className='mb-4 text-2xl ml-10'>{parse(question)}</div>

                    <div className='ml-auto'>
                        <button onClick={showToastMessage}><EyeIcon className='w-8 h-8 text-black'></EyeIcon></button>
                        <ToastContainer />
                    </div>
                </div>
                {/* <div className='ml-auto'><button onClick={toastBtn}  ><EyeIcon className='w-8 h-8 text-black'></EyeIcon></button><ToastContainer /></div>
                </div> */}
                <div className='mb-3 grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                    {options.map(option => (<div className='p-3 bg-slate-200 my-3 w-11/12 drop-shadow-xl rounded-md'>
                        <input className='mr-10' type="radio" name={id} onClick={() => option === correctAnswer ? isCorrect() : isWrong()} />
                        <span className='ml-auto'>{option}</span>
                    </div>))}
                </div>

            </div>
        </div>
    );
};

export default QuizQuestion;