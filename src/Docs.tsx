import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const Docs: React.FC = () => {
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
	const actualpos =
		interpolate(pos, [0, 1], [1200, 0]) +
		interpolate(posout, [0, 1], [-1200, 0]);
	return (
		<Slide>
			<div style={{transform: `translateY(${actualpos}px)`}}>
				<SlideTitle>Docs: remotion.dev</SlideTitle>
				<SlideSubtitle>
					<ul>
						<li>Documentation of all Remotion APIs</li>
						<li>Tips for common use cases</li>
						<li>Video tutorials</li>
					</ul>
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
