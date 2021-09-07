import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css';

const Home = () => {
    const [clubs, setClub] = useState([]);

    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        //const url ='https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
        fetch(url)
        .then(res => res.json())
        .then(data => setClub(data.teams))
    }, [])
    return (
        <div className="card-group homepage-style">
            {/* <h3>Club name: {clubs.length}</h3> */}
            {/* {
                clubs.map(club => <li>{club.strTeam}</li>)
            } */}
            {
                clubs.map(club => <Club club={club}></Club>)
            }
        </div>
    );
};

export default Home;

