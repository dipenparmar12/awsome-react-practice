import React from 'react'

export default function SideBarTest() {
  return (
    <>
      <div>
        <div className='flex w-screen h-screen text-gray-700'>
          {/* Component Start */}
          <div className='flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300'>
            <a
              className='flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300'
              href='#/'
            >
              <svg
                className='w-8 h-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                />
              </svg>
            </a>
            <a
              className='flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300'
              href='#/'
            >
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </a>
          </div>
          <div className='flex flex-col flex-grow'>
            <div className='flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300'>
              <h1 className='text-lg font-medium'>Page Title</h1>
              <button className='flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300'>
                Action 1
              </button>
              <button className='flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300'>
                Action 2
              </button>
              <button className='relative ml-2 text-sm focus:outline-none group'>
                <div className='flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300'>
                  <svg
                    className='w-5 h-5 mx-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                    />
                  </svg>
                </div>
                <div className='absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex'>
                  <a
                    className='w-full px-4 py-2 text-left hover:bg-gray-300'
                    href='#/'
                  >
                    Menu Item 1
                  </a>
                  <a
                    className='w-full px-4 py-2 text-left hover:bg-gray-300'
                    href='#/'
                  >
                    Menu Item 1
                  </a>
                  <a
                    className='w-full px-4 py-2 text-left hover:bg-gray-300'
                    href='#/'
                  >
                    Menu Item 1
                  </a>
                </div>
              </button>
            </div>
            <div className='flex-grow p-6 overflow-auto bg-gray-200'>
              <div className='grid grid-cols-3 gap-6'></div>
            </div>
          </div>
          {/* Component End  */}
        </div>

        <a
          className='fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600'
          href='https://twitter.com/lofiui'
          target='_top'
        >
          <div className='flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full'>
            <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
              <g>
                <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z' />
              </g>
            </svg>
          </div>
          <span className='text-sm ml-1 leading-none'>@lofiui</span>
        </a>
      </div>

      <div className='md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-100'>
        <div className='flex flex-col w-full md:w-48 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 '>
          <div className='flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between'>
            <a
              href='#/'
              className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline'
            >
              Solis App
            </a>
            <button className='rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline'>
              <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
                <path
                  x-show='!open'
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
                <path
                  x-show='open'
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <nav className='flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto'>
            <a
              className='block px-4 py-2 mt-2 text-sm  text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#/'
            >
              Blog
            </a>
            <a
              className='block px-4 py-2 mt-2 text-sm  text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#/'
            >
              Portfolio
            </a>
            <a
              className='block px-4 py-2 mt-2 text-sm  text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#/'
            >
              About
            </a>
            <a
              className='block px-4 py-2 mt-2 text-sm  text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#/'
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

// @src: https://lofiui.co/#components-grid
// @src: https://www.tailwindtoolbox.com/templates/admin-template-day
// @src: https://www.tailwind-kit.com/templates/dashboard#
