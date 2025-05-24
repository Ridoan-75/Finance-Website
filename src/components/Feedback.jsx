import React from 'react'
import person1 from "../assets/person-1.png"
import person2 from "../assets/person-2.png"
import person3 from "../assets/person-3.png"
import quote from "../assets/quote.svg"

const reviews = [
    {image:person1, review: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.", name:"Hadid Khan", status:"UIUX Designer"},
    {image:person2, review: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.", name:"Wade Warren", status:"Web Designer"},
    {image:person3, review: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ", name:"Jenny Wilson", status:"Trust Administrator"}
]
function Feedback() {
  return (
     <section className='grid grid-cols-1 md:grid-cols-3 gap-8'> 
            {reviews.map((item, i) => (
                <div key={i} className='bg-[#3364573d]  backdrop-blur-md rounded-2xl px-6 py-14 space-y-8 transition-transform duration-300 ease-out hover:-translate-y-4'>
                    <div className='w-14 h-14 flex items-center justify-center bg-[#3D3F54] rounded-full'>
                        <img src={quote} alt="icon" className='w-1/2'/>
                    </div>
                    <p>&quot;{item.review}&quot;</p>

                    <div className='flex gap-2 items-center'>
                        <img className='w-12 h-12 rounded-full' src={item.image} alt="" />

                        <div>
                            <h5 className='font-bold'>{item.name}</h5>
                            
                            <p className='text-[#ADB2B1]'>{item.status}</p>
                        </div>
                    </div>
                </div>
            ))}
     </section>
  )
}

export default Feedback