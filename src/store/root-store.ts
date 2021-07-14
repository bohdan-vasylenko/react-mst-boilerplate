import { Instance, SnapshotOut, types } from "mobx-state-tree";
import {GlobalModel} from "./models/global/global";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model('RootStore')
  .props({
      global: types.optional(GlobalModel, {}),
   })
  .views((self) => ({
     //@ts-ignore
     getChildStore(storeKey: keyof typeof self.properties) {
        //@ts-ignore
        return self[storeKey];
     }
  }
));

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
