import styled from "styled-components";

export default function Letra({
	gameState,
	playerAlphabet,
	letter,
	chooseLetter,
	letterState,
}) {
	return (
		<Letter
			key={letter}
			disabled={!letterState}
			letterState={letterState}
			onClick={() => {
				if (letterState) {
					chooseLetter(letter);
				}
			}}>
			{letter}
		</Letter>
	);
}

const Letter = styled.button`
	width: 40px;
	height: 40px;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	border-radius: 3px;
	margin: 5px;

	${(props) => {
		if (props.letterState === true)
			return `
				color: #39739d;
				background: #e1ecf4;
				border: 1px solid #7aa7c7;
                cursor: pointer;
        `;
	}}

	${(props) => {
		if (props.letterState === false)
			return `
				color: #798a9f;
				background: #9faab5;
				border: 1px solid #7aa7c7;
        `;
	}}

	:disabled {
		color: #798a9f;
		background: #9faab5;
		border: 1px solid #7aa7c7;
	}
`;
