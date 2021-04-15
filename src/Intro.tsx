import {Video} from 'remotion';
import intro from './footage/intro.mp4';

export const Intro: React.FC = () => {
	return <Video src={intro} />;
};
