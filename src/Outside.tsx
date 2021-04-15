import {Video} from 'remotion';

export const Outside: React.FC = () => {
	return (
		<div>
			<Video src="http://localhost:5000/outside.mp4" />
		</div>
	);
};
