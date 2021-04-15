import React from 'react';
import {CodeFrame} from './CodeFrame';
import {Slide} from './Slide';

export const DefiningComposition: React.FC = () => {
	return (
		<Slide>
			<CodeFrame
				width={1200}
				title="Video.tsx"
				code={`
export const RemotionVideo = () => {
	return (
		<Composition
			id="MyVideo"
			width={1920}
			height={1080}
			durationInFrames={90}
			fps={30}
			component={MyVideo}
		/>
	);
}

					`.trim()}
				timing={[
					{
						line: 4,
						from: 800,
					},
					{
						line: 5,
						from: 850,
					},
					{
						line: 6,
						from: 900,
					},
					{
						line: 7,
						from: 950,
					},
					{
						line: 8,
						from: 1100,
					},
				]}
			/>
		</Slide>
	);
};
