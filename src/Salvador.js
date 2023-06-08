import brazil from './pictures/Brazil_flag_300.png';
import pelourinho from './pictures/pelourinho.jpg';
import lacerda from './pictures/salvador2.jpg';
import beach from './pictures/salvador3.jpg';

export default function Salvador(){
    return(
        <div>
          <h1 className='cityTitle'>Salvador, Brazil <img src={brazil} width={35}/></h1>
          <p>
          Welcome to Salvador, Brazil, a city full of vibrant culture, stunning architecture, and a rich history that will leave 
          you captivated.
          </p>
          <p>
          Founded in 1549, Salvador was Brazil's first capital and played a significant role in the country's history. 
          It played a significant role in the fight for Brazil's independence.
          </p>
          <p>
          Today, Salvador is a melting pot of African, European, and indigenous cultures, with a diverse mix of music, food, and art. 
          Take a stroll through the historic Pelourinho district and marvel at the colorful colonial buildings, or visit the
          17th-century Sao Francisco Church with its ornate gold leaf interior.
          </p>
          <p>
          Experience the rhythms of Salvador's Afro-Brazilian culture with a visit to one of its many music festivals,
          including Carnival, the largest street party in the world. Or, explore the city's culinary scene with its delicious
          seafood, tropical fruits, and unique Bahian dishes.
          </p>
          <p>
          If you're looking for adventure, Salvador has plenty to offer. From its stunning beaches and vibrant nightlife to its 
          thriving art scene and bustling markets, there's something for everyone in this vibrant city.
          </p>
          <p>
          Come and discover the magic of Salvador, Brazil, and experience a city that's steeped in history and alive with culture. 
          Book your trip today and get ready to be swept away by the beauty and energy of this incredible destination.
          </p>
          <div className='imageContainer'>
            <img src={pelourinho} width={250} height={200} alt="The historical center of Salvador, Pelourinho"/>
            <img src={lacerda} width={250} height={200} alt=""/>
            <img src={beach} width={250} height={200}/>
          </div>
        </div>
      )
    }