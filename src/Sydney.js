import australia from "./pictures/australia.png";
import sydney1 from "./pictures/sydney1.jpg";
import sydney2 from "./pictures/sydney2.jpg";
import sydney3 from "./pictures/sydney3.jpg";



export default function Sydney() {
  return (
    <div>
      <h1 className='cityTitle'>
        Sydney, Australia <img src={australia} width={35} />
      </h1>
      <p>
        Welcome to Sydney, Australia's iconic harbor city where history meets
        modernity! With its stunning waterfront, world-famous landmarks, and
        rich cultural heritage, Sydney is a must-visit destination for travelers
        seeking a blend of history and contemporary allure.
      </p>
      <p>
        Sydney's history dates back thousands of years, with the area originally
        home to the Aboriginal Cadigal people. European settlement began in the
        late 18th century, and Sydney was established as a British colony in
        1788. Today, the city is a vibrant melting pot of cultures and
        influences from around the world.
      </p>
      <p>
        Explore Sydney's rich history with a visit to The Rocks, the city's
        historic area with its narrow cobbled streets, historic pubs, and
        sandstone buildings. Learn about the city's colonial past at the Museum
        of Sydney, which offers fascinating exhibits on Sydney's early days as a
        penal colony.
      </p>
      <p>
        No trip to Sydney is complete without a visit to the iconic Sydney Opera
        House, a UNESCO World Heritage site and one of the world's most famous
        architectural landmarks. Take a guided tour to learn about the history
        and design of this iconic building, or catch a performance at one of its
        many theaters.
      </p>
      <p>
        Sydney is also home to a diverse range of museums, galleries, and
        cultural institutions, including the Art Gallery of New South Wales, the
        Australian Museum, and the Royal Botanic Garden, where you can immerse
        yourself in the city's rich cultural heritage and natural beauty.
      </p>
      <p>
        Come and experience the history, culture, and modernity of Sydney. Book
        your trip today and get ready to be captivated by this vibrant city that
        has something for everyone, from its rich past to its dynamic present.
      </p>
      <div className='imageContainer'>
        <img src={sydney1} width={250} />
        <img src={sydney2} width={250} />
        <img src={sydney3} width={250} />
      </div>
    </div>
  );
}
