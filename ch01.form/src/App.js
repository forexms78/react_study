import React from 'react';

class App extends React.Component {

  /* 데이터를 다룰때 두가지 방법

  props 와 state
  props는 변동되지 않는 데이터를 다룰 때 사용

  state는 오브제트로서 현재 컴포넌트에 한정 유동적인 데이터

  */
 constructor(props){
     super(props);

     this.state = {
       value: '',
   }
 }

 handleChange = (event) => {
   this.setState({
     value: event.target.value
   });
 }

 handleSubmit = (event) => {
   alert('나의 이름은 ' + this.state.value);
   event.preventDefault();
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         name:
         <input
         type="text"
         value={this.state.value}
         onChange={this.handleChange}
         />
       </label>
       <input type="submit" value="Submit"/>
     </form>
   )
 }
}

export default App;