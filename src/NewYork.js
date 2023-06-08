import usa from './pictures/usa.png';
import empirestate from './pictures/ny1.jpg';
import statueOfLiberty from './pictures/ny2.jpg';
import timesSquare from './pictures/ny3.jpg';

export default function NewYork(){
    return(
      <div>
        <h1 className='cityTitle'>New York, USA  <img src={usa} width={35}/></h1>
        <p>
        Welcome to New York, the city that never sleeps! With its towering skyscrapers, vibrant neighborhoods, and rich history, 
        New York is one of the most exciting and dynamic cities in the world.
        </p>
        <p>
        Founded by the Dutch in 1624 as New Amsterdam, the city has been shaped by waves of immigration and cultural diversity. 
        From the iconic Statue of Liberty, a gift from France in 1886, to Ellis Island, the gateway for millions of immigrants 
        to the United States, New York is a city that embodies the "American dream".
        </p>
        <p>
        Explore the city's rich history with a visit to the Metropolitan Museum of Art or the American Museum of Natural History. 
        Or, take a stroll through Central Park, which was designed in the 1850s by Frederick Law Olmsted and Calvert Vaux as a
        peaceful oasis in the heart of the city.
        </p>
        <p>
        New York is also home to some of the world's most iconic landmarks, including the Empire State Building, 
        the Brooklyn Bridge, and Times Square, the city's pulsing entertainment hub.
        </p>
        <p>
        And when it comes to food, New York has it all. From pizza and bagels to international cuisine from all corners of the globe,
        you'll never go hungry in this culinary capital.
        </p>
        <p>
        So come and experience the energy and excitement of New York, a city with a rich history and a bright future.
        Book your trip today and get ready to be swept away by the endless possibilities of this incredible destination.
        </p>
        <div className='imageContainer'>
          <img src={empirestate} width={250}/>
          <img src={statueOfLiberty} width={250}/>
          <img src={timesSquare} width={250}/>
        </div>
      </div>
    )
  }
  