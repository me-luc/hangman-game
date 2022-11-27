import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./letras/Letras";
import palavras from "./palavras.js";
import Chute from "./Chute";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import "./css/style.css";
import styled from "styled-components";

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

export default function App() {
	console.log("RENDERING AGAIN");
	const [word, setWord] = useState("--------");
	const imgArr = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
	const [textColor, setTextColor] = useState("#000");
	const [hangImg, setHangImg] = useState(forca0);
	const [gameState, setGameState] = useState(false);
	const [playerWord, setPlayerWord] = useState("");
	const [lettersPlayed, setLettersPlayed] = useState([]);
	const [errors, setErros] = useState(0);

	function chooseWord() {
		if (gameState || word === "--------") {
			const newPlayerWord = palavras[getRandomNumber(palavras.length)];
			setWord(newPlayerWord.toUpperCase());
			setPlayerWord(underlineWord(newPlayerWord.toUpperCase()));
			setLettersPlayed([]);
			setErros(0);
			console.log("REMOVER DEPOIS, RESPOSTA ->", newPlayerWord);
			setHangImg(forca0);
			setGameState(true);
		}
	}

	function chooseLetter(letter) {
		let newLetterPlayed = [...lettersPlayed];
		newLetterPlayed.push(letter);
		setLettersPlayed(newLetterPlayed);
		let newPlayerWord = "";
		if (word.includes(letter)) {
			newPlayerWord = removeUnderlineChar(word, playerWord, letter);
			setPlayerWord(newPlayerWord);
		} else {
			let count = errors + 1;
			setErros(count);
			setHangImg(imgArr[count]);
		}

		//CONDIÇÕES QUE PARAM O JOGO
		//perder por qt de erros
		if (errors === 5) {
			setTextColor("#FF0000");
			setPlayerWord(word);
			setGameState(false);
			setHangImg(forca6);
			console.log("LOSE");
			return;
		}
		//acertar palavra
		if (newPlayerWord.replace(/ /g, "") === word) {
			setTextColor("#27AE60");
			setGameState(false);
			console.log("WIN");
			return;
		}

		console.log("ERROR COUNT", errors);
	}

	function guessWord(guess) {
		if (guess.toUpperCase() === word || guess === word) {
			console.log("win");
		} else {
			console.log("ERROU!!!!!!!");
			setHangImg(forca6);
		}
	}

	return (
		<StyledPage>
			<Jogo
				word={playerWord}
				image={hangImg}
				chooseWord={chooseWord}
				gameState={gameState}
				textColor={textColor}
				key={word}
			/>
			<Letras
				gameState={gameState}
				chooseLetter={chooseLetter}
				playerAlphabet={lettersPlayed}
			/>
			<Chute guessWord={guessWord} gameState={gameState} />
		</StyledPage>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function removeUnderlineChar(word, playerWord, letter) {
	let newPlayerWord = playerWord.replace(/ /g, "").split("");

	for (let i = 0; i < newPlayerWord.length; i++) {
		if (word[i] === letter) {
			newPlayerWord[i] = `${word[i]} `;
		} else {
			newPlayerWord[i] = `${newPlayerWord[i]} `;
		}
	}
	return newPlayerWord.join("");
}

function underlineWord(word) {
	let newPlayerWord = word.split("");
	for (let i = 0; i < word.length; i++) {
		newPlayerWord[i] = "_ ";
	}

	return newPlayerWord.join("");
}
