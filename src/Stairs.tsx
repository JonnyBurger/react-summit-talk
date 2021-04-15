import {Video} from 'remotion';
import stair from './footage/stairs.mp4';

export const Stairs: React.FC = () => {
	return (
		<div>
			<Video src={stair} />
		</div>
	);
};
