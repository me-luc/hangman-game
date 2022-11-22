const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

function Letras() {
	return (
		<div style={{ backgroundColor: "purple" }} className="letters-content">
			{alphabet.map((letter) => (
				<div className="letter-box locked-letter">{letter}</div>
			))}
		</div>
	);
}

export default Letras;
