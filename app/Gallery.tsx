import localfont from "next/font/local"

const gothamBold = localfont({
    src: '../public/fonts/GothamBold.otf',
})
export default function Gallery() {
    return (
        <div className="pt-40">
            {/* <h1 className={gothamBold.className + " text-4xl text-center "}>Memories Fragments</h1> */}
            <div className="pt-5 flex justify-center m-auto">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773987011/R0010561-4_dweajk.jpg"
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Street</h2>
                        <p>Street photography collection</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg"
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">High School</h2>
                        <p>My lovely high school memories</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773989118/R0011648_web_jkp8tg.jpg"
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">College</h2>
                        <p>kuliah di Bandung :D</p>
                    </div>
                </div>
            </div>

        </div>
    )
}