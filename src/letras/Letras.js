import styled from "styled-components";
import Letra from "./Letra";

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

function Letras({ gameState, chooseLetter, playerAlphabet }) {
	return (
		<StyledLetras>
			{alphabet.map((letter) => (
				<Letra
					letterState={
						gameState && !playerAlphabet.includes(letter)
							? true
							: false
					}
					chooseLetter={chooseLetter}
					playerAlphabet={playerAlphabet}
					letter={letter}
					disabled={!gameState}
				/>
			))}
		</StyledLetras>
	);
}

export default Letras;

const StyledLetras = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	max-width: 690px;
	width: 100vw;

	margin-top: 50px;
`;
