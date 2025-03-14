import React, { useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

const Events = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  return (
    <div className="event-tabs">
      <div className="tabs">
        {['day1', 'day2', 'day3', 'day4', 'day5'].map((day) => (
          <button
            key={day}
            className={`tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="image-container">
        {selectedDay === 'day1' && (
          <div>
            <Link to="/overarm-cricket(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935411/events/n8sb08ifxyzowsc70ss1.png" alt="Cricket" />
            </Link>
            
            <Link to="/tug-of-war(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935417/events/ejljekjndbcfetfyifch.png" alt="Tug of War" />
            </Link>
          </div>
        )}
        {selectedDay === 'day2' && (
          <div>
            <Link to="/football(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935420/events/w9tsbpnug0lgymnk9yzh.png " alt="Football(Boys)" />
            </Link>
            <Link to="/throwball(girls)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935420/events/eiwqdbxzq95altm7rg0k.png" alt="Throwball(Girls)" />
            </Link>
            <Link to="/volleyball(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935422/events/tgzfqbce88fqvppwhmy8.png" alt="Volleyball(Boys)" />
            </Link>
            <Link to="/tug-of-war(girls)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935418/events/tycchfj17bndybqg14bc.png" alt="Tug of War(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day3' && (
          <div>
            <Link to="/kabbadi(girls)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935409/events/e43jc9datatkygcjnvxc.png" alt="Kabbadi" />
            </Link>
            <Link to="/box-cricket(girls)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935410/events/i5unkfxhrzjygksxcag2.png" alt="Box-Cricket(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day4' && (
          <div>
            <Link to="/badminton_singles(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935412/events/lwrkukwmmrrwy0qesqjq.png" alt="Badminton" />
            </Link>
            <Link to="/table-tennis-singles(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935410/events/nnftuxvlfe66iknge9dz.png" alt="Table Tennis" />
            </Link>
            <Link to="/chess(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935415/events/vib81a0ioifmfqvh3ydh.png" alt="Chess" />
            </Link>
          </div>
        )}
        {selectedDay === 'day5' && (
          <div>
            <Link to="/carrom_singles(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935415/events/yiyvjfuqwtrxrlrkm7ch.png" alt="Carrom" />
            </Link>
            <Link to="/box-cricket(boys)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935411/events/n8sb08ifxyzowsc70ss1.png" alt="Box Cricket (boys)" />
            </Link>
            <Link to="/throwball(girls)/details">
              <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741935413/events/hpgpkwxn9covts2j80gv.png" alt="Dodgeball (girls)" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
