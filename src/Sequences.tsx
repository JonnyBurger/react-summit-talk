import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const Sequences: React.FC = () => {
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
				<SlideTitle>&lt;Sequence/&gt;</SlideTitle>
				<SlideSubtitle>
					<ul>
						<li>
							Takes 2 parameters: <code>from</code> and{' '}
							<code>durationInFrames</code>{' '}
						</li>
						<li>Allows you to shift content in your timeline</li>
						<li>All children of sequence will still start at frame 0</li>
					</ul>
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
