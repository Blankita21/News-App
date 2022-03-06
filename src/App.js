import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import apiKey from './data/api';
import { Navnews } from './components/Navnews';
import { NewsContent } from './components/NewsContent/NewsContent';
import { NewsCard } from './components/NewsCard/NewsCard';

function App() {
  const[category, setCategory] = useState("general");
  const[newsArray, setNewsArray] = useState([]);
  const[newsResults, setNewsResults] = useState();
  const[loadMore, setLoadMore] = useState(20);
  const[search, setSearch] = useState();
  let news;

  async function newsApi() {
    try {
      if (!search) {
        news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
        );
      }

      else{
        news = await axios.get(
          `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${apiKey}&pageSize=${loadMore}`
        );
      }
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(newsArray)
  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore, search])

  return (
    <div>
      <Navnews setCategory= {setCategory} />
      <NewsContent 
        loadMore = {loadMore} 
        setLoadMore = {setLoadMore} 
        newsArray= {newsArray} 
        newsResults= {newsResults} 
        category= {category} 
        search= {search}
        setSearch= {setSearch}
      />
    </div>
  );
}

export default App;
