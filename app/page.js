// import MyEventHandling from "./components/MyEventHandling"
import MyUseState from "./components/MyUseState"
import MyUseReduser from "./components/MyUseReduser"
import MyUseReducerbetter from "./components/MyUseReducerbetter"
import MyUseEffect from "./components/MyUseEffect"
import MyUseRef from "./components/MyUseRef"

export default function Home() {
  return (
   <>
     <MyUseState />
     <div className='h-2  bg-purple-300 my-4' />
     {/* <MyEventHandling /> */}
     <MyUseReduser />
     <div className='h-2  bg-purple-300 my-4' />
     <MyUseReducerbetter />
     <div className='h-2  bg-purple-300 my-4' />
     <MyUseEffect />
     <div className='h-2  bg-purple-300 my-4' />
     <MyUseRef/>
     <div className='h-2  bg-purple-300 my-4' />

   </>
  )
}
