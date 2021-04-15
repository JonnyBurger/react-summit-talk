import {Sequence, Video} from 'remotion';

export const ENABLE_WHY = false;

export const whylength = ENABLE_WHY ? 251 * 50 : 0;
const whyoffset = -450;

export const Why: React.FC = () => {
	return (
		<Sequence durationInFrames={whylength - whyoffset} from={whyoffset}>
			<Video src="http://localhost:5000/why.mp4" />
		</Sequence>
	);
};
