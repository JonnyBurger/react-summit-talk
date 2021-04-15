import React from 'react';
import {AbsoluteFill, Audio, Sequence, useVideoConfig} from 'remotion';
import {Coding, CODING_DURATION} from './Coding';
import crash from './crash.mp3';
import {How, howlength} from './How';
import {Intro} from './Intro';
import {LogoMask} from './Logo/LogoMask';
import {Outro, outrolength} from './Outro';
import {Outside} from './Outside';
import {Stairs} from './Stairs';
import {Traditional} from './Traditional';
import {
	introlength,
	introoffset,
	outsidelength,
	stairslength,
	traditionallength,
} from './variables';
import {ENABLE_WHY, Why, whylength} from './Why';

export const Face: React.FC = () => {
	const {durationInFrames} = useVideoConfig();
	return (
		<>
			<Sequence durationInFrames={introlength} from={introoffset}>
				<Intro />
			</Sequence>
			<Sequence
				durationInFrames={stairslength}
				from={introlength + introoffset}
			>
				<Stairs />
			</Sequence>
			<Sequence
				durationInFrames={outsidelength}
				from={introlength + introoffset + stairslength}
			>
				<Outside />
			</Sequence>
			<Sequence
				durationInFrames={traditionallength}
				from={introlength + introoffset + stairslength + outsidelength}
			>
				<Traditional />
			</Sequence>
			<Sequence
				from={
					introlength +
					introoffset +
					stairslength +
					outsidelength +
					traditionallength
				}
				durationInFrames={howlength}
			>
				<How />
			</Sequence>
			{ENABLE_WHY ? (
				<Sequence
					from={
						introlength +
						introoffset -
						1 +
						stairslength +
						outsidelength +
						traditionallength +
						howlength
					}
					durationInFrames={whylength}
				>
					<Why />
				</Sequence>
			) : (
				0
			)}
			<Sequence
				from={
					introlength +
					introoffset +
					stairslength +
					outsidelength +
					traditionallength +
					howlength +
					whylength
				}
				durationInFrames={CODING_DURATION}
			>
				<Coding type="face" />
			</Sequence>
			<Sequence
				from={
					introlength +
					introoffset +
					stairslength +
					outsidelength +
					traditionallength +
					howlength +
					whylength +
					CODING_DURATION
				}
				durationInFrames={outrolength}
			>
				<Outro />
			</Sequence>
			<Sequence from={5070} durationInFrames={100}>
				<Audio src={crash} volume={0.7} />
			</Sequence>
			<Sequence from={durationInFrames - 100} durationInFrames={100}>
				<AbsoluteFill style={{transform: `scale(1.2)`}}>
					<LogoMask width={1920} height={1080} inverse={false} offset={0} />
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
