function profilePage(
	{ favColor } = { favColor: "pink" },
	[name, age] = ["Bunny", 24]
) {
	console.log(`Name = ${name}, age = ${age}, color = ${favColor}`);
}

profilePage();		// Name = Bunny, age = 24, color = pink
profilePage({ favColor: "blue" }, ["Ed", 30]);	// Name = Ed, age = 30, color = blue
profilePage({}, []);	// Name = undefined, age = undefined, color = undefined