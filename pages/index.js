import Head from 'next/head'
import { useState } from 'react'
import {
  BsCode,
  BsCodeSlash,
} from 'react-icons/bs'
import {
  GoDeviceMobile,
  GoDeviceDesktop
} from 'react-icons/go'
import ContactForm from '../components/ContactForm'



export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => { 
      e.preventDefault()
      console.log('Sending')
    let data = {
        name,
        email,
        message
      }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
          if(res === 200){
          setName('')
          setEmail('')
          setMessage('')
          setSubmitted(true)
          }
      })

      setName('')
      setEmail('')
      setMessage('')
      setSubmitted(true)
    }


  return (
    <div className="bg-gray-700 h-full min-h-screen">
      <Head>
        <title>Kevin Bellock</title>
        <meta name="description" content="Kevin Bellock, San Diego,CA based React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between p-5 sticky top-0 z-50 bg-gray-600">
        <div className="hidden sm:flex text-white items-center space-x-1 px-2 text-sm md:text-2xl cursor-pointer transform hover:scale-110">
          <BsCode />
          <a href="/">Kevin Bellock</a>
          <BsCodeSlash />
        </div>
        <div>
          <nav className="flex space-x-3 pr-5 text-white text-xs md:text-lg">
            <div className="cursor-pointer transform hover:scale-110"><a href="/#projects">Projects</a></div>
            <div className="cursor-pointer transform hover:scale-110"><a href="/#about">About Me</a></div>
            <div className="cursor-pointer transform hover:scale-110"><a href="/#contact">Contact</a></div>
            <div className="flex mr-3 text-blue-100">
              <div className="items-center text-xs"><p>Mode:</p></div>
              <div className="items-center text-xs p-1">
                <GoDeviceMobile className="lg:hidden hover:animate-bounce"/>
                <GoDeviceDesktop className="hidden lg:inline-flex hover:animate-bounce"/>
            </div>
          </div>
          </nav>
        </div>
      </header>
      <main className="mt-10 relative">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="text-white p-5">
            <h1 className="text-3xl md:text-6xl">Hi, my name is <span className="text-green-400">Kevin Bellock</span>.</h1>
            <p className="text-lg md:text-3xl mt-5">I am a self taught full-stack developer.</p>
            <p>I build modern React websites and applications with an emphasis on SEO and user experience.</p>
          </div>
          <div className="m-5 p-2">
            <img src="/hero.svg"/>
          </div>
        </div>


        <div className="bg-gray-100 mx-3 rounded-sm p-5">
          <div className="flex justify-center items-center w-full">
            <h2 className="text-2xl align-middle m-auto text-gray-800 md:text-4xl">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 m-5 p-5 spaxe-x-3" id="projects">



            {/*Project Cards*/}
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
              <img src="/nilescreen.png" className="w-full"/>
              <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">E-Commerce Site</h3>
                <p className="text-gray-700 text-base">E-Commerce Site with functioning cart and Amazon-like UI</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href="https://github.com/KBellock/Nile-ecommerce" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">See Code</a>
                <a href="https://nile-ecommerce.vercel.app" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Visit Site</a>
              </div>
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
              <img src="/Koogle.png" className="w-full"/>
              <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">Search Engine Website</h3>
                <p className="text-gray-700 text-base">Functioning Google clone using Google Search API</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GoogleAPI</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href="https://github.com/KBellock/Koogle/tree/main" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">See Code</a>
                <a href="https://koogle-b38bwle7p-kbellock.vercel.app" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Visit Site</a>
              </div>
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
              <img src="/huluUI.png" className="w-full"/>
              <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">Hulu UI Clone</h3>
                <p className="text-gray-700 text-base">Hulu clone populated in real time with movies from Moviedb.org</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href="https://github.com/KBellock/hulu2-ui-clone/tree/main" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">See Code</a>
                <a href="https://hulu2-ui-clone-fxukuuol2-kbellock.vercel.app" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Visit Site</a>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
              <img src="/checklist.png" className="w-full"/>
              <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">Checklist App</h3>
                <p className="text-gray-700 text-base">Simple checklist app that utilizes local storage</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Persistant</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href="https://github.com/KBellock/checklist/tree/main" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">See Code</a>
                <a href="https://checklist-nu.vercel.app/" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Visit Site</a>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
              <img src="/gatsby.png" className="w-full"/>
              <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">Gatsby Blog</h3>
                <p className="text-gray-700 text-base">Functioning Gatsby Blog using markdown files</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Gatsby</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href="https://github.com/KBellock/GatsbyPortfolio" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">See Code</a>
                <a href="https://kevin-bellock-portfolio.netlify.app/" target="_blank" className="bg-gray-300 rounded-md px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Visit Site</a>
              </div>
            </div>

            
          </div>
        </div>


        {/*About Me Section*/}
        <section id="about" className="flex flex-col md:flex-row">
          <div className="p-5 mt-3">
            <img src="/aboutMe.svg"/>
          </div>
          <div className="p-5 mt-3">
            <h2 className="text-white text-4xl p-3">About Me</h2>
            <p className="text-white text-sm md:text-lg">I first became really serious about web development after learning about SEO while doing some digital marketing work. I wanted to be able to sell things online and knew visibility on search engines was key. After reading a few books on SEO I knew the only way to really turn that into a profession would be to learn Web Development. Once I started on that path I was hooked, and have been passionate about development since.</p>
            <p className="text-white text-sm md:text-lg mt-2">Being self-taught came with challenges but there is a wealth of information available online. Starting with Codecademy and FreeCodeCamp I was able to brush up on HTML and CSS I had done some work with in the past, and then quickly progress my JavaScript skills. Having taken a few semesters of computer science and working with C made me comfortable picking up the new language, and frameworks like React have helped speed up my progress.</p>
          </div>
        </section>


        {/*Contact*/}
        <section id="contact" className="bg-gray-100 mx-auto rounded-sm p-5 max-w-screen-lg">
          <ContactForm 
          name={name} 
          email={email} 
          message={message} 
          submitted={submitted} 
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleMessageChange={handleMessageChange}
          
          />
        </section>

        
      </main>

    </div>
  )
}
