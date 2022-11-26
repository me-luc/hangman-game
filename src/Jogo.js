import { useState } from "react";
import App from "./App.js";
import palavras from "./palavras.js";
import styled from "styled-components";

function Jogo({ word, image, chooseWord }) {
	return (
		<div className="game">
			<ForcaImg>
				<img src={image} alt="" />
			</ForcaImg>
			<div className="content">
				<div className="button" onClick={chooseWord}>
					Escolher palavra
				</div>
				<div className="word">{word}</div>
			</div>
		</div>
	);
}

export default Jogo;

const ForcaImg = styled.div`
	/* max-width: 400px;
	max-height: 470px; */
	height: 400px;
	width: 470px;
	background-color: yellow;
	overflow: hidden;

	img {
		width: 400px;
		height: 466.67px;
		object-fit: cover;
	}
`;
