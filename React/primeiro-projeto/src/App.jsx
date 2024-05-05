import React, { useEffect, useState } from 'react';
import { Article } from './components/Article/Article';
import { Navbar } from './components/Navbar/Navbar';
// import { Audio } from 'react-loader-spinner';
// import { ProgressBar } from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import './styles/App.css';

// import article1Img from './assets/img/article01.png';
// import article2Img from './assets/img/article02.jpg';
// import article3Img from './assets/img/article03.jpg';
// import article4Img from './assets/img/article04.jpg';
// import { Counter } from './components/Counter/Counter';

// ? Componente em classe é uma classe que herda a classe Component do React,
// ? e retorna HTML dentro do método render

// ? Componente funcional é uma função que retorna um HTML

// ? a tag fragment representada por <></> serve pra ser a tag pai dentro do return
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );
      const newsData = response.data;

      console.log(newsData);
      setNews(newsData);
    }

    loadNews();
  }, []);

  // TODO Método responsável por renderizar o conteúdo HTML do componente
  return (
    <>
      {/* <Counter /> */}

      <Navbar />

      {/* <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}

      {/* <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}

      <section id="articles">
        {news.length === 0 ? (
          <div id="carregamentoPagina">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.imageUrl}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
