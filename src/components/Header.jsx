import React from 'react'

function Header({category, title}) {
  return (
    <div className='mb-10 '>
      <p className='text-gray-400 font-bold text-xl'>
        {category}
      </p>
      <p className='text-2xl font-extrabold tracking-tight text-slate-900'>
        {title}
      </p>
    </div>
  )
}

export default Header