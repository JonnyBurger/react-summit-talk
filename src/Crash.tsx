import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Slide} from './Slide';

export const Crash: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({
		frame,
		fps,
	});

	const hang = interpolate(
		spring({
			frame: frame - 100,
			fps,
			config: {
				mass: 10,
				damping: 20,
			},
		}),
		[0, 1],
		[0, -90]
	);

	const fallDown = spring({
		fps,
		frame: frame - 200,
		config: {
			damping: 200,
		},
	});

	return (
		<Slide>
			<div
				style={{
					transform: `rotate(${hang}deg) translate(${-fallDown * 400}px)`,
					transformOrigin: '100% 100%',
				}}
			>
				<Img
					style={{height: 500, transform: `scale(${scale})`}}
					src="https://linustechtips.com/uploads/monthly_2017_12/Untitled.png.847e7b9aa3c5fee2d16bf977bbff4836.png"
				/>
			</div>
		</Slide>
	);
};
