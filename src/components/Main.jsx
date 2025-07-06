import React from 'react'
import Section from './Main/Section'
import Side from './Aside.jsx/Side'

const Main = () => {
  return (
    <div className='w-full h-full flex'>
      <Section/>
      <Side/>
    </div>
  )
}

export default Main