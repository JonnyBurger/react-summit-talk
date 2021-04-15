import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';

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
			<Video src="http://localhost:5000/traditional2.mp4" style={{opacity}} />
		</div>
	);
};
