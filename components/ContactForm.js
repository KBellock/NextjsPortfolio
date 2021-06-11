import { useState } from 'react'

function ContactForm({submitted, handleSubmit, handleNameChange, handleEmailChange, handleMessageChange}) {

    
    if(submitted) return (<div className="p-10 flex justify-center items-center">
        <h2 className="font-bold text-4xl">Thank You! I will reach out shortly!</h2>
        </div>)

    return (
      
            <div className="p-5 flex flex-col m-5 w-full">
                <h2 className="text-4xl p-4">Contact Me</h2>
                <p className="p-2 w-full">For development help or employment opportunities</p>
                < form className="w-full mx-auto flex flex-col space-y-2 justify-center">
                    < div className="p-3">
                        < label htmlFor='name'>Name </label>
                        < input type='text' name='name'  className="h-10 border border-gray-500 w-3/5" onChange={handleNameChange}/>  
                    </div>
                    < div className="p-3">
                        < label htmlFor='email'>Email </label>
                        < input type='email' name='email'  className="h-10 border border-gray-500 w-3/5" onChange={handleEmailChange}/>
                    </div>
                    < div  className="p-3">
                        < label htmlFor='message'>Message </label>
                        < input type='text' name='message'  className="h-10 p-10 border border-gray-500 w-3/5" onChange={handleMessageChange}/>
                    </div>
                    < input type='submit' onClick={handleSubmit} className="cursor-pointer bg-gray-700 text-white hover:bg-gray-300 font-bold rounded w-5/12 border-b border-gray-500"/>
                </form >
            </div>



       
    )
}

export default ContactForm
