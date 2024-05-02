import React from 'react';

import './styles.css';

/* this.props.title é o mesmo que:

    this.props = {
        title: "Exemplo"
    }
*/

// ! Posso pegar propriedades de duas formas:
// ? Forma 1:
// * export function Article(props) {
// * <img className="img-article" src={props.thumbnail} alt={props.title} />

// ? Forma 2:
// * export function Article({title, provider, description, thumbnail }) {
// * <img className="img-article" src={thumbnail} alt={title} />

export function Article({ title, provider, description, thumbnail }) {
  return (
    <article id="article">
      <img className="img-article" src={thumbnail} alt={title} />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
