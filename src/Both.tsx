import React from 'react';
import {Face} from './Face';
import {ScreenRecording} from './Screen';

export const Both: React.FC = () => {
	return (
		<div>
			<div
				style={{
					position: 'absolute',
					left: 0,
					width: 1920,
					height: 1080,
					top: (1120 - 1080) / 2,
				}}
			>
				<Face />
			</div>
			<div
				style={{
					position: 'absolute',
					width: 1792,
					left: 1920,
					height: 1120,
				}}
			>
				<ScreenRecording />
			</div>
		</div>
	);
};
