import React from 'react'
import RenderForm from '../components/RenderForm'
import ApexChart from '../components/ApexChart'
import DonutChart from '../components/DonutChart'
import FORMS from '../config/form.json'

const DashBoard = () => {
 
  
 
  return (
    <div className='w-full'>
      <ApexChart/>
      <div className='w-[500px] mt-10'>
        <DonutChart/>
      </div>
    </div>
  )
}

export default DashBoard