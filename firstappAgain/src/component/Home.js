import React, { Component } from "react";
import Header from "./Header";
import NewsDetails from "./NewsDetails";
import Footer from "./Footer";
import JSON from "../db.json";

class Home extends Component {
  constructor() {
     super()

     this.test = {
          news: JSON,
          filtered: JSON
     }
  }

  filterNews(keyword) {
     const output = this.test.news.filter((data) => {
          return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
     });
     this.setTest({filtered: output});
  }


  render() {
     return (
          <React.Fragment>
             <Header userText={(userInput) => this.filterNews(userInput)}/>
             <NewsDetails newslist={this.test.filtered}/>
             <Footer year="2021"/>
          </React.Fragment>
     )
  }
}


export default Home;


