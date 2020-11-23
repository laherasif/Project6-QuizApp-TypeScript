import React, { useState, useEffect } from 'react'
import { QuestionTypes } from '../../Types/types'
import './card.css'
import { useLocation } from 'react-router-dom'

const Card: React.FC<QuestionTypes> = ({ name, options, question, totalQuestion, curruntQuestion, callback }) => {
    const location = useLocation()
    console.log("location", location.state)
    let [selectedAns, setSelectedAns] = useState("")



    const HendleChange = (e: any) => {
        setSelectedAns(e.target.value);


    }

    return (
        <div>
            <div id="Quiz">
                <section className="Quiz-section">
                    <div className="container mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="usersection">
                                <div className="name">
                                    <h5>Welcome : <b>{name}</b></h5>
                                </div>
                                <div className="totalQuestion">
                                    <h3>{totalQuestion} / {curruntQuestion +1}</h3>
                                </div>
                            </div>
                            <div className="py-2 h5"><b>Q.  {question}</b></div>
                            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)
                            }>
                                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                    {options.map((opt: string, index: number) => {
                                        return (

                                            <label className="options" key={index}>{opt}

                                                <input type="radio"
                                                    value={opt}
                                                    required
                                                    checked={selectedAns === opt}
                                                    onChange={HendleChange}
                                                    name="item" />
                                                <span className="checkmark" />
                                            </label>

                                        )
                                    })
                                    }
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <div className="ml-auto mr-sm-5">
                                        <button className="btn btn-success">Next</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </section>
            </div>
        </div>

    )
}
export default Card