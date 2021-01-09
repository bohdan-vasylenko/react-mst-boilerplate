import { Api } from "../services/api"

const __DEV__ = process.env;

export class Environment {
  constructor() {
    this.api = new Api()
  }

  async setup() {
    await this.api.setup()
  }

  api: Api
}
