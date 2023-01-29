import React from "react";

function Nav() {
	return (
		<div className=" text-black w-[100vw] height-[100vh] overflow-hidden flex justify-between px-8 py-6 align-middle items-center">
			<div className="text-2xl">LOGO</div>
			<div className="flex space-x-8">
				<div>Home</div>
				<div>About Me</div>
				<div>Contact</div>
				<div>Projects</div>
			</div>
		</div>
	);
}

export default Nav;
