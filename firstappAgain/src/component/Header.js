import React, {Component} from 'react';
import "./Header.css";


class Header extends Component  {
   constructor() {
      super()
      this.state = {
          title: 'REACT APP',
          userKeyword: 'User Text'
      }
   }

   inputChanges = (event) => {
          this.setState({userKeyword: event.target.value?event.target.value:'User Text'});
          this.props.userText(event.target.value);
   }

   render() {
       return(
          <header>
               <p className=".logo">{this.state.title}</p>
               <center>
                    <input onChange={this.inputChanges}/>
                    <p>{this.state.userKeyword}</p>
               </center>
          </header>
       )
   }
}

export default Header;