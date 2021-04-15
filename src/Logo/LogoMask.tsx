import {Easing, interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Container = styled.svg`
	position: absolute;
`;

const triangleWidth = 195;
const triangleHeight = 185.63699340820312;

export const LogoMask: React.FC<{
	width: number;
	height: number;
	inverse: boolean;
	offset: number;
}> = ({width, height, inverse, offset}) => {
	const frame = useCurrentFrame();
	const spr = interpolate(frame - offset, [0, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.in(Easing.ease),
	});

	const progress = inverse ? 1 - spr : spr;
	const scale = interpolate(progress, [0, 1], [10, 0]);
	const s = scale;
	return (
		<Container
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			style={{
				transform: `rotate(90deg) scale(1.6)`,
			}}
		>
			<defs>
				<mask
					id="mymask"
					style={{
						transformOrigin: '50% 50%',
					}}
				>
					<rect width={width} height={height} fill="white" />
					<g
						style={{
							transform: `translateX(${(-(s - 1) * width) / 2}px) translateY(${
								(-(s - 1) * height) / 2
							}px) scale(${s}) `,
						}}
					>
						<g
							style={{
								transform: `  translateX(${
									width / 2 - triangleWidth / 2
								}px) translateY(${height / 2 - triangleHeight / 2}px)`,
							}}
							stroke="black"
							strokeWidth="100"
							strokeLinejoin="round"
						>
							<path
								fill="black"
								d="M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
							/>
						</g>
					</g>
				</mask>
				<linearGradient id="blue">
					<stop stopColor="#42e9f5" offset={0} />
					<stop stopColor="#4290f5" offset={1} />
				</linearGradient>
			</defs>
			<rect
				width={width}
				height={height}
				fill="url(#blue)"
				mask="url(#mymask)"
			/>
		</Container>
	);
};
