import React from 'react';

export class OnlinerCard extends React.Component {
    render() {
        const { article, commentsCount, title, backgroundUrl } = this.props  
  
        return (
            <div className="onlinerCard" style={{background: `url(${backgroundUrl}) no-repeat center center`}}>
                <div className="onlinerHeading">
                    <p className="onlinerArticle">{article}</p>
                    <p className="onlinerComments">{commentsCount}</p>
                </div>
                <p className="onlinerTitle">{title}</p>
            </div>
        )
    }
}