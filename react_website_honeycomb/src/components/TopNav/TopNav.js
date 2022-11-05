import React from 'react'

import BrandingImg from 'assets/brand.png'
import Paragraph from 'componentsDump/Paragraph'
import Icons from 'componentsDump/Icons'

export default function TopNav() {
  return (
    <div className="flex shadow-lg Navigation">
      <div className="w-2/12 px-5 py-9 bg-primary-1 flex justify-center mr-12 Branding">
        <img src={BrandingImg} alt={'Branding'} className={'w-7/12'} />
      </div>

      <div className="flex-1 NavMeta">
        <div className="flex justify-between border-b NavMeta_Top">
          <div className="flex-1 flex justify-between py-3 pr-10 Navigation_Items">
            <Paragraph>
              Welcome to IT Solutions & Services WordPress Theme
            </Paragraph>
            <Paragraph>
              <Icons.Home className="mx-1" /> needhelp@company.com
              <span className="mx-3" />
              <Icons.Clock className="mx-1" /> Mon - Sat 8:00 am 7.00 pm
            </Paragraph>
          </div>
          <div className="flex justify-between items-center gap-6 px-16 py-3 bg-gray-200 ">
            <Icons.Twitter className="text-black " />
            <Icons.Facebook className="text-black " />
            <Icons.PinterestP className="text-black " />
            <Icons.Instagram className="text-black " />
          </div>
        </div>

        <div className="flex NavMeta_Bottom">
          <nav className="flex flex-1 items-center pr-8">
            <ul className="flex-1 flex gap-12">
              {/* TODO::active */}
              <li className=" text-lg text-black font-extrabold ">Home</li>
              <li className=" text-lg text-gray-600"> About </li>
              <li className=" text-lg text-gray-600"> Pages </li>
              <li className=" text-lg text-gray-600"> Services </li>
              <li className=" text-lg text-gray-600"> Projects </li>
              <li className=" text-lg text-gray-600"> Blog </li>
              <li className=" text-lg text-gray-600"> Contact </li>
            </ul>
            <div>
              <Icons.Search className="mx-2 text-3xl text-gray-600" />
              <Icons.ShoppingCart className="mx-2 text-3xl text-gray-600" />
            </div>
          </nav>
          <p className="border-r-2 my-4"> </p>
          <div className="flex gap-5 py-3 px-10 pr-20 ">
            <Paragraph className="bg-blue-1  rounded-full w-14 h-14 text-white flex justify-center items-center">
              <Icons.Calling3 className="text-white text-2xl" />
            </Paragraph>
            <Paragraph>
              <Paragraph className="text-sm">Call Anytime</Paragraph>
              <Paragraph className="!text-black text-md">
                + 88 (9800) 6802
              </Paragraph>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 
========================================================
Navigation
 - Branding
 - NavMeta
    - NavMeta_Top
	    - Paragraph
	    - ContactInfo
	    - SocialIcons
	  - NavMeta_Bottom 
	   	- Navigation_Items [Search, Cart]
	   	- ContactInfo
======================================================== 
*/
