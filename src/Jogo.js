import styled from "styled-components";

function Jogo({ word, image, chooseWord, gameState }) {
	return (
		<GameContent>
			<ForcaImg>
				<img src={image} data-test="game-image" alt="" />
			</ForcaImg>
			<div className="content">
				<button data-test="choose-word" onClick={chooseWord}>
					Escolher palavra
				</button>
				<div
					className="word"
					data-test="word"
					data-answer={gameState && "quarentena"}>
					{word}
				</div>
			</div>
		</GameContent>
	);
}

export default Jogo;

const ForcaImg = styled.div`
	/* max-width: 400px;
	max-height: 470px; */
	height: 600px;
	width: 700px;
	overflow: hidden;
	background-color: blue;

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
