import React  from 'react'
import { QuestionType , Quiz , QuestionCatagory } from '../Types/types'
const shuffleArray = (array: any[])=>[...array].sort(()=>Math.random() - 0.5);




export enum Dificulty {
    HARD = "hard",
    MEDIUM = "medium",
    EASY = "easy"

}



export const getQuizDetails = async(totalQuestions:number, catagory : number ,defficulty:String ):Promise<QuestionType[]>=>{
         console.log("data " , totalQuestions , defficulty , catagory)
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${catagory}&difficulty=${defficulty}&type=multiple`)
    let {results} = await res.json();
      
      const quiz:QuestionType[] = results.map((questionObj: Quiz)=>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;

}

export const getQuizCatagory = async():Promise<QuestionCatagory[]>=>{
const res = await fetch(`https://opentdb.com/api_category.php`)
let {trivia_categories} = await res.json();
 const QuizCatagory:QuestionCatagory[] = trivia_categories.map((questionObj:QuestionCatagory )=>{
   return{
       id : questionObj.id,
       name: questionObj.name,
      
   }
})
return QuizCatagory;

}






