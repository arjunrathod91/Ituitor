"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useEffect, useRef, useState } from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [count, setCount] = useState('0');
  const category = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/9079/9079294.png',
      category: 'Graphic Design',
      courses: '22 Courses'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/3281/3281306.png',
      category: 'Buiseness',
      courses: '18 Courses'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/595/595990.png',
      category: 'Marketing',
      courses: '10 Courses'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/2694/2694997.png',
      category: 'Technology',
      courses: '8 Courses'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/7966/7966941.png',
      category: 'HR Analysist',
      courses: '15 Cources'
    },
  ]

  const cards = [
    { id: 1, content: 'Professional tutors, tailored lessons, and significant progress. Great support for challenging subjects.', author: 'Arjun rathod' },
    { id: 2, content: 'Engaging sessions, flexible scheduling, and knowledgeable instructors. Excellent value for boosting grades.', author: 'Karan Rathod' },
    { id: 3, content: 'Exceptional tutors, personalized attention, and noticeable improvement. Highly recommend for academic success.', author: 'Pooja rathod' },

  ];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 1
    );
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : 0
    );
  };
  const cources = [
    {
      img: "https://th.bing.com/th/id/R.fa311b81db73aa02791d07117e6e299f?rik=0bVYDHtvE61OHA&pid=ImgRaw&r=0",
      title: "Lorem ipsum dolor, sit amet"
    },
    {
      img: "https://th.bing.com/th/id/R.fa311b81db73aa02791d07117e6e299f?rik=0bVYDHtvE61OHA&pid=ImgRaw&r=0",
      title: "Lorem ipsum dolor, sit amet",
    },
    {
      img: "https://th.bing.com/th/id/R.fa311b81db73aa02791d07117e6e299f?rik=0bVYDHtvE61OHA&pid=ImgRaw&r=0",
      title: "Lorem ipsum dolor, sit amet",
    }
  ];

  const [open,setOpen] = useState(false)

  return (
    <main className="flex h-screen w-screen flex-col bg-white lg:px-[100px] ">
      <Navbar open={open} setOpen={setOpen} />
      {/*Hero*/}
      <div className="flex">
      {open && <Sidebar open={open} setOpen={setOpen}/>}
        <div className="flex flex-col">
          <div className="flex px-5 pt-[45px] items-start lg:flex-row md:flex-row sm:flex-row s:flex-col-reverse">
            <div className="flex flex-col lg:w-[50%] md:w-[50%] sm:w-[50%] s:w-[100%] mb-16 items-start mt-[30px]">
              <h1 className="lg:text-5xl md:text-5xl sm:text-4xl s:text-3xl text-start font-extrabold mb-4 text-gray-900">Before they sold out
                <br className="" />readymade gluten
                <br className="" />Learn & Earn
              </h1>
              <p className="mb-8 text-[14px] w-[80%]">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park.</p>
              <div className="flex justify-start">
                <div className="lg:p-[10px] md:p-[10px] sm:p-[10px] bg-[#F3F4FF] rounded-[10px] gap-[4px] flex justify-center items-center s:p-[2px]">
                  <SearchIcon />
                  <input className="outline-none text-gray bg-[#F3F4FF]" placeholder="Search Cources" />
                  <button className="inline-flex text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 md:py-2 md:px-6 sm:py-2 sm:px-6 s:py-1 s:px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center lg:w-[50%] md:w-[50%] sm:w-[50%] s:w-[100%]">
              {/* <div className="rounded-[50%] bg-[#F4FEFF] lg:h-[500px] lg:w-[500px] md:h-[450px] md:w-[450px] sm:h-[360px] sm:w-[360px] s:h-[250px] s:w-[250px]">

          </div> */}
              <img className="object-cover object-center lg:h-[500px]  lg:w-[500px] md:h-[450px] md:w-[450px] sm:h-[360px] sm:w-[360px] s:h-[250px] s:w-[250px] " alt="hero" src="Img/hero.png" />
            </div>
          </div>

          {/*Section 2*/}
          <div className="container mx-auto flex lg:px-5 lg:py-24 md:px-5 md:py-24 sm:px-5 sm:py-24 s:px-5 s:py-0  md:flex-row flex-col items-center lg:flex-row md:flex-row sm:flex-row s:flex-col-reverse">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-start">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded lg:h-[500px]  lg:w-[500px] md:h-[450px] md:w-[450px] sm:h-[360px] sm:w-[360px] s:h-[250px] s:w-[250px] lg:mb-0 md:mb-0 sm:mb-0 s:mb-10" alt="hero" src="Img/sponsers.png" />
            </div>
          </div>
          {/*Section 3*/}
          <div className="container mx-auto lg:px-5 lg:py-24 md:px-5 md:py-24 sm:px-5 sm:py-24 s:px-5 s:py-0">
            <div className="flex flex-col text-start w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[40px]" >
              {category.map((item, index) => (
                <div className="border-2 lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[150px] sm:h-[150px] sm:w-[150px] s:h-[120px] s:w-[120px] rounded-lg flex flex-col justify-center items-center gap-[10px] shadow-md" key={index}>
                  <img src={item.img} className="h-[35px] w-[35px]" />
                  <div className="flex flex-col justify-center items-center gap-[5px]">
                    <h2 className="text-[14px] text-gray-900 font-[700]">{item.category}</h2>
                    <p className="text-[10px] text-gray-900">{item.courses}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Section 4*/}
          <div className="container mx-auto flex lg:px-5 lg:py-24 md:px-5 md:py-24 sm:px-5 sm:py-24 s:px-5 s:py-0 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded lg:mt-0 md:mt-0 sm:mt-0 s:mt-10" alt="hero" src="Img/girlimgbook.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-start">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
          {/*Section 5*/}

          <div className="container mx-auto lg:px-5 lg:py-24 md:px-5 md:py-24 sm:px-5 sm:py-24 s:px-0 s:py-5">
            <div className="flex justify-between w-full mb-20 lg:flex-row md:flex-row sm:flex-row s:flex-col lg:text-start md:text-start sm:text-start s:text-center gap-[20px]">
              <div className="flex flex-col lg:text-start md:text-start sm:text-start s:text-center">
                <h3 className="text-[30px] font-[600]">Our Cources</h3>
                <p className="">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
              </div>
              <div>
                <button className="px-3 py-2 ring-2 text-indigo-500 ring-indigo-500 rounded-[4px] hover:bg-indigo-500 hover:text-white">Get Started</button>
              </div>
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row md:flex-row sm:flex-row s:flex-col">
              <div className="scroll-container flex w-[100%] lg:gap-[40px] md:gap-[40px] sm:gap-[40px] s:gap-[10px] items-center lg:justify-center md:justify-center sm:justify-center s:justify-start overflow-x-auto whitespace-nowrap">
                {cources.map((item, index) => (
                  <div key={index} className="p-6 h-[400px] w-[300px] rounded-lg border-2 border-gray-300 flex flex-col gap-[20px]">
                    <img src={item.img} className="h-[170px] w-[100%] rounded-[4px]" />
                    <h2 className="text-[20px]">{item.title}</h2>
                    <div className="flex justify-between text-[12px] text-blue-900">
                      <p><GroupIcon className="text-[16px]" /> 50 Students</p>
                      <p><WorkspacePremiumIcon className="text-[16px]" /> CPD Acrediateds</p>
                    </div>
                    <button className="flex justify-center items-center text-blue-900 ring-1 ring-blue-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 hover:text-white rounded gap-[10px]"><ShoppingCart /> Go to cart
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-gray-400 lg:hidden md:hidden sm:hidden s:flex gap-[10px] mt-[20px]"> Check out all <EastIcon /> </div>
            </div>
          </div>




          {/* <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}


          <div className="flex justify-center items-center flex-col gap-[20px] pb-[40px] theme-img">
            <div className="text-center mb-[30px]">
              <h1 className="text-2xl font-[500]">We value our students</h1>
              <h1 className="text-2xl font-[500]">Let's here from them</h1>
            </div>
            <div className="w-[370px] h-[200px]">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={` card ${index === currentCardIndex ? 'active' : ''}`}
                >
                  <div className="h-[100%] w-[100%] p-[20px] gap-[20px] flex flex-col justify-center item-center">
                    <p className="text-[16px] text-center text-gray-900">{card.content}</p>
                    <p className="text-[14px] text-center text-black font-[600]">- {card.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-[20px] text-gray-300 w-full justify-center items-center">
              <button onClick={showPrevCard} className="controller hover:text-gray-900">
                <WestIcon />
              </button>
              <button onClick={showNextCard} className="controller hover:text-gray-900">
                <EastIcon />
              </button>

            </div>
          </div>


          {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">

          </div>
        </div>
      </section> */}
          <div className="container mx-auto flex lg:px-5 lg:py-24 md:px-5 md:py-24 sm:px-5 sm:py-24 s:px-5 s:py-0 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded lg:mt-0 md:mt-0 sm:mt-0 s:mt-10" alt="hero" src="Img/girlimgbook.png" />
            </div>
            <div className=" lg:ml-[100px] md:ml-[100px] sm:ml-[0px] s:ml-[0px]">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                  <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica.</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo.</p>
                </div>
              </div>
            </div>
          </div>



          {/*Section 6*/}
          <div className="flex flex-col lg:mt-[40px] md:mt-[40px] sm:mt-[50px] s:mt-[60px]">
            <div className="w-full flex lg:flex-row md:flex-row sm:flex-row s:flex-col">
              <div className="lg:flex-1 md:flex-1 sm:flex-1 s:w-full lg:mb-0 md:mb-0 sm:mb-0 s:mb-5 ">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img className='h-[30px] w-[30px]' src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-2/260/31-512.png" />
                    <span className="ml-3 sm:ml-[5px] text-xl">Ituotor</span>
                  </a>
                  <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
              </div>

              <div className="flex justify-around lg:flex-2 md:flex-2 sm:flex-2 s:w-full lg:flex-nowrap md:flex-nowrap sm:flex-nowrap s:flex-wrap gap-[30px] ">
                <div className="">
                  <h2 className="title-font font-medium text-gray-900">CATEGORIES</h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                  </nav>
                </div>
                <div className="">
                  <h2 className="title-font font-medium text-gray-900">CATEGORIES</h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                  </nav>
                </div>
                <div className="">
                  <h2 className="title-font font-medium text-gray-900">CATEGORIES</h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                  </nav>
                </div>
                <div className="">
                  <h2 className="title-font font-medium text-gray-900">CATEGORIES</h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                  <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </main>
  );
}
