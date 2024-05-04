import React from 'react';

// import { Navbar } from './components/Navbar/Navbar';
// import { Article } from './components/Article/Article';

import './styles/App.css';

// import article1Img from './assets/img/article01.png';
// import article2Img from './assets/img/article02.jpg';
// import article3Img from './assets/img/article03.jpg';
// import article4Img from './assets/img/article04.jpg';
import { Counter } from './components/Counter/Counter';

// ? Componente em classe é uma classe que herda a classe Component do React,
// ? e retorna HTML dentro do método render

// ? Componente funcional é uma função que retorna um HTML

// ? a tag fragment representada por <></> serve pra ser a tag pai dentro do return
class App extends React.Component {
  // TODO Método responsável por renderizar o conteúdo HTML do componente
  render() {
    return (
      <>
        <Counter />

        {/* <Navbar /> */}

        {/* <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor diam 
            et augue lobortis, ut rhoncus magna lobortis. Etiam quis vehicula lectus. Suspendisse 
            pulvinar sem ut pulvinar vehicula."
            thumbnail={article1Img}
          />
          <Article
            img={article2Img}
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Phasellus gravida non purus in mollis. Nullam ac aliquam eros. Mauris ante 
            odio, venenatis eget lacus vel, convallis egestas ante. Sed varius est purus, sagittis 
            aliquet arcu bibendum ut."
            thumbnail={article2Img}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Aliquam elit lorem, porttitor nec volutpat euismod, viverra sed 
            velit. Pellentesque augue augue, malesuada ac vestibulum eu, suscipit quis ante."
            thumbnail={article3Img}
          />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Ut hendrerit, felis at tincidunt sagittis, quam justo sagittis ante, 
            ac iaculis est ligula vel lacus. In pellentesque elit fermentum dolor convallis, viverra 
            iaculis lectus sollicitudin."
            thumbnail={article4Img}
          />
        </section> */}
      </>
    );
  }
}

export default App;
