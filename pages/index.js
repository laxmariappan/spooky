import Head from 'next/head'

export default function Home() {
  return (
     <>
      <Head>
        <title>Spooky Halloween Party</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-base-200 px-5 md:px-12 max-w-7xl mx-auto relative items-center w-full">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src="/spooky-cat.png" className="max-w-sm rounded-lg shadow-2xl"/> 
        <div>
          <h1 className="mb-5 text-5xl font-bold max-w-2xl">
                Spooktacular <span className="font-spooky">Halloween</span> Party
          </h1> 
          <p className="mb-5 max-w-xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae.
              </p> 
          <button className="btn btn-primary">Reserve your spot</button>
        </div>
      </div>
    </div>

    

    </>
  )
}
