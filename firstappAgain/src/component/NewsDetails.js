import React from 'react';

const NewsDetails = (props) => {
          console.log("newsdisplay",props);
          const renderList = props.newslist.map((data,index) => {
              return(
                  <div key={index}>
                      <h3>{data.title}</h3>
                      <p>{data.feed}</p>
                      <center>
                          <img src={data.imageUrl} alt={data.title}/>
                      </center>
                  </div>
      
              )
          })
      
          return(
              <React.Fragment>
                  {renderList}
              </React.Fragment>
          )

}












export default NewsDetails;