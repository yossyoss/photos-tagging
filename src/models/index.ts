import { Models } from '@rematch/core'
import { images } from './images'
import { tags } from './tags'

export interface RootModel extends Models<RootModel> {
	images: typeof images
	tags: typeof tags
}

export const models: RootModel = { images, tags}
