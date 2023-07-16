import User from './user'
import Search from './search'

import http from "../utils/http";

const factories = {
    user: User({http}),
    search: Search({http})
}

export default factories