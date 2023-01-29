import React, { Component } from "react";
import Profile from "../assets/images.jpg";

const About = () => {
	return (
		<div className="mx-[8vw] mb-20">
			<div className=" mb-20 text-5xl font-extrabold  items-center justify-items-center text-center">
				About Me
			</div>
			<div className="flex flex-row text-center">
				<div className="mr-[20vw] ml-[10vw]">Profile Pic</div>
				<div className="subpixel-antialiased text-2xl text-left w-[45vw]">
					{/* Details */}
					Hi! I’m Nirbyoleek Das, a full-stack web developer and software
					engineer . I have pursued Web Development before even admitting to
					college. from this rigorous program, I can say that applying to a
					coding bootcamp has been the best decision I have ever made in my
					life. I love to learn new technologies and flex my creativity to
					create amazing things.
				</div>
			</div>
		</div>
	);
};

export default About;
