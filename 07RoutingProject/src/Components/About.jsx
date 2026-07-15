export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           This is the website that the routes and render to different paths  . Where the header and footer stays
                           coanstant and when we click on home , about , contact We render to diff interface without reloading .
                        </p>
                        <p className="mt-4 text-gray-600">
                            Techincality : Everthing in this Application is a Link . Some are working and taking us to some page or renders.
                            But , some doesnot . Routes are defined in App.jsx and by creating components in Components folder . like - Navbar.jsx,Contact.jsx etc .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}