import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import styled from 'styled-components';
import {Slide} from './Slide';

const Banner = styled.div`
	background-color: white;
	left: 60px;
	font-size: 60px;
	font-weight: 500;
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 20px 40px;
	display: inline-block;
	margin-left: 100px;
`;

export const Editing: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const translation = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 200,
		},
	});

	return (
		<Slide style={{backgroundColor: 'black'}}>
			<Video style={{width: '100%'}} src="http://localhost:5000/editing.mp4" />
			<AbsoluteFill>
				<div style={{position: 'absolute', bottom: 260, width: '100%'}}>
					<Banner
						style={{
							transform: `translateY(${interpolate(
								translation,
								[0, 1],
								[350, 0]
							)}px)`,
						}}
					>
						This is what it looks like editing this video!
					</Banner>
					<br />
				</div>
			</AbsoluteFill>
		</Slide>
	);
};
