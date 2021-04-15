import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import traditional2 from './footage/traditional2.mp4';

export const Traditional: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[durationInFrames - 50, durationInFrames],
		[1, 0]
	);
	return (
		<div>
			<Video src={traditional2} style={{opacity}} />
		</div>
	);
};
