import Head from 'next/head'
export default function Shop(){
    return(
        <>
        <Head>
            <title>Shop</title>
        </Head>
        <section className="px-5 md:px-12 max-w-7xl mx-auto relative items-center w-full mt-8">
            <div className="grid grid-rows-3 grid-flow-col gap-4 container mx-auto mt-8">
                <div className="row-span-2">
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Item 1</h2> 
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                            <div className="card-actions">
                            <button className="btn btn-primary">Shop Now</button> 
                            <button className="btn btn-ghost">View More</button>
                            </div>
                        </div> 
                        <figure>
                            <img src="https://placekitten.com/400/250" />
                        </figure>
                    </div> 
                </div>
                <div className="row-span-2">
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Image 2</h2> 
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                            <div className="card-actions">
                            <button className="btn btn-primary">Shop Now</button> 
                            <button className="btn btn-ghost">View More</button>
                            </div>
                        </div> 
                        <figure>
                            <img src="https://placekitten.com/400/250" />
                        </figure>
                    </div> 
                </div>
                <div className="row-span-2">
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Item 3</h2> 
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                            <div className="card-actions">
                            <button className="btn btn-primary">Shop Now</button> 
                            <button className="btn btn-ghost">View More</button>
                            </div>
                        </div> 
                        <figure>
                            <img src="https://placekitten.com/400/250" />
                        </figure>
                    </div> 
                </div>
            </div>
        </section>
        </>
    )
}