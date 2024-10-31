import BanksAndCorporationRecognitions from './Components/BanksAndCorporationRecognitions';
import Hero from './Components/hero'
import Talk from './Components/Talk';
import Entities from './Components/Entities';
export default function Page() {
  return (
    <div className='bg-white'>
<Hero/>
<BanksAndCorporationRecognitions/>
<Talk/>
<Entities/>
</div>
  );
}
