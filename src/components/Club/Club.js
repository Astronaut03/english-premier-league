import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Club.css';


const Club = (props) => {
    const {idTeam, strTeamLogo, strTeam, strWebsite} = props.club;
    


    return (
        <div className="p-3 club-page">
            <Card className="d-grid gap-1" style={{color: 'black', width: '20rem'}}>
            {/* <Card.Img src={strLeagueAlternate}/> */}
            <Card.Img src={strTeamLogo}/>

            <Card.Body>
                <Card.Title>
                    {strTeam}
                </Card.Title>
                <Card.Title>
                    {strWebsite}
                </Card.Title>

                {/* idTeam, */}
                <Link to={"/"+ idTeam}>
                <Button variant="primary">Club Details</Button> 
                </Link>
                {/* <button className="country-btn"
                onClick={()=> handleClick(idLeague)}>Country Details</button> */}
            </Card.Body>
        </Card>
        </div>
    );
};

export default Club;



