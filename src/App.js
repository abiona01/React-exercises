import { Component } from "react";



export default class  App extends Component {
  componentDidMount(){
    let winter = [11, 0, 1];
    let spring = [2, 3, 4];
    let summer = [5, 6, 7];
    let autumn = [8, 9, 10];
    const currentMonth = new Date().getMonth()
    console.log(currentMonth)
    if(winter.includes(currentMonth)){
      //for morning
      document.body.style.background = 'white'
    }else if(spring.includes(currentMonth)){
      //for afternoon
      document.body.style.background = 'yellow'
    }else if(summer.includes(currentMonth)){
      //for night
      document.body.style.background = 'black'
    }else if(autumn.includes(currentMonth)){
      document.body.style.background = 'red'
    }
  }
 render(){
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
 }
}


/**export default class  App extends Component {
  componentDidMount(){
    const currentTime = new Date().getHours()
    console.log(currentTime)
    if(currentTime >= 0 && currentTime < 12){
      //for morning
      document.body.style.background = 'white'
    }else if(currentTime >= 12 && currentTime < 19){
      //for afternoon
      document.body.style.background = 'yellow'
    }else{
      //for night
      document.body.style.background = 'black'
    }
  }
 render(){
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
 }
 
}*/