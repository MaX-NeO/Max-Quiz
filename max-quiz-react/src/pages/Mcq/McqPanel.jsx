import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react'
import { questions } from '../../configs/Config';
import { useNavigate } from 'react-router-dom';
import CircleProgressBar from '../../components/Mcq/CircleProgressBar';

const McqPanel = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [timer, setTimer] = useState(10);
    const [testCompleted, setTestCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [testmodel, setTestmodel] = useState(true);
    const [btnloader, setBtnloader] = useState(false)
    const [issubmitted, setIssubmitted] = useState(false)
    const navigate = useNavigate()

    const startTest = () => {
        setTestmodel(false)
    }
    useEffect(() => {
        let intervalId;
        if (!testmodel) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : 0);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [testmodel]);

    useEffect(() => {
        if (timer === 0) {
            moveToNextQuestion();
        }
    }, [timer]);

    const moveToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setTimer(10);
        } else {
            setTestCompleted(true);
        }
        setBtnloader(true)
        setTimeout(() => {
            setBtnloader(false)
        }, 2000)
    };

    const handleOptionClick = selectedOption => {
        const correctOption = currentQuestion.correctoption;

        let selectedOptionKey;
        for (const key in currentQuestion) {
            if (currentQuestion[key] === selectedOption) {
                selectedOptionKey = key;
                break;
            }
        }

        setSelectedOptions([...selectedOptions, {
            questionId: questions[currentQuestionIndex].qid,
            selectedOption: selectedOptionKey,
            correctOption: correctOption,
            timeTaken: 10 - timer
        }]);
        moveToNextQuestion();

        if (selectedOptionKey === correctOption) {
            setScore(score + 1);
        }
    };

    const handleSubmitTest = () => {
        console.log(selectedOptions);
        setIssubmitted(true)
    };
    const routeDashboard = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        navigate('/user/dashboard')
    }
    const currentQuestion = questions[currentQuestionIndex];
    const progressData = `${currentQuestionIndex + 1}/${questions.length}`;

    return (
        <>
            <div className='overflow-hidden h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
                {testmodel ? (
                    <>
                        <div className='h-screen w-screen absolute top-0 left-0 flex items-center justify-center bg-gray-100 z-50'>
                            <div className='w-[60vw] h-[40vh] flex flex-col justify-center items-center rounded-sm shadow-md shadow-orange-500/20 p-4'>
                                <div className='h-full w-full border-2 border-orange-500/50 rounded-sm font-bold text-center text-3xl flex items-center justify-center'>
                                    Ready to Start ?
                                </div>
                                <button className='w-[40%] bg-gradient-to-tr from-orange-600 to-orange-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40' onClick={startTest}>Start Quiz</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {!testCompleted ? (
                            <div className='w-[60vw] h-[40vh] flex flex-col rounded-sm shadow-md shadow-orange-500/20 p-4'>
                                <div className='h-2/3 w-full border-2 border-orange-500/50 rounded-sm font-bold text-center text-3xl flex items-center justify-center'>
                                    {currentQuestion.title}
                                </div>
                                <div className='h-1/3 p-1 w-full flex flex-row justify-center items-center gap-2'>
                                    <div className='w-3/4 h-2/3 flex items-center border-2 border-gray-200 shadow-md shadow-gray-100 hover:bg-green-400 text-xl pl-5 cursor-pointer' onClick={() => handleOptionClick(currentQuestion.option1)}>
                                        {currentQuestion.option1}
                                    </div>
                                    <div className='w-3/4 h-2/3 flex items-center border-2 border-gray-200 shadow-md shadow-gray-100 hover:bg-green-400 text-xl pl-5 cursor-pointer' onClick={() => handleOptionClick(currentQuestion.option2)}>
                                        {currentQuestion.option2}
                                    </div>
                                    <div className='w-3/4 h-2/3 flex items-center border-2 border-gray-200 shadow-md shadow-gray-100 hover:bg-green-400 text-xl pl-5 cursor-pointer' onClick={() => handleOptionClick(currentQuestion.option3)}>
                                        {currentQuestion.option3}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='w-[60vw] h-[40vh] flex flex-col rounded-sm shadow-md shadow-orange-500/20 p-4 justify-center items-center gap-8'>
                                    <div className="text-center mt-8 text-xl font-bold">Test Completed!</div>

                                    {score}
                                    {
                                        !issubmitted ? (
                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-2/4" onClick={handleSubmitTest}>
                                                Submit Test
                                            </button>

                                        ) : (
                                            <button className="w-3/4 bg-gradient-to-tr from-orange-600 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40" onClick={routeDashboard}>
                                                Goto Dashboard
                                            </button>

                                        )
                                    }
                                </div>
                            </>
                        )}
                    </>
                )}
                {!testCompleted && (
                    <>
                        <div className="absolute bottom-0 left-0 w-[100vw] h-[5vh] overflow-hidden flex items-center justify-center">
                            <div className='w-full flex justify-between items-center flex-row'>
                                <div className='px-5 font-bold text-orange-500 text-xl'>{progressData}</div>
                                {
                                    btnloader ?
                                        (
                                            <button className="bg-orange-200 hover:bg-orange-200/80 text-white font-bold px-6 py-4 rounded-md cursor-progress " disabled>
                                                <Loader className='animate-spin' />
                                            </button>
                                        )
                                        :
                                        (
                                            <button className="bg-orange-500 hover:bg-orange-500/80 text-white font-bold px-6 py-4 rounded-md" onClick={moveToNextQuestion}>
                                                Skip
                                            </button>
                                        )
                                }
                            </div>
                        </div>
                        <div className='absolute top-0 right-0 p-10 font-bold text-4xl text-orange-500'>
                            <CircleProgressBar time={timer} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default McqPanel;
