import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./letras/Letras";
import palavras from "./palavras.js";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import "./css/style.css";

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [word, setWord] = useState("--------");
	const imgArr = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
	const [hangImg, setHangImg] = useState(forca0);
	const [gameState, setGameState] = useState(false);
	const [playerWord, setPlayerWord] = useState("");
	const [lettersPlayed, setLettersPlayed] = useState([]);
	const [errors, setErros] = useState(0);

	if (errors === 6) {
		setGameState(false);
	}

	function chooseWord() {
		const newWord = palavras[getRandomNumber(palavras.length)];
		setWord(newWord.toUpperCase());
		setPlayerWord(underlineWord(newWord.toUpperCase()));
		setLettersPlayed([]);
		setErros(0);
		console.log("REMOVER DEPOIS, RESPOSTA ->", newWord);
		setHangImg(forca0);
		setGameState(true);
	}

	function chooseLetter(letter) {
		let newLettersPlayed = [...lettersPlayed];
		newLettersPlayed.push(letter);
		setLettersPlayed(newLettersPlayed);

		if (word.includes(letter)) {
			let newWord = removeUnderlineChar(word, playerWord, letter);
			setPlayerWord(newWord);
		} else {
			setErros(errors + 1);
			setHangImg(imgArr[errors]);
		}
	}

	return (
		<div className="page">
			<Jogo
				word={playerWord}
				image={hangImg}
				chooseWord={chooseWord}
				key={word}
			/>
			<Letras
				gameState={gameState}
				chooseLetter={chooseLetter}
				playerAlphabet={lettersPlayed}
			/>
		</div>
	);
}

export default App;

function removeUnderlineChar(word, playerWord, letter) {
	let newWord = playerWord.replace(" ", "").split("");
	console.log(newWord);

	for (let i = 0; i < newWord.length; i++) {
		if (word[i] === letter) {
			newWord[i] = ` ${word[i]} `;
		}
	}
	return newWord.join("");
}

function underlineWord(word) {
	let newWord = word.split("");
	for (let i = 0; i < word.length; i++) {
		newWord[i] = "_ ";
	}

	return newWord.join("");
}
