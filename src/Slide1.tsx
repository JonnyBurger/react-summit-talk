import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

const Title = styled(SlideTitle)`
	background: linear-gradient(to right, #000, #444);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	color: black;
`;

export const Slide1: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames],
		[1, 0]
	);
	return (
		<Slide>
			<div
				style={{
					width: 1200,
					opacity,
				}}
			>
				<Title>Creating Videos Programmatically in React</Title>
				<br />
				<br />
				<SlideSubtitle>
					Jonny Burger <br /> @JNYBGR
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
