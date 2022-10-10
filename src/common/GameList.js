let gameList = [
	{
		label: "Just Chatting",
		value: "just-chatting",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509658-{width}x{height}.jpg",
		twitchId: "509658",
	},
	{
		label: "Overwatch 2",
		value: "overwatch-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-{width}x{height}.jpg",
		twitchId: "515025",
	},
	{
		label: "Counter-Strike: Global Offensive",
		value: "counterstrike-global-offensive",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-{width}x{height}.jpg",
		twitchId: "32399",
	},
	{
		label: "Grand Theft Auto V",
		value: "grand-theft-auto-v",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-{width}x{height}.jpg",
		twitchId: "32982",
	},
	{
		label: "FIFA 23",
		value: "fifa-23",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-{width}x{height}.jpg",
		twitchId: "1745202732",
	},
	{
		label: "Pokémon Community Game",
		value: "pokmon-community-game",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/329951934_IGDB-{width}x{height}.jpg",
		twitchId: "329951934",
	},
	{
		label: "League of Legends",
		value: "league-of-legends",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/21779-{width}x{height}.jpg",
		twitchId: "21779",
	},
	{
		label: "Fortnite",
		value: "fortnite",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg",
		twitchId: "33214",
	},
	{
		label: "VALORANT",
		value: "valorant",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516575-{width}x{height}.jpg",
		twitchId: "516575",
	},
	{
		label: "Minecraft",
		value: "minecraft",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-{width}x{height}.jpg",
		twitchId: "27471",
	},
	{
		label: "World of Warcraft",
		value: "world-of-warcraft",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18122-{width}x{height}.jpg",
		twitchId: "18122",
	},
	{
		label: "Slots",
		value: "slots",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498566-{width}x{height}.jpg",
		twitchId: "498566",
	},
	{
		label: "Rust",
		value: "rust",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-{width}x{height}.jpg",
		twitchId: "263490",
	},
	{
		label: "Dota 2",
		value: "dota-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29595-{width}x{height}.jpg",
		twitchId: "29595",
	},
	{
		label: "Super Smash Bros. Melee",
		value: "super-smash-bros-melee",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/16282_IGDB-{width}x{height}.jpg",
		twitchId: "16282",
	},
	{
		label: "Street Fighter 6",
		value: "street-fighter-6",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/55453844_IGDB-{width}x{height}.jpg",
		twitchId: "55453844",
	},
	{
		label: "PUBG: BATTLEGROUNDS",
		value: "pubg-battlegrounds",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493057-{width}x{height}.jpg",
		twitchId: "493057",
	},
	{
		label: "Terraria",
		value: "terraria",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-{width}x{height}.jpg",
		twitchId: "31376",
	},
	{
		label: "Apex Legends",
		value: "apex-legends",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511224-{width}x{height}.jpg",
		twitchId: "511224",
	},
	{
		label: "Call of Duty: Warzone",
		value: "call-of-duty-warzone",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512710-{width}x{height}.jpg",
		twitchId: "512710",
	},
	{
		label: "Dead by Daylight",
		value: "dead-by-daylight",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491487-{width}x{height}.jpg",
		twitchId: "491487",
	},
	{
		label: "Virtual Casino",
		value: "virtual-casino",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-{width}x{height}.jpg",
		twitchId: "29452",
	},
	{
		label: "Rocket League",
		value: "rocket-league",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/30921-{width}x{height}.jpg",
		twitchId: "30921",
	},
	{
		label: "Grounded",
		value: "grounded",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516086_IGDB-{width}x{height}.jpg",
		twitchId: "516086",
	},
	{
		label: "Music",
		value: "music",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/26936-{width}x{height}.jpg",
		twitchId: "26936",
	},
	{
		label: "Sports",
		value: "sports",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518203-{width}x{height}.jpg",
		twitchId: "518203",
	},
	{
		label: "Hearthstone",
		value: "hearthstone",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-{width}x{height}.jpg",
		twitchId: "138585",
	},
	{
		label: "Genshin Impact",
		value: "genshin-impact",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/513181-{width}x{height}.jpg",
		twitchId: "513181",
	},
	{
		label: "Art",
		value: "art",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509660-{width}x{height}.jpg",
		twitchId: "509660",
	},
	{
		label: "ASMR",
		value: "asmr",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509659-{width}x{height}.jpg",
		twitchId: "509659",
	},
	{
		label: "World of Tanks",
		value: "world-of-tanks",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/27546-{width}x{height}.jpg",
		twitchId: "27546",
	},
	{
		label: "Tom Clancy's Rainbow Six Siege",
		value: "tom-clancys-rainbow-six-siege",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-{width}x{height}.jpg",
		twitchId: "460630",
	},
	{
		label: "Super Mario Maker 2",
		value: "super-mario-maker-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511399_IGDB-{width}x{height}.jpg",
		twitchId: "511399",
	},
	{
		label: "Lost Ark",
		value: "lost-ark",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490100-{width}x{height}.jpg",
		twitchId: "490100",
	},
	{
		label: "Poker",
		value: "poker",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/488190-{width}x{height}.jpg",
		twitchId: "488190",
	},
	{
		label: "Watch Parties",
		value: "watch-parties",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515467-{width}x{height}.jpg",
		twitchId: "515467",
	},
	{
		label: "Talk Shows & Podcasts",
		value: "talk-shows-podcasts",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/417752-{width}x{height}.jpg",
		twitchId: "417752",
	},
	{
		label: "Among Us",
		value: "among-us",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510218_IGDB-{width}x{height}.jpg",
		twitchId: "510218",
	},
	{
		label: "Teamfight Tactics",
		value: "teamfight-tactics",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/513143-{width}x{height}.jpg",
		twitchId: "513143",
	},
	{
		label: "Escape from Tarkov",
		value: "escape-from-tarkov",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB-{width}x{height}.jpg",
		twitchId: "491931",
	},
	{
		label: "Brotato",
		value: "brotato",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/743214338_IGDB-{width}x{height}.jpg",
		twitchId: "743214338",
	},
	{
		label: "Destiny 2",
		value: "destiny-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497057-{width}x{height}.jpg",
		twitchId: "497057",
	},
	{
		label: "The Cycle: Frontier",
		value: "the-cycle-frontier",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/470840663_IGDB-{width}x{height}.jpg",
		twitchId: "470840663",
	},
	{
		label: "The Last of Us Part I",
		value: "the-last-of-us-part-i",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-{width}x{height}.jpg",
		twitchId: "294724507",
	},
	{
		label: "Diablo II: Resurrected",
		value: "diablo-ii-resurrected",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-{width}x{height}.jpg",
		twitchId: "1788326126",
	},
	{
		label: "Cyberpunk 2077",
		value: "cyberpunk-2077",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/65876_IGDB-{width}x{height}.jpg",
		twitchId: "65876",
	},
	{
		label: "Chess",
		value: "chess",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/743-{width}x{height}.jpg",
		twitchId: "743",
	},
	{
		label: "SMITE",
		value: "smite",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32507-{width}x{height}.jpg",
		twitchId: "32507",
	},
	{
		label: "Dead Space",
		value: "dead-space",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19009_IGDB-{width}x{height}.jpg",
		twitchId: "19009",
	},
	{
		label: "F1 22",
		value: "f1-22",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1705795372_IGDB-{width}x{height}.jpg",
		twitchId: "1705795372",
	},
	{
		label: "DayZ",
		value: "dayz",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-{width}x{height}.jpg",
		twitchId: "65632",
	},
	{
		label: "NBA 2K23",
		value: "nba-2k23",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/772421245_IGDB-{width}x{height}.jpg",
		twitchId: "772421245",
	},
	{
		label: "StarCraft II",
		value: "starcraft-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490422-{width}x{height}.jpg",
		twitchId: "490422",
	},
	{
		label: "Fall Guys",
		value: "fall-guys",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512980-{width}x{height}.jpg",
		twitchId: "512980",
	},
	{
		label: "Red Dead Redemption 2",
		value: "red-dead-redemption-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-{width}x{height}.jpg",
		twitchId: "493959",
	},
	{
		label: "Trash Horror Collection 2",
		value: "trash-horror-collection-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1398425075-{width}x{height}.jpg",
		twitchId: "1398425075",
	},
	{
		label: "Retro",
		value: "retro",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/27284-{width}x{height}.jpg",
		twitchId: "27284",
	},
	{
		label: "Black Desert",
		value: "black-desert",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/386821_IGDB-{width}x{height}.jpg",
		twitchId: "386821",
	},
	{
		label: "Forts",
		value: "forts",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/496753_IGDB-{width}x{height}.jpg",
		twitchId: "496753",
	},
	{
		label: "Phasmophobia",
		value: "phasmophobia",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518184_IGDB-{width}x{height}.jpg",
		twitchId: "518184",
	},
	{
		label: "Albion Online",
		value: "albion-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-{width}x{height}.jpg",
		twitchId: "417528",
	},
	{
		label: "Clash Royale",
		value: "clash-royale",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491168_IGDB-{width}x{height}.jpg",
		twitchId: "491168",
	},
	{
		label: "Dragon Ball: The Breakers",
		value: "dragon-ball-the-breakers",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1657670363_IGDB-{width}x{height}.jpg",
		twitchId: "1657670363",
	},
	{
		label: "Special Events",
		value: "special-events",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509663-{width}x{height}.jpg",
		twitchId: "509663",
	},
	{
		label: "Final Fantasy XIV Online",
		value: "final-fantasy-xiv-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/24241_IGDB-{width}x{height}.jpg",
		twitchId: "24241",
	},
	{
		label: "Tibia",
		value: "tibia",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-{width}x{height}.jpg",
		twitchId: "19619",
	},
	{
		label: "Heroes of Might and Magic III: The Restoration of Erathia",
		value: "heroes-of-might-and-magic-iii-the-restoration-of-erathia",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/12839_IGDB-{width}x{height}.jpg",
		twitchId: "12839",
	},
	{
		label: "Hearts of Iron IV",
		value: "hearts-of-iron-iv",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/459327_IGDB-{width}x{height}.jpg",
		twitchId: "459327",
	},
	{
		label: "Marauders",
		value: "marauders",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/556660222_IGDB-{width}x{height}.jpg",
		twitchId: "556660222",
	},
	{
		label: "Elden Ring",
		value: "elden-ring",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-{width}x{height}.jpg",
		twitchId: "512953",
	},
	{
		label: "The Binding of Isaac: Repentance",
		value: "the-binding-of-isaac-repentance",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491080-{width}x{height}.jpg",
		twitchId: "491080",
	},
	{
		label: "Stumble Guys",
		value: "stumble-guys",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1312214340_IGDB-{width}x{height}.jpg",
		twitchId: "1312214340",
	},
	{
		label: "Late Night Mop",
		value: "late-night-mop",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1868053933_IGDB-{width}x{height}.jpg",
		twitchId: "1868053933",
	},
	{
		label: "Call Of Duty: Modern Warfare",
		value: "call-of-duty-modern-warfare",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1614555304-{width}x{height}.jpg",
		twitchId: "1614555304",
	},
	{
		label: "Old School RuneScape",
		value: "old-school-runescape",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/459931_IGDB-{width}x{height}.jpg",
		twitchId: "459931",
	},
	{
		label: "Sea of Thieves",
		value: "sea-of-thieves",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490377-{width}x{height}.jpg",
		twitchId: "490377",
	},
	{
		label: "New World",
		value: "new-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493597_IGDB-{width}x{height}.jpg",
		twitchId: "493597",
	},
	{
		label: "Hunt: Showdown",
		value: "hunt-showdown",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/500188_IGDB-{width}x{height}.jpg",
		twitchId: "500188",
	},
	{
		label: "Little Nightmares",
		value: "little-nightmares",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494131_IGDB-{width}x{height}.jpg",
		twitchId: "494131",
	},
	{
		label: "Super Mario Sunshine",
		value: "super-mario-sunshine",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/6086_IGDB-{width}x{height}.jpg",
		twitchId: "6086",
	},
	{
		label: "Travel & Outdoors",
		value: "travel-outdoors",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509672-{width}x{height}.jpg",
		twitchId: "509672",
	},
	{
		label: "Pools, Hot Tubs, and Beaches",
		value: "pools-hot-tubs-and-beaches",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/116747788-{width}x{height}.jpg",
		twitchId: "116747788",
	},
	{
		label: "Garena Free Fire",
		value: "garena-free-fire",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-{width}x{height}.jpg",
		twitchId: "502732",
	},
	{
		label: "Path of Exile",
		value: "path-of-exile",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29307_IGDB-{width}x{height}.jpg",
		twitchId: "29307",
	},
	{
		label: "Star Citizen",
		value: "star-citizen",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/71375_IGDB-{width}x{height}.jpg",
		twitchId: "71375",
	},
	{
		label: "Ark: Survival Evolved",
		value: "ark-survival-evolved",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489635-{width}x{height}.jpg",
		twitchId: "489635",
	},
	{
		label: "Roblox",
		value: "roblox",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-{width}x{height}.jpg",
		twitchId: "23020",
	},
	{
		label: "Magic: The Gathering",
		value: "magic-the-gathering",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2748-{width}x{height}.jpg",
		twitchId: "2748",
	},
	{
		label: "Super Smash Bros. Ultimate",
		value: "super-smash-bros-ultimate",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/504461_IGDB-{width}x{height}.jpg",
		twitchId: "504461",
	},
	{
		label: "God of War",
		value: "god-of-war",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/6369_IGDB-{width}x{height}.jpg",
		twitchId: "6369",
	},
	{
		label: "Dofus",
		value: "dofus",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/20596_IGDB-{width}x{height}.jpg",
		twitchId: "20596",
	},
	{
		label: "RimWorld",
		value: "rimworld",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/394568_IGDB-{width}x{height}.jpg",
		twitchId: "394568",
	},
	{
		label: "Marbles On Stream",
		value: "marbles-on-stream",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509511_IGDB-{width}x{height}.jpg",
		twitchId: "509511",
	},
	{
		label: "World of Warships",
		value: "world-of-warships",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32502_IGDB-{width}x{height}.jpg",
		twitchId: "32502",
	},
	{
		label: "Legends of Runeterra",
		value: "legends-of-runeterra",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514790-{width}x{height}.jpg",
		twitchId: "514790",
	},
	{
		label: "Omega Strikers",
		value: "omega-strikers",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1600495710_IGDB-{width}x{height}.jpg",
		twitchId: "1600495710",
	},
	{
		label: "I'm Only Sleeping",
		value: "im-only-sleeping",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498592_IGDB-{width}x{height}.jpg",
		twitchId: "498592",
	},
	{
		label: "PAYDAY 2",
		value: "payday-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/65997_IGDB-{width}x{height}.jpg",
		twitchId: "65997",
	},
	{
		label: "Foxhole",
		value: "foxhole",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493388_IGDB-{width}x{height}.jpg",
		twitchId: "493388",
	},
	{
		label: "Age of Empires II",
		value: "age-of-empires-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/13389-{width}x{height}.jpg",
		twitchId: "13389",
	},
	{
		label: "Splatoon 3",
		value: "splatoon-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1158884259_IGDB-{width}x{height}.jpg",
		twitchId: "1158884259",
	},
	{
		label: "Politics",
		value: "politics",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515214-{width}x{height}.jpg",
		twitchId: "515214",
	},
	{
		label: "Lineage 2",
		value: "lineage-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515349_IGDB-{width}x{height}.jpg",
		twitchId: "515349",
	},
	{
		label: "iRacing",
		value: "iracing",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19554_IGDB-{width}x{height}.jpg",
		twitchId: "19554",
	},
	{
		label: "EVE Online",
		value: "eve-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/13263_IGDB-{width}x{height}.jpg",
		twitchId: "13263",
	},
	{
		label: "The Simpsons",
		value: "the-simpsons",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2046821115-{width}x{height}.jpg",
		twitchId: "2046821115",
	},
	{
		label: "FTL: Faster Than Light",
		value: "ftl-faster-than-light",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/33882_IGDB-{width}x{height}.jpg",
		twitchId: "33882",
	},
	{
		label: "Total War: Warhammer III",
		value: "total-war-warhammer-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1913410799_IGDB-{width}x{height}.jpg",
		twitchId: "1913410799",
	},
	{
		label: "Disney Dreamlight Valley",
		value: "disney-dreamlight-valley",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1515862749_IGDB-{width}x{height}.jpg",
		twitchId: "1515862749",
	},
	{
		label: "Bloodborne",
		value: "bloodborne",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460636_IGDB-{width}x{height}.jpg",
		twitchId: "460636",
	},
	{
		label: "Project Zomboid",
		value: "project-zomboid",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/31339_IGDB-{width}x{height}.jpg",
		twitchId: "31339",
	},
	{
		label: "Pokémon Sword/Shield",
		value: "pokmon-swordshield",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497451-{width}x{height}.jpg",
		twitchId: "497451",
	},
	{
		label: "Kingdom Hearts HD 1.5 + 2.5 ReMIX",
		value: "kingdom-hearts-hd-15-25-remix",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494099-{width}x{height}.jpg",
		twitchId: "494099",
	},
	{
		label: "VRChat",
		value: "vrchat",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/499003_IGDB-{width}x{height}.jpg",
		twitchId: "499003",
	},
	{
		label: "Knight Online",
		value: "knight-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29056_IGDB-{width}x{height}.jpg",
		twitchId: "29056",
	},
	{
		label: "Team Fortress 2",
		value: "team-fortress-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/16676_IGDB-{width}x{height}.jpg",
		twitchId: "16676",
	},
	{
		label: "Labyrinthine",
		value: "labyrinthine",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/517528_IGDB-{width}x{height}.jpg",
		twitchId: "517528",
	},
	{
		label: "Slay the Spire",
		value: "slay-the-spire",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/496902_IGDB-{width}x{height}.jpg",
		twitchId: "496902",
	},
	{
		label: "The Walking Dead: The Telltale Series Collection",
		value: "the-walking-dead-the-telltale-series-collection",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/499987_IGDB-{width}x{height}.jpg",
		twitchId: "499987",
	},
	{
		label: "Madden NFL 23",
		value: "madden-nfl-23",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/862021340_IGDB-{width}x{height}.jpg",
		twitchId: "862021340",
	},
	{
		label: "The Sims 4",
		value: "the-sims-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/369252_IGDB-{width}x{height}.jpg",
		twitchId: "369252",
	},
	{
		label: "Science & Technology",
		value: "science-technology",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509670-{width}x{height}.jpg",
		twitchId: "509670",
	},
	{
		label: "The Forest",
		value: "the-forest",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/7022_IGDB-{width}x{height}.jpg",
		twitchId: "7022",
	},
	{
		label: "osu!",
		value: "osu",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/21465_IGDB-{width}x{height}.jpg",
		twitchId: "21465",
	},
	{
		label: "Metin2",
		value: "metin2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/31336_IGDB-{width}x{height}.jpg",
		twitchId: "31336",
	},
	{
		label: "Clash of Clans",
		value: "clash-of-clans",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/73914_IGDB-{width}x{height}.jpg",
		twitchId: "73914",
	},
	{
		label: "Warcraft III",
		value: "warcraft-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/12924-{width}x{height}.jpg",
		twitchId: "12924",
	},
	{
		label: "Pokémon FireRed/LeafGreen",
		value: "pokmon-fireredleafgreen",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/13332-{width}x{height}.jpg",
		twitchId: "13332",
	},
	{
		label: "Sid Meier's Civilization VI",
		value: "sid-meiers-civilization-vi",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492553_IGDB-{width}x{height}.jpg",
		twitchId: "492553",
	},
	{
		label: "Rumbleverse",
		value: "rumbleverse",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/161880494_IGDB-{width}x{height}.jpg",
		twitchId: "161880494",
	},
	{
		label: "Farming Simulator 22",
		value: "farming-simulator-22",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1241582824-{width}x{height}.jpg",
		twitchId: "1241582824",
	},
	{
		label: "Anime World",
		value: "anime-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/637756067_IGDB-{width}x{height}.jpg",
		twitchId: "637756067",
	},
	{
		label: "League of Legends: Wild Rift",
		value: "league-of-legends-wild-rift",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514858-{width}x{height}.jpg",
		twitchId: "514858",
	},
	{
		label: "Guild Wars 2",
		value: "guild-wars-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19357_IGDB-{width}x{height}.jpg",
		twitchId: "19357",
	},
	{
		label: "Games + Demos",
		value: "games-demos",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/66082-{width}x{height}.jpg",
		twitchId: "66082",
	},
	{
		label: "Manor Lords",
		value: "manor-lords",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518630_IGDB-{width}x{height}.jpg",
		twitchId: "518630",
	},
	{
		label: "Yu-Gi-Oh! Master Duel",
		value: "yugioh-master-duel",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1119642287_IGDB-{width}x{height}.jpg",
		twitchId: "1119642287",
	},
	{
		label: "Outlast II",
		value: "outlast-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510117_IGDB-{width}x{height}.jpg",
		twitchId: "510117",
	},
	{
		label: "Heroes of the Storm",
		value: "heroes-of-the-storm",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32959_IGDB-{width}x{height}.jpg",
		twitchId: "32959",
	},
	{
		label: "Diablo III",
		value: "diablo-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-{width}x{height}.jpg",
		twitchId: "313558",
	},
	{
		label: "Dungeons & Dragons",
		value: "dungeons-dragons",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509577-{width}x{height}.jpg",
		twitchId: "509577",
	},
	{
		label: "The Mortuary Assistant",
		value: "the-mortuary-assistant",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1945673289_IGDB-{width}x{height}.jpg",
		twitchId: "1945673289",
	},
	{
		label: "GeoGuessr",
		value: "geoguessr",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/369418_IGDB-{width}x{height}.jpg",
		twitchId: "369418",
	},
	{
		label: "Call of Duty: Black Ops Cold War",
		value: "call-of-duty-black-ops-cold-war",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512709-{width}x{height}.jpg",
		twitchId: "512709",
	},
	{
		label: "Darts",
		value: "darts",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/920937099_IGDB-{width}x{height}.jpg",
		twitchId: "920937099",
	},
	{
		label: "Pokémon Trading Card Game",
		value: "pokmon-trading-card-game",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/9618_IGDB-{width}x{height}.jpg",
		twitchId: "9618",
	},
	{
		label: "Dragon Ball",
		value: "dragon-ball",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/317912951_IGDB-{width}x{height}.jpg",
		twitchId: "317912951",
	},
	{
		label: "Animals, Aquariums, and Zoos",
		value: "animals-aquariums-and-zoos",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/272263131-{width}x{height}.jpg",
		twitchId: "272263131",
	},
	{
		label: "Raid: Shadow Legends",
		value: "raid-shadow-legends",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508948_IGDB-{width}x{height}.jpg",
		twitchId: "508948",
	},
	{
		label: "Cult of the Lamb",
		value: "cult-of-the-lamb",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-{width}x{height}.jpg",
		twitchId: "516173984",
	},
	{
		label: "Software and Game Development",
		value: "software-and-game-development",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1469308723-{width}x{height}.jpg",
		twitchId: "1469308723",
	},
	{
		label: "PUBG Mobile",
		value: "pubg-mobile",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/505884-{width}x{height}.jpg",
		twitchId: "505884",
	},
	{
		label: "Tower of Fantasy",
		value: "tower-of-fantasy",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1833197007_IGDB-{width}x{height}.jpg",
		twitchId: "1833197007",
	},
	{
		label: "Summer of '58",
		value: "summer-of-58",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2080474707_IGDB-{width}x{height}.jpg",
		twitchId: "2080474707",
	},
	{
		label: "Outlast",
		value: "outlast",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/73586_IGDB-{width}x{height}.jpg",
		twitchId: "73586",
	},
	{
		label: "Crash Bandicoot",
		value: "crash-bandicoot",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2092563353_IGDB-{width}x{height}.jpg",
		twitchId: "2092563353",
	},
	{
		label: "Life is Strange: True Colors",
		value: "life-is-strange-true-colors",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/437499380_IGDB-{width}x{height}.jpg",
		twitchId: "437499380",
	},
	{
		label: "Crypto",
		value: "crypto",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/499634-{width}x{height}.jpg",
		twitchId: "499634",
	},
	{
		label: "Euro Truck Simulator 2",
		value: "euro-truck-simulator-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/75467_IGDB-{width}x{height}.jpg",
		twitchId: "75467",
	},
	{
		label: "Halo Infinite",
		value: "halo-infinite",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506416_IGDB-{width}x{height}.jpg",
		twitchId: "506416",
	},
	{
		label: "Food & Drink",
		value: "food-drink",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509667-{width}x{height}.jpg",
		twitchId: "509667",
	},
	{
		label: "Killing Floor 2",
		value: "killing-floor-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460508_IGDB-{width}x{height}.jpg",
		twitchId: "460508",
	},
	{
		label: "Tekken 7",
		value: "tekken-7",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/461067_IGDB-{width}x{height}.jpg",
		twitchId: "461067",
	},
	{
		label: "Stardew Valley",
		value: "stardew-valley",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490744_IGDB-{width}x{height}.jpg",
		twitchId: "490744",
	},
	{
		label: "Warframe",
		value: "warframe",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/66170_IGDB-{width}x{height}.jpg",
		twitchId: "66170",
	},
	{
		label: "MIR4",
		value: "mir4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/966704637_IGDB-{width}x{height}.jpg",
		twitchId: "966704637",
	},
	{
		label: "Naraka: Bladepoint",
		value: "naraka-bladepoint",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515474_IGDB-{width}x{height}.jpg",
		twitchId: "515474",
	},
	{
		label: "Raft",
		value: "raft",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494925_IGDB-{width}x{height}.jpg",
		twitchId: "494925",
	},
	{
		label: "7 Days to Die",
		value: "7-days-to-die",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/271304_IGDB-{width}x{height}.jpg",
		twitchId: "271304",
	},
	{
		label: "Warhammer",
		value: "warhammer",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508798-{width}x{height}.jpg",
		twitchId: "508798",
	},
	{
		label: "Dome Keeper",
		value: "dome-keeper",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1771631982_IGDB-{width}x{height}.jpg",
		twitchId: "1771631982",
	},
	{
		label: "Animal Crossing: New Horizons",
		value: "animal-crossing-new-horizons",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509538_IGDB-{width}x{height}.jpg",
		twitchId: "509538",
	},
	{
		label: "RuneScape",
		value: "runescape",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2083_IGDB-{width}x{height}.jpg",
		twitchId: "2083",
	},
	{
		label: "Call of Duty: Vanguard",
		value: "call-of-duty-vanguard",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492778073-{width}x{height}.jpg",
		twitchId: "492778073",
	},
	{
		label: "Dark Souls III",
		value: "dark-souls-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490292_IGDB-{width}x{height}.jpg",
		twitchId: "490292",
	},
	{
		label: "The Elder Scrolls Online",
		value: "the-elder-scrolls-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/65654_IGDB-{width}x{height}.jpg",
		twitchId: "65654",
	},
	{
		label: "MapleStory",
		value: "maplestory",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19976_IGDB-{width}x{height}.jpg",
		twitchId: "19976",
	},
	{
		label: "Microsoft Flight Simulator",
		value: "microsoft-flight-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/7193_IGDB-{width}x{height}.jpg",
		twitchId: "7193",
	},
	{
		label: "Crash Bandicoot 4: It's About Time",
		value: "crash-bandicoot-4-its-about-time",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518222_IGDB-{width}x{height}.jpg",
		twitchId: "518222",
	},
	{
		label: "Garry's Mod",
		value: "garrys-mod",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18846_IGDB-{width}x{height}.jpg",
		twitchId: "18846",
	},
	{
		label: "Age of Empires IV",
		value: "age-of-empires-iv",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498482_IGDB-{width}x{height}.jpg",
		twitchId: "498482",
	},
	{
		label: "Crash: Mind Over Mutant",
		value: "crash-mind-over-mutant",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19008_IGDB-{width}x{height}.jpg",
		twitchId: "19008",
	},
	{
		label: "Italia 1990",
		value: "italia-1990",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/14824_IGDB-{width}x{height}.jpg",
		twitchId: "14824",
	},
	{
		label: "MU Online",
		value: "mu-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/24438_IGDB-{width}x{height}.jpg",
		twitchId: "24438",
	},
	{
		label: "Mario Kart 8 Deluxe",
		value: "mario-kart-8-deluxe",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/941530474_IGDB-{width}x{height}.jpg",
		twitchId: "941530474",
	},
	{
		label: "Arma 3",
		value: "arma-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/31750_IGDB-{width}x{height}.jpg",
		twitchId: "31750",
	},
	{
		label: "Factorio",
		value: "factorio",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/130942_IGDB-{width}x{height}.jpg",
		twitchId: "130942",
	},
	{
		label: "Undecember",
		value: "undecember",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/145787409_IGDB-{width}x{height}.jpg",
		twitchId: "145787409",
	},
	{
		label: "The Legend of Zelda: Breath of the Wild",
		value: "the-legend-of-zelda-breath-of-the-wild",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/110758_IGDB-{width}x{height}.jpg",
		twitchId: "110758",
	},
	{
		label: "Enlisted",
		value: "enlisted",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/505257_IGDB-{width}x{height}.jpg",
		twitchId: "505257",
	},
	{
		label: "NASCAR Heat 3",
		value: "nascar-heat-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508601_IGDB-{width}x{height}.jpg",
		twitchId: "508601",
	},
	{
		label: "Pokémon Legends: Arceus",
		value: "pokmon-legends-arceus",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/561013832_IGDB-{width}x{height}.jpg",
		twitchId: "561013832",
	},
	{
		label: "Yakuza 0",
		value: "yakuza-0",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/476269_IGDB-{width}x{height}.jpg",
		twitchId: "476269",
	},
	{
		label: "Makers & Crafting",
		value: "makers-crafting",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509673-{width}x{height}.jpg",
		twitchId: "509673",
	},
	{
		label: "Gwent: The Witcher Card Game",
		value: "gwent-the-witcher-card-game",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493217_IGDB-{width}x{height}.jpg",
		twitchId: "493217",
	},
	{
		label: "Pokémon Unite",
		value: "pokmon-unite",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518379_IGDB-{width}x{height}.jpg",
		twitchId: "518379",
	},
	{
		label: "The Witcher 3: Wild Hunt",
		value: "the-witcher-3-wild-hunt",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/115977_IGDB-{width}x{height}.jpg",
		twitchId: "115977",
	},
	{
		label: "The Elder Scrolls V: Skyrim Special Edition",
		value: "the-elder-scrolls-v-skyrim-special-edition",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1050003477_IGDB-{width}x{height}.jpg",
		twitchId: "1050003477",
	},
	{
		label: "The Legend of Zelda: A Link to the Past",
		value: "the-legend-of-zelda-a-link-to-the-past",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/9435_IGDB-{width}x{height}.jpg",
		twitchId: "9435",
	},
	{
		label: "Jackbox Party Packs",
		value: "jackbox-party-packs",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493174-{width}x{height}.jpg",
		twitchId: "493174",
	},
	{
		label: "Construction Simulator",
		value: "construction-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/814559054_IGDB-{width}x{height}.jpg",
		twitchId: "814559054",
	},
	{
		label: "Resident Evil 4",
		value: "resident-evil-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1468_IGDB-{width}x{height}.jpg",
		twitchId: "1468",
	},
	{
		label: "Ranch Simulator",
		value: "ranch-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1366210635_IGDB-{width}x{height}.jpg",
		twitchId: "1366210635",
	},
	{
		label: "Stellaris",
		value: "stellaris",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491572_IGDB-{width}x{height}.jpg",
		twitchId: "491572",
	},
	{
		label: "Resident Evil 2",
		value: "resident-evil-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/8645_IGDB-{width}x{height}.jpg",
		twitchId: "8645",
	},
	{
		label: "Pokémon GO",
		value: "pokmon-go",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490655_IGDB-{width}x{height}.jpg",
		twitchId: "490655",
	},
	{
		label: "Madison",
		value: "madison",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1535635666_IGDB-{width}x{height}.jpg",
		twitchId: "1535635666",
	},
	{
		label: "Trackmania",
		value: "trackmania",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/687129551_IGDB-{width}x{height}.jpg",
		twitchId: "687129551",
	},
	{
		label: "Bombergrounds: Reborn",
		value: "bombergrounds-reborn",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/513364_IGDB-{width}x{height}.jpg",
		twitchId: "513364",
	},
	{
		label: "War Thunder",
		value: "war-thunder",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/66366_IGDB-{width}x{height}.jpg",
		twitchId: "66366",
	},
	{
		label: "SCUM",
		value: "scum",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/495811_IGDB-{width}x{height}.jpg",
		twitchId: "495811",
	},
	{
		label: "Goose Goose Duck",
		value: "goose-goose-duck",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/14333696_IGDB-{width}x{height}.jpg",
		twitchId: "14333696",
	},
	{
		label: "Conan Exiles",
		value: "conan-exiles",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493551_IGDB-{width}x{height}.jpg",
		twitchId: "493551",
	},
	{
		label: "The Legend of Zelda: Majora's Mask",
		value: "the-legend-of-zelda-majoras-mask",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/12482_IGDB-{width}x{height}.jpg",
		twitchId: "12482",
	},
	{
		label: "PlateUp!",
		value: "plateup",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1115711128_IGDB-{width}x{height}.jpg",
		twitchId: "1115711128",
	},
	{
		label: "Rise Online",
		value: "rise-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516588_IGDB-{width}x{height}.jpg",
		twitchId: "516588",
	},
	{
		label: "Monster Hunter Rise",
		value: "monster-hunter-rise",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1275666892_IGDB-{width}x{height}.jpg",
		twitchId: "1275666892",
	},
	{
		label: "No Man's Sky",
		value: "no-mans-sky",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/458781_IGDB-{width}x{height}.jpg",
		twitchId: "458781",
	},
	{
		label: "Summoners War: Sky Arena",
		value: "summoners-war-sky-arena",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489111_IGDB-{width}x{height}.jpg",
		twitchId: "489111",
	},
	{
		label: "SCP: Secret Laboratory",
		value: "scp-secret-laboratory",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498744_IGDB-{width}x{height}.jpg",
		twitchId: "498744",
	},
	{
		label: "Pokémon Platinum",
		value: "pokmon-platinum",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19745_IGDB-{width}x{height}.jpg",
		twitchId: "19745",
	},
	{
		label: "Dread Hunger",
		value: "dread-hunger",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511181708_IGDB-{width}x{height}.jpg",
		twitchId: "511181708",
	},
	{
		label: "Shatterline",
		value: "shatterline",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/528918758_IGDB-{width}x{height}.jpg",
		twitchId: "528918758",
	},
	{
		label: "Tom Clancy's The Division 2",
		value: "tom-clancys-the-division-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/504463_IGDB-{width}x{height}.jpg",
		twitchId: "504463",
	},
	{
		label: "Need for Speed Heat",
		value: "need-for-speed-heat",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512782_IGDB-{width}x{height}.jpg",
		twitchId: "512782",
	},
	{
		label: "Space Station 13",
		value: "space-station-13",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29329_IGDB-{width}x{height}.jpg",
		twitchId: "29329",
	},
	{
		label: "Alien: Isolation",
		value: "alien-isolation",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/458443_IGDB-{width}x{height}.jpg",
		twitchId: "458443",
	},
	{
		label: "Hollow Knight",
		value: "hollow-knight",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490147_IGDB-{width}x{height}.jpg",
		twitchId: "490147",
	},
	{
		label: "The Binding of Isaac: Rebirth",
		value: "the-binding-of-isaac-rebirth",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/94073_IGDB-{width}x{height}.jpg",
		twitchId: "94073",
	},
	{
		label: "Terra Invicta",
		value: "terra-invicta",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/349626339_IGDB-{width}x{height}.jpg",
		twitchId: "349626339",
	},
	{
		label: "Brawlhalla",
		value: "brawlhalla",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460316_IGDB-{width}x{height}.jpg",
		twitchId: "460316",
	},
	{
		label: "Coral Island",
		value: "coral-island",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1960341762_IGDB-{width}x{height}.jpg",
		twitchId: "1960341762",
	},
	{
		label: "Visage",
		value: "visage",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494082_IGDB-{width}x{height}.jpg",
		twitchId: "494082",
	},
	{
		label: "World War 3",
		value: "world-war-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/505956_IGDB-{width}x{height}.jpg",
		twitchId: "505956",
	},
	{
		label: "Super Buckyball Tournament",
		value: "super-buckyball-tournament",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514169_IGDB-{width}x{height}.jpg",
		twitchId: "514169",
	},
	{
		label: "Battlefield 2042",
		value: "battlefield-2042",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514974_IGDB-{width}x{height}.jpg",
		twitchId: "514974",
	},
	{
		label: "Silent Hill 3",
		value: "silent-hill-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/9522_IGDB-{width}x{height}.jpg",
		twitchId: "9522",
	},
	{
		label: "Street Fighter V",
		value: "street-fighter-v",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/488615-{width}x{height}.jpg",
		twitchId: "488615",
	},
	{
		label: "South Park",
		value: "south-park",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/8105_IGDB-{width}x{height}.jpg",
		twitchId: "8105",
	},
	{
		label: "Hell Let Loose",
		value: "hell-let-loose",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497440_IGDB-{width}x{height}.jpg",
		twitchId: "497440",
	},
	{
		label: "Epic Seven",
		value: "epic-seven",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510056_IGDB-{width}x{height}.jpg",
		twitchId: "510056",
	},
	{
		label: "Shiren the Wanderer: The Tower of Fortune and the Dice of Fate",
		value: "shiren-the-wanderer-the-tower-of-fortune-and-the-dice-of-fate",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1155471828_IGDB-{width}x{height}.jpg",
		twitchId: "1155471828",
	},
	{
		label: "Days Gone",
		value: "days-gone",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497456_IGDB-{width}x{height}.jpg",
		twitchId: "497456",
	},
	{
		label: "Mount & Blade II: Bannerlord",
		value: "mount-blade-ii-bannerlord",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/68351_IGDB-{width}x{height}.jpg",
		twitchId: "68351",
	},
	{
		label: "Fallout 4",
		value: "fallout-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489776_IGDB-{width}x{height}.jpg",
		twitchId: "489776",
	},
	{
		label: "God of War III: Remastered",
		value: "god-of-war-iii-remastered",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1938435210_IGDB-{width}x{height}.jpg",
		twitchId: "1938435210",
	},
	{
		label: "Super Mario 64",
		value: "super-mario-64",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2692_IGDB-{width}x{height}.jpg",
		twitchId: "2692",
	},
	{
		label: "Amnesia: Rebirth",
		value: "amnesia-rebirth",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516624_IGDB-{width}x{height}.jpg",
		twitchId: "516624",
	},
	{
		label: "Pokémon Pinball: Ruby & Sapphire",
		value: "pokmon-pinball-ruby-sapphire",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/8075_IGDB-{width}x{height}.jpg",
		twitchId: "8075",
	},
	{
		label: "Brawl Stars",
		value: "brawl-stars",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497497_IGDB-{width}x{height}.jpg",
		twitchId: "497497",
	},
	{
		label: "Happy Game",
		value: "happy-game",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1213557674_IGDB-{width}x{height}.jpg",
		twitchId: "1213557674",
	},
	{
		label: "Assetto Corsa Competizione",
		value: "assetto-corsa-competizione",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1348809580_IGDB-{width}x{height}.jpg",
		twitchId: "1348809580",
	},
	{
		label: "Mobile Legends: Bang Bang",
		value: "mobile-legends-bang-bang",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494184_IGDB-{width}x{height}.jpg",
		twitchId: "494184",
	},
	{
		label: "The Legend of Zelda: Ocarina of Time",
		value: "the-legend-of-zelda-ocarina-of-time",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/11557_IGDB-{width}x{height}.jpg",
		twitchId: "11557",
	},
	{
		label: "Blood Bowl 2",
		value: "blood-bowl-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490177_IGDB-{width}x{height}.jpg",
		twitchId: "490177",
	},
	{
		label: "Gartic Phone",
		value: "gartic-phone",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/278888515_IGDB-{width}x{height}.jpg",
		twitchId: "278888515",
	},
	{
		label: "Fallout 76",
		value: "fallout-76",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506246-{width}x{height}.jpg",
		twitchId: "506246",
	},
	{
		label: "FIFA 22",
		value: "fifa-22",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-{width}x{height}.jpg",
		twitchId: "1869092879",
	},
	{
		label: "Pokémon Black/White Version 2",
		value: "pokmon-blackwhite-version-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/33734-{width}x{height}.jpg",
		twitchId: "33734",
	},
	{
		label: "Obama",
		value: "obama",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/843483811_IGDB-{width}x{height}.jpg",
		twitchId: "843483811",
	},
	{
		label: "Tabletop RPGs",
		value: "tabletop-rpgs",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509664-{width}x{height}.jpg",
		twitchId: "509664",
	},
	{
		label: "Call of Duty: Mobile",
		value: "call-of-duty-mobile",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512818_IGDB-{width}x{height}.jpg",
		twitchId: "512818",
	},
	{
		label: "For The King",
		value: "for-the-king",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494903_IGDB-{width}x{height}.jpg",
		twitchId: "494903",
	},
	{
		label: "Forza Horizon 5",
		value: "forza-horizon-5",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1757732267_IGDB-{width}x{height}.jpg",
		twitchId: "1757732267",
	},
	{
		label: "Resident Evil Village",
		value: "resident-evil-village",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518017_IGDB-{width}x{height}.jpg",
		twitchId: "518017",
	},
	{
		label: "Always On",
		value: "always-on",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/499973-{width}x{height}.jpg",
		twitchId: "499973",
	},
	{
		label: "Words On Stream",
		value: "words-on-stream",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512821-{width}x{height}.jpg",
		twitchId: "512821",
	},
	{
		label: "Call of Duty: Black Ops 4",
		value: "call-of-duty-black-ops-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/504462_IGDB-{width}x{height}.jpg",
		twitchId: "504462",
	},
	{
		label: "Assassin's Creed",
		value: "assassins-creed",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2711_IGDB-{width}x{height}.jpg",
		twitchId: "2711",
	},
	{
		label: "Beat Saber",
		value: "beat-saber",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/503116_IGDB-{width}x{height}.jpg",
		twitchId: "503116",
	},
	{
		label: "Sekiro: Shadows Die Twice",
		value: "sekiro-shadows-die-twice",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506415_IGDB-{width}x{height}.jpg",
		twitchId: "506415",
	},
	{
		label: "Valheim",
		value: "valheim",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508455_IGDB-{width}x{height}.jpg",
		twitchId: "508455",
	},
	{
		label: "MLB The Show 22",
		value: "mlb-the-show-22",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1820819463_IGDB-{width}x{height}.jpg",
		twitchId: "1820819463",
	},
	{
		label: "Mass Effect Legendary Edition",
		value: "mass-effect-legendary-edition",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1568081763-{width}x{height}.jpg",
		twitchId: "1568081763",
	},
	{
		label: "Stream Raiders",
		value: "stream-raiders",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511230_IGDB-{width}x{height}.jpg",
		twitchId: "511230",
	},
	{
		label: "The Legend of Zelda: Skyward Sword",
		value: "the-legend-of-zelda-skyward-sword",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/24324_IGDB-{width}x{height}.jpg",
		twitchId: "24324",
	},
	{
		label: "F1 Manager 2022",
		value: "f1-manager-2022",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489490035_IGDB-{width}x{height}.jpg",
		twitchId: "489490035",
	},
	{
		label: "Grand Theft Auto",
		value: "grand-theft-auto",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/12453_IGDB-{width}x{height}.jpg",
		twitchId: "12453",
	},
	{
		label: "Priest Simulator",
		value: "priest-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511297_IGDB-{width}x{height}.jpg",
		twitchId: "511297",
	},
	{
		label: "MultiVersus",
		value: "multiversus",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/950189725-{width}x{height}.jpg",
		twitchId: "950189725",
	},
	{
		label: "Clock Tower 3",
		value: "clock-tower-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/16471_IGDB-{width}x{height}.jpg",
		twitchId: "16471",
	},
	{
		label: "God of War HD",
		value: "god-of-war-hd",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/995720898_IGDB-{width}x{height}.jpg",
		twitchId: "995720898",
	},
	{
		label: "Persona 4 Golden",
		value: "persona-4-golden",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32542_IGDB-{width}x{height}.jpg",
		twitchId: "32542",
	},
	{
		label: "The Evil Within",
		value: "the-evil-within",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/68000_IGDB-{width}x{height}.jpg",
		twitchId: "68000",
	},
	{
		label: "Super Mario World",
		value: "super-mario-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1229_IGDB-{width}x{height}.jpg",
		twitchId: "1229",
	},
	{
		label: "Silent Hill 2",
		value: "silent-hill-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/9891_IGDB-{width}x{height}.jpg",
		twitchId: "9891",
	},
	{
		label: "HITMAN 2",
		value: "hitman-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506342_IGDB-{width}x{height}.jpg",
		twitchId: "506342",
	},
	{
		label: "DiRT Rally 2.0",
		value: "dirt-rally-20",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509698_IGDB-{width}x{height}.jpg",
		twitchId: "509698",
	},
	{
		label: "Satisfactory",
		value: "satisfactory",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506456_IGDB-{width}x{height}.jpg",
		twitchId: "506456",
	},
	{
		label: "Horizon Forbidden West",
		value: "horizon-forbidden-west",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518015_IGDB-{width}x{height}.jpg",
		twitchId: "518015",
	},
	{
		label: "Grand Theft Auto: San Andreas",
		value: "grand-theft-auto-san-andreas",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/6521_IGDB-{width}x{height}.jpg",
		twitchId: "6521",
	},
	{
		label: "Europa Universalis IV",
		value: "europa-universalis-iv",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/67584_IGDB-{width}x{height}.jpg",
		twitchId: "67584",
	},
	{
		label: "Gundam Evolution",
		value: "gundam-evolution",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/584047654-{width}x{height}.jpg",
		twitchId: "584047654",
	},
	{
		label: "The Legend of Zelda: Twilight Princess HD",
		value: "the-legend-of-zelda-twilight-princess-hd",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491327_IGDB-{width}x{height}.jpg",
		twitchId: "491327",
	},
	{
		label: "The House of the Dead 2",
		value: "the-house-of-the-dead-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/396_IGDB-{width}x{height}.jpg",
		twitchId: "396",
	},
	{
		label: "The SpongeBob SquarePants Movie 3D",
		value: "the-spongebob-squarepants-movie-3d",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2035276675-{width}x{height}.jpg",
		twitchId: "2035276675",
	},
	{
		label: "Geometry Dash",
		value: "geometry-dash",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460951_IGDB-{width}x{height}.jpg",
		twitchId: "460951",
	},
	{
		label: "Darts",
		value: "darts",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1331855755_IGDB-{width}x{height}.jpg",
		twitchId: "1331855755",
	},
	{
		label: "Aion",
		value: "aion",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1468190144_IGDB-{width}x{height}.jpg",
		twitchId: "1468190144",
	},
	{
		label: "At Dead Of Night",
		value: "at-dead-of-night",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1180890490_IGDB-{width}x{height}.jpg",
		twitchId: "1180890490",
	},
	{
		label: "Cuphead",
		value: "cuphead",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-{width}x{height}.jpg",
		twitchId: "459064",
	},
	{
		label: "Darts",
		value: "darts",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1331855755_IGDB-{width}x{height}.jpg",
		twitchId: "1331855755",
	},
	{
		label: "GeoGuesser: Explore the World",
		value: "geoguesser-explore-the-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/765731424_IGDB-{width}x{height}.jpg",
		twitchId: "765731424",
	},
	{
		label: "Slime Rancher 2",
		value: "slime-rancher-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1378799411_IGDB-{width}x{height}.jpg",
		twitchId: "1378799411",
	},
	{
		label: "Ravendawn",
		value: "ravendawn",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/262400435_IGDB-{width}x{height}.jpg",
		twitchId: "262400435",
	},
	{
		label: "Workers & Resources: Soviet Republic",
		value: "workers-resources-soviet-republic",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511780_IGDB-{width}x{height}.jpg",
		twitchId: "511780",
	},
	{
		label: "Celeste",
		value: "celeste",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492535_IGDB-{width}x{height}.jpg",
		twitchId: "492535",
	},
	{
		label: "Perfect World",
		value: "perfect-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/20050_IGDB-{width}x{height}.jpg",
		twitchId: "20050",
	},
	{
		label: "The Elder Scrolls V: Skyrim",
		value: "the-elder-scrolls-v-skyrim",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/30028_IGDB-{width}x{height}.jpg",
		twitchId: "30028",
	},
	{
		label: "Ghost Watchers",
		value: "ghost-watchers",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/790163050_IGDB-{width}x{height}.jpg",
		twitchId: "790163050",
	},
	{
		label: "Song of Horror",
		value: "song-of-horror",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514930_IGDB-{width}x{height}.jpg",
		twitchId: "514930",
	},
	{
		label: "Noita",
		value: "noita",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/505705_IGDB-{width}x{height}.jpg",
		twitchId: "505705",
	},
	{
		label: "Vampire: The Masquerade",
		value: "vampire-the-masquerade",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492963-{width}x{height}.jpg",
		twitchId: "492963",
	},
	{
		label: "Ōkami HD",
		value: "kami-hd",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/467024621_IGDB-{width}x{height}.jpg",
		twitchId: "467024621",
	},
	{
		label: "Gods Unchained",
		value: "gods-unchained",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508716_IGDB-{width}x{height}.jpg",
		twitchId: "508716",
	},
	{
		label: "Silkroad Online",
		value: "silkroad-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/20063_IGDB-{width}x{height}.jpg",
		twitchId: "20063",
	},
	{
		label: "NASCAR",
		value: "nascar",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/24757_IGDB-{width}x{height}.jpg",
		twitchId: "24757",
	},
	{
		label: "Rogue Company",
		value: "rogue-company",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514194-{width}x{height}.jpg",
		twitchId: "514194",
	},
	{
		label: "Resident Evil 0",
		value: "resident-evil-0",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489721_IGDB-{width}x{height}.jpg",
		twitchId: "489721",
	},
	{
		label: "Eternal Return",
		value: "eternal-return",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512864_IGDB-{width}x{height}.jpg",
		twitchId: "512864",
	},
	{
		label: "Wakfu",
		value: "wakfu",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/21136_IGDB-{width}x{height}.jpg",
		twitchId: "21136",
	},
	{
		label: "Planet Zoo",
		value: "planet-zoo",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512341_IGDB-{width}x{height}.jpg",
		twitchId: "512341",
	},
	{
		label: "Assetto Corsa",
		value: "assetto-corsa",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/313197_IGDB-{width}x{height}.jpg",
		twitchId: "313197",
	},
	{
		label: "Inside the Backrooms",
		value: "inside-the-backrooms",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1144809661_IGDB-{width}x{height}.jpg",
		twitchId: "1144809661",
	},
	{
		label: "Resident Evil 7: Biohazard",
		value: "resident-evil-7-biohazard",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492934_IGDB-{width}x{height}.jpg",
		twitchId: "492934",
	},
	{
		label: "Sexy Sniper",
		value: "sexy-sniper",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/643318802_IGDB-{width}x{height}.jpg",
		twitchId: "643318802",
	},
	{
		label: "EBOLA 2",
		value: "ebola-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1285722726_IGDB-{width}x{height}.jpg",
		twitchId: "1285722726",
	},
	{
		label: "Detroit: Become Human",
		value: "detroit-become-human",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497480_IGDB-{width}x{height}.jpg",
		twitchId: "497480",
	},
	{
		label: "Monster Hunter: World",
		value: "monster-hunter-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497467_IGDB-{width}x{height}.jpg",
		twitchId: "497467",
	},
	{
		label: "DCS World",
		value: "dcs-world",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/313331_IGDB-{width}x{height}.jpg",
		twitchId: "313331",
	},
	{
		label: "eFootball 2023",
		value: "efootball-2023",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2071983320_IGDB-{width}x{height}.jpg",
		twitchId: "2071983320",
	},
	{
		label: "Jump King",
		value: "jump-king",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512070_IGDB-{width}x{height}.jpg",
		twitchId: "512070",
	},
	{
		label: "It Takes Two",
		value: "it-takes-two",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518213_IGDB-{width}x{height}.jpg",
		twitchId: "518213",
	},
	{
		label: "Pummel Party",
		value: "pummel-party",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509549_IGDB-{width}x{height}.jpg",
		twitchId: "509549",
	},
	{
		label: "Chivalry 2",
		value: "chivalry-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512971_IGDB-{width}x{height}.jpg",
		twitchId: "512971",
	},
	{
		label: "Borderlands 2",
		value: "borderlands-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32345_IGDB-{width}x{height}.jpg",
		twitchId: "32345",
	},
	{
		label: "Mario Kart Wii",
		value: "mario-kart-wii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18871_IGDB-{width}x{height}.jpg",
		twitchId: "18871",
	},
	{
		label: "The Lord of the Rings: The Battle for Middle-earth II",
		value: "the-lord-of-the-rings-the-battle-for-middleearth-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/4449_IGDB-{width}x{height}.jpg",
		twitchId: "4449",
	},
	{
		label: "The Isle",
		value: "the-isle",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490948_IGDB-{width}x{height}.jpg",
		twitchId: "490948",
	},
	{
		label: "Pokémon HeartGold/SoulSilver",
		value: "pokmon-heartgoldsoulsilver",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/23857-{width}x{height}.jpg",
		twitchId: "23857",
	},
	{
		label: "Night in the Woods",
		value: "night-in-the-woods",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/459104_IGDB-{width}x{height}.jpg",
		twitchId: "459104",
	},
	{
		label: "Potion Permit",
		value: "potion-permit",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1576857499_IGDB-{width}x{height}.jpg",
		twitchId: "1576857499",
	},
	{
		label: "Little Nightmares II",
		value: "little-nightmares-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/513949_IGDB-{width}x{height}.jpg",
		twitchId: "513949",
	},
	{
		label: "Gran Turismo 7",
		value: "gran-turismo-7",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518014_IGDB-{width}x{height}.jpg",
		twitchId: "518014",
	},
	{
		label: "The Quarry",
		value: "the-quarry",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1937599489_IGDB-{width}x{height}.jpg",
		twitchId: "1937599489",
	},
	{
		label: "Stray",
		value: "stray",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518006_IGDB-{width}x{height}.jpg",
		twitchId: "518006",
	},
	{
		label: "Ghost of Tsushima",
		value: "ghost-of-tsushima",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/499856_IGDB-{width}x{height}.jpg",
		twitchId: "499856",
	},
	{
		label: "Kingshunt",
		value: "kingshunt",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510731_IGDB-{width}x{height}.jpg",
		twitchId: "510731",
	},
	{
		label: "Dark Souls II",
		value: "dark-souls-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/91423_IGDB-{width}x{height}.jpg",
		twitchId: "91423",
	},
	{
		label: "Sid Meier's Civilization V",
		value: "sid-meiers-civilization-v",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/27103_IGDB-{width}x{height}.jpg",
		twitchId: "27103",
	},
	{
		label: "StarCraft",
		value: "starcraft",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/11989_IGDB-{width}x{height}.jpg",
		twitchId: "11989",
	},
	{
		label: "Bayonetta",
		value: "bayonetta",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18933_IGDB-{width}x{height}.jpg",
		twitchId: "18933",
	},
	{
		label: "No one lives under the lighthouse",
		value: "no-one-lives-under-the-lighthouse",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/517232_IGDB-{width}x{height}.jpg",
		twitchId: "517232",
	},
	{
		label: "WWE 2K22",
		value: "wwe-2k22",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1199725270_IGDB-{width}x{height}.jpg",
		twitchId: "1199725270",
	},
	{
		label: "Resident Evil 3",
		value: "resident-evil-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/649775967_IGDB-{width}x{height}.jpg",
		twitchId: "649775967",
	},
	{
		label: "Super Metroid",
		value: "super-metroid",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/7595_IGDB-{width}x{height}.jpg",
		twitchId: "7595",
	},
	{
		label: "Assassin's Creed III",
		value: "assassins-creed-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/33631_IGDB-{width}x{height}.jpg",
		twitchId: "33631",
	},
	{
		label: "Left 4 Dead 2",
		value: "left-4-dead-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/24193_IGDB-{width}x{height}.jpg",
		twitchId: "24193",
	},
	{
		label: "Gas Station Simulator",
		value: "gas-station-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/896525007_IGDB-{width}x{height}.jpg",
		twitchId: "896525007",
	},
	{
		label: "Beacon Pines",
		value: "beacon-pines",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/884420433_IGDB-{width}x{height}.jpg",
		twitchId: "884420433",
	},
	{
		label: "SnowRunner",
		value: "snowrunner",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/515066-{width}x{height}.jpg",
		twitchId: "515066",
	},
	{
		label: "Apex Legends Mobile",
		value: "apex-legends-mobile",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/170987874_IGDB-{width}x{height}.jpg",
		twitchId: "170987874",
	},
	{
		label: "For Honor",
		value: "for-honor",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490382-{width}x{height}.jpg",
		twitchId: "490382",
	},
	{
		label: "Dark Souls",
		value: "dark-souls",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/29433_IGDB-{width}x{height}.jpg",
		twitchId: "29433",
	},
	{
		label: "Halo: The Master Chief Collection",
		value: "halo-the-master-chief-collection",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/417969-{width}x{height}.jpg",
		twitchId: "417969",
	},
	{
		label: "Ragnarok Online",
		value: "ragnarok-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-{width}x{height}.jpg",
		twitchId: "15229",
	},
	{
		label: "Assassin's Creed Valhalla",
		value: "assassins-creed-valhalla",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/517330_IGDB-{width}x{height}.jpg",
		twitchId: "517330",
	},
	{
		label: "Squad",
		value: "squad",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/488479_IGDB-{width}x{height}.jpg",
		twitchId: "488479",
	},
	{
		label: "Final Fantasy VII Remake",
		value: "final-fantasy-vii-remake",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490359_IGDB-{width}x{height}.jpg",
		twitchId: "490359",
	},
	{
		label: "Counter-Strike",
		value: "counterstrike",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/10710_IGDB-{width}x{height}.jpg",
		twitchId: "10710",
	},
	{
		label: "Portal 2",
		value: "portal-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19731_IGDB-{width}x{height}.jpg",
		twitchId: "19731",
	},
	{
		label: "Back 4 Blood",
		value: "back-4-blood",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511746_IGDB-{width}x{height}.jpg",
		twitchId: "511746",
	},
	{
		label: "Board Games",
		value: "board-games",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490413-{width}x{height}.jpg",
		twitchId: "490413",
	},
	{
		label: "Netrunner",
		value: "netrunner",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1289748982-{width}x{height}.jpg",
		twitchId: "1289748982",
	},
	{
		label: "Electrician Simulator",
		value: "electrician-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/162663461_IGDB-{width}x{height}.jpg",
		twitchId: "162663461",
	},
	{
		label: "Mahjong Soul",
		value: "mahjong-soul",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512708_IGDB-{width}x{height}.jpg",
		twitchId: "512708",
	},
	{
		label: "Final Fantasy Tactics",
		value: "final-fantasy-tactics",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18181_IGDB-{width}x{height}.jpg",
		twitchId: "18181",
	},
	{
		label: "Vault of the Void",
		value: "vault-of-the-void",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1691435108_IGDB-{width}x{height}.jpg",
		twitchId: "1691435108",
	},
	{
		label: "Master of Magic",
		value: "master-of-magic",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/6006_IGDB-{width}x{height}.jpg",
		twitchId: "6006",
	},
	{
		label: "Shadowverse",
		value: "shadowverse",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492925_IGDB-{width}x{height}.jpg",
		twitchId: "492925",
	},
	{
		label: "Axie Infinity",
		value: "axie-infinity",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508967_IGDB-{width}x{height}.jpg",
		twitchId: "508967",
	},
	{
		label: "CarX Drift Racing Online",
		value: "carx-drift-racing-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498289_IGDB-{width}x{height}.jpg",
		twitchId: "498289",
	},
	{
		label: "Horizon Zero Dawn",
		value: "horizon-zero-dawn",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/490374_IGDB-{width}x{height}.jpg",
		twitchId: "490374",
	},
	{
		label: "Radio Station",
		value: "radio-station",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2128929587_IGDB-{width}x{height}.jpg",
		twitchId: "2128929587",
	},
	{
		label: "Final Fantasy IV",
		value: "final-fantasy-iv",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19023_IGDB-{width}x{height}.jpg",
		twitchId: "19023",
	},
	{
		label: "Call of Duty: Black Ops II",
		value: "call-of-duty-black-ops-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/34134_IGDB-{width}x{height}.jpg",
		twitchId: "34134",
	},
	{
		label: "Kerbal Space Program",
		value: "kerbal-space-program",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/32742_IGDB-{width}x{height}.jpg",
		twitchId: "32742",
	},
	{
		label: "The Bridge Curse: Road To Salvation",
		value: "the-bridge-curse-road-to-salvation",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2081287761_IGDB-{width}x{height}.jpg",
		twitchId: "2081287761",
	},
	{
		label: "The Last of Us Part II",
		value: "the-last-of-us-part-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494552_IGDB-{width}x{height}.jpg",
		twitchId: "494552",
	},
	{
		label: "Golf With Your Friends",
		value: "golf-with-your-friends",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491381_IGDB-{width}x{height}.jpg",
		twitchId: "491381",
	},
	{
		label: "Mega Man",
		value: "mega-man",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/4815_IGDB-{width}x{height}.jpg",
		twitchId: "4815",
	},
	{
		label: "Dinkum",
		value: "dinkum",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/97210601_IGDB-{width}x{height}.jpg",
		twitchId: "97210601",
	},
	{
		label: "Call of Duty: Black Ops III",
		value: "call-of-duty-black-ops-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489401_IGDB-{width}x{height}.jpg",
		twitchId: "489401",
	},
	{
		label: "Risk of Rain 2",
		value: "risk-of-rain-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509110_IGDB-{width}x{height}.jpg",
		twitchId: "509110",
	},
	{
		label: "Alan Wake",
		value: "alan-wake",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19156_IGDB-{width}x{height}.jpg",
		twitchId: "19156",
	},
	{
		label: "Mystery Science Theater 3000",
		value: "mystery-science-theater-3000",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497583-{width}x{height}.jpg",
		twitchId: "497583",
	},
	{
		label: "Rocksmith 2014 Edition - Remastered",
		value: "rocksmith-2014-edition-remastered",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1623970547_IGDB-{width}x{height}.jpg",
		twitchId: "1623970547",
	},
	{
		label: "Dragon Ball Z: Kakarot",
		value: "dragon-ball-z-kakarot",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511195_IGDB-{width}x{height}.jpg",
		twitchId: "511195",
	},
	{
		label: "RF Online",
		value: "rf-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/3951_IGDB-{width}x{height}.jpg",
		twitchId: "3951",
	},
	{
		label: "Rock Band 4",
		value: "rock-band-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489136_IGDB-{width}x{height}.jpg",
		twitchId: "489136",
	},
	{
		label: "S.T.A.L.K.E.R.: Anomaly",
		value: "stalker-anomaly",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1549167076_IGDB-{width}x{height}.jpg",
		twitchId: "1549167076",
	},
	{
		label: "The Legend of Zelda: The Wind Waker",
		value: "the-legend-of-zelda-the-wind-waker",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/16967_IGDB-{width}x{height}.jpg",
		twitchId: "16967",
	},
	{
		label: "Dark Souls: Remastered",
		value: "dark-souls-remastered",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1122982998_IGDB-{width}x{height}.jpg",
		twitchId: "1122982998",
	},
	{
		label: "Return to Monkey Island",
		value: "return-to-monkey-island",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/554673821_IGDB-{width}x{height}.jpg",
		twitchId: "554673821",
	},
	{
		label: "Marvel's Spider-Man Remastered",
		value: "marvels-spiderman-remastered",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1262047844_IGDB-{width}x{height}.jpg",
		twitchId: "1262047844",
	},
	{
		label: "Outer Wilds",
		value: "outer-wilds",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489335_IGDB-{width}x{height}.jpg",
		twitchId: "489335",
	},
	{
		label: "Reaction",
		value: "reaction",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1559544038_IGDB-{width}x{height}.jpg",
		twitchId: "1559544038",
	},
	{
		label: "Conqueror's Blade",
		value: "conquerors-blade",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498523-{width}x{height}.jpg",
		twitchId: "498523",
	},
	{
		label: "Omori",
		value: "omori",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/505786_IGDB-{width}x{height}.jpg",
		twitchId: "505786",
	},
	{
		label: "Xenoblade Chronicles 3",
		value: "xenoblade-chronicles-3",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1584758405_IGDB-{width}x{height}.jpg",
		twitchId: "1584758405",
	},
	{
		label: "Mortal Kombat 11",
		value: "mortal-kombat-11",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510578_IGDB-{width}x{height}.jpg",
		twitchId: "510578",
	},
	{
		label: "Star Wars: The Old Republic",
		value: "star-wars-the-old-republic",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/21934_IGDB-{width}x{height}.jpg",
		twitchId: "21934",
	},
	{
		label: "Hades",
		value: "hades",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510590_IGDB-{width}x{height}.jpg",
		twitchId: "510590",
	},
	{
		label: "Russian Fishing 4",
		value: "russian-fishing-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497304_IGDB-{width}x{height}.jpg",
		twitchId: "497304",
	},
	{
		label: "Deep Rock Galactic",
		value: "deep-rock-galactic",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494839_IGDB-{width}x{height}.jpg",
		twitchId: "494839",
	},
	{
		label: "Hero Siege",
		value: "hero-siege",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/416015_IGDB-{width}x{height}.jpg",
		twitchId: "416015",
	},
	{
		label: "Assassin's Creed Odyssey",
		value: "assassins-creed-odyssey",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506274_IGDB-{width}x{height}.jpg",
		twitchId: "506274",
	},
	{
		label: "EA Sports UFC 4",
		value: "ea-sports-ufc-4",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518711_IGDB-{width}x{height}.jpg",
		twitchId: "518711",
	},
	{
		label: "Demon's Souls",
		value: "demons-souls",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/21812_IGDB-{width}x{height}.jpg",
		twitchId: "21812",
	},
	{
		label: "Lineage: The Blood Pledge",
		value: "lineage-the-blood-pledge",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/14678_IGDB-{width}x{height}.jpg",
		twitchId: "14678",
	},
	{
		label: "Until Dawn",
		value: "until-dawn",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/67637_IGDB-{width}x{height}.jpg",
		twitchId: "67637",
	},
	{
		label: "Company of Heroes 2",
		value: "company-of-heroes-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/65663_IGDB-{width}x{height}.jpg",
		twitchId: "65663",
	},
	{
		label: "Rocksmith+",
		value: "rocksmith",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2023547331_IGDB-{width}x{height}.jpg",
		twitchId: "2023547331",
	},
	{
		label: "Temtem",
		value: "temtem",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510336_IGDB-{width}x{height}.jpg",
		twitchId: "510336",
	},
	{
		label: "Metal Gear Solid V: The Phantom Pain",
		value: "metal-gear-solid-v-the-phantom-pain",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/91419_IGDB-{width}x{height}.jpg",
		twitchId: "91419",
	},
	{
		label: "Super Auto Pets",
		value: "super-auto-pets",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/2114339342_IGDB-{width}x{height}.jpg",
		twitchId: "2114339342",
	},
	{
		label: "Dying Light 2: Stay Human",
		value: "dying-light-2-stay-human",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506410_IGDB-{width}x{height}.jpg",
		twitchId: "506410",
	},
	{
		label: "Resident Evil",
		value: "resident-evil",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/5360_IGDB-{width}x{height}.jpg",
		twitchId: "5360",
	},
	{
		label: "Gothic II",
		value: "gothic-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1654_IGDB-{width}x{height}.jpg",
		twitchId: "1654",
	},
	{
		label: "Pinball",
		value: "pinball",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/8882_IGDB-{width}x{height}.jpg",
		twitchId: "8882",
	},
	{
		label: "Cities: Skylines",
		value: "cities-skylines",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/461449_IGDB-{width}x{height}.jpg",
		twitchId: "461449",
	},
	{
		label: "Eternal Darkness: Sanity's Requiem",
		value: "eternal-darkness-sanitys-requiem",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/6888_IGDB-{width}x{height}.jpg",
		twitchId: "6888",
	},
	{
		label: "Anno 1800",
		value: "anno-1800",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498638-{width}x{height}.jpg",
		twitchId: "498638",
	},
	{
		label: "Far Cry 5",
		value: "far-cry-5",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497078_IGDB-{width}x{height}.jpg",
		twitchId: "497078",
	},
	{
		label: "American Truck Simulator",
		value: "american-truck-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/488910_IGDB-{width}x{height}.jpg",
		twitchId: "488910",
	},
	{
		label: "Friday the 13th: The Game",
		value: "friday-the-13th-the-game",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/488518_IGDB-{width}x{height}.jpg",
		twitchId: "488518",
	},
	{
		label: "PowerWash Simulator",
		value: "powerwash-simulator",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/519103_IGDB-{width}x{height}.jpg",
		twitchId: "519103",
	},
	{
		label: "Crusader Kings III",
		value: "crusader-kings-iii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514888_IGDB-{width}x{height}.jpg",
		twitchId: "514888",
	},
	{
		label: "Pathfinder",
		value: "pathfinder",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/508513_IGDB-{width}x{height}.jpg",
		twitchId: "508513",
	},
	{
		label: "Paper Mario",
		value: "paper-mario",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/18231_IGDB-{width}x{height}.jpg",
		twitchId: "18231",
	},
	{
		label: "Entropia Universe",
		value: "entropia-universe",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/19714_IGDB-{width}x{height}.jpg",
		twitchId: "19714",
	},
	{
		label: "Dual Universe",
		value: "dual-universe",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493826_IGDB-{width}x{height}.jpg",
		twitchId: "493826",
	},
	{
		label: "Subnautica",
		value: "subnautica",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/460090_IGDB-{width}x{height}.jpg",
		twitchId: "460090",
	},
	{
		label: "Resident Evil 6",
		value: "resident-evil-6",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/33437_IGDB-{width}x{height}.jpg",
		twitchId: "33437",
	},
	{
		label: "Vampire: The Masquerade - Bloodhunt",
		value: "vampire-the-masquerade-bloodhunt",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1411398523_IGDB-{width}x{height}.jpg",
		twitchId: "1411398523",
	},
	{
		label: "Professor Layton and the Azran Legacy",
		value: "professor-layton-and-the-azran-legacy",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/67829_IGDB-{width}x{height}.jpg",
		twitchId: "67829",
	},
	{
		label: "Warhammer: Vermintide 2",
		value: "warhammer-vermintide-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498668_IGDB-{width}x{height}.jpg",
		twitchId: "498668",
	},
	{
		label: "Automobilista 2",
		value: "automobilista-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/516921_IGDB-{width}x{height}.jpg",
		twitchId: "516921",
	},
	{
		label: "Assassin's Creed IV Black Flag",
		value: "assassins-creed-iv-black-flag",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/118198_IGDB-{width}x{height}.jpg",
		twitchId: "118198",
	},
	{
		label: "theHunter: Call of the Wild",
		value: "thehunter-call-of-the-wild",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/494683_IGDB-{width}x{height}.jpg",
		twitchId: "494683",
	},
	{
		label: "Medieval Dynasty",
		value: "medieval-dynasty",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/519492_IGDB-{width}x{height}.jpg",
		twitchId: "519492",
	},
	{
		label: "Ghostbusters: The Video Game Remastered",
		value: "ghostbusters-the-video-game-remastered",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1748843817_IGDB-{width}x{height}.jpg",
		twitchId: "1748843817",
	},
	{
		label: "Call of Duty: Modern Warfare 2",
		value: "call-of-duty-modern-warfare-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/22393_IGDB-{width}x{height}.jpg",
		twitchId: "22393",
	},
	{
		label: "Street Fighter",
		value: "street-fighter",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1137_IGDB-{width}x{height}.jpg",
		twitchId: "1137",
	},
	{
		label: "A Plague Tale: Innocence",
		value: "a-plague-tale-innocence",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497471_IGDB-{width}x{height}.jpg",
		twitchId: "497471",
	},
	{
		label: "Castlevania: Aria of Sorrow",
		value: "castlevania-aria-of-sorrow",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/11065_IGDB-{width}x{height}.jpg",
		twitchId: "11065",
	},
	{
		label: "Star Wars Battlefront II",
		value: "star-wars-battlefront-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/492546-{width}x{height}.jpg",
		twitchId: "492546",
	},
	{
		label: "Pokémon Emerald",
		value: "pokmon-emerald",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/10609_IGDB-{width}x{height}.jpg",
		twitchId: "10609",
	},
	{
		label: "Dragon Ball FighterZ",
		value: "dragon-ball-fighterz",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/497385_IGDB-{width}x{height}.jpg",
		twitchId: "497385",
	},
	{
		label: "Atlas",
		value: "atlas",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/510825_IGDB-{width}x{height}.jpg",
		twitchId: "510825",
	},
	{
		label: "Batman: Arkham Knight",
		value: "batman-arkham-knight",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/459676_IGDB-{width}x{height}.jpg",
		twitchId: "459676",
	},
	{
		label: "Storybook Brawl",
		value: "storybook-brawl",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1210837377_IGDB-{width}x{height}.jpg",
		twitchId: "1210837377",
	},
	{
		label: "Ready or Not",
		value: "ready-or-not",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511701_IGDB-{width}x{height}.jpg",
		twitchId: "511701",
	},
	{
		label: "Fishing Planet",
		value: "fishing-planet",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491117_IGDB-{width}x{height}.jpg",
		twitchId: "491117",
	},
	{
		label: "Diversion",
		value: "diversion",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/999115257_IGDB-{width}x{height}.jpg",
		twitchId: "999115257",
	},
	{
		label: "DEVOUR",
		value: "devour",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/836519689_IGDB-{width}x{height}.jpg",
		twitchId: "836519689",
	},
	{
		label: "Russian Anime",
		value: "russian-anime",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1226902246_IGDB-{width}x{height}.jpg",
		twitchId: "1226902246",
	},
	{
		label: "Chrono Trigger",
		value: "chrono-trigger",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/8489_IGDB-{width}x{height}.jpg",
		twitchId: "8489",
	},
	{
		label: "Green Hell",
		value: "green-hell",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/506078_IGDB-{width}x{height}.jpg",
		twitchId: "506078",
	},
	{
		label: "The Curse of Monkey Island",
		value: "the-curse-of-monkey-island",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/5256_IGDB-{width}x{height}.jpg",
		twitchId: "5256",
	},
	{
		label: "Oxygen Not Included",
		value: "oxygen-not-included",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/493815_IGDB-{width}x{height}.jpg",
		twitchId: "493815",
	},
	{
		label: "Kena: Bridge of Spirits",
		value: "kena-bridge-of-spirits",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518004_IGDB-{width}x{height}.jpg",
		twitchId: "518004",
	},
	{
		label: "Banjo-Kazooie",
		value: "banjokazooie",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/10033_IGDB-{width}x{height}.jpg",
		twitchId: "10033",
	},
	{
		label: "The Death: Than Trung",
		value: "the-death-than-trung",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/129113862_IGDB-{width}x{height}.jpg",
		twitchId: "129113862",
	},
	{
		label: "Rush Royale",
		value: "rush-royale",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/633454324_IGDB-{width}x{height}.jpg",
		twitchId: "633454324",
	},
	{
		label: "Fatal Frame",
		value: "fatal-frame",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/16570_IGDB-{width}x{height}.jpg",
		twitchId: "16570",
	},
	{
		label: "Everhood",
		value: "everhood",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1899708249_IGDB-{width}x{height}.jpg",
		twitchId: "1899708249",
	},
	{
		label: "Dead Space 2",
		value: "dead-space-2",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/23017_IGDB-{width}x{height}.jpg",
		twitchId: "23017",
	},
	{
		label: "The Dark Pictures Anthology: Man of Medan",
		value: "the-dark-pictures-anthology-man-of-medan",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/509249_IGDB-{width}x{height}.jpg",
		twitchId: "509249",
	},
	{
		label: "Crash Bash",
		value: "crash-bash",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/14625_IGDB-{width}x{height}.jpg",
		twitchId: "14625",
	},
	{
		label: "DRAGON BALL Z DOKKAN BATTLE",
		value: "dragon-ball-z-dokkan-battle",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/489405_IGDB-{width}x{height}.jpg",
		twitchId: "489405",
	},
	{
		label: "Night At the Gates of Hell",
		value: "night-at-the-gates-of-hell",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/325280449_IGDB-{width}x{height}.jpg",
		twitchId: "325280449",
	},
	{
		label: "DEATHLOOP",
		value: "deathloop",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512983_IGDB-{width}x{height}.jpg",
		twitchId: "512983",
	},
	{
		label: "Disturbing Forest: Demon's Path",
		value: "disturbing-forest-demons-path",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1191015809_IGDB-{width}x{height}.jpg",
		twitchId: "1191015809",
	},
	{
		label: "Roller Champions",
		value: "roller-champions",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/512991_IGDB-{width}x{height}.jpg",
		twitchId: "512991",
	},
	{
		label: "Teardown",
		value: "teardown",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/514795_IGDB-{width}x{height}.jpg",
		twitchId: "514795",
	},
	{
		label: "Lost Light",
		value: "lost-light",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1706428735_IGDB-{width}x{height}.jpg",
		twitchId: "1706428735",
	},
	{
		label: "Twitch Plays",
		value: "twitch-plays",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/491180-{width}x{height}.jpg",
		twitchId: "491180",
	},
	{
		label: "Quake Champions",
		value: "quake-champions",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/496253_IGDB-{width}x{height}.jpg",
		twitchId: "496253",
	},
	{
		label: "Call of Duty: Modern Warfare II",
		value: "call-of-duty-modern-warfare-ii",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-{width}x{height}.jpg",
		twitchId: "1678052513",
	},
	{
		label: "Martha Is Dead",
		value: "martha-is-dead",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1691026305_IGDB-{width}x{height}.jpg",
		twitchId: "1691026305",
	},
	{
		label: "DOOM II: Hell on Earth",
		value: "doom-ii-hell-on-earth",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/584_IGDB-{width}x{height}.jpg",
		twitchId: "584",
	},
	{
		label: "Kukoro: Stream Chat Games",
		value: "kukoro-stream-chat-games",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/518764_IGDB-{width}x{height}.jpg",
		twitchId: "518764",
	},
	{
		label: "House Flipper",
		value: "house-flipper",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/498000_IGDB-{width}x{height}.jpg",
		twitchId: "498000",
	},
	{
		label: "Tetris Effect: Connected",
		value: "tetris-effect-connected",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/1735094656_IGDB-{width}x{height}.jpg",
		twitchId: "1735094656",
	},
	{
		label: "Inkulinati",
		value: "inkulinati",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/517793_IGDB-{width}x{height}.jpg",
		twitchId: "517793",
	},
	{
		label: "The Lord of the Rings Online",
		value: "the-lord-of-the-rings-online",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/413569_IGDB-{width}x{height}.jpg",
		twitchId: "413569",
	},
	{
		label: "Arknights",
		value: "arknights",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/511554_IGDB-{width}x{height}.jpg",
		twitchId: "511554",
	},
	{
		label: "Tomb Raider III: Adventures of Lara Croft",
		value: "tomb-raider-iii-adventures-of-lara-croft",
		thumbnail:
			"https://static-cdn.jtvnw.net/ttv-boxart/17945_IGDB-{width}x{height}.jpg",
		twitchId: "17945",
	},
];

const excludeList = [
	"Slots",
	"Music",
	"Sports",
	"ASMR",
	"Watch Parties",
	"Talk Shows & Podcasts",
	"Retro",
	"Special Events",
	"Trash Horror Collection 2",
	"Pools, Hot Tubs, and Beaches",
	"Politics",
	"The Simpsons",
	"Kingdom Hearts HD 1.5 + 2.5 ReMIX",
	"Games + Demos",
	"Animals, Aquariums, and Zoos",
	"Software and Game Development",
	"Crypto",
	"Twitch Plays",
	"Netrunner",
	"Pokémon Community Game",
];

gameList = gameList.filter((game) => !excludeList.includes(game.label));

export default gameList;
