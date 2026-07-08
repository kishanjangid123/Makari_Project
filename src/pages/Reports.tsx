import React from 'react'
import CustomButton from '../components/CustomButton'

const Reports = () => {
  return (
    <>
      <CustomButton
        text="Save"
        type="primary"
        onClick={() => console.log("Saved")}
      />

    </>
  )
}

export default Reports