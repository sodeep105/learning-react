import React from 'react';
import {Card, Badge, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {

    const {name, image,country, price} = props.player;
    const countryStyle = {border:'1px solid golden', margin:'10px', padding:'10px'};
    const playerAdd = props.handlePlayerAdd;
    return (
        <div style={countryStyle}>
            <Card className="card shadow-sm rounded d-flex" style={{width: '18rem'}}>
                <img className="card-img-top" src={image} alt="Card image cap"></img>
                 <div className="card-body">
                    <p className="card-title">{name}</p>
                    <p className="card-text font-weight-bold">{country}</p>
                    <p className="card-text">Price: {price}</p>
                    <button className='btn btn-success'  onClick={() => playerAdd(props.player)}><FontAwesomeIcon icon={faTrophy} />Get {name}!</button>
                 </div>
            </Card>
        </div>
    );
};

export default Player;