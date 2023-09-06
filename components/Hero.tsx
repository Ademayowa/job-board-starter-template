export default function HeroPage() {
  return (
    <div className='pt-20 h-full bg-[#0F4A7B] px-20 flex flex-col justify-center items-center'>
      {/* Content must come from sanity */}
      <h1 className='text-3xl lg:text-6xl text-gray-200 font-bold lg:w-7/12 !leading-tight'>
        The Easiest Way To Get A New Job With Ease.
      </h1>

      <p className='text-xl mt-5 mb-20 text-gray-200 lg:w-7/12 font-extralight'>
        Searching and finding your dream job is now easier than ever. Just
        browse jobs on our platform and apply with ease. Our posted jobs are
        verified.
      </p>
    </div>
  );
}
