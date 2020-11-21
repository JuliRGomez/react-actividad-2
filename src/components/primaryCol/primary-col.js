import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';

class PrimaryCol extends React.Component{
    constructor(){
        super();
        this.state={
            newContent:"",
            newPost:{}
        }
    }
    postTweet=()=>{
        const message=this.state.newContent;
        this.setState({newPost: {
            profile: "Julian Rios",
            username: "@juliRGomez",
            content:message,
            interaction: {
                comments: 5,
                retweets:{count: 66,selected:false},
                likes: {count:126,selected:false}
            },
            verified: false,
            blocked: false,
            showContextMenu:false,
            flag:true
        }})
      
    }
    handleInput=(event)=>{
        const content=event.target.value;
        this.setState({newContent:content})
    }


    render(){
        return(
            <div className="t-col-container">
            <h3>Inicio</h3>
            <PostTweet profileUrl={this.props.profileUrl}
                        postTweet={this.postTweet}
                        handleInput={this.handleInput} />
            <Feed postTweet={this.state.newPost}/>
        </div>
        )
    }
}


export default PrimaryCol;