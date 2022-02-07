import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App(){
 const apikey=process.env.REACT_APP_NEWS_API
 const [progress,setprogress]=useState(10);
 const [mode,setmode]=useState('light')
 const [color,setcolor]=useState('black')
 const [nav,setnav]=useState('gray')
   const dark=()=>{
    if(mode==='light'){
      setmode('dark')
      setcolor('white')
      setnav('black')
      document.body.style.backgroundColor='gray'
    }
    else{
      setmode('light')
      setcolor('black')
      setnav('gray')
      document.body.style.backgroundColor='white'
    }
  }
  const setProgress=(pro)=>{
    setprogress(pro)
}
    return (
      <div><Router>
        <Navbar btn={dark} mode={mode} color={color} nav={nav}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Switch>
        <Route exact path="/"> <News   progress={setProgress} size={6}  api={apikey}   key='general' country='in' cet='general'/></Route>
        <Route exact path="/technology"> <News   progress={setProgress} key='technology' size={6}  api={apikey} country='in' cet='technology'/></Route>
        <Route exact path="/business"> <News   progress={setProgress} size={6}  api={apikey}  key='business' country='in' cet='business'/></Route>
        <Route exact path="/entertainment"> <News   progress={setProgress} size={6}  api={apikey}  key='entertainment' country='in' cet='entertainment'/></Route>
        <Route exact path="/health"> <News   progress={setProgress} size={6}  api={apikey}  key='health'  country='in' cet='health'/></Route>
        <Route exact path="/science"> <News   progress={setProgress} size={6}  api={apikey}  key='science'  country='in' cet='science'/></Route>
        <Route exact path="/sports"> <News   progress={setProgress} size={6}  api={apikey}  key='sports'  country='in' cet='sports'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }


