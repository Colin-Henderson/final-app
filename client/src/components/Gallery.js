import React from "react";
import { Card, CardImg, CardDeck} from 'reactstrap';


// Really would be nice to get an array of all of these images and use just one Card Deck to render all of these guys 
const Gallery = () => {
    return (
    <div>
        <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" style={{padding:'25'}}/>
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
    </div>
    );
  };
export default Gallery;