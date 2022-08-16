import { createModel } from '@rematch/core'
import axios from 'axios'
import type { RootModel } from '.'
import find from 'lodash/find'
import map from 'lodash/map'
import remove from 'lodash/remove'
import {Tag} from '../utils/types'

export const gallery = createModel<RootModel>()({
	state: {tags:[],images:[],taggedImages:{}},
	reducers: {
		addTag: (state, tag: Tag) => {
            const {tags} = state
			return {...state, 
				tags: [...tags, tag]}
		},
        removeTag:(state, tagId: string) => {
            const {tags} = state
            return {
                ...state, 
				tags: tags.filter(tag => tag.id!==tagId)}
        },
        setImages: (state, images: Array<any>) => {
            const imagesWithTgs = images.map(image=>({...image,tags:[]}))
            return {...state, 
                images: imagesWithTgs}
        },
        adaptTaggedImages: (state, payload: any) => {
            const {id,selectedTags} = payload
            const {tags, images} = state
            map(selectedTags, selectedTag => {
                let tag = find(tags, ['id', selectedTag.id])
                if(tag){
                    let image = find(images, ['id', id])
                    tag.images.push(image)
                }                
            })
            return {...state, 
                tags}
        },
        removeImageFromTag: (state, payload:any) => {
            const {tagId, imageId} = payload
            const {tags} = state
            let tag = find(tags, ['id', tagId])
            remove(tag.images,{id: imageId})
            return {...state, 
                tags}
        }
	},
	effects: (dispatch) => ({
		async getAllImages(): Promise<void> {
			const {data} = await axios.get('https://picsum.photos/v2/list')
			this.setImages(data)
		},
	}),
})