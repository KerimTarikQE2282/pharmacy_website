import BanksAndCorporationRecognitions from './Components/BanksAndCorporationRecognitions';
import Hero from './Components/hero'
import Talk from './Components/Talk';
import Entities from './Components/Entities';
import OurGrowth from './Components/OurGrowth'
import OngoingProjects from './Components/OngoingProjects'
import OurServices from './Components/OurServices'
import Graph from './Components/Graph'
export default function Page() {
  return (
    <div className='bg-white'>
<Hero/>
<BanksAndCorporationRecognitions/>
<Talk/>
<Entities/>
<OurGrowth/>
<OngoingProjects/>
<Graph/>
<OurServices/>
</div>
  );
}
