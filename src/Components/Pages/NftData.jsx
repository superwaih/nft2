import React from 'react'

const Assets = () => {
  return (
      <section class="max-w-screen-lg mx-auto px-2 md:px-8 py-8">
       <div>
         <div className="mb-96">
           <div>
           <div  class="flex justify-center md:space-y-0 flex-col-reverse md:flex-row md:justify-between items-center text-white"><div  class="text-2xl uppercase flex items-center space-x-2 cursor-pointer hover:text-yellow-300"><span  class="font-bold text-lg md:text-4xl">+</span><div  class="text-lg md:text-2xl">Add asset</div></div><div  class="flex relative items-center md:mb-0 mb-6"><input  type="text" placeholder="Search ..." class="rounded-xl bg-gray-700 bg-opacity-50 focus:bg-opacity-70 text-white focus:outline-none px-4 py-4 w-80"/><span  class="absolute right-0 pr-4"><img  src="/img/search_icon.c9bb336b.svg" alt="" class="h-6"/></span></div></div>
           <div  id="sorting" class="mt-10 justify-center md:justify-end text-white flex space-x-6"><div  class="cursor-pointer hover:text-yellow-300"> NFTs Locked ↑↓ </div><div  class="cursor-pointer hover:text-yellow-300"> Liquidity ↑↓ </div></div>

           <div className='mt-4 grid grid-cols-1 md:px-0 px-12 gap-3 md:gap-2 text-grey-900'>

              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>

              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>







            </div>
          </div>
         </div>
       </div>
          </section>
  )
}

export default Assets