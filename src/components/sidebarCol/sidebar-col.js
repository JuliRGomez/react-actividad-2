import React from 'react';
import Trend from '../trend'
//<button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button>
const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <Trend />
        </div>
    )
}

export default SidebarCol;