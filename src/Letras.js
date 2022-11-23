import { useState } from "react";
import { LockedLetter, UnlockedLetter } from "./styles";

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
	const [locked, setLocked] = useState(true);

	function filterLetter(locked, letter) {
		if (locked) {
			return <LockedLetter onClick={unlockLetter}>{letter}</LockedLetter>;
		} else {
			return (
				<UnlockedLetter onClick={unlockLetter}>{letter}</UnlockedLetter>
			);
		}
	}

	function unlockLetter() {
		locked ? setLocked(false) : setLocked(true);
	}
	return (
		<div style={{ backgroundColor: "purple" }} className="letters-content">
			{alphabet.map((letter) => filterLetter(locked, letter))}
		</div>
	);
}

export default Letras;
