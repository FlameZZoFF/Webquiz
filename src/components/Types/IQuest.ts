

interface Ioption {
    text:string
    isCorrect:boolean
}


export interface IQuest {
    questionNumber:number,
    question:string,
    options:Ioption[]
}