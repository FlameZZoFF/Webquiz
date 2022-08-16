import { ICategory } from "../Types/ICategory";
import JSphoto from "../images/categoryImage/js-cat.svg"
import CSSphoto from '../images/categoryImage/css-cat.svg'
import HTMLphoto from '../images/categoryImage/html-cat.svg'
import REACTphoto from '../images/categoryImage/react-cat.svg'
import ReactQuest from "../questions/React_quests";
import JSquest from "../questions/JS_quests";
import CSSquest from "../questions/CSS_quests";
import HTMLquest from "../questions/HTML_quests";

const categories:ICategory[] = [{
id:1,
name:'JavaScript',
desription:'Learn JavaScript',
photo:JSphoto,
path:'/JavaScript',
length:JSquest.length,
},
{
id:2,
name:'CSS',
desription:'Learn CSS',
photo:CSSphoto,
path:'/CSS',
length:CSSquest.length,
},
{
id:3,
name:'HTML',
desription:'Learn HTML',
photo:HTMLphoto,
path:'/HTML',
length:HTMLquest.length
},
{
id:4,
name:'React',
desription:'Learn React',
photo:REACTphoto,
path:'/React',
length:ReactQuest.length,
},


]
export default categories