import { UsermavenClient, usermavenClient, UsermavenOptions } from "@amna1408/sdk-js"

function createClient(params: UsermavenOptions): UsermavenClient {
    return usermavenClient(params)
}

export default createClient