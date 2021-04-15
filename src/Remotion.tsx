import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {LogoMask} from './Logo/LogoMask';
import {Slide} from './Slide';
import {SlideTitle} from './SlideTitle';

export const Remotion: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const transition = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});
	const opacity = interpolate(frame, [49, 50], [0, 1]);
	return (
		<Slide>
			<div style={{textAlign: 'center', opacity}}>
				<SlideTitle>
					<Img
						style={{height: 140, transform: `translateY(12px)`}}
						src="https://www.remotion.dev/img/logo-small.png"
					/>
					<span style={{display: 'inline-block', width: 30}} />
					Remotion
				</SlideTitle>
				<br />
			</div>
			<AbsoluteFill
				style={{
					transform: `translateX(${interpolate(
						transition,
						[0, 1],
						[2000, 0]
					)}px)`,
				}}
			>
				<LogoMask inverse width={1792} height={1120} offset={50} />
			</AbsoluteFill>
		</Slide>
	);
};
