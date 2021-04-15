import {interpolate, Sequence, useCurrentFrame, Video} from 'remotion';

export const howlength = 241.5 * 50;
const howoffset = -400;

export const How: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 50], [0, 1]);
	return (
		<Sequence
			name="howcontainer"
			durationInFrames={howlength - howoffset}
			from={howoffset}
		>
			<Video src="http://localhost:5000/how.mp4" style={{opacity}} />
		</Sequence>
	);
};
