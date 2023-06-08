import egypt from './pictures/egypt.png';
import pyramids from './pictures/pyramids.jpg';
import sphynx from './pictures/sphynx.jpg';
import cairo2 from './pictures/cairo2.jpg';


export default function Cairo(){
    return(
      <div>
        <h1 className='cityTitle'>Cairo, Egypt  <img src={egypt} width={35}/></h1>
        <p>
        Welcome to Cairo, the bustling capital city of Egypt! With its rich history, ancient wonders, and vibrant culture, 
        Cairo is a must-visit destination for travelers seeking adventure and excitement.
        </p>
        <p>
        Founded in the 10th century, Cairo has been at the center of Egyptian culture and history for centuries. 
        Explore the city's past with a visit to the Egyptian Museum, home to a stunning collection of ancient artifacts, 
        including treasures from the tomb of King Tutankhamun.
        </p>
        <p>
        No trip to Cairo is complete without a visit to the Great Pyramids of Giza, one of the Seven Wonders of the Ancient World. 
        These massive structures were built more than 4,500 years ago and continue to inspire awe and wonder today.
        </p>
        <p>
        Cairo is also home to some of the most beautiful Islamic architecture in the world, including the Al-Azhar Mosque and the 
        Citadel of Cairo, a medieval fortress that overlooks the city.
        </p>
        <p>
        Experience the vibrant culture of Cairo with a stroll through the bustling markets of Khan el-Khalili,
         where you can shop for traditional crafts and sample delicious Egyptian street food.
        </p>
        <p>
        And let's not forget about the Nile River, which flows through the heart of Cairo and provides a peaceful respite from the 
        city's hustle and bustle. Take a leisurely cruise along the Nile and soak up the beauty and history of this magnificent city.
        </p>
        <p>
        Come and experience the magic of Cairo, where history, culture, and adventure come together in one incredible destination.
        Book your trip today and get ready to be swept away by the wonders of Egypt.
        </p>
        <div className='imageContainer'>
          <img src={pyramids} width={250}/>
          <img src={sphynx} width={250}/>
          <img src={cairo2} width={250}/>
        </div>
      </div>
    )
  }