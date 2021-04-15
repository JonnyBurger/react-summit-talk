import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const Ssr: React.FC = () => {
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
				<SlideTitle>SSR</SlideTitle>
				<SlideSubtitle>
					<ul>
						<li>Render videos in the cloud</li>
						<li>
							Use the APIs for bundling, rendering and stitching <br />
							programmatically
						</li>
					</ul>
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
