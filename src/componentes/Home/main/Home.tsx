import React, { useEffect, useState, Fragment } from 'react'
import './home.css'
import { QuestionType, inputPropsType, QuestionCatagory, } from '../../Types/types'
import { getQuizDetails, getQuizCatagory } from '../../UseContext/Context'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as  Yup from 'yup'
import Card from '../QuestionCard'
import Result from '../Result'
const Home: React.FC<inputPropsType> = () => {
    let [quiz, setQUiz] = useState<QuestionType[]>([])
    let [catgry, setcatgry] = useState<QuestionCatagory[]>([])
    let [currentStep, setCurrentStep] = useState(0)
    let [score, setScore] = useState(0)
    let [showResult, setShowResult] = useState(false)
    let [Loader, setLoader] = useState(false)
    let [Show, setShow] = useState(false)
    let [name, setname] = useState("")

    useEffect(() => {
        async function fetchData() {
            const questions: QuestionCatagory[] = await getQuizCatagory()
            setcatgry(questions);
        }
        fetchData();
    }, []);

    const handleReset = (e: React.FormEvent<EventTarget>, setsore: number, showrsult: boolean) => {

        setScore(setsore)
        setShowResult(showrsult)
        setQUiz([])
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>, userans: string) => {
        e.preventDefault();


        const currentQuestion: QuestionType = quiz[currentStep];
        // console.log("user ans" , userans ,   "correct ans" ,  currentQuestion.correct_answer)

        if (userans === currentQuestion.correct_answer) {

            setScore(++score);
        }
        if (currentStep !== quiz.length - 1) {
            setCurrentStep(++currentStep);
            // setScore(0)
        }
        else {
            setShowResult(true);
        }


    }

    // const DataSubmit = (e: React.FormEvent<EventTarget>) => {
    //     e.preventDefault()
    //     let values = {
    //         name: name,
    //         question: ques,
    //         type: type,
    //         catagory: cata

    //     }

    //     GetData(values)




    // }




    let GetData = async (data: { name?: string; question: any; catagory: any; type: string }) => {
        const fetchQuery = await getQuizDetails(data.question, data.catagory, data.type);
        if (fetchQuery) {
            setLoader(true)
            setQUiz(fetchQuery)
            setShow(true)
        }
        else {

        setLoader(false)
        }

    }



    console.log("quiz" , quiz)
 

    let IntialValue: inputPropsType = { name: '', catagory: '', question: '', type: '' }

    return (


        <Fragment>

            {
                quiz.length ? (
                    !showResult ? (

                        <Card
                            options={quiz[currentStep].option}
                            question={quiz[currentStep].question}
                            callback={handleSubmit}
                            totalQuestion={quiz.length}
                            name={name}
                            curruntQuestion={currentStep}
                        />

                    )
                        :
                        (
                            <Result
                                name={name}
                                totalQuestion={quiz.length}
                                type={quiz[currentStep].catagory}
                                score={score}
                                callback={handleReset}
                            />
                        )
                )
                    :
                    (




                        <div id="home">
                            <section className="home-section">
                                <div style={{ textAlign: 'center' }}>
                                    <span className="mdi mdi-cube-outline cube"></span>
                                </div>
                                <div className="heading">
                                    <h1>Quiz App</h1>
                                </div>
                                <Formik
                                    initialValues={IntialValue}
                                    validationSchema={
                                        Yup.object().shape({
                                            name: Yup.string().required("Name Field is required"),
                                            question: Yup.string().required("Question field is required"),
                                            type: Yup.string().required("Category field is required"),
                                            catagory: Yup.string().required("Type field is required")

                                        })
                                    }
                                    onSubmit={(values, { setSubmitting }) => {
                                        console.log("values", values)
                                        setname(values.name)
                                        GetData(values)

                                    }}
                                >
                                    {({ isSubmitting, errors, touched, dirty, isValid }) => (

                                        <Form className="question-form">
                                            <div className="field">
                                                <Field type="text" name="name" className='form-control' placeholder="Username" />
                                            </div>

                                            <div className="error">
                                                <ErrorMessage name="name" component="div" className="error" />

                                            </div>
                                            <div className="QQuntity">
                                                <Field as="select" name="question" className={'form-control'}>
                                                    <option defaultChecked>Choose Questions Quntity</option>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </Field>
                                            </div>
                                            <div className="error">
                                                <ErrorMessage name="question" component="span" className="error" />

                                            </div>
                                            <div className="QCatagory">
                                                <Field as="select" name="catagory" className={"form-control"}>
                                    <option defaultChecked>{!catgry.length ? "Category loading ....." : "Choose Catagory"} </option>
                                                    {catgry.map((item, index: number) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </Field>

                                            </div>
                                            <div className="error">
                                                <ErrorMessage name="catagory" component="span" className="error" />

                                            </div>
                                            <div className="Qtype">
                                                <Field as="select" name="type" className={"form-control"}>
                                                    <option defaultChecked>Choose Questions Type</option>
                                                    <option value="hard">Hard</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="easy">Easy</option>
                                                </Field>

                                            </div>
                                            <div className="error">
                                                <ErrorMessage name="type" component="span" className="error" />

                                            </div>
                                            <div className="btn">
                                                <button className={ !(dirty && isValid) ? " disable btn btn-info" : "btn btn-primary"} disabled={!(dirty && isValid)} type="submit" >
                                                    {/* {
                                                        
                                                        !Loader ? null : <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    } */}
                                                    
                                                    {/* <span className="sr-only">Loading...</span> */}
                                                    Start Quiz
                                                </button>
                                                {/* <button  className={ !(dirty && isValid) ? " disable btn btn-info" : "btn btn-primary"} disabled={!(dirty && isValid)} type="submit"  >Start Quiz</button> */}
                                            </div>

                                        </Form>
                                    )}
                                </Formik>



                            </section>
                        </div>
                    )

            }

        </Fragment>
    )
}

export default Home
