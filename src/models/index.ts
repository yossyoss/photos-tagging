import { Models } from '@rematch/core'
import { gallery } from './gallery'

export interface RootModel extends Models<RootModel> {

	gallery: typeof gallery
}

export const models: RootModel = {  gallery}
