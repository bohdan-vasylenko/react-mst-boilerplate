import { Instance, SnapshotOut, types } from 'mobx-state-tree';

/**
 * Model description here for TypeScript hints.
 */

export const GlobalModel = types
  .model('Global', {
    isLoading: types.optional(types.boolean, false),
    example: types.optional(types.number, 0)
  })
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setLoading(isLoading: boolean) {
      self.isLoading = isLoading;
    },
    setRandomExample() {
      self.example = Math.random();
    }
  })); // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type GlobalType = Instance<typeof GlobalModel>;
export interface Global extends GlobalType {}
type GlobalSnapshotType = SnapshotOut<typeof GlobalModel>;
export interface GlobalSnapshot extends GlobalSnapshotType {}
