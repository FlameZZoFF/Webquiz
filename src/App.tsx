import React from 'react';
import './App.scss';
import {Routes, Route ,Navigate} from 'react-router-dom'
import Layout from './components/layout/layout';
import Main from './components/main/main';
import ReactQ from './components/QuestionsPage/React_Q';
import JavascriptQ from './components/QuestionsPage/javascript_Q';
import HtmlQ from './components/QuestionsPage/html_Q';
import CssQ from './components/QuestionsPage/css_Q';


function App() {

  return (
    <div className='App'>
     <Routes>


     <Route element={<Layout/>}>
     <Route index element={<Main/>}/>
     <Route path='/JavaScript' element={<JavascriptQ />}/>
     <Route path='/CSS' element={<CssQ />}/>
     <Route path='/HTML' element={<HtmlQ />}/>
     <Route path='/React' element={<ReactQ />}/>

      </Route>

     </Routes>
    </div>
  );
}

export default App;
