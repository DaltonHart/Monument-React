import React, { Component } from 'react';

class Article extends Component {
    render(){
        return(
            <article>
              <h3>{this.props.article.date}</h3>
              <h2>{this.props.article.title}</h2>
              <img src={this.props.article.img} alt=""/>
              <p>{this.props.article.par}</p>
            </article>
        )
    }
}

export default Article