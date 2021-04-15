import {Sequence, Video} from 'remotion';

export const outrolength = 113 * 50;
const outrooffset = -530;

export const Outro: React.FC = () => {
	return (
		<Sequence
			name="outrocontent"
			durationInFrames={outrolength - outrooffset}
			from={outrooffset}
		>
			<Video src="http://localhost:5000/outro.mp4" />
		</Sequence>
	);
};
