import React from 'react'

const Title = ({title,desc}) => {
  return (
    <>
      <h2 className='text-3xl sm:text-5xl font-semibold'>{title}</h2>
      <p className='max-w-lg text-center text-gray-700 dark:text-gray-400 mb-5'>{desc}</p>
    </>
  )
}

export default Title
