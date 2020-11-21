import React from 'react'
import './styles.css';
import {profiles} from '../../profiles'


export default class SearchDropDown extends React.Component{

render(){
    return(     
        <div className="contextual-dropdown">
            
                {
                    profiles.filter((user)=>user.userName.toLocaleLowerCase().includes(this.props.userToSearch.toLowerCase())
                    ).map((user)=>{
                      

                        
                        return(
                            <div className="row">
                                <div className="card">
                    <div className="c1">
                        <img src={user.profileImg} alt="profile"/>
                    </div>
                    <div className="c2">
                        <h6>{user.profile}</h6>
                        <h6>{user.userName}</h6>
                    </div>
                   </div>
                    {/* <div className="c3"></div> */}
                </div>
                        )
                        
                    })
                }
                    
           
        </div>
    )
}
}