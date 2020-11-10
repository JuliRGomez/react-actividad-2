import React from 'react'
export default class TrenCard extends React.Component {
    render() {
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c2">
                        <h6>{this.props.category}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="content">
                        <h5>{this.props.title}</h5>
                    </div>
                </div>
                
                <div className="row">
                    <h3>{this.props.noTweets}</h3>
                </div>

            </div>
        )
    }
}