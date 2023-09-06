import Hero from '@/components/Hero';
import JobList from '@/components/JobList';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className='flex flex-col md:flex-row justify-between bg-white w-full max-w-4xl -mt-10 mx-auto shadow-lg rounded-lg p-4'>
        {/* Search Input Field */}
        <div className='flex flex-1 items-center space-x-2'>
          <MagnifyingGlassIcon className='h-6 w-6 text-blue-500 hidden md:block' />
          <input
            type='text'
            placeholder='Search jobs by title or location'
            className='mb-4 md:mb-0 bg-transparent outline-none border border-sky-500 md:border-none w-full rounded-md pl-5 md:pl-0 h-14'
          />
        </div>

        <div className='flex flex-auto md:flex-none items-center mx-1 md:mx-0'>
          <button className='flex flex-auto justify-center rounded bg-red-500 px-5 py-2.5 text-white font-bold'>
            Find jobs
          </button>
        </div>
      </div>

      <div className='px-20 mt-40 mb-20'>
        <h2 className='text-3xl font-bold text-blueColor'>Latest Jobs</h2>
        <JobList />
      </div>
    </>
  );
}
