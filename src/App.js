import '../src/App.css'
import Header from './component/Header/index'
import service from './assets/icons/service.png'
import team from './assets/icons/team.png'
import doctor from './assets/images/doctor.png'
import surgeon from './assets/images/surgeon.png'
import finddoc from './assets/icons/finddoc.png'
import logo from '../src/assets/icons/logo.png'
import twitter from './assets/icons/twitter.svg'
import linkedin from './assets/icons/linkedin.svg'
import facebook from './assets/icons/facebook.svg'
import phone from './assets/icons/phone.svg'
import stets from './assets/icons/stets.svg'
import clinic from './assets/icons/Clinic.svg'
import Rectangle from './assets/images/Rectangle.svg'
import doccy from './assets/images/doccy.svg'


function App() {
  return (
    <div id=''>

      <section>
        <Header/>

        <div className='flex justify-around'>

          <div className='flex justify-between p-10 flex-col sm:flex-row' id='one' >
            <div className='w-full flex flex-col justify-center'>
              <p className='text=[#2F323D] font-bold sm:text-2xl md:text-3xl lg:text-4xl'>Your Online Medical Buddy </p>
              <p className='py-4 lg:text-xl xl:text-2xl text-[#2F323D]'>Health-First provides excellent service by prioritizing the safety and security of patients.</p>
              <div className='flex gap-3'>
                <button className='bg-[#5271FF] hover:bg-blue-600 text-white font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>Book appointment</button>
                <button className='bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>Specialists</button>
              </div>

              {/* <div className='flex lg:hidden'>
                <img className='h-20 w-40' src={team}/>
                <img className='h-20 w-40' src={service}/>
              </div> */}
            </div>

            <div className='mt-80 w-full hidden lg:flex'>
              <img className='xl:h-28 lg:h-24 md:h-20 sm:h-16 ml-40' src={team}/>
            </div>

            <div className='w-full hidden lg:flex'>
              <img className='xl:h-28 lg:h-24 md:h-20 sm:h-16 hidden md:flex -ml-10' src={service}/>
            </div>

            {/* <div className='bg-red-200'>
              <img className='ml-40 xl:h-28' src={service}/>
              <img className='' src={team}/>
            </div> */}



            <div className=' w-full flex justify-center'>
              <img className='xl:h-full md:h-96' src={doctor}/>
            </div>
          </div>
        </div>

      </section>


        <div className='bg-[#E7F0FF]'>
          <div className='flex flex-col sm:flex-row w-full p-5 items-center py-14'>
            <div className='w-full'>
              <img className='' src={surgeon}/>
            </div>

            <div className='w-full p-5 flex flex-col justify-center'>
              <p className='text-sm flex flex-col font-semibold text-[#5271FF]'>About us</p>
              <p className=' font-semibold so:text-xl sm:text-2xl md:text-3xl mb-4'>Best Preventive, Safe & Medical Practices</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies venenatis commodo, sed integer at. Ut tortor, tempor integer vel ut amet.</p>
              <div className='flex py-3'><button className='bg-blue-500 p-2 rounded-lg text-white'>Contact us</button></div>
            </div>
          </div>

          <div className='px-10 py-10'>
            <p className='flex justify-center font-semibold xo:text-2xl text-3xl py-2'>Simple steps for your solution</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sit vulputate mauris, et, libero, ipsum nullam in. Pellentesque in et pellentesque volutpat. Sed consequat urna </p>
          </div>

          <div className='my-4 mx-auto flex justify-around'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>

              <div className='bg-white rounded-md w-36 h-36 flex flex-col'>
                <div className='flex justify-center py-2'>
                  <img className='h-10' src={finddoc}/>
                </div>
                <div className='flex justify-center py-2'>
                  <p className='text-sm'>Find Doctors</p>
                </div>
                <div className='flex pl-1'>
                  <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className='bg-white w-36 h-36 rounded-md flex flex-col'>
                <div className='flex justify-center py-2'>
                  <img className='h-10' src={phone}/>
                </div>
                <div className='flex justify-center py-2'>
                  <p className='text-sm'>Find Doctors</p>
                </div>
                <div className='flex pl-1'>
                  <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className='bg-white w-36 h-36 rounded-md flex flex-col'>
                <div className='flex justify-center py-2'>
                  <img className='h-10' src={stets}/>
                </div>
                <div className='flex justify-center py-2'>
                  <p className='text-sm'>Find Doctors</p>
                </div>
                <div className='flex pl-1'>
                  <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className='bg-white w-36 h-36 flex rounded-md flex-col'>
                <div className='flex justify-center py-2'>
                  <img className='h-10' src={clinic}/>
                </div>
                <div className='flex justify-center py-2'>
                  <p className='text-sm'>Find Doctors</p>
                </div>
                <div className='flex pl-1'>
                  <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

            </div>
          </div>


          
        <div className='p-10 w-full flex'>
          <div className='w-full'>
            <p>We are always there for your healthy living.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies venenatis commodo, sed integer at. Ut tortor, tempor integer vel ut amet.</p>
            <button className='bg-blue-200'>Contact us</button>
          </div>

          <div className='w-full'>
            {/* <img className='absolute' src={Rectangle}/>
            <img className='relative' src={doccy}/> */}
          </div>
        </div>

      </div>


      <div className='bg-white flex w-full p-10 gap-5'>
          <div className='w-full'>
            <p className='text-xs my-3'>Need a consultation from our Doctors?</p>
            <p className='text-3xl font-semibold mb-3'>Request a Call Back Today</p>
            <p className='text-xs font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies venenatis commodo, sed integer at. Ut tortor, tempor integer vel ut amet.</p>
          </div>

          <div className='w-full flex flex-col'>
            <div className='w-full py-1'> 
              <input placeholder='Name' className='w-full p-1 border-2 rounded-lg'></input>
            </div>
            <div className='w-full py-2'>
              <input placeholder='Email' className='p-1 w-full border-2 rounded-lg'></input>
            </div>
            <div>
              <input placeholder='Mobile Number' className='p-1 w-full border-2 rounded-lg'></input>
            </div>
            <div className='flex justify-center py-3'>
            <button className='bg-blue-700 hover:bg-white-600 text-white font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>View Case Study</button>
            </div>
          </div>
      </div>

      <div className='bg-[#E7F0FF] flex flex-col items-center py-10'>
        <p className='text-xs font-bold'>Need a Personal Home Doctor?</p>
        <div className='px-20 my-6'>
          <p className='text-4xl'>Just make an appointment and you are ready!</p>
        </div>
        <div>
        <button className='bg-blue-700 hover:bg-white-600 text-white font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>Find a Doctor</button>
        </div>
      </div>

      <div className='flex flex-col items-center my-7'>
        <div>
          <img className='h-7' src={logo}/>
        </div>
        <p className='font-semibold my-3 w-44 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies venenatis commodo, sed integer at. </p>

        <div className='flex'>
          {/* <div>
            <p>Health-First2022 All rights reserved</p>
          </div> */}
          <img className='h-5' src={twitter}/>
          <img className='h-5 mx-3' src={linkedin}/>
          <img className='h-5' src={facebook}/>
        </div>
      </div>


    </div>
  );
}

export default App;
