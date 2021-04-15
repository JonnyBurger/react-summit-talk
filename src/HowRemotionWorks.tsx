import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Slide} from './Slide';
import {SlideTitle} from './SlideTitle';

export const HowRemotionWorks: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 50], [0, 1]);
	return (
		<Slide>
			<SlideTitle style={{fontSize: 120, opacity}}>
				Understanding Remotion
			</SlideTitle>
		</Slide>
	);
};
