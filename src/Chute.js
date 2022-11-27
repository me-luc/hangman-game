import { useState } from "react";
import styled from "styled-components";

export default function Chute({ gameState, guessWord }) {
	const [guess, setGuess] = useState("");
	return (
		<Styled>
			<p>Já sei a palavra!</p>
			<input type="text" onChange={(e) => setGuess(e.target.value)} />
			<button disabled={!gameState} onClick={() => guessWord(guess)}>
				Chute
			</button>
		</Styled>
	);
}

const Styled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 20px;
	p {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #000000;
	}

	input {
		width: 353px;
		height: 40px;
		background: #ffffff;
		border: 1px solid #cccccc;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
		border-radius: 3px;
	}
	button {
		width: 100px;
		height: 40px;

		background: #e1ecf4;
		border: 1px solid #7aa7c7;
		border-radius: 3px;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		text-align: center;

		color: #3c76a1;
		cursor: pointer;
	}
`;
