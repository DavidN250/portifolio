import { Button } from "flowbite-react";
import React from 'react'

function CustomButton() {
  return (
    <>
    <Button gradientDuoTone="purpleToBlue" outline className="rounded-full">
      <i className="mr-2 h-5 w-5" />
        <p>
            Contact Me
        </p>
    </Button>
    </>
  )
}

export default CustomButton
