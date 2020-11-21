import react from 'react'
import {feed} from '../trendSources'
import CardTrend from './trendCar/trendCard'
import './trendCar/styles.css'
export default class Trend extends react.Component {
    constructor(){
        super();
        this.state={
            trends:feed
        }
    }
    render(){
        return(
            <div>
                <div>
                    <input  className="search-bar" type="text" name="name" placeholder="Buscar en twitter" onChange={this.props.handleInput}/> 
                </div>
                <div>
                    {
                        this.state.trends.map(element=>{
                            return(
                                <CardTrend
                                category={element.category}
                                title={element.title}
                                noTweets={element.noTweets}/>

                            )
                            
                        })
                    }
                </div>
            </div>
        );
    }

}