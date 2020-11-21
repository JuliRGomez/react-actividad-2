import React from 'react';
import Trend from '../trend'
import SearchDrop from '../searchDropDown/searchDropDown'
//<button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button>

class SidebarCol extends React.Component{

    constructor(){
        super();
        this.state={
            searchContent:""
        }
    }
    handleInputSearch=(event)=>{
        const content=event.target.value;
        this.setState({searchContent:content})
    }
    render(){
        return(
            <div className="t-sidebar-col">
                <Trend 
                handleInput={this.handleInputSearch}/>
                {this.state.searchContent?
                <SearchDrop 
                userToSearch={this.state.searchContent}/>:null
                }
            </div>
        )
    }
}


export default SidebarCol; 