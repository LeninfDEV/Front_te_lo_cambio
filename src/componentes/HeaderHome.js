import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderHome = () => {

    const navigate = useNavigate();

    return (
        <header className='container justify-between mx-auto px-4 py-5'>
            <img className="float-left w-20 h-20 rounded-full mx-auto"
                src="https://res.cloudinary.com/dhi1basbb/image/upload/v1671061729/Imagen1_hxlkwq.png"
                alt=""></img>
            <div className='md:flex md:justify-between'>
                <h1 className="inline bg-gradient-to-r from-orange-700 via-black to-red-600 bg-clip-text font-display text-5xl 
                tracking-tight text-transparent">
                    Te Lo Cambio
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Link
                        to={"/login"}
                        className="block text-center my-5 text-red-600 uppercase text-lg font-bold"
                    >Inicio de Sesión</Link>
                </div>
            </div>
        </header>

    );
}

export default HeaderHome;