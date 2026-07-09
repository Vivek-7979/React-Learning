import React from 'react'

const Card = (props) => {               // We have this property of 'props' in the component's input . Where we can pass the props(It is Used to update the different component created from the same component calling in app.jsx { like - 1st item created from this reusable compnent should have diffferent image and title name than the 2nd item created from this same component .} )
    console.log('props',props)
  return (

    // Got this card component from talwind css
  <article class="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=1160"
    class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-50"
  />

  <div class="p-4">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
      quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
      atque dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
  )
}

export default Card
