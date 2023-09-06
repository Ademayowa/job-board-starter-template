import { MapPinIcon } from '@heroicons/react/24/solid';

export default function JobList() {
  return (
    <div className='col-span-10 lg:col-span-4 mx-auto rounded-lg shadow-md my-3 bg-white p-7'>
      <div className='flex items-center text-blueColor font-bold'>
        <h2 className='flex flex-1 text-blueColor text-lg md:text-2xl font-bold'>
          Senior Frontend Engineer
        </h2>
        <p>$160k-$260k</p>
      </div>

      <div className='flex items-center space-x-1 mt-2.5'>
        <MapPinIcon className='h-5 w-5 text-sky-500 -ml-1' />
        <p className='text-grayColor text-base md:text-lg'>United States</p>
      </div>

      <div className='text-grayColor mt-2.5'>
        <p>Date posted: April 18, 2023</p>
      </div>

      <p className='text-grayColor text-base mt-2.5 !w-full md:w-3/4 leading-8'>
        The Cisco XDR Team is seeking a Senior Frontend Software Engineer with
        strong expertise in React.js.
      </p>

      <div className='flex mt-2.5'>
        <button className='rounded bg-red-500 px-5 py-2 text-white'>
          View job
        </button>
      </div>
    </div>
  );
}
