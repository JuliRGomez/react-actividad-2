import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';
import './context.css';
export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown-delete">
            <div className="contextual-dropdown__row" onClick={() => props.remove(props.index)}>
                <TrashOutline />
                <span>Eliminar</span>
            </div>
        </div>
    )
} 