import france from './pictures/france.png';
import eiffelTower from './pictures/paris.jpg';
import notreDame from './pictures/notreDame.jpg';
import frenchFood from './pictures/frenchFood.jpg';

export default function Paris(){
    return(
    <div>
      <h1 className='cityTitle'>Paris, France  <img src={france} width={35}/></h1>
      <p>
        Bienvenue à Paris, the City of Light! Come and experience the magic of one of the world's most beautiful and historic cities.
      </p>
      <p>
        Paris has been a global center of art, culture, and fashion for centuries. It was founded in the 3rd century BC as a small 
        fishing village on the banks of the Seine River. Over the centuries, it grew into a major center of trade and learning, 
        home to some of the world's most famous artists, writers, and intellectuals.
      </p>
      <p>
        Take a stroll through the charming streets of Montmartre, where artists such as Picasso and Van Gogh found inspiration.
        Or, visit the Louvre, one of the world's most famous museums, with its stunning collection of art and artifacts.
      </p>
      <p>
        Paris is also home to some of the world's most iconic landmarks, such as the Eiffel Tower, which was built for the 1889
        World's Fair and has become a symbol of Paris itself. The Notre-Dame Cathedral, a masterpiece of Gothic architecture, 
        is another must-see attraction.
      </p>
      <p>
        And let's not forget about the food! Paris is home to some of the world's finest restaurants, where you can indulge in 
        classic French cuisine like escargot, coq au vin, and macarons.
      </p>
      <p>
        So come and experience the magic of Paris, where history and culture come alive at every turn. Book your trip today and get 
        ready to fall in love with the City of Light.
      </p>
      <div className='imageContainer'>
        <img src={eiffelTower} width={250}/>
        <img src={notreDame} width={250}/>
        <img src={frenchFood} width={250}/>
      </div>
    </div>
  )
}