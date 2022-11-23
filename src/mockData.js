/**
 * Makeshift backend for the app.
 * Structured for easy conversion to SQL.
 **/

const servers = [
    {
        "server_id": "18984156",
        "name": "East Wood High School",
        "icon": "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_960_720.jpg",
    },
    {
        "server_id": "498197145",
        "name": "Boys Hangout",
        "icon": "https://cdn.pixabay.com/photo/2016/12/23/07/00/game-1926905_960_720.png",
    },
    {
        "server_id": "1859",
        "name": "Wild Dogs",
        "icon": "https://cdn.pixabay.com/photo/2016/01/12/08/00/doge-meme-1134954_960_720.jpg",
    },
]

const categories = [
    {
        "category_id": "1",
        "name": "General",
        "server_id": "18984156"
    },
    {
        "category_id": "2",
        "name": "Voice",
        "server_id": "18984156"
    },
    {
        "category_id": "3",
        "name": "Hangout",
        "server_id": "498197145"
    },
    {
        "category_id": "4",
        "name": "Welcome",
        "server_id": "1859"
    },
]

const channels = [
    {
        "channel_id": "1",
        "type": "text",
        "name": "rules",
        "category_id": "1",
        "topic": "Guidelines to take into account when doing anything on this Discord. Be responsible over your activities.",
    },
    {
        "channel_id": "2",
        "type": "text",
        "name": "announcements",
        "category_id": "1",
        "topic": "Any official announcements will be posted here.",
    },
    {
        "channel_id": "3",
        "type": "text",
        "name": "support",
        "category_id": "1",
        "topic": "",
    },
    {
        "channel_id": "4",
        "type": "text",
        "name": "feedback",
        "category_id": "1",
        "topic": "",
    },
    {
        "channel_id": "5",
        "type": "text",
        "name": "discussion",
        "category_id": "2",
        "topic": "",
    },
    {
        "channel_id": "6",
        "type": "voice",
        "name": "Homework-1",
        "category_id": "2",
        "topic": "",
    },
    {
        "channel_id": "7",
        "type": "voice",
        "name": "Homework-2",
        "category_id": "2",
        "topic": "",
    },
    {
        "channel_id": "8",
        "type": "voice",
        "name": "Lounge",
        "category_id": "2",
        "topic": "",
    },
    {
        "channel_id": "9",
        "type": "voice",
        "name": "greeints",
        "category_id": "3",
        "topic": "",
    },
    {
        "channel_id": "10",
        "type": "text",
        "name": "rules",
        "category_id": "4",
        "topic": "",
    },
]

const users = [
    {
        "id": "1",
        "name": "bop",
        "avatar_path": "https://cdn.pixabay.com/photo/2022/10/28/11/14/leaves-7552915_960_720.png",
        "tag": "8954",
        "status": "offline",
        "description": "doing homework no talk"
    },
    {
        "id": "2",
        "name": "poptart",
        "avatar_path": "https://cdn.pixabay.com/photo/2022/11/01/12/45/cormorant-7562187__340.jpg",
        "tag": "1561",
        "status": "online",
        "description": "time is precious, waste it wisely"
    },
    {
        "id": "3",
        "name": "skatina",
        "avatar_path": "https://cdn.pixabay.com/photo/2022/11/04/12/00/golden-hour-7569709__340.jpg",
        "tag": "9518",
        "status": "dnd",
        "description": "grinding"
    },
    {
        "id": "4",
        "name": "spak",
        "avatar_path": "https://cdn.pixabay.com/photo/2022/07/13/16/25/cat-7319589__340.jpg",
        "tag": "4684",
        "status": "idle",
        "description": ""
    },
]

const user_servers = [
    {
        "user_id": "1",
        "server_id": "18984156",
    },
    {
        "user_id": "1",
        "server_id": "498197145",
    },
    {
        "user_id": "1",
        "server_id": "1859",
    },
    {
        "user_id": "2",
        "server_id": "1859",
    },
    {
        "user_id": "2",
        "server_id": "18984156",
    },
    {
        "user_id": "3",
        "server_id": "18984156",
    },
    {
        "user_id": "4",
        "server_id": "18984156",
    },
]

function getServer(serverId){
    return servers.find(server => server.server_id == serverId)
}

function getServers(userId){
    const server_ids = user_servers.filter(server => server.user_id == userId)
    return server_ids.map(server => getServer(server.server_id))
}

function getCategory(categoryId){
    return categories.find(category => category.category_id === categoryId)
}

function getCategories(serverId){
    return categories.filter(category => category.server_id == serverId)
}

function getChannel(channelId) {
    return channels.find(channel => channel.channel_id == channelId)
}

function getChannels(categoryId){
    return channels.filter(channel => channel.category_id === categoryId)
}

function getUser(userId){
    return users.find(user => user.id == userId)
}

function getOnlineUsers(serverId){
    const userIds = user_servers.filter(server => server.server_id == serverId)
    const users =  userIds.map(user => getUser(user.user_id))
    return users.filter(user => user.status != "offline")
}

function getOfflineUsers(serverId){
    const userIds = user_servers.filter(server => server.server_id == serverId)
    const users =  userIds.map(user => getUser(user.user_id))
    return users.filter(user => user.status == "offline")
}

export {
    getServer,
    getServers,
    getCategory,
    getCategories,
    getChannel,
    getChannels,
    getUser,
    getOnlineUsers,
    getOfflineUsers
}