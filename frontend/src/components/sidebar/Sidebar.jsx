import React from 'react'
import SearchInput from './Searchinput'
import Conversations from './Conversations'


const Sidebar = () => {
  return (
    <div>
    <SearchInput/>
    
    <div className='divider px-3'></div>
    <Conversations/>
    {/* // <Logout/> */} 
    </div>
  )
}

export default Sidebar