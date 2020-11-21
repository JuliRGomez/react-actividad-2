import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }
    likeInteraction=(index)=>{

        const copy=[...this.state.tweets]
        if (this.state.tweets[index].interaction.likes.selected){
            copy[index].interaction.likes.count -= 1;
            copy[index].interaction.likes.selected=false;
        } 
        else{
            copy[index].interaction.likes.count += 1;
            copy[index].interaction.likes.selected= true;
        }
        
        this.setState({tweets:copy})
    }
    rTweetInteraction=(index)=>{

        const copy=[...this.state.tweets]
        if (this.state.tweets[index].interaction.retweets.selected){
            copy[index].interaction.retweets.count -= 1;
            copy[index].interaction.retweets.selected=false;
        } 
        else{
            copy[index].interaction.retweets.count += 1;
            copy[index].interaction.retweets.selected= true;
        }
        
        this.setState({tweets:copy})

    }

    toggleContext=(index)=>{
        const copy=[...this.state.tweets]
        copy[index].showContextMenu=!copy[index].showContextMenu;
        this.setState({tweets:copy})
    }

    remove=(index)=>{
        const copy=[...this.state.tweets]
        copy.splice(index,1);
        this.setState({tweets:copy})
    }
    
    render() {
        
        if (this.props.postTweet.flag){
            const copy=[...this.state.tweets];
            copy.push(this.props.postTweet);
           // console.log("actualizando");
            this.setState({tweets:copy});
            this.props.postTweet.flag=false;
        }
        //const {profile, profileName, username, content, display} = {
        //     const {profileName, username, content, display} = {
        //    profileName: "",
        //     username: "",
        //     content: "",
        //     display: ""
        // };
        //

        return (
            <div className="tweets-contain">
                {
                    

                    this.state.tweets.map((tweet,index) => {
                        return (
                            <Tweet 
                                key={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileImg}
                                username={tweet.username}
                                content={tweet.content}
                                interactions={tweet.interaction}
                                likeInteraction={this.likeInteraction}        
                                reTweetInteraction={this.rTweetInteraction}                        
                                index={index}
                                toggleContext={this.toggleContext}
                                showContext={tweet.showContextMenu}
                                remove={this.remove}/>
                                
                                
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;