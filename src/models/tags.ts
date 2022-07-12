import { createModel } from '@rematch/core'
import axios from 'axios'
import type { RootModel } from '.'


export const tags = createModel<RootModel>()({
	state: {tags:[]},
	reducers: {
		addTag: (state, tag: string) => {
            const {tags} = state
			return {...state, 
				tags: [...tags, tag]}
		},
        removeTag:(state, tagName: string) => {
            const {tags} = state
            return {...state, 
				tags: tags.filter(tag => tag!==tagName)
        }
    }
	},
	effects: (dispatch) => ({
		async getAllImages(): Promise<void> {
			
		},
	}),
})