import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const WhatToLearnNext: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1]);
	return (
		<Slide>
			<div
				style={{
					opacity,
				}}
			>
				<SlideSubtitle>What to </SlideSubtitle>
				<SlideTitle>learn next? </SlideTitle>
			</div>
		</Slide>
	);
};
