import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const Step: React.FC<{
	title: string;
	subtitle: string;
}> = ({title, subtitle}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const pos = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const posout = spring({
		fps,
		frame: durationInFrames - frame - 10,
		config: {
			damping: 200,
		},
	});
	const actualpos = posout * pos;
	return (
		<Slide>
			<div
				style={{
					transform: `translateY(${interpolate(
						actualpos,
						[0, 1],
						[-1200, 0]
					)}px)`,
				}}
			>
				<SlideSubtitle>{subtitle}</SlideSubtitle>
				<SlideTitle>{title}</SlideTitle>
			</div>
		</Slide>
	);
};
