
import React from 'react';

function HostInfo({ host }) {
    return (
        <div className="host-info">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name}/>
        </div>
    );
}

export default HostInfo;