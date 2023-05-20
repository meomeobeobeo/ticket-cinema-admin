import { Col, Input, Row, Typography } from 'antd'
import React from 'react'
import Divider from './Divider'

const RenderForm = () => {
  return (
    <div className='w-full'>
        <Row gutter={[16, 16]}>
            <Col className='flex flex-col gap-2 ' span={12}>
                <Typography className='font-semibold' >Name</Typography>
                <Input/>
                <Divider/>
            </Col>
            
            
        </Row>
    </div>
  )
}

export default RenderForm   