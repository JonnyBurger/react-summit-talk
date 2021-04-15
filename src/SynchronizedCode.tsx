import {Sequence, Video} from 'remotion';

const lengths = [
	4 * 50 * 60,
	4 * 50 * 60,
	4 * 50 * 60,
	4 * 50 * 60,
	4 * 50 * 60 + 57 * 50 + Math.floor(0.12 / 50),
	4 * 50 * 60,
	4 * 50 * 60,
	4 * 50 * 60,
	3 * 50 * 60 + 30 * 60 + Math.floor(0.72 * 50),
];

export const SynchronizedCode: React.FC<{
	type: 'both' | 'screen' | 'face';
}> = ({type}) => {
	let totalDurations = 0;
	return (
		<>
			{type === 'both' || type === 'face'
				? lengths.map((l, i) => {
						totalDurations += lengths[i];
						return (
							<Sequence
								durationInFrames={lengths[i]}
								from={totalDurations - lengths[i]}
							>
								<Video
									style={{
										height: 1080,
										width: 1920,
									}}
									src={
										'http://localhost:5000' + ('/codep1-' + (i + 1) + '.mp4')
									}
								/>
								;
							</Sequence>
						);
				  })
				: null}
			{type === 'both' || type === 'screen' ? (
				<Sequence
					layout="none"
					from={-5.5 * 60}
					durationInFrames={39 * 60 * 60}
				>
					<Video
						muted
						style={
							type === 'both'
								? {
										height: 1120,
										position: 'absolute',
										left: 1920,
								  }
								: undefined
						}
						src="http://localhost:5000/screen3.mp4"
					/>
				</Sequence>
			) : null}
		</>
	);
};
