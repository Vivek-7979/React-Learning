import React from 'react'

const Card = ({username , paragraphText='Default value in Case paragraphTeaxt (prop) of any Card is empty'}) => {  // We have this property of 'props' in the component's input . Where we can pass the props=properties (It is Used to update the different component created from the same component calling in app.jsx { like - 1st item created from this reusable compnent should have diffferent image and title name than the 2nd item created from this same component .} )
    
  return (

    // Got this card component from talwind css
  <article className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=1160"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-50"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">{username}</h3>    {/* Here the props is passeed that is from the card inside the app.jsx and it is accessing in this function . First we have to pass in the function Card() */}
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {paragraphText || 'Default Case'}  {/*  Method 2 : if person don't pass nay value is 2nd props [ Default Value ]*/ }
    </p>
  </div>
</article>
  )
}

export default Card
