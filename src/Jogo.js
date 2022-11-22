function Jogo() {
	return (
		<div className="game" style={{ backgroundColor: "brown" }}>
			<div className="image"></div>
			<div className="content" style={{ backgroundColor: "white" }}>
				<div className="button">Escolher palavra</div>
				<div className="word">----------</div>
			</div>
		</div>
	);
}

export default Jogo;
