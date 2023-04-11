import React from 'react'

function Header ({ title }) {
  return (
    <div className='skill_header flex justify-center items-center gap-2 pb-10 pt-28'>
      <div className='border-b-8 border-blue-300 w-12 h-2.5'></div>
      <h3 className='font-header text-blue-300 text-3xl tablet:text-5xl laptop:text-7xl'>
        {title}
      </h3>
    </div>
  )
}

export { Header }
