import {Video} from 'remotion';
import outside from './footage/outside.mp4';

export const Outside: React.FC = () => {
	return (
		<div>
			<Video src={outside} />
		</div>
	);
};
