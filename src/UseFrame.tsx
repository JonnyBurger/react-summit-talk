import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CodeFrame} from './CodeFrame';
import {Slide} from './Slide';

export const UseFrame: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const posout = spring({
		fps,
		frame: durationInFrames - frame - 10,
		config: {
			damping: 200,
		},
	});
	return (
		<Slide>
			<div
				style={{
					transform: `translateY(${interpolate(posout, [0, 1], [-1200, 0])}px)`,
				}}
			>
				<CodeFrame
					width={1200}
					title="MyVideo.tsx"
					code={`
export const MyVideo = () => {
	const frame = useCurrentFrame() // ${frame}
}	
				`.trim()}
					timing={[
						{
							line: 1,
							from: 50,
						},
					]}
				/>
			</div>
		</Slide>
	);
};
