import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const AudioSupport: React.FC = () => {
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
				<SlideTitle>&lt;Audio/&gt;</SlideTitle>
				<SlideSubtitle>
					<ul>
						<li>Include audio in your video</li>
						<li>Use multiple tracks, cut and trim, control volume</li>
						<li>Remotion will place and mix the audio for you</li>
					</ul>
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
