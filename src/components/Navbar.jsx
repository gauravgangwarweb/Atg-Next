const Navbar = () => {
    return (
        <div className="flex py-2 px-3">
            <div className="md:hidden flex gap-3 justify-end w-[100%]">
                <img className="w-[20px]" src="/Rectangle.png" alt="rectangle" />
                <img className="w-[20px]" src="Oval.png" alt="Oval" />
                <img className="w-[20px]" src="/Path.png" alt="triangle" />
            </div>
            <div className="hidden md:flex md:justify-between w-[100%] items-center py-1 px-5">
                <img src="/logo.png" alt="logo" />
                <div className="relative">
                    <img className="absolute top-2.5 left-3.5" src="/megnify.png" alt="megnify" />
                    <input className="flex items-center bg-[#F2F2F2] w-[390px] justify-center px-12 py-2 rounded-3xl text-[14px] text-[#5C5C5C]" type="text" placeholder="Search for your favorite groups in ATG" />
                </div>
                <p className="text-[#2E2E2E] text-[16px] flex items-center">Create account.<span className="text-[#2F6CE5]">It's free!</span><img src="/down-tri.png" alt="down-arrow" /></p>
            </div>
        </div>
    )
}
export default Navbar;