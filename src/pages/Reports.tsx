import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import WorkspaceCard from '../components/WorkspaceCard'
import InputField from '../components/InputField';
import { Col, Row } from 'antd';

const Reports = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h2>Reports</h2>

      <InputField
        label="Search Report"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        <Col span={8}>
          <WorkspaceCard
            title="Sales Report"
            description="Monthly sales report"
            buttonText="View"
            onButtonClick={() => { alert('Sales Report Clicked') }}
            type='primary'
          />
        </Col>

        <Col span={8}>
          <WorkspaceCard
            title="Employee Report"
            description="Employee performance"
            buttonText="Open"
            onButtonClick={() => { alert('Employee Report Clicked') }}
            type='primary'
          />
        </Col>
      </Row>


    </>
  )
}

export default Reports