import React from 'react'
import { Link } from 'react-router-dom';


const SideNav = ({isAuthenticated, user, authenticate, handleClick, click, setClick}) => {
  return (
    <nav className= {click ? 'flex flex-col left-[40%] p-5 rounded bg-black m-auto items-end w-2/4 text-white space-x-5 absolute' : 'hidden'}>
    <Link className=' hover:text-yellow-300' to='/assets'>
        Assets
    </Link>
    <Link className='hover:text-yellow-300' to='/swap'>
        Buy & sell NFTSs <span className='text-yellow-300' >NEW!</span>
    </Link>
    <Link className=' hover:text-yellow-300' to='/wallet'>
        My Wallet <span className='text-yellow-300'>NEW!</span>
    </Link>
    <Link className=' hover:text-yellow-300' to='/faq'>
        FAQ
    </Link>
    <Link className=' hover:text-yellow-300' to='/'>
        Farm
    </Link>
    <Link className=' hover:text-yellow-300'  to='/'>
        Docs
    </Link>


   <div className="btns">
   <button className=''>ETH</button>
    <button className=''>Polygon</button>
   </div>
    <div className=" rounded  w-fit p-2 hover:bg-blue-400 bg-yellow-300">
        {!isAuthenticated ? <button onClick={() => authenticate({ signingMessage: "Sign In" })} className='text-brown-500 text-[13px]'>Connect Wallet</button> :
        <div >
            <p>Score: <span>{user.attributes.ethAddress.toString().slice(0,5) + '...'}</span></p>
            </div>}
        
    </div>
   </nav>
  )
}

export default SideNav