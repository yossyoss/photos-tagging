import { createModel } from '@rematch/core'
import axios from 'axios'
import type { RootModel } from '.'
import {Tag} from '../utils/types'

export const gallery = createModel<RootModel>()({
	state: {tags:[],images:[]},
	reducers: {
		addTag: (state, tag: Tag) => {
            const {tags} = state
			return {...state, 
				tags: [...tags, tag]}
		},
        removeTag:(state, tagId: string) => {
            const {tags} = state
            return {...state, 
				tags: tags.filter(tag => tag.id!==tagId)
                }
    },
    setImages: (state, images: Array<any>) => {
        return {...state, 
            images}
    }
	},
	effects: (dispatch) => ({
		async getAllImages(): Promise<void> {
			const {data} = await axios.get('https://picsum.photos/v2/list')
			this.setImages(data)
		},
	}),
})