import PortofolioImage from '../../../../Resources/ourPortofolio.png';

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${PortofolioImage.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        height: '85vh', // Full viewport height
        width: '99vw', 
        overflow: 'auto'
      }}
    >
      <div className='relative top-[55vh] left-[5vw] w-[30vw]'>
      <p className='text-5xl font-bold mb-10'>Our Portofolio</p>
      <p>Delivering quality, affordable pharmaceutical solutions to empower healthcare and improve lives.</p>
      </div>
    </div>
  );
}
