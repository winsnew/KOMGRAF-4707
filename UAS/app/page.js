import Link from 'next/link';
import AlgoritmaDDA from './algoritmaGaris';
import Transformation2D from './transformasi2D';
import Transformasi3D from './transfomrasi3D';
import Clipping from './clipping';

function Page() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">KOMPUTER GRAFIK</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className='text-white'>
               Home
              </Link>
            </li>
            <li>
              <Link href="#algoritmaDDA" className='text-white'>
                Algoritma DDA
              </Link>
            </li>
            <li>
              <Link href="#transformasi-2d" className='text-white'>
                Transformasi 2D
              </Link>
            </li>
            <li>
              <Link href="#transformasi-3d" className='text-white'>
                Transformasi 3D
              </Link>
            </li>
            <li>
              <Link href="#clipping" className='text-white'>
              Clipping
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className='relative' id='algoritmasDDA'>
            <h2 className='text-center font-bold text-3xl'>AlgoritmaDDA</h2>
            <div className='flex w-64'>
                <AlgoritmaDDA/>
            </div>
      </section>
      <section className='relative' id='transformasi-2d'>
            <h2 className='text-center font-bold text-3xl'>Transformasi 2D</h2>
            <div className='flex w-64'>
                <Transformation2D/>
            </div>
      </section>
      <section className='relative' id='transformasi-3d'>
        <h2 className='text-center font-bold text-3xl'>Transformasi3D</h2>
        <div className='flex'>
        <Transformasi3D/>
        </div>
      </section>
      <section className='relative' id='clipping'>
        <h2 className='text-center font-bold text-3xl'>Clipping</h2>
        <div className='flex'>
          <Clipping/>
        </div>
      </section>
    </>
  );
}

export default Page;
