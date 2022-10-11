import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Qui = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
    return (
        <div className='rounded-xl p-4 drop-shadow-xl bg-slate-200'>
            <img className='rounded-xl bg-slate-400' src={logo} alt="" />
            <div className='p-2 my-2 bg-gray-50 mt-2 rounded-md font-bold'>{total} Question</div>
            <div className='mt-5 flex justify-around'>

                <p className='font-bold text-1xl'>{name}</p>
                <p><Link to={`/quiz/${id}`} ><button className='bg-teal-500 px-3 rounded-md text-white font-bold'>Start practice <FontAwesomeIcon icon={faArrowRight} /></button></Link></p>

            </div>
        </div>
    );
};

export default Qui;