'use client'

import Title from '../components/title'

import { useEffect, useState } from 'react';
import Link from 'next/link';

{/**create component for events & pull data from database*/}

export default function Events() {
  //set useState
  const [ event, setEvent ] = useState([])
  const [ recentEvent, setRecentEvent ] = useState([])


  /**QUERY EVENTS */
  async function getEvents(){
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    //get response json
    const resp = await response.json()

    //response handling 
    if(!response.ok){
      //MISSIING set description to: No new events coming up. Be on the lookout!
      console.log(resp.msg)

    } else {
      console.log(resp.responsePres)

      //set event(s)
      setEvent(resp.responsePres)
      setRecentEvent(resp.responsePast)
    }
  }
  
  //run once 
  useEffect(() => {
    getEvents()
  }, [])

  function description(e){
    //get element by id
    //then: add text which covers event info
    //then: add description in place of text
  }

  return (
    <>
      <Title title={"EVENTS & OPPORTUNITIES"} />
      
      <div className='h-full m-8 p-4'>

          <span className='bg-white text-[2rem] flex pt-10 font-bold'>Upcoming Events</span>
          <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>
          <div className='flex flex-cols w-3/5 '>
            {
              event.map((e) => (
                  <div id="description" onMouseDown={description} className='m-[25px] p-[15px] w-1/2 shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] hover:scale-105 transition delay-75'>
                    <h1 className='underline text-xl p-5 text-[1.7rem] '>{e.title}</h1>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.location}</p>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.date}</p>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.startTime} - {e.endTime}</p>
                    <p className='px-9 py-2 text-[1.30rem]'>
                      {/**e.description*/}
                    </p>
                  </div>
              ))
            }
        </div>
        
        {/**RECENT EVENTS*/}
        <div className=''>
          <span className='bg-white text-[2rem] flex pt-10 font-bold'>Past Events</span>
          <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>
          <div className='flex flex-cols w-3/5 '>
            {
              recentEvent.map((e) => (
                  <div id="description" onMouseDown={description} className='m-[25px] p-[15px] w-1/2 shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] hover:scale-105 transition delay-75'>
                    <h1 className='underline text-xl p-5 text-[1.7rem] '>{e.title}</h1>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.location}</p>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.date}</p>
                    <p className='font-bold px-9 text-[1.15rem]'>{e.startTime} - {e.endTime}</p>
                    <p className='px-9 py-2 text-[1.30rem]'>
                      {/**e.description*/}
                    </p>
                  </div>
              ))
            }
        </div>
        </div>

        {/**NEWSLETTER AND PAST EVENTS*/}
        <div className='grid grid-rows-2'>

          <h1 className="text-[2rem]  flex font-bold mt-3 hover:underline w-1/4">
              <a href='https://dailystoic.com/daily-stoic-email/' target='_blank'>Weekly Newsletter</a>
          </h1>
          <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>

          <p className='text-center  text-[1.6rem]'>
            Learn about events, opportunities, workshops, access to tutoring and more!
          </p>

        </div>

        <div className='flex justify-center'>
          <h1 className="text-[2rem] justify-center flex font-bold mt-[4rem] p-7 w-1/3 hover:underline"><Link href='/events/pastevents'>Also check out our Past Events!</Link></h1>
        </div>
      </div>
    </>
  );
  }