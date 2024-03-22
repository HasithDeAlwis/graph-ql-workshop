import React from 'react'

const Navbar = () => {
  return (
    <div className='container min-w-full'>
        <div className='flex justify-between'>
            <div className='flex'>
                <h1>CU BLUEPRINT</h1>
            </div>
            <div>
                <ul className='flex'>
                    <li>
                        About
                    </li>
                    <li>
                        Main
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}



export default Navbar