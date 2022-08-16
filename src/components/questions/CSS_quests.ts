import { IQuest } from "../Types/IQuest";

const CSSquest:IQuest[] = [{
    questionNumber:1,
    question:'Какой метод стилизации имеет больший вес?',
    options:[
        {text:'По классу.',isCorrect:false},
        {text:'По ID',isCorrect:false},
        {text:'Через инлайн стили',isCorrect:true}
    ]
},
{
    questionNumber:2,
    question:'Отличие padding от margin?',
    options:[
        {text:'padding-это внутренние отступы,margin-внешние',isCorrect:true},
        {text:'padding-это внешние отступы,margin-внутренние',isCorrect:false},
        {text:'padding не делает отступы,а увеличает размер блока',isCorrect:false}
    ]
},
{
    questionNumber:3,
    question:'Как с помощью flex выставить элементы сверху-вниз?',
    options:[
        {text:'flex-direction:column',isCorrect:true},
        {text:'flex-direction:row',isCorrect:false},
        {text:'flex-direction:row-reverse',isCorrect:false}
    ]
},
{
    questionNumber:4,
    question:'что делает z-index?',
    options:[
        {text:'если у элемента z-index больше,то тогда он будет над элементов у которого z-index меньше',isCorrect:true},
        {text:'z-index - нумерует элементы в том порядке,в котором должны применяться стили ',isCorrect:false},
        {text:'z-index,инструмент который делает верстку кроссбраузерной',isCorrect:false}
    ]
    
},]

export default CSSquest