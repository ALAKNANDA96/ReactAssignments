import React, { useState,useEffect } from 'react'
// import first from './Images/first.jpg' 
// import second from './Images/second.jpg' 
// import third from './Images/third.jpg' 
// import forth from './Images/forth.jpg' 

function App() {
    const [count,setCount] = useState(0) 
    const array = [first,second,third,forth] 
    useEffect(()=>{
        document.title = "Change Images"
      },[])
  return (
    <div className='flex justify-center h-screen p-4'>
        <div className='w-[50%] bg-red-600 flex justify-center'> 
            <img src={array[count]} alt="Error" className='object-contain' />
        </div>
        <div className="w-[50%] bg-blue-500 flex justify-center" >
            <button className='self-center border-2 border-green-700 p-5 font-mono text-white text-[1.5rem] hover:shadow-2xl shadow-violet-500 bg-orange-600' onClick={()=>{
                if(count >= array.length-1){
                    setCount(0)
                }else{
                    setCount(count+1)
                }
        }}>Change</button>
        </div>
    </div>
  )
}

export default App