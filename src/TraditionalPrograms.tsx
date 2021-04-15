import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Slide} from './Slide';
import {SlideSubtitle} from './SlideTitle';

export const TraditionalPrograms: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const scale = (i: number) =>
		spring({
			frame: frame - 5 * i - 240,
			fps,
			config: {
				damping: 60,
			},
		});

	const opacity = interpolate(frame, [180, 200], [0, 1]);

	const out = spring({
		frame: durationInFrames - 10 - frame,
		fps,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});

	return (
		<Slide style={{flexDirection: 'column'}}>
			<div style={{transform: `scale(${out})`}}>
				<SlideSubtitle style={{opacity}}>
					Your household video editing programs
				</SlideSubtitle>
				<br />
				<br />
				<div>
					<Img
						style={{
							height: 200,
							marginLeft: 20,
							marginRight: 20,
							transform: `scale(${scale(1)})`,
						}}
						src="data:image/png;base64,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"
					/>
					<Img
						style={{
							height: 200,
							marginLeft: 20,
							marginRight: 20,
							transform: `scale(${scale(2)})`,
						}}
						src="data:image/png;base64,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"
					/>
					<Img
						style={{
							height: 200,
							marginLeft: 20,
							marginRight: 20,
							transform: `scale(${scale(3)})`,
						}}
						src="http://ipadschule.ch/wp-content/uploads/2018/12/iMovie.png"
					/>
					<Img
						style={{
							height: 200,
							marginLeft: 20,
							marginRight: 20,
							transform: `scale(${scale(4)})`,
						}}
						src="https://post-professionals.de/wp-content/uploads/2020/11/NEW-FCP.png"
					/>
				</div>
			</div>
		</Slide>
	);
};
