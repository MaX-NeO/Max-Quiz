import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const McqCheck = () => {
    const { mid } = useParams()
    const navigate = useNavigate()
    const length = 4;
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
        if (value !== '' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const combinedOtp = otp.join('');
        const mcqcode = '1111';
        //Note :  use parseInt in prod
        const uid = 123

        if (combinedOtp === mcqcode) {
            //fulscreen mode start
            alert('test started' + combinedOtp)
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            navigate(`/mcq/${mid}/u/${uid}/x/${mcqcode}`)
        }
        else {
            console.log("invalid Code !")
            alert('invalid code')
        }
    };

    return (
        <div className='w-[30vw] h-[20vh] flex justify-center items-center flex-col shadow-lg shadow-orange-500/20 rounded-md'>
            <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg ">
                <div className="flex space-x-5">
                    {Array.from({ length }).map((_, index) => (
                        <input
                            key={index}
                            ref={el => inputRefs.current[index] = el}
                            className="block size-[40px] text-center border-orange-200 rounded-md text-sm placeholder:text-orange-300 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none bg-orange-900/20 text-orange-500 font-bold focus:outline-orange-500"
                            type="text"
                            maxLength="1"
                            value={otp[index]}
                            placeholder='O'
                            onChange={e => handleChange(index, e.target.value)}
                            onKeyDown={e => handleKeyDown(index, e)}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>
            </div>
            <button onClick={handleSubmit} className='w-[50%] bg-gradient-to-tr from-orange-600 to-orange-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'>Start MCQ</button>
        </div>
    );
};

export default McqCheck;
