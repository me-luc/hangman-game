import styled from "styled-components";

function Jogo({ word, image, chooseWord }) {
	return (
		<GameContent>
			<ForcaImg>
				<img src={image} alt="" />
			</ForcaImg>
			<div className="content">
				<button onClick={chooseWord}>Escolher palavra</button>
				<div className="word">{word}</div>
			</div>
		</GameContent>
	);
}

export default Jogo;

const ForcaImg = styled.div`
	/* max-width: 400px;
	max-height: 470px; */
	height: 400px;
	width: 470px;
	overflow: hidden;

	img {
		width: 400px;
		height: 466.67px;
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
