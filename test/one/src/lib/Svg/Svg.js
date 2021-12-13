const Svg = {
  MenuAlt1: () => (
    <>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h8m-8 6h16'
        />
      </svg>
    </>
  ),
  Plus: () => (
    <>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 6v6m0 0v6m0-6h6m-6 0H6'
        />
      </svg>
    </>
  ),
  InfoCircle: () => (
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  ),
  User: () => (
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
    // <svg
    //   className='w-6 h-6'
    //   fill='none'
    //   stroke='currentColor'
    //   viewBox='0 0 24 24'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     strokeLinecap='round'
    //     strokeLinejoin='round'
    //     strokeWidth={2}
    //     d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    //   />
    // </svg>
  ),
  Users: () => (
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
      />
    </svg>
  ),
}

export function SvgLabel({ title, as: AsComponent, label }) {
  const SvgComponent = AsComponent || Svg[title] || (() => <></>)
  return (
    <div className='flex items-center'>
      <span className='w-5'>
        <SvgComponent />
      </span>
      <span className='ml-2'>{label}</span>
    </div>
  )
  // <SvgLabel as={Svg.Plus} label={'Incomes'} />
  // <SvgLabel title={'Plus'} label={'Projects'} />
}

export default Svg
