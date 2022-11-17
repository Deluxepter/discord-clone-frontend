const servers = {
    "servers": [
        {
            "server_id": "18984156",
            "name": "East Wood High School",
            "icon": "https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_960_720.jpg",
        },
    ]
}

const categories = {
    "categories": [
        {
            "category_id": "189519",
            "name": "General",
            "server_id": "18984156"
        },
        {
            "category_id": "891569",
            "name": "Voice",
            "server_id": "18984156"
        },
    ]
}

const channels = {
    "channels": [
        {
            "channel_id": "channel1",
            "type": "text",
            "name": "rules",
            "category_id": "189519",
        },
        {
            "channel_id": "channel2",
            "type": "text",
            "name": "announcements",
            "category_id": "189519",
        },
        {
            "channel_id": "channel3",
            "type": "text",
            "name": "support",
            "category_id": "189519",
        },
        {
            "channel_id": "channel4",
            "type": "text",
            "name": "feedback",
            "category_id": "189519",
        },
        {
            "channel_id": "channel5",
            "type": "text",
            "name": "discussion",
            "category_id": "891569",
        },
        {
            "channel_id": "channel6",
            "type": "voice",
            "name": "Homework-1",
            "category_id": "891569",
        },
        {
            "channel_id": "channel7",
            "type": "voice",
            "name": "Homework-2",
            "category_id": "891569",
        },
        {
            "channel_id": "channel8",
            "type": "voice",
            "name": "Lounge",
            "category_id": "891569",
        },
    ]
}

const user_servers = {
    list: [
        {
            "id": "18984156",
        },
        {
            "id": "25928491",
        },
    ]
}

const server_users = {
    users: [
        {
            "name": "bop",
            "avatar_path": "https://cdn.discordapp.com/avatars/252622787724705803/65ef2bf9dd125d39fbd32c3dd649428a.webp?size=32"
        },
        {
            "name": "Grawnpa",
            "avatar_path": "https://cdn.discordapp.com/avatars/363093542182322188/7061bd6d1b2fb790d838fa9a64d0a0b4.webp?size=32"
        },
        {
            "name": "skatina",
            "avatar_path": "https://cdn.discordapp.com/avatars/417079462287376404/c0eb4e9c7894ce234022d2d67394da8b.webp?size=32"
        },
        {
            "name": "spak5",
            "avatar_path": "https://cdn.discordapp.com/avatars/307641799302840320/16e2b6009bdac0b5c7b469317d67635d.webp?size=32"
        },
    ]
}

function getServer(serverId){
    return servers.servers.find(server => server.server_id === serverId)
}

function getCategory(categoryId){
    return categories.categories.find(category => category.category_id === categoryId)
}

function getCategories(serverId){
    return categories.categories.filter(category =>
        function (){
            return category.server_id === serverId
        }
    )
}

function getChannels(categoryId){
    return channels.channels.filter(channel => channel.category_id === categoryId)
}


export {
    getServer,
    getCategory,
    getCategories,
    getChannels,
}