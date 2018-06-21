import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render(){
        
        const refactoredArticlesList = this.props.articlesList.map(article => {
            return <Article article={article} />;
          });
        return(
            <section>

            {refactoredArticlesList}

            </section>
        )
    }
}

export default ArticleList