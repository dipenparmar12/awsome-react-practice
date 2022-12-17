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
