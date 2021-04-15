import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle} from './SlideTitle';

export const Reusability: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});
	return (
		<Slide>
			<SlideSubtitle
				style={{
					transform: `scale(${scale})`,
				}}
			>
				Is there a better way to reuse elements than copy-paste?
			</SlideSubtitle>
		</Slide>
	);
};
