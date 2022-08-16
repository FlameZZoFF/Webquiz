
import { IQuest } from "../Types/IQuest";

const ReactQuest:IQuest[] = [{
    questionNumber:1,
    question:'Что такое React?',
    options:[
        {text:'Это библиотека.',isCorrect:true},
        {text:'Это framework',isCorrect:false},
        {text:'Это язык программирования',isCorrect:false}
    ]
},
{
    questionNumber:2,
    question:'для чего нужен useEffect?',
    options:[
        {text:'Для того что бы менять состояния',isCorrect:false},
        {text:'Для обращения напрямую к элементу',isCorrect:false},
        {text:'Для управления жизненным циклом компонента',isCorrect:true}
    ]
},
{
    questionNumber:3,
    question:'Что такое Virtual DOM?',
    options:[
        {text:'Копия DOM дерева',isCorrect:true},
        {text:'DOM дерево',isCorrect:false},
        {text:'Элемент в функции React',isCorrect:false}
    ]
},
{
    questionNumber:4,
    question:'Что такое DOM-дерево? ',
    options:[
        {text:'структура HTML элементов',isCorrect:true},
        {text:'это Virtual DOM',isCorrect:false},
        {text:'Библиотека',isCorrect:false}
    ]
    
},]

export default ReactQuest