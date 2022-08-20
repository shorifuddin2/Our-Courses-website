import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-8 mt-40 text-center '>
            <h1 className='feature-title '>Question page</h1>

            <div className=' bg-lightgray text-left w-50 mx-auto mt-40'>
                <div className=''>
                <h1>1.<span className='font-bold text-danger p-2'> Question</span> Authinzution Vs Authentication..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> Authinzution is Most of the projects I worked on use Bearer token
                with JWT in Authorization header.Authentication Increase Identity Security With FIDO-Based password's Login. Google Authenticator generates 2-Step Verification codes on your phone. 2-Step Verification provide
                I have endpoint that I can use to generate this token
                and pass it to the each requests in my test.</p>
                <h1>2.<span className='font-bold text-danger p-2'> Question</span> Why are you using firebase..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> firebase is mins this Authinzution major part Firebase is an application development platform that allows developers to create iOS, Android, and Web apps Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development.</p>
                <h1>3.<span className='font-bold text-danger p-2'> Question</span> firebase provide other then Authentication..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> Firebase is ins cariban monition.Firebase Authentication provides backend services, Firebase Authentication section to enable Email/Password sign-in and any other identity providers you want for your app Firebase Authentication is an extensible token-based auth system and provides</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;