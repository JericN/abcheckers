import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hello() {
    return (
        <div className='font-bold text-center font-A color-A lg:text-left lg:flex'>
            <div className='flex items-end justify-center text-2xl tracking-tighter lg:text-5xl'>
                <TypeAnimation
                    sequence={[
                        'Hi! ',
                        2000,
                        'Hi! we are',
                        () => {
                            console.log('Done typing!');
                        }
                    ]}
                    wrapper="div"
                    cursor={false}
                />&nbsp;</div>
            <div>
                <span className='text-4xl sm:text-6xl text-sky-900 lg:text-7xl'>A</span>
                <span className='text-4xl sm:text-6xl text-violet-900 lg:text-7xl'>B</span>
                <span className='text-4xl text-teal-900 sm:text-6xl lg:text-7xl'>C</span>
                <span className='text-3xl sm:text-5xl lg:text-6xl'>heckers</span>
                <span className='text-3xl sm:text-5xl lg:text-6xl'>🏁</span>
            </div>
        </div>
    );
}
