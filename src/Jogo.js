import styled from "styled-components";

function Jogo({ word, image, chooseWord, gameState, textColor }) {
	return (
		<GameContent>
			<ForcaImg>
				<img src={image} data-test="game-image" alt="" />
			</ForcaImg>
			<WordContent>
				<button data-test="choose-word" onClick={chooseWord}>
					Escolher palavra
				</button>
				<Word
					color={textColor}
					data-test="word"
					data-answer={gameState && `${word}`}>
					{word}
				</Word>
			</WordContent>
		</GameContent>
	);
}

export default Jogo;

const Word = styled.div`
	font-family: "Noto Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 68px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	color: ${(props) => props.color};
`;

const ForcaImg = styled.div`
	max-width: 600px;
	max-height: 700px;
	height: 600px;
	width: 700px;
	overflow: hidden;

	img {
		height: 100%;
		object-fit: cover;
	}
`;

const GameContent = styled.div`
	display: flex;
	justify-content: space-between;

	max-width: 1050px;
	width: 100%;

	button {
		width: 200px;
		height: 60px;

		font-weight: 700;
		font-size: 20px;
		line-height: 23px;
		display: flex;
		align-items: center;
		justify-content: center;

		color: #ffffff;
		background: #27ae60;
		border-radius: 8px;
		cursor: pointer;
	}
`;

const WordContent = styled.div`
	max-width: 700px;
	width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	box-sizing: border-box;
	padding: 40px 0;
`;
