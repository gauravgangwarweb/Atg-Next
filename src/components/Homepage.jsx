import React, { useState } from "react";

const Homepage = () => {
    let [add, setAdd] = useState(false);
    let [signIn, setSignIn] = useState(false);
    return (
        <div className={add === true ? "overscroll-none h-[92vh] overflow-hidden" : "md:flex md:justify-center items-center w-[100%] flex-col"}>
            <div className="w-[100%] bg-[url('/herobg.svg')] py-3 px-4 bg-no-repeat bg-cover linear-gradient md:py-10 md:px-48 bg-center">
                <div className="flex justify-between items-center md:hidden">
                    <img className="w-[6%] h-[5%]" src="/arrowback.png" alt="arrow" />
                    <button onClick={(e) => { add == true ? setAdd(false) : setAdd(true) }} className="text-white bg-transparent border boreder-[2px] px-3 py-2 rounded-[5px] font-medium">{add == true ? "Leave Group" : "Join Group"}</button>
                </div>
                <div className="mt-36 mb-4 md:mt-[300px]">
                    <p className="text-white text-[23px] md:text-[36px] font-bold">Computer Engineering</p>
                    <p className="text-white text-[17px] md:text-[18px] font-normal">142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className={add == true ? "hidden md:block" : "md:w-[80%]"}>
                <div className="md:flex hidden w-[100%] justify-between items-center py-6">
                    <div className="flex gap-5 text-[16px]">
                        <p>All Posts(32)</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Job</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center bg-[#EDEEF0] text-[15px] gap-2 px-3 py-1 rounded-m">Write a Post <img src="/dropdown.png" alt="drop-down" /></button>
                        <button onClick={() => { add == true ? setAdd(false) : setAdd(true); window.scrollTo(0, 0) }} className="text-[white] bg-[#2F6CE5] flex items-center text-[15px] gap-2 px-3 py-1"><img src="/group.png" alt="group" />{add == true ? "Leave Group" : "Join Group"}</button>
                    </div>
                </div>
                <hr className="hidden md:block border brder-[#E0E0E0] w-[100%]" />
                <div className="w-[100%] flex justify-between">
                    <div className="md:w-[70%] md:mt-3">
                        <div className="flex justify-between px-4 py-5 items-center md:hidden">
                            <h2 className="text-[18px] font-bold text-[#212529]">Posts(368)</h2>
                            <button className="flex items-center gap-3 bg-[#F1F3F5] px-3 py-2 text-[#212529]">Filter: All <img src="./dropdown.png" alt="dropdown" /></button>
                        </div>
                        <div className="w-[100%] post-card shadow pb-5">
                            <img className="w-[100%]" src="/post1.png" alt="post 1" />
                            <div className="px-4 py-4">
                                <h3 className="text-[20px] font-medium text-[#000000]">✍️ Article</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <h3 className="text-[20px] text-[#212529]">What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                                    <img className="w-[20px]" src="/3dots.png" alt="dots" />
                                </div>
                                <p className="text-[#495057] text-[17px] mt-2">I’ve worked in UX for the better part of a decade. F..</p>
                            </div>
                            <div className="flex justify-between px-4">
                                <div className="flex gap-3">
                                    <img src="first-person.png" alt="first-person" />
                                    <p className="flex flex-col"><span>Sarthak Kamra</span><span>1.4K views</span></p>
                                </div>
                                <button className="flex items-center gap-2 bg-[#F1F3F5] px-3"><img src="share.png" alt="share" />Share</button>
                            </div>
                        </div>
                        <div className="w-[100%] post-card shadow pb-4 mt-3">
                            <img className="w-[100%]" src="/post2.png" alt="post 2" />
                            <div className="px-4 py-4">
                                <h3 className="text-[20px] font-medium text-[#000000]">🔬️ Education</h3>
                                <div className="flex items-center gap-4 mt-2 justify-between">
                                    <h3 className="text-[20px] text-[#212529]">Tax Benefits for Investment under National Pension Scheme launched by Government</h3>
                                    <img className="w-[20px]" src="/3dots.png" alt="dots" />
                                </div>
                                <p className="text-[#495057] text-[17px] mt-2">I’ve worked in UX for the better part of a decade. F..</p>
                            </div>
                            <div className="flex justify-between px-4 mt-2">
                                <div className="flex gap-3">
                                    <img src="second-person.png" alt="first-person" />
                                    <p className="flex flex-col"><span>Sarah West</span><span>4.8K views</span></p>
                                </div>
                                <button className="flex items-center gap-2 bg-[#F1F3F5] px-3"><img src="share.png" alt="share" />Share</button>
                            </div>
                        </div>
                        <div className="w-[100%] post-card shadow flex flex-col pb-4 mt-2">
                            <img className="w-[100%]" src="/post3.png" alt="post 3" />
                            <div className="px-4 py-4">
                                <h3 className="text-[20px] font-medium text-[#000000]">🗓️ Meetup</h3>
                                <div className="flex items-center gap-4 mt-2 justify-between">
                                    <h3 className="text-[20px] text-[#212529]">Finance & Investment Elite Social Mixer @Lujiazui</h3>
                                    <img className="w-[20px]" src="/3dots.png" alt="dots" />
                                </div>
                                <div className="text-[#495057] text-[17px] mt-2 flex gap-10">
                                    <span>📅 Fri, 12 Oct,2018</span>
                                    <span className="flex items-center gap-1"><img src="/location.png" alt="location" />Ahemdabad,India</span>
                                </div>
                            </div>
                            <button className="border-[2px] self-center py-2 rounded-[10px] w-[95%] text-[#E56135] font-semibold">Visit Website</button>
                            <div className="flex justify-between px-4 mt-6">
                                <div className="flex gap-3">
                                    <img src="/third-person.png" alt="third-person" />
                                    <p className="flex flex-col"><span>Ronal Jones</span><span>1.4K views</span></p>
                                </div>
                                <button className="flex items-center gap-2 bg-[#F1F3F5] px-3"><img src="share.png" alt="share" />Share</button>
                            </div>
                        </div>
                        <div className="w-[100%] post-card shadow flex flex-col pb-4 mt-2 mb-8">
                            <div className="px-4 py-4">
                                <h3 className="text-[20px] font-medium text-[#000000]">💼️ Job</h3>
                                <div className="flex items-center gap-4 mt-2 justify-between">
                                    <h3 className="text-[20px] text-[#212529]">Software Developer - II</h3>
                                    <img className="w-[20px]" src="/3dots.png" alt="dots" />
                                </div>
                                <div className="text-[#495057] text-[17px] mt-2 flex gap-10">
                                    <span className="flex items-center gap-1"><img src="/briefcase.png" alt="briefcase" />Innovaccer Analytic...</span>
                                    <span className="flex items-center gap-1"><img src="/location.png" alt="location" />Noida,India</span>
                                </div>
                            </div>
                            <button className="border-[2px] self-center py-2 rounded-[10px] w-[95%] text-[#02B875] font-semibold">Apply on Timesjobs</button>
                            <div className="flex justify-between px-4 mt-6">
                                <div className="flex gap-3">
                                    <img src="/fourth-person.png" alt="fourth-person" />
                                    <p className="flex flex-col"><span>Joseph Gray</span><span>1.7K views</span></p>
                                </div>
                                <button className="flex items-center gap-2 bg-[#F1F3F5] px-3"><img src="share.png" alt="share" />Share</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[20%] hidden md:flex flex-col mt-7">
                        <div className="flex items-center gap-2">
                            <img src="/location.png" alt="locaton" />
                            <input className="border-0" type="text" placeholder="Enter your location" />
                            <img src="/edit-pen.png" alt="edit-pen" />
                        </div>
                        <hr className="border mt-1" />
                        <div className="flex items-center mt-5">
                            <img src="/warn.png" alt="warn" />
                            <p className="text-[10px] text-left">Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pop-ups */}
            <div className={add == true ? "absolute h-[100vh] md:gap-2 bg-black/70 top-0 flex flex-col justify-end md:justify-center overflow-hidden md:items-center w-[100%] overscroll-none" : "hidden"}>
            <span className="w-[46.5%] hidden md:flex justify-end"><img className="hidden md:flex w-[20px]" onClick={(e) => { setAdd(false) }} src="/white-cut.png" alt="cross" /></span>
                <div className={signIn == true ? "hidden" : "py-7 md:rounded-lg md:py-2 px-4 md:px-0 font-bold bg-[#FFFFFF] h-[70vh] md:h-auto md:w-[45%]"}>
                    <p className="hidden md:block text-[14px] text-[#008A45] bg-[#EFFFF4] text-center font-medium py-1 w-[100%]">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div className="h-[100%] flex gap-10 md:gap-4 flex-col  w-[100%] md:px-5 md:py-4">
                        <div className="flex justify-between items-center md:w-[100%]">
                            <p className="text-[22px]">Create Account</p>
                            <img className="md:hidden" onClick={(e) => { setAdd(false) }} src="/cross.png" alt="cross" />
                            <span className="text-[13px] md:flex hidden gap-1 font-normal"><p className="text-[#3D3D3D]">Already have an account? </p><button onClick={() => { setSignIn(true) }} className="text-[#2F6CE5]">Sign In</button></span>
                        </div>
                        <div className="md:flex md:w-[100%] gap-[5%]">
                            <div className="md:w-[45%]">
                                <form>
                                    <div className="flex">
                                        <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[50%] px-2 py-2" type="text" id="fierstName" placeholder="First Name" required />
                                        <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[50%] px-2 py-2" type="text" id="lastName" placeholder="Last Name" required />
                                    </div>
                                    <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[100%] px-2 py-2" type="email" id="email" placeholder="Email" required />
                                    <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[100%] px-2 py-2" type="password" id="password" placeholder="Password" required />
                                    <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[100%] px-2 py-2" type="password" placeholder="Confirm Password" required />
                                    <div className="flex items-center mt-8 justify-between">
                                        <button type="submit" className="bg-[#2F6CE5] px-6 py-2 rounded-3xl text-[#FFFFFF] md:w-[100%]">Create Account</button>
                                        <button onClick={() => { setSignIn(true) }} className="text-[#495057] underline underline-offset-3 font-medium md:hidden">or, Sign In</button>
                                    </div>
                                </form>
                                <div className="flex flex-col gap-2 mt-6">
                                    <button className="flex w-[100%] justify-center items-center border border-[#D9D9DB] bg-[#FFFFFF] font-normal text-[16px] py-2 gap-2"><img src="/fblogo.png" alt="facebook" />Sign up with Facebook</button>
                                    <button className="flex w-[100%] justify-center items-center border border-[#D9D9DB] bg-[#FFFFFF] font-normal text-[16px] py-2 gap-2"><img src="/google.png" alt="facebook" />Sign up with Facebook</button>
                                </div>
                                <p className="text-[13px] mt-6 font-normal text-center px-14 md:hidden">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                            <div className="md:flex hidden flex-col items-center w-[45%]">
                                <img src="/signup-img.png" alt="sign-up" />
                                <p className="text-[11px] text-[#000000]">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={signIn == false ? "hidden" : "py-7 md:rounded-lg md:py-2 px-4 md:px-0 font-bold bg-[#FFFFFF] h-[70vh] md:h-auto md:w-[45%]"}>
                    <p className="hidden md:block text-[14px] text-[#008A45] bg-[#EFFFF4] text-center font-medium py-1 w-[100%]">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div className="h-[100%] flex gap-10 md:gap-4 flex-col  w-[100%] md:px-5 md:py-4">
                        <div className="flex justify-between items-center md:w-[100%]">
                            <p className="text-[22px] md:flex hidden">Sign In</p>
                            <p className="text-[22px] flex md:hidden">Welcome Back!</p>
                            <img className="md:hidden" onClick={(e) => { setAdd(false) }} src="/cross.png" alt="cross" />
                            <span className="text-[13px] md:flex hidden gap-1 font-normal"><p className="text-[#3D3D3D]">Don’t have an account yet?</p><button onClick={() => { setSignIn(false) }} className="text-[#2F6CE5]">Create new for free!</button></span>
                        </div>
                        <div className="md:flex md:w-[100%] gap-[5%]">
                            <div className="md:w-[45%]">
                                <form>
                                    <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[100%] px-2 py-2" type="email" id="email" placeholder="Email" required />
                                    <input className="bg-[#F7F8FA] border border-[#D9D9DB] font-medium w-[100%] px-2 py-2" type="password" id="password" placeholder="Password" required />
                                    <div className="flex items-center mt-8 justify-between">
                                        <button type="submit" className="bg-[#2F6CE5] px-6 py-2 rounded-3xl text-[#FFFFFF] md:w-[100%]">Sign In</button>
                                        <button onClick={() => { setSignIn(false) }} className="text-[#495057] underline underline-offset-3 font-medium md:hidden">or, Create Account</button>
                                    </div>
                                </form>
                                <div className="flex flex-col gap-2 mt-6">
                                    <button className="flex w-[100%] justify-center items-center border border-[#D9D9DB] bg-[#FFFFFF] font-normal text-[16px] py-2 gap-2"><img src="/fblogo.png" alt="facebook" />Sign up with Facebook</button>
                                    <button className="flex w-[100%] justify-center items-center border border-[#D9D9DB] bg-[#FFFFFF] font-normal text-[16px] py-2 gap-2"><img src="/google.png" alt="facebook" />Sign up with Facebook</button>
                                </div>
                                <p className="text-center text-[12px] font-medium mt-5">Forgot Password?</p>
                            </div>
                            <div className="md:flex hidden flex-col items-center w-[45%]">
                                <img src="/signup-img.png" alt="sign-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;