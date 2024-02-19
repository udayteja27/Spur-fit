import React from 'react';
const header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 header">
            <h1 className="text-2xl text-blue-400 text-start">Spur.fit</h1>
            <nav>
                <ul className="flex">
                    <li className="mr-6"><a href="#features">Features</a></li>
                    <li className="mr-6"><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className='m-4'>login</button>
            <button>sinup</button>
        </header>
    );
}

export default header;
