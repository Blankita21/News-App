import React from 'react'
import "./NewsCard.css"
import placeholder from './placeholder.jpg'

export const NewsCard = ({newsItem, key}) => {

    // console.log(newsItem)
  const fulldate = new Date(newsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour>12 ? true : false ;

  return (
    <div className="newsCard">
       <a href={newsItem.url} target= "__blank" >
        <img 
            src= {
                newsItem.urlToImage 
                ? newsItem.urlToImage 
                : placeholder} 
            alt={newsItem.title} 
            className= 'newsImage'
        />
        </a> 
       <div className="newsText">
            <div>
                <span className="title">
                    <a href={newsItem.url} target= "__blank" >
                        {newsItem.title} 
                    </a>     
                </span>
                <br></br>
                <span className="author">
                    <a href={newsItem.url} target= "__blank" >
                        <b>short {" "}</b>
                        <span className="muted">
                        by {newsItem.author ? newsItem.author : "unknown"} {" "}
                        {
                            time
                                ? `${hour-12}:${date[4].substring(3, 5)} pm` 
                                : `${hour}:${date[4].substring(3, 5)} am`
                        } on  {date[2]} {date[1]} {date[3]}, {date[0]}
                        </span>   
                    </a>    
                </span>
            </div>
            <div className="lowerNewsText">
                <div className="description">{newsItem.description}</div>
                <span className="readmore">
                    read more at{" "}
                    <a href={newsItem.url} target= "__blank" >
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
            </div>
        </div>
    </div>
  )
}
