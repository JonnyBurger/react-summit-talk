import React from 'react';
import {Slide} from './Slide';
import {SlideSubtitle, SlideTitle} from './SlideTitle';

export const Step3: React.FC = () => {
	return (
		<Slide>
			<div>
				<SlideSubtitle>Step 3</SlideSubtitle>
				<SlideTitle>Stitch frames together</SlideTitle>
			</div>
		</Slide>
	);
};
