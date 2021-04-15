import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle} from './SlideTitle';

export const VersionControl: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 50], [0, 1]);
	const opacity2 = interpolate(frame, [350, 400], [0, 1]);
	return (
		<Slide style={{flexDirection: 'column'}}>
			<div style={{width: 1350, opacity}}>
				<SlideSubtitle>
					<strong>Developer workflow:</strong> <br /> commit, merge, rebase,
					cherry-pick, revert, ...
				</SlideSubtitle>
			</div>
			<br />
			<br />
			<br />
			<div style={{width: 1350, opacity: opacity2}}>
				<SlideSubtitle>
					<strong>Video editor workflow: </strong> <br />
					undo, redo, save as project_FINAL_V2.aep
				</SlideSubtitle>
			</div>
		</Slide>
	);
};
