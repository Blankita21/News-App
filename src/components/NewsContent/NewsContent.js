import { Container } from "@material-ui/core"
import React from 'react'
import { NewsCard } from "../NewsCard/NewsCard";
import "./NewsContent.css"

export const NewsContent = ({newsArray, newsResults, category, loadMore, setLoadMore, search, setSearch}) => {

    const text= category;
    let type;
    if (text=== "general") {
        type = "General";
      } 
      else if (text=== "business") {
        type = "Business";
      }
      else if (text=== "entertainment") {
        type = "Entertainment";
      }
      else if (text=== "health") {
        type = "Health";
      }
      else if (text=== "science") {
        type = "Science";
      }
      else if (text=== "sports") {
        type = "Sports";
      }
      else {
        type = "Technology";
      } 

      const onChange = (e) => {
        setSearch(e.target.value)
      }

  return (
    <Container maxWidth= "md" >
        <div className="content">
            <div className="typeName">
              <div>
                <h1 className="categoryName">{type}</h1>
              </div>
              <div className="input-wrapper">
                  <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={onChange}
                  />
               </div>
             </div>
            {newsArray.map((newsItem) => (
                <NewsCard newsItem= {newsItem} key= {newsItem.title} />
            )) }
            {
              loadMore <= newsResults && (
                <>
                  <hr /> 
                  <button className="loadMore" onClick={() => setLoadMore(loadMore+20)} >load more</button>  
                </>
              )
            } 
        </div>    
    </Container>
  )
}
