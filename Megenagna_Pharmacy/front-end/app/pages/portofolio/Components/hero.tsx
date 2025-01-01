import PortofolioImage from '../../../../Resources/ourPortofolio.png';

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${PortofolioImage.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        
        overflow: 'auto'
      }}
      className='lg:h-[85vh] lg:w-[99vw] h-[75vh]'
    >
      <div className='relative top-[55vh] left-[5vw] w-[30vw] verflow-hidden'>
      <p className='text-5xl font-bold lg:mb-10  mb-[10vh] lg:w-[40vw] w-[90vw]'>Our Portofolio</p>
      <p className='lg:w-[40vw] w-[90vw] relative lg:bottom-0 bottom-[10vh]'>Delivering quality, affordable pharmaceutical solutions to empower healthcare and improve lives.</p>
      </div>
    </div>
  );
}
