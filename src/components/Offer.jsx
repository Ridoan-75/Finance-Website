import React from 'react'

function Offer() {
    const OfferList = [
        {
            title: "Cardano Debit-Cards",
            descreption: "Cardano, simplified. The debit card that makes crypto spending easy.",
            icon:"dollar.svg",
        },
        {
            title: "On & Off Ramp",
            descreption: "Fiat meets crypto, effortlessly buy, sell, and manage.",
            icon:"ramp.svg",
        },
        {
            title: "Solutions for business",
            descreption: "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
            icon:"solution.svg",
        },
    ]
  return (
    <section className='space-y-12'>
        <h2 className='font-bold leading-tight text-center text-2xl lg:text-3xl'>What do we offer?</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {OfferList.map((item, i)=>(
                <div key={i} className='flex gap-4'>
                    <div className='bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5'>
                        <img className='h-6 w-6' src={item.icon} alt="icon" />
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>{item.title}</h4>
                        <p className='text-[#ADB2B1] text-sm'>{item.descreption}</p>
                    </div>
                </div>
            ))

            }
        </div>
    </section>
  )
}

export default Offer