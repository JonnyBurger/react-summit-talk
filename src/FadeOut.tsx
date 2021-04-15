import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Triangle} from './Logo/Triangle';

export const FadeOut: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const spring1 = spring({
		fps,
		frame,
		config: {damping: 200, mass: 1.5},
	});
	const size1 = interpolate(spring1, [0, 1], [0, 10]);
	const spring2 = spring({
		fps,
		frame: frame - 15,
		config: {damping: 200, mass: 1.5},
	});
	const size2 = interpolate(spring2, [0, 1], [0, 10]);
	return (
		<div
			style={{
				display: 'flex',
			}}
		>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						height: 400,
						width: 400,
						transform: `rotate(3600deg) scale(${size1})`,
					}}
				>
					<Triangle opacity={1} scale={1} size={400} />
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						height: 400,
						width: 400,
						transform: `rotate(3600deg) scale(${size2})`,
					}}
				>
					<Triangle opacity={1} scale={1} size={400} color="black" />
				</div>
			</AbsoluteFill>
		</div>
	);
};
