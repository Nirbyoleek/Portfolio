import React from "react";

function Nav() {
	return (
		<div className=" text-black w-[100vw] height-[100vh] overflow-hidden flex justify-between px-8 py-6 align-middle items-center">
			<div className="text-2xl">LOGO</div>
			<div className="flex space-x-8">
				<div className="transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
					Home
				</div>
				<div className="transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
					About Me
				</div>
				<div className="transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
					Contact
				</div>
				<div className="transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300">
					Projects
				</div>
			</div>
		</div>
	);
}

export default Nav;
