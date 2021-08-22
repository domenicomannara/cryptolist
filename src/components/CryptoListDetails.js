import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'

import CryptoDetails from './CryptoDetails';

import { CaretDownFill } from 'react-bootstrap-icons';


function CryptoListDetails({coins}) {
    
    return (
        <div>
            <h1>Details Coins</h1>
            <Accordion>
                {
                    coins.map(function(coin, index){
                        return (
                            <Card key={index}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
                                        <img alt="" src={coin.image} style={{width: 25, height: 25, marginRight: 10}} />{coin.name} 
                                        <CaretDownFill />
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index + 1}>
                                    <Card.Body>
                                        <CryptoDetails name = {coin.id} />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default CryptoListDetails;