import React from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {Apple} from './Apple';
import {AudioSupport} from './AudioSupport';
import {Coding, CODING_DURATION} from './Coding';
import {Crash} from './Crash';
import {DefiningComposition} from './DefiningComposition';
import {Docs} from './Docs';
import {Editing} from './Editing';
import {EndCard} from './EndCard';
import {howlength} from './How';
import {HowRemotionWorks} from './HowRemotionWorks';
import {OpenSource} from './OpenSource';
import {Remotion} from './Remotion';
import {Reusability} from './Reusability';
import {Sequences} from './Sequences';
import {Slide1} from './Slide1';
import {Ssr} from './SSR';
import {Step} from './Step';
import {TraditionalPrograms} from './TraditionalPrograms';
import {UseFrame} from './UseFrame';
import {
	introlength,
	introoffset,
	outsidelength,
	stairslength,
	traditionallength,
} from './variables';
import {VersionControl} from './VersionControl';
import {whylength} from './Why';
import {WrittenInReact} from './WrittenInReact';

const whattolearnnext = 400;
const sequences = 1600;
const audiosupport = 1000;
const ssr = 500;
const docs = 600;
const opensource = 800;

export const ScreenRecording: React.FC = () => {
	const {durationInFrames} = useVideoConfig();
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white ',
			}}
		>
			<Sequence
				from={0}
				durationInFrames={introlength + stairslength + introoffset}
			>
				<Slide1 />
			</Sequence>
			<Sequence
				durationInFrames={outsidelength}
				from={introlength + stairslength + introoffset}
			>
				<Apple />
			</Sequence>
			<Sequence from={2125} durationInFrames={3000 - 2125}>
				<TraditionalPrograms />
			</Sequence>
			<Sequence from={3000} durationInFrames={900}>
				<Reusability />
			</Sequence>
			<Sequence from={3900} durationInFrames={1200}>
				<VersionControl />
			</Sequence>
			<Sequence from={5100} durationInFrames={800}>
				<Crash />
			</Sequence>
			<Sequence from={5500} durationInFrames={400}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<WrittenInReact showText offset={0} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={5900} durationInFrames={400}>
				<Remotion />
			</Sequence>
			<Sequence from={6300} durationInFrames={800}>
				<Editing />
			</Sequence>
			<Sequence from={7100} durationInFrames={700}>
				<OpenSource />
			</Sequence>
			<Sequence from={7800} durationInFrames={1300}>
				<HowRemotionWorks />
			</Sequence>
			<Sequence from={9100} durationInFrames={1500}>
				<DefiningComposition />
			</Sequence>
			<Sequence from={10600} durationInFrames={2400}>
				<UseFrame />
			</Sequence>
			<Sequence from={13000} durationInFrames={400}>
				<Step title="Bundle using Webpack" subtitle="Step 1" />
			</Sequence>
			<Sequence from={13400} durationInFrames={5400}>
				<Step title="Screenshot frames" subtitle="Step 2" />
			</Sequence>
			<Sequence
				from={18800}
				durationInFrames={
					introlength +
					introoffset +
					stairslength +
					outsidelength +
					traditionallength +
					howlength +
					whylength -
					18800
				}
			>
				<Step title="Stitch frames together" subtitle="Step 3" />
			</Sequence>
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
				<Coding type="screen" />
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
				durationInFrames={whattolearnnext}
			>
				<Step subtitle="What to " title="learn next?" />
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
					CODING_DURATION +
					whattolearnnext
				}
				durationInFrames={sequences}
			>
				<Sequences />
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
					CODING_DURATION +
					whattolearnnext +
					sequences
				}
				durationInFrames={audiosupport}
			>
				<AudioSupport />
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
					CODING_DURATION +
					whattolearnnext +
					sequences +
					audiosupport
				}
				durationInFrames={ssr}
			>
				<Ssr />
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
					CODING_DURATION +
					whattolearnnext +
					sequences +
					audiosupport +
					ssr
				}
				durationInFrames={docs}
			>
				<Docs />
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
					CODING_DURATION +
					whattolearnnext +
					sequences +
					audiosupport +
					ssr +
					docs
				}
				durationInFrames={opensource}
			>
				<OpenSource />
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
					CODING_DURATION +
					whattolearnnext +
					sequences +
					audiosupport +
					ssr +
					docs +
					opensource
				}
				durationInFrames={
					durationInFrames -
					(introlength +
						introoffset +
						stairslength +
						outsidelength +
						traditionallength +
						howlength +
						whylength +
						CODING_DURATION +
						whattolearnnext +
						sequences +
						audiosupport +
						ssr +
						docs +
						opensource)
				}
			>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<EndCard />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
