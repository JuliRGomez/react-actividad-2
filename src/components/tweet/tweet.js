import React from 'react';
import './styles.css';
import {ShareSolid, HeartSolid, AnnotationSolid} from "@graywolfai/react-heroicons";
class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile"/>
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    {/* <div className="c3"></div> */}
                </div>
                <div className="row">
                    <p className="content">
                        {this.props.content}
                    </p>
                </div>
                <div className="footer">
                    <div className="flex">
                        <AnnotationSolid className="footer-column"/>
                        <h4>{this.props.interactions.comments}</h4>
                    </div>
                    <div className="flex">
                        <ShareSolid className="footer-column"/>
                        <h4>{this.props.interactions.retweets}</h4>
                    </div>
                    <div className="flex">
                        <HeartSolid className="footer-column"/>
                        <h4>{this.props.interactions.likes}</h4>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
// @TwitterSafety Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
// ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel
// lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor
// dolor rhoncus. Cras id leo sem.