import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className='mt-12'>
            <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking journey, customized just for you!</h1>
                        <p className="mb-5">Acquire expertise in fundamental programming concepts, data structures, algorithms, object-oriented programming, database management, <br /> and tackle over 500 coding challenges to elevate yourself into a globally renowned programmer.</p>
                        <div>
                            <button className="btn bg-green-400 text-sm font-semibold rounded-3xl border-none">Explore Now</button>
                            <button className="btn btn-ghost text-sm font-semibold rounded-3xl border-slate-300 ml-8">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;