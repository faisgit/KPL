import React from 'react'
import Logo from './assets/logo.png'
import { Header } from './components/Header'
export default function App() {
  return (
    <div className='flex  justify-center items-center bg-blue-200 h-full'>
      <div className='bg-white h-screen w-[600px]'>
        <Header />
        <div className='px-10'>
          <form action="">
            <ol className='list-decimal flex flex-col gap-3'>
              <li>
                <label htmlFor="" className='mr-2'>प्रतिभागी नामः</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'>पिता का नामः-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> माता जी का नाम:-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> गाँवः-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> ब्लाक-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> ब्लाक-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> ब्लाक-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> ब्लाक-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>
              <li>
                <label htmlFor="" className='mr-2'> ब्लाक-</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs" />
              </li>

            </ol>

          </form>
        </div>
      </div>
    </div>
  )
}
