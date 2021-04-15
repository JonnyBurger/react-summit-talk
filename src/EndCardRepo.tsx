import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-weight: 700;
	font-family: -apple-system, BlinkMacSystemFont;
	font-size: 30px;
	margin-bottom: 7px;
`;

const Link = styled.div`
	font-weight: 700;
	font-size: 40px;
	font-family: -apple-system, BlinkMacSystemFont;
	background: linear-gradient(to right, #f5ad43, #fd764a);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const EndCardRepo: React.FC = () => {
	return (
		<Container>
			<Title>This talk is on Github:</Title>
			<a
				href="https://github.com/JonnyBurger/react-summit-talk"
				target="_blank"
				style={{textDecoration: 'none'}}
			>
				<Link>JonnyBurger/react-summit-talk</Link>
			</a>
		</Container>
	);
};
