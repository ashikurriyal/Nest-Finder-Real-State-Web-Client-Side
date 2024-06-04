

const AdvertisementSection = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Advertisement Section</h1>
                <p className="text-xl font-normal">Discover our featured properties and find your dream home today. Browse through the latest listings and take advantage of the best deals on the market.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="max-w-sm bg-white border-2 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://i.ibb.co/nPXKdHL/ezgif-com-webp-to-png-converter-1.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Engage in Dynamic Study Circles</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join or create study groups with your friends for interactive learning sessions. Collaborate on assignments, discuss topics, and share resources in real-time. Enhance your understanding through active participation and collective knowledge sharing.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border-2 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://i.ibb.co/Wk3TRRW/ezgif-com-png-to-jpg-converter-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Seamlessly Manage Assignments</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Organize your study tasks effortlessly. Create assignments, set deadlines, and track progress within your study groups. Stay on top of your academic commitments with our intuitive assignment management system. Never miss a deadline again!</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border-2 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://i.ibb.co/4s0dZWV/ezgif-com-png-to-jpg-converter-2.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foster Growth through Peer Evaluation</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Enhance learning through constructive feedback. Grade your friends assignments and receive feedback on your own work from peers. Foster a culture of improvement and collaboration by providing valuable insights and encouragement to each other.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdvertisementSection;