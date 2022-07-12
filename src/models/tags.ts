import { createModel } from '@rematch/core'
import axios from 'axios'
import type { RootModel } from '.'
import {Tag} from '../utils/types'

export const tags = createModel<RootModel>()({
	state: {tags:[]},
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
    }
	},
	effects: (dispatch) => ({
		async getAllImages(): Promise<void> {
			
		},
	}),
})