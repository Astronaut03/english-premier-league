import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faFlag, faVenusMars, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Card, Container} from 'react-bootstrap';
import { useParams } from 'react-router';
import './ClubDetail.css';

const ClubDetail = () => {
    const {idTeam} = useParams();
    const [information, setInformation] = useState([]);
   

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setInformation(data.teams[0]))
    }, [idTeam])

    // console.log(information);

    const {strAlternate,strTeamBanner, strGender, strSport, strStadiumLocation, strStadiumThumb, intFormedYear, strStadiumDescription, strFacebook, strTwitter, strYoutube} = information;

    return (
        <div className="homepage-style">
            <Container >
            <div class="card mb-3">
            <div class="row g-0">
                
                <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title">{strAlternate}</h5>
                    <p class="card-text"><FontAwesomeIcon icon={faHourglassStart}/> Founded:{intFormedYear}</p>
                    <p class="card-text"><FontAwesomeIcon icon={faFlag} /> Location: {strStadiumLocation}</p>
                    <p class="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p class="card-text"><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender}</p>
                </div>
                </div>

                <div class="col-md-8 badge">
                {
                    strGender === 'Male' ? <img src="https://i.ibb.co/5v5hw9S/Rectangle-28.png" alt="" /> : <img src="https://i.ibb.co/Vq288xw/female.png" alt="" />
                }
                </div>

            </div>
            </div>
        
            <>
                <Card>
                <Card.Img variant="top" src={strStadiumThumb} />
                <Card.Body>
                <Card.Text>
                {strStadiumDescription}
                </Card.Text>
                </Card.Body>
                </Card>
            </>

            <>
                <div class="d-flex justify-content-around icon">
                <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/Zf2wFGR/Facebook.png" alt="" /> </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/1bvqkFV/Twitter.png" alt="" /> </a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/WKtmPjd/YouTube.png" alt="" /> </a>

                </div>
            </>
            {/* <div className="icon">
                
                <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/Zf2wFGR/Facebook.png" alt="" /> </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/1bvqkFV/Twitter.png" alt="" /> </a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/WKtmPjd/YouTube.png" alt="" /> </a>
            </div> */}
            {/* <div className="banner">
            <img src={strTeamBanner}  alt="" />
            </div> */}

            {/* <div className="banner">
            <Image src={strTeamBanner} fluid />
            </div> */}

            <>
                <Card>
                <Card.Img variant="top" src={strTeamBanner} />
                </Card>
            </>
        </Container>
        
        </div>
    );
};

export default ClubDetail;