import React from 'react';
import img from '../../images/milon-2.png'

const About = () => {
    return (
        <div className=' bg-fuchsia-200 '>
            <h1 className='  feature-title'>My Dream</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 w-4/5 mx-auto  gap-5'>
            <img className='rounded-3 mx-auto w-80 my-40' src={img}></img>
           
            <div className=' font-bold mx-auto'>
            <p className='f-bold text-primary my-40'>Next 6 Moth My Dream  I'm Proportional Complete Font Developer and sensitive Programer 2022 end year present my dream successfully programer fondant developer in website. I'm very actively worked this proportion,</p>
            </div>
        </div>
</div>
    );
};

export default About;