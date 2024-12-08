import React from 'react'
import Image from 'next/image'

const Card2 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/media bg-cover.png" 
                  width={420} 
                  height={260} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/florencia-viadana-SoqCV2d-MKE-unsplash.jpg" 
                  width={421} 
                  height={261} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/media bg-cover.png" 
                  width={422} 
                  height={262} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/shop-hero-1-product-slide-1.jpg" 
                  width={423} 
                  height={263} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/marlon-alves-A0mSSCEVh9A-unsplash.jpg" 
                  width={424} 
                  height={264} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/florencia-viadana-SoqCV2d-MKE-unsplash.jpg" 
                  width={425} 
                  height={265} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/alex-haigh-fEt6Wd4t4j0-unsplash.jpg" 
                  width={427} 
                  height={267} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image 
                  alt="ecommerce" 
                  className="object-cover object-center w-full h-full block" 
                  src="/media bg-cover.png" 
                  width={428} 
                  height={268} 
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card2
