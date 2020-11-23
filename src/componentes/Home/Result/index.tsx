import React, { useState } from 'react'
import { ResultProps } from '../../Types/types'
import './card.css'
import { Link } from 'react-router-dom'

const Result: React.FC<ResultProps> = ({ name, totalQuestion, type, score, callback }) => {
    let remark = ''

    if (score >= 1 && score <= 5) {
        remark = 'Better luck next time!';
    } else if (score <= 8 && score > 5) {
        remark = 'You can do better!';
    } else if (score >= 10 && score <= 12) {
        remark = 'You did great!';
    } else {
        remark = 'You\'re an absolute genius!';
    }


    return (
        <div>
            <div id="Result">
                <section>
                    <div className="container mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="userdata">
                                <h5>Welcome <b>{name}</b> </h5>
                            </div>
                            <div className="py-2 h5"><h1>Quiz Result </h1></div>
                            <div className="py-2 h5"><h3>{remark}  </h3></div>

                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="result-card">
                                <div className="queston-attend">
                                    <p>Total Question</p>
                                    <p>Total Question Attened</p>
                                    <p>Total  Secoure</p>
                                    <p>Total  Persentage</p>


                                </div>
                                <div className="result">
                                    <p>{totalQuestion}</p>
                                    <p>{totalQuestion}</p>
                                    <p>{score}</p>
                                    <p>{score*100/1000}</p>


                                </div>

                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <div className="ml-auto mr-sm-5"> <button className="btn btn-success" onClick={(e: React.FormEvent<EventTarget>) => callback(e, 0, false)
                            }>ReStart Quiz</button> </div>
                        </div>
                    </div>

                    {/* <div className="add">
                <h2>{question}</h2>
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) =>callback(e, selectedAns)
            }>
                {
                    <div className="options">
                        <ul>

                            {options.map((opt: string, index: number) => {
                                return (
                                    <li key={index}>
                                        <input type="radio"
                                            value={opt}
                                            required
                                            checked={selectedAns === opt}
                                            onChange={HendleChange}
                                            name="item" />
                                        {opt}

                                    </li>

                                )

                            })}
                            <button className="btn btn-info" style={{ float: 'left' }}>Next</button>
                        </ul>
                    </div>
                }
            </form> */}
                </section>
            </div>
        </div>

    )
}
export default Result