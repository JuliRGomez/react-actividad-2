import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <form>
                    <input placeholder="¿Qué está pasando?" onChange={props.handleInput} />
                    <div className="t-post-options">
                        <button onClick={props.postTweet}>Twittear</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PostTweet;