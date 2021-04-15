import React from 'react';
import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';

export const Apple: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames],
		[1, 0]
	);
	const scale = spring({
		frame,
		fps,
		config: {
			damping: 400,
			mass: 2,
		},
	});
	return (
		<div
			style={{
				backgroundColor: 'white',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
			}}
		>
			<Video
				muted
				src="http://localhost:5000/apple-long.mp4"
				style={{width: '90%', opacity, transform: `scale(${scale})`}}
			/>
		</div>
	);
};
