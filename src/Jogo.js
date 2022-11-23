import { useState } from "react";
import palavras from "./palavras";

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function Jogo() {
	const [word, setWord] = useState("--------");

	function chooseWord() {
		const newWord = palavras[getRandomNumber(palavras.length)];
		setWord(newWord);
	}
	return (
		<div className="game" style={{ backgroundColor: "brown" }}>
			<div className="image"></div>
			<div className="content" style={{ backgroundColor: "white" }}>
				<div className="button" onClick={chooseWord}>
					Escolher palavra
				</div>
				<div className="word">{word}</div>
			</div>
		</div>
	);
}

export default Jogo;
