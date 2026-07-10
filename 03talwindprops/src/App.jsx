// App.jsx vich hi likhna hunda apna vase sara main code 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'   // importing the card components that is inside the component folder and in card.jsx file ( that is ultimately a function and we are iimporting it in this app.jsx and using it by passing the <Card/> in return)

function App() {

  // Js here !! 


  const [count, setCount] = useState(0)

  let object1 ={
     name:'vivek',
     age:'21'
  }
  let Array1 =[1,2,3,4]


  return (
    <>
   <h1 className='bg-green-400 p-10 rounded-xl'>Talwind CSS</h1>


   
{/* Using the react card.jsx from component folder  */ }
<Card username='Vivek learnig props'  paragraphText='This is the first paragraph text using the props '
 passingObject={object1} passingArray={Array1}
/>                                                                           {/* Passing the array and object inside a variable and its name in {} and it can be used*/ }   


<Card username='Second Card prop.' paragraphText='This is the parah2 text' />  {/*  Here , the property(props) ; username is passed inside the card and the username is passes inside the Card function . Real Use Case => Where this property is added in card.jsx differnt data will be for differnt card*/} 
{/*-*/}                                                                        {/* Again using the card component - that is the biggest poweer of the react => reusing the components */}




{/* NOTE : username , paragraphText , passingObject and passingArray => are the props ! */}


 
   {/* This code is got from the Talwind CSS free version  */}
   {/* <div class="space-y-2">
  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
    >
      <span>What are the basic features?</span>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <div class="p-4">
      <p class="text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
        dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
        odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
        temporibus perspiciatis!
      </p>
    </div>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
    >
      <span>How do I get started?</span>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <div class="p-4">
      <p class="text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
        dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
        odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
        temporibus perspiciatis!
      </p>
    </div>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
    >
      <span>What support options are available?</span>

      <svg
        aria-hidden="true"
        class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <div class="p-4">
      <p class="text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
        dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste
        odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos,
        temporibus perspiciatis!
      </p>
    </div>
  </details>
</div>
 */}

 {/* This code is got from the Talwind CSS free version  */}
{/* <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1160"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
      quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
      atque dignissimos. Molestias explicabo corporis voluptatem?
    </p>

    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article> */}
   
    </>
  )
}

export default App
