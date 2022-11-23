import styled from "styled-components";

export const LetterBox = styled.div`
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
	cursor: pointer;
`;

export const UnlockedLetter = styled(LetterBox)`
	color: #39739d;
	background: #e1ecf4;
	border: 1px solid #7aa7c7;
`;

export const LockedLetter = styled(LetterBox)`
	color: #798a9f;
	background: #9faab5;
	border: 1px solid #7aa7c7;
`;
