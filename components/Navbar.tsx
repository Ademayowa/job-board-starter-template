import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='px-20 bg py-4 bg-[#0F4A7B]'>
      <Link href='/'>
        {/* <Image src='/logo.svg' alt='logo' width={28} height={28} /> */}
        <p className='text-2xl font-bold text-white'>Job Board</p>
      </Link>
    </nav>
  );
}
