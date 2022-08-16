import { IQuest } from "../Types/IQuest";

const HTMLquest:IQuest[] = [{
    questionNumber:1,
    question:'За что отвечает семантика?',
    options:[
        {text:'За более точное определение поисковыми система.',isCorrect:true},
        {text:'За структуру HTML элементов',isCorrect:false},
        {text:'За изменение в структуре HTML элементов',isCorrect:false}
    ]
},
{
    questionNumber:2,
    question:'Какой самый главный тег для создания html документа?',
    options:[
        {text:'<doctype',isCorrect:false},
        {text:'<html>',isCorrect:true},
        {text:'<div>',isCorrect:false}
    ]
},
{
    questionNumber:3,
    question:'Можно ли использовать в структуре своего DOM элемента только <div>,и почему так?',
    options:[
        {text:'Да,div более простой и удобный инструмент чем что либо остальное',isCorrect:false},
        {text:'Нет,потому что div должен быть только один',isCorrect:false},
        {text:'Нет,потому что это нарушит семантику',isCorrect:true}
    ]
},
{
    questionNumber:4,
    question:'HTML это язык программирования?',
    options:[
        {text:'да',isCorrect:false},
        {text:'нет',isCorrect:true},
        {text:'или все таки да',isCorrect:false}
    ]
    
},]

export default HTMLquest