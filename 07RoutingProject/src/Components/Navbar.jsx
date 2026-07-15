import React from 'react'    // Like - from the react libraray we got the useState , useEffeect etc functionalities

import { Link , NavLink} from 'react-router-dom' // Similarly we got link and Navlink from the react-router-dom library . [ NavLink has more features than link ]  . We use Link in the place of <a> tag - As , the a tag reloads / refreshes the whole page . But , in react-router-dom :-> We already don't need the concept of Refreshing ( So  we don't use the <a> tag in React )

function Navbar() {

    return(

 <header className="shadow sticky z-50 top-0"> 
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* We also pasted the image of logo in the lik that also refers to the current page main page => / */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>


                    <div className="flex items-center lg:order-2"> 

                          {/* By the way these links don't worl at all because it refers to # => current page without reloading  */}

                        <Link
                            to="#"   // If I paste here '/about' It will take me to the about page . '/contact => Contact page . But # refers to nothing . We use link because in future we ca give path in it and it can render to that specific page . However , we can just paste a simple button here but link refers to some page .
                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>


                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> 

                          <li>                  {/*  We use Navlink as it has more features than link and it also has the 'isActive' direct access to this . */}
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b

                                        ${isActive ? 'text-orange-700' : 'text-grey-700'} 

                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>                    {/* This Navlink take us to the about page in when we click about on the navbar   */}
                                <NavLink      
                                    to="/about"
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200 border-b

                                        ${isActive ? 'text-orange-700' : 'text-grey-700'}

                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
     
     
                             <li>                    {/* This is the li inside the second div of the navbar . In this ; we have given the Navlink to ='place of it in route in app.jsx' */}  
                                <NavLink
                                    to="/contact"

                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200 border-b

                                        ${isActive ? 'text-orange-700' : 'text-grey-700'}

                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact US
                                </NavLink>
                            </li>


                            <li>           {/* This is for the Github li in the navbar second - cnter giv . hich will give real time api data from github */}
                              <NavLink
                                    to="/github"

                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200 border-b

                                        ${isActive ? 'text-orange-700' : 'text-grey-700'}

                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
