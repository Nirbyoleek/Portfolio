import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TypeAnimation from "react-type-animation";

function HomePage() {
	return (
		<div className=" w-full h-[85vh]">
			<main className="flex">
				{/* Sidebar Contacts */}

				<div className="mt-[30vh] space-y-4">
					<AiOutlineGithub className="w-10 h-8 mb-10 text-[#53ED6A]" />
					<FaLinkedinIn className="w-10 h-8 text-[#53ED6A]" />
				</div>

				{/* NAME AND DETAILS */}

				<div className="mt-[20vh] ml-[22.5vw] space-y-4 flex flex-col  text-center">
					<div className="text-6xl font-bold text-black">Hello, My name is</div>
					<div className="text-7xl font-extrabold text-[#53ED6A]">
						NIRBYOLEEK DAS
					</div>
					<TypeAnimation
						className="font-bold text-4xl text-black"
						wrapper="h2"
						cursor={false}
						repeat={Infinity}
						sequence={[
							"Full Stack Developer",
							5000,
							"CSE Undergrad",
							3000,
							"Web Designer",
							3000,
						]}
					/>
				</div>

				{/* DETAILS CONSTRUCTOR */}
				{/* <DetailsConstructor /> */}

				{/*  */}
			</main>
		</div>
	);
}

export default HomePage;
