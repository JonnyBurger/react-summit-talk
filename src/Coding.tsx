import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {SynchronizedCode} from './SynchronizedCode';
const topick = [
	[-22250, 22736],
	[-25005, 27426],
	[-46740, 52920],
	[-53503, 69746],
	[-72858, 75706],
	[-87294, 96643],
	[-98325, 100068],
	[-105244, 108610],
];

export const CODING_DURATION = topick.reduce((a, b) => {
	return a + b[0] + b[1];
}, 0);

export const Coding: React.FC<{
	type: 'both' | 'face' | 'screen';
}> = ({type}) => {
	let durationSum = 0;
	const {fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const translateX =
		type === 'screen' ? interpolate(progress, [0, 1], [2000, 0]) : 0;

	const opacity = interpolate(
		frame,
		[durationInFrames - 20, durationInFrames],
		[1, 0]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${translateX}px)`,
				opacity,
			}}
		>
			{topick.map((pick) => {
				const duration = pick[0] + pick[1];
				durationSum += duration;
				return (
					<Sequence durationInFrames={duration} from={durationSum - duration}>
						<Sequence durationInFrames={duration - pick[0]} from={pick[0]}>
							<SynchronizedCode type={type} />
						</Sequence>
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
