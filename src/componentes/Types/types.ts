export type Quiz ={
  catagory : string,
  type:string ,
  difficulty : string ,
  question : string,
  correct_answer: string,
  incorrect_answers : string[]

} 

export type QuestionType ={
 catagory : string,
 option:string[] ,
 question : string,
 correct_answer: string,
 answer : string

} 


export type QuestionTypes = {
  name : string
  question: string
  options: string[]
  callback: (e: React.FormEvent<EventTarget>, ans :string)=>void
  totalQuestion : number
  curruntQuestion : number
}
export type QuestionCatagory = {
  id : number
  name: string
  
}



export type inputPropsType = {
  name : string
  question: string
  catagory: string
  type : string
  
}

export type ResultProps = {
  name : string
  totalQuestion: number
  score: number
  type : string
  callback: (e: React.FormEvent<EventTarget>, setsore :number , showrsult : boolean)=>void
}



