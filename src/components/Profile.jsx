import './styles.css';
import Button from './Button';
import oceansData from './oceans.json';

const listItem = oceansData.map((ocean) =>
   <div key={ocean.id} className={`${ocean.fishCheck === 'true'? 'isAFish' : 'profile'}`}>
      <img src={ocean.image} alt={ocean.name} className='img'/>

      <h1>{ocean.name}</h1>
      <h4>Fun Facts:</h4>

      <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>

      <Button />
   </div>
);

function Profile() {
   return(
      <ul>
         {listItem}
      </ul>
   );
}

export default Profile;