import Button from 'componentsDump/Button'
import React from 'react'

export default function SectionHero() {
  return (
    <>
      <div
        style={{
          TODO_backgroundImage: `url(${`${process.env.PUBLIC_URL}/img/herobg.jpg`}) `, // TODO::hero-image
          background: 'gray',
        }}
        className="relative overflow-hidden bg-hero backdrop-grayscale-0 body-font bg-no-repeat bg-cover bg-center bg-fixed min-h-[85vh] flex justify-center items-center"
      >
        <div
          style={{
            clipPath: '   polygon(29% 0, 3% 99%, 0 86%, 0 49%, 11% 0) ',
          }}
          className="opacity-90  absolute w-full top-0 h-[100vh] bg-purple-500/50"
        />
        <div
          style={{
            clipPath: '  polygon(100% 34%, 72% 0, 100% 0) ',
          }}
          className="opacity-90  absolute w-full top-0 h-[100vh] bg-purple-500/50"
        />

        <div className="w-full h-full flex-col mx-auto px-4 text-center  ">
          <h2 className=" text-gray-200 tracking-widest font-medium title-font mb-2 underline leading-loose 	">
            EXPERIENCE THE BEST IT SOLUTIONS
          </h2>
          <h1 className="font-extrabold text-8xl text-white title-font py-2 tracking-wider">
            IT SOLUTIONS <span className="text-purple-500">&</span> <br />
            SERVICES
          </h1>
          {/* <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            LEARN MORE
          </a> */}
          <Button className={'mt-8  px-12 py-4'}> LEARN MORE</Button>
        </div>
      </div>

      {/* <section
        style={{
          backgroundImage: `url(${'https://media.istockphoto.com/photos/business-people-having-casual-discussion-during-meeting-picture-id1347197740?b=1&k=20&m=1347197740&s=170667a&w=0&h=wgx6rJaa-q2k8twujrAe-KV5-0uEnGKrt_W88BwM12U='})`,
        }}
        className="text-gray-600 body-font bg-hero bg-no-repeat bg-cover bg-center bg-fixed"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              EXPERIENCE THE BEST IT SOLUTIONS
            </h2>
            <h1 className="font-extrabold text-7xl text-white title-font py-2">
              IT SOLUTIONS <span className="text-purple-500">&</span> <br />{' '}
              SERVICES
            </h1>
          </div>
          <div>
            <button className="flex flex-wrap -m-4"> LEARN MORE </button>
          </div>
        </div>
      </section> */}
    </>
  )
}
