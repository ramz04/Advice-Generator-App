import React from 'react'
import patterndividermobile from '../assets/images/pattern-divider-mobile.svg'
import patterndividerdesktop from '../assets/images/pattern-divider-desktop.svg'
import dice from '../assets/images/icon-dice.svg'

function Card() {
  const [adviceData, setAdviceData] = React.useState([])

  function toggleRandom(){

      fetch(`https://api.adviceslip.com/advice/${Math.ceil(Math.random() * 220)}`)
      .then(res => res.json())
      .then(data => setAdviceData(data.slip))

  }

  React.useEffect(function() {
    toggleRandom()
  }, [])

  

  console.log(adviceData)

  return (
    <div className='flex items-center justify-center p-4 h-full relative '>
        <div className='bg-DarkGrayishBlue md:w-[500px] p-6 rounded-xl'>
            <h2 className='text-center text-sm uppercase tracking-widest text-NeonGreen'> Advice # {adviceData.id}</h2>
            <p className='text-center text-[28px] text-LightCyan mt-3 md:break-all '>"{adviceData.advice}"</p>
            <div className='flex justify-center'>
              <picture>
                  <source media='(min-width: 640px)' srcSet={patterndividerdesktop} />
                  <img src={patterndividermobile} className='mb-6 mt-4'/>
              </picture>
            </div>
            <div className='flex justify-center -mb-12 '>
              <button onClick={toggleRandom} className=' rounded-full hover:brightness-125 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.75)] hover:shadow-NeonGreen border-[15px] border-NeonGreen '>
                  <img src={dice} className='bg-NeonGreen w-[18px]'/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Card