import japan from './pictures/japan.png';
import tokyo1 from './pictures/tokyo1.jpg';
import tokyo2 from './pictures/tokyo2.jpg';
import tokyo3 from './pictures/tokyo3.jpg';

export default function Tokyo(){
    return(
      <div>
        <h1 className='cityTitle'>Tokyo, Japan  <img src={japan} width={35}/></h1>
        <p>
        Welcome to Tokyo, the dazzling metropolis where ancient traditions meet modern technology! 
        With its unique blend of old and new, Tokyo is a city like no other, offering visitors an unforgettable experience.
        </p>
        <p>
        Tokyo's history dates back to the 12th century when it was known as Edo, a small fishing village. 
        It later became the political and cultural center of Japan when it was chosen as the capital by the Tokugawa shogunate
        in the 17th century. Today, Tokyo is a global city that represents the cutting edge of technology, fashion, and culture.
        </p>
        <p>
        Explore Tokyo's rich history with a visit to the historic district of Asakusa, where you can stroll down Nakamise Street, 
        lined with traditional shops selling local crafts and souvenirs. Don't miss the iconic Senso-ji Temple, one of Tokyo's oldest 
        Buddhist temples, with its stunning architecture and peaceful atmosphere.
        </p>
        <p>
        For a taste of modern Tokyo, head to the bustling neighborhoods of Shibuya and Shinjuku, where you'll find dazzling neon 
        lights, high-rise buildings, and a vibrant nightlife scene. The iconic Shibuya Crossing, known as the busiest intersection
        in the world, is a must-see spectacle.
        </p>
        <p>
        Tokyo is also a city of innovation and technology, with futuristic landmarks such as the Tokyo Skytree, one of the tallest 
        towers in the world, and the cutting-edge Odaiba district, known for its high-tech entertainment and shopping.
        </p>
        <p>
        Immerse yourself in Japanese culture with a visit to the Meiji Shrine, a tranquil oasis in the heart of the city, or 
        experience traditional Japanese performing arts like kabuki or sumo wrestling.
        </p>
        <p>
        Come and experience the magic of Cairo, where history, culture, and adventure come together in one incredible destination.
        Book your trip today and get ready to be swept away by the wonders of Egypt.
        </p>
        <p>
        Come and experience the unique blend of history, culture, and innovation in Tokyo. Book your trip today and get ready to be
        captivated by this vibrant city that seamlessly blends the old and the new in a way that's truly mesmerizing.
        </p>
        <div className='imageContainer'>
        <img src={tokyo1} width={275}/>
        <img src={tokyo2} width={275}/>
        <img src={tokyo3} width={275}/>
        </div>
      </div>
    )
  }