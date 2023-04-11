import React from 'react'

function Text() {
  return (
    <div className='flex justify-center h-screen'>
        <textarea name="Text" id="" cols="30" rows="5" maxLength={100} className="border-2 border-red-900 self-center text-red-700"></textarea>
    </div>
  )
}

export default Text