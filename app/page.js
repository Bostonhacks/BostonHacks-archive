import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center m-4 text-center'>
        <h1>Welcome to the BostonHacks Website Archive</h1>
        <p>Click on the links to navigate to the individual websites.</p> 
      </div>
    </div>
  );
}
