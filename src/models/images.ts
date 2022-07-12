import { createModel } from '@rematch/core'

import type { RootModel } from '.'


export const images = createModel<RootModel>()({
	state: 0,
	reducers: {
		increment: (state, payload: number) => state + payload,
	},
	effects: (dispatch) => ({
		async incrementAsync(payload: number): Promise<void> {

			dispatch.images.increment(payload)
		},
	}),
})