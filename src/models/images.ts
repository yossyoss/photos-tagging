import { createModel } from '@rematch/core'
import axios from 'axios'
import type { RootModel } from '.'


export const images = createModel<RootModel>()({
	state: {images:[]},
	reducers: {
		setImages: (state, images: Array<any>) => {
			return {...state, 
				images}
		}
	},
	effects: (dispatch) => ({
		async getAllImages(): Promise<void> {
			const {data} = await axios.get('https://picsum.photos/v2/list')
			dispatch.images.setImages(data)
		},
	}),
})