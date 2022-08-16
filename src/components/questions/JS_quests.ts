import { IQuest } from "../Types/IQuest";

const JSquest:IQuest[] = [{
    questionNumber:1,
    question:'Чем отличается обычная функция от стрелочной?',
    options:[
        {text:'Синтаксисом и все.',isCorrect:false},
        {text:'Синтаксисом,и тем что у стрелочной функции нету своего this',isCorrect:true},
        {text:'Синтаксисом,и тем что у стрелочной функции есть свой this',isCorrect:false}
    ]
},
{
    questionNumber:2,
    question:'Сколько всего способов объявления переменной?',
    options:[
        {text:'4',isCorrect:true},
        {text:'3',isCorrect:false},
        {text:'5',isCorrect:false}
    ]
},
{
    questionNumber:3,
    question:'что такое this ?',
    options:[
        {text:'Ссылка на объект',isCorrect:true},
        {text:'Прототип объекта',isCorrect:false},
        {text:'Метод массива',isCorrect:false}
    ]
},
{
    questionNumber:4,
    question:'Можно ли изменять что либо в значении объявленного с помощью const?',
    options:[
        {text:'Менять нельзя ничего,потому что это константа',isCorrect:false},
        {text:'Можно менять только объекты,и с помощью методов массивы',isCorrect:true},
        {text:'Можно менять любые данные если поставить после символ &',isCorrect:false}
    ]
    
},]

export default JSquest