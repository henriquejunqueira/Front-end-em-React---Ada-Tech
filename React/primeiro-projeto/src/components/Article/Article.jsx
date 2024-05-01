import React from 'react';

import './styles.css';

/* this.props.title é o mesmo que:

    this.props = {
        title: "Exemplo"
    }
*/

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img
          className="img-article"
          src={this.props.thumbnail}
          alt={this.props.title}
        />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
