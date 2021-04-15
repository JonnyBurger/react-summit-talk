import {Composition} from 'remotion';
import {Both} from './Both';
import {Coding, CODING_DURATION} from './Coding';
import {EndCard} from './EndCard';
import {Face} from './Face';
import {FadeOut} from './FadeOut';
import {LogoMask} from './Logo/LogoMask';
import {Remotion} from './Remotion';
import {ScreenRecording} from './Screen';
import {SynchronizedCode} from './SynchronizedCode';
import {TraditionalPrograms} from './TraditionalPrograms';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Face"
				component={Face}
				durationInFrames={68168}
				fps={50}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Screen"
				component={ScreenRecording}
				durationInFrames={68168}
				fps={50}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Both"
				component={Both}
				durationInFrames={68168}
				fps={50}
				width={1920 + 1792}
				height={1120}
			/>
			<Composition
				id="synchronized"
				component={SynchronizedCode}
				durationInFrames={39 * 60 * 50}
				fps={50}
				width={1920 + 1792}
				height={1080}
				defaultProps={{
					type: 'both' as const,
				}}
			/>
			<Composition
				id="coding"
				component={Coding}
				durationInFrames={CODING_DURATION}
				fps={50}
				width={1920 + 1792}
				height={1080}
				defaultProps={{
					type: 'both' as const,
				}}
			/>
			<Composition
				id="traditional"
				component={TraditionalPrograms}
				durationInFrames={100}
				fps={50}
				width={1792}
				height={1120}
			/>
			<Composition
				id="EndCard"
				component={EndCard}
				durationInFrames={300}
				fps={50}
				width={1792}
				height={1120}
			/>
			<Composition
				id="FadeOut"
				component={FadeOut}
				durationInFrames={300}
				fps={50}
				width={1792}
				height={1120}
			/>
			<Composition
				id="Remotion"
				component={Remotion}
				durationInFrames={300}
				fps={50}
				width={1792}
				height={1120}
				defaultProps={{
					width: 1792,
					height: 1120,
				}}
			/>
			<Composition
				id="LogoMask"
				component={LogoMask}
				durationInFrames={300}
				fps={50}
				width={1792}
				height={1120}
			/>
		</>
	);
};
