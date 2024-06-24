import { createContext } from 'react'
import { UsermavenClient } from "@amna1408/sdk-js";

const UsermavenContext = createContext<UsermavenClient | null>(null)

export default UsermavenContext