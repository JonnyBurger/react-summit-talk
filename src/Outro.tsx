import {Sequence, Video} from 'remotion';
import outro from './footage/outro.mp4';

export const outrolength = 113 * 50;
const outrooffset = -530;

export const Outro: React.FC = () => {
	return (
		<Sequence
			name="outrocontent"
			durationInFrames={outrolength - outrooffset}
			from={outrooffset}
		>
			<Video src={outro} />
		</Sequence>
	);
};
