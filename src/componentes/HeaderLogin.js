import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogin = () => {

    const navigate = useNavigate();

    return (
        <header className='container justify-between mx-auto px-4 py-5 border-b'>
            <img className="float-left w-20 h-20 rounded-full mx-auto"
                src="https://res.cloudinary.com/dhi1basbb/image/upload/v1671061729/Imagen1_hxlkwq.png"
                alt=""></img>
            <div className='md:flex md:justify-between'>
                <h1 className="inline bg-gradient-to-r from-orange-700 via-black to-red-600 bg-clip-text font-display text-5xl 
                tracking-tight text-transparent">
                    Te Lo Cambio
                </h1>
            </div>
        </header>

    );
}

export default HeaderLogin;