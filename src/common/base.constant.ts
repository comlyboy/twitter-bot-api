export const WORKINANCE_ID_DIVIDER = ':::';

export enum DefinedAppEnvironmentEnum {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
	STAGING = 'staging'
}

export type DefinedAppEnvironmentType = `${DefinedAppEnvironmentEnum}`;

export enum ResponseMessageEnum {
	INTERNAL_SERVER_ERROR = 'Error occured in the server!',
	ADD_SUCCESS = 'Added successfully!',
	CREATED_SUCCESS = 'Created successfully!',
	NOT_SUCCESS = 'Not successful. Kindly try again!',
	UPDATE_SUCCESS = 'Updated successfully!',
	DELETE_SUCCESS = 'Deleted successfully!',
	ROLE_MISMACHED = 'You do not have the permission(s) to perform this action(s)!',
	WRONG_PASSWORD = 'Invalid login credentials!',
	LOGIN_SESSION_EXPIRED = 'Your login session has expired. Please log in again!',
	UNAUTHENTICATED = 'You are not authenticated. Kindly login!',
	SUSPEND = 'Suspended successfully!',
	UNSUSPENDED = 'Unsuspended successfully!',
	NO_BUSINESS_FOUND = 'No business created/selected!',
	NO_USER_EXIST = 'Can\'t verify user account existence!',
	INVALID_TOKEN = 'Invalid token!'
}

export enum EntityNameEnum {
	BOT = 'bot',
	GOOGLE_TREND = 'google-trend',
	USER = 'user'
}
export type EntityNameType = `${EntityNameEnum}`;

export enum DefinedGSIName {
	getItemsByEntityNameCreateDateIndex = 'entityName_createdAtDate_index',
	getItemsByEntityBotCreatedDateIndex = 'entityNameBot_createdAtDate_index',
}



export const googlaCategoryList = [
	{
		id: "0",
		name: "All categories"
	},
	{
		id: "3",
		name: "Arts & Entertainment"
	},
	{
		id: "184",
		name: "Celebrities & Entertainment News"
	},
	{
		id: "316",
		name: "Comics & Animation"
	},
	{
		id: "1104",
		name: "Animated Films"
	},
	{
		id: "317",
		name: "Anime & Manga"
	},
	{
		id: "319",
		name: "Cartoons"
	},
	{
		id: "318",
		name: "Comics"
	},
	{
		id: "612",
		name: "Entertainment Industry"
	},
	{
		id: "1116",
		name: "Film & TV Industry"
	},
	{
		id: "1108",
		name: "Film & TV Awards"
	},
	{
		id: "1117",
		name: "Film & TV Production"
	},
	{
		id: "1115",
		name: "Recording Industry"
	},
	{
		id: "1113",
		name: "Music Awards"
	},
	{
		id: "1114",
		name: "Record Labels"
	},
	{
		id: "569",
		name: "Events & Listings"
	},
	{
		id: "188",
		name: "Clubs & Nightlife"
	},
	{
		id: "891",
		name: "Concerts & Music Festivals"
	},
	{
		id: "1086",
		name: "Film Festivals"
	},
	{
		id: "1273",
		name: "Live Sporting Events"
	},
	{
		id: "1085",
		name: "Movie Listings & Theater Showtimes"
	},
	{
		id: "614",
		name: "Ticket Sales"
	},
	{
		id: "539",
		name: "Fun & Trivia"
	},
	{
		id: "1173",
		name: "Dress-Up & Fashion Games"
	},
	{
		id: "447",
		name: "Flash-Based Entertainment"
	},
	{
		id: "1174",
		name: "Fun Tests & Silly Surveys"
	},
	{
		id: "182",
		name: "Humor"
	},
	{
		id: "1095",
		name: "Comedy Films"
	},
	{
		id: "895",
		name: "Live Comedy"
	},
	{
		id: "1180",
		name: "Political Humor"
	},
	{
		id: "1244",
		name: "Spoofs & Satire"
	},
	{
		id: "1047",
		name: "TV Comedies"
	},
	{
		id: "34",
		name: "Movies"
	},
	{
		id: "1097",
		name: "Action & Adventure Films"
	},
	{
		id: "1101",
		name: "Martial Arts Films"
	},
	{
		id: "1100",
		name: "Superhero Films"
	},
	{
		id: "1099",
		name: "Western Films"
	},
	{
		id: "360",
		name: "Bollywood & South Asian Film"
	},
	{
		id: "1102",
		name: "Classic Films"
	},
	{
		id: "1098",
		name: "Silent Films"
	},
	{
		id: "1103",
		name: "Cult & Indie Films"
	},
	{
		id: "1072",
		name: "Documentary Films"
	},
	{
		id: "1094",
		name: "Drama Films"
	},
	{
		id: "210",
		name: "DVD & Video Shopping"
	},
	{
		id: "1145",
		name: "DVD & Video Rentals"
	},
	{
		id: "1291",
		name: "Family Films"
	},
	{
		id: "615",
		name: "Horror Films"
	},
	{
		id: "213",
		name: "Movie Memorabilia"
	},
	{
		id: "1106",
		name: "Movie Reference"
	},
	{
		id: "1107",
		name: "Movie Reviews & Previews"
	},
	{
		id: "1105",
		name: "Musical Films"
	},
	{
		id: "1310",
		name: "Romance Films"
	},
	{
		id: "616",
		name: "Science Fiction & Fantasy Films"
	},
	{
		id: "1096",
		name: "Thriller, Crime & Mystery Films"
	},
	{
		id: "35",
		name: "Music & Audio"
	},
	{
		id: "217",
		name: "CD & Audio Shopping"
	},
	{
		id: "586",
		name: "Classical Music"
	},
	{
		id: "1185",
		name: "Opera"
	},
	{
		id: "587",
		name: "Country Music"
	},
	{
		id: "588",
		name: "Dance & Electronic Music"
	},
	{
		id: "1022",
		name: "Experimental & Industrial Music"
	},
	{
		id: "1023",
		name: "Folk & Traditional Music"
	},
	{
		id: "589",
		name: "Jazz & Blues"
	},
	{
		id: "1040",
		name: "Blues"
	},
	{
		id: "42",
		name: "Jazz"
	},
	{
		id: "1285",
		name: "Latin Pop"
	},
	{
		id: "218",
		name: "Music Art & Memorabilia"
	},
	{
		id: "1087",
		name: "Music Education & Instruction"
	},
	{
		id: "1024",
		name: "Music Equipment & Technology"
	},
	{
		id: "1025",
		name: "DJ Resources & Equipment"
	},
	{
		id: "1026",
		name: "Music Recording Technology"
	},
	{
		id: "216",
		name: "Musical Instruments"
	},
	{
		id: "1327",
		name: "Drums & Percussion"
	},
	{
		id: "1325",
		name: "Guitars"
	},
	{
		id: "1326",
		name: "Pianos & Keyboards"
	},
	{
		id: "1091",
		name: "Samples & Sound Libraries"
	},
	{
		id: "1027",
		name: "Music Reference"
	},
	{
		id: "1028",
		name: "Music Composition & Theory"
	},
	{
		id: "892",
		name: "Sheet Music"
	},
	{
		id: "617",
		name: "Song Lyrics & Tabs"
	},
	{
		id: "220",
		name: "Music Streams & Downloads"
	},
	{
		id: "1021",
		name: "Pop Music"
	},
	{
		id: "215",
		name: "Radio"
	},
	{
		id: "809",
		name: "Podcasting"
	},
	{
		id: "1186",
		name: "Talk Radio"
	},
	{
		id: "1020",
		name: "Religious Music"
	},
	{
		id: "585",
		name: "Christian & Gospel Music"
	},
	{
		id: "590",
		name: "Rock Music"
	},
	{
		id: "1037",
		name: "Classic Rock & Oldies"
	},
	{
		id: "1035",
		name: "Hard Rock & Progressive"
	},
	{
		id: "1038",
		name: "Indie & Alternative Music"
	},
	{
		id: "1036",
		name: "Metal (Music)"
	},
	{
		id: "1041",
		name: "Punk (Music)"
	},
	{
		id: "893",
		name: "Soundtracks"
	},
	{
		id: "592",
		name: "Urban & Hip-Hop"
	},
	{
		id: "1030",
		name: "Rap & Hip-Hop"
	},
	{
		id: "1242",
		name: "Reggaeton"
	},
	{
		id: "1039",
		name: "Soul & R&B"
	},
	{
		id: "618",
		name: "Vocals & Show Tunes"
	},
	{
		id: "593",
		name: "World Music"
	},
	{
		id: "1208",
		name: "African Music"
	},
	{
		id: "1034",
		name: "Arab & Middle Eastern Music"
	},
	{
		id: "1033",
		name: "East Asian Music"
	},
	{
		id: "591",
		name: "Latin American Music"
	},
	{
		id: "1287",
		name: "Brazilian Music"
	},
	{
		id: "1286",
		name: "Salsa & Tropical Music"
	},
	{
		id: "1031",
		name: "Reggae & Caribbean Music"
	},
	{
		id: "1032",
		name: "South Asian Music"
	},
	{
		id: "33",
		name: "Offbeat"
	},
	{
		id: "538",
		name: "Edgy & Bizarre"
	},
	{
		id: "449",
		name: "Occult & Paranormal"
	},
	{
		id: "613",
		name: "Online Media"
	},
	{
		id: "105",
		name: "Online Games"
	},
	{
		id: "935",
		name: "Massive Multiplayer"
	},
	{
		id: "1222",
		name: "Online Image Galleries"
	},
	{
		id: "978",
		name: "Photo & Image Sharing"
	},
	{
		id: "320",
		name: "Photo Rating Sites"
	},
	{
		id: "574",
		name: "Stock Photography"
	},
	{
		id: "211",
		name: "Online Video"
	},
	{
		id: "979",
		name: "Video Sharing"
	},
	{
		id: "301",
		name: "Web Portals"
	},
	{
		id: "575",
		name: "Webcams & Virtual Tours"
	},
	{
		id: "23",
		name: "Performing Arts"
	},
	{
		id: "894",
		name: "Acting & Theater"
	},
	{
		id: "1243",
		name: "Broadway & Musical Theater"
	},
	{
		id: "581",
		name: "Dance"
	},
	{
		id: "36",
		name: "TV & Video"
	},
	{
		id: "1055",
		name: "TV Commercials"
	},
	{
		id: "1187",
		name: "TV Guides & Reference"
	},
	{
		id: "359",
		name: "TV Networks & Stations"
	},
	{
		id: "358",
		name: "TV Shows & Programs"
	},
	{
		id: "1193",
		name: "TV Dramas"
	},
	{
		id: "1111",
		name: "TV Crime & Legal Shows"
	},
	{
		id: "1194",
		name: "TV Medical Shows"
	},
	{
		id: "357",
		name: "TV Soap Operas"
	},
	{
		id: "1110",
		name: "TV Family-Oriented Shows"
	},
	{
		id: "1050",
		name: "TV Game Shows"
	},
	{
		id: "1049",
		name: "TV Reality Shows"
	},
	{
		id: "1112",
		name: "TV Sci-Fi & Fantasy Shows"
	},
	{
		id: "1048",
		name: "TV Talk Shows"
	},
	{
		id: "24",
		name: "Visual Art & Design"
	},
	{
		id: "477",
		name: "Architecture"
	},
	{
		id: "1361",
		name: "Art & Craft Supplies"
	},
	{
		id: "1195",
		name: "Arts Education"
	},
	{
		id: "653",
		name: "Design"
	},
	{
		id: "1300",
		name: "CAD & CAM"
	},
	{
		id: "654",
		name: "Graphic Design"
	},
	{
		id: "655",
		name: "Industrial & Product Design"
	},
	{
		id: "656",
		name: "Interior Design"
	},
	{
		id: "1167",
		name: "Painting"
	},
	{
		id: "439",
		name: "Photographic & Digital Arts"
	},
	{
		id: "573",
		name: "Camera & Photo Equipment"
	},
	{
		id: "1384",
		name: "Binoculars, Telescopes & Optical Devices"
	},
	{
		id: "306",
		name: "Cameras & Camcorders"
	},
	{
		id: "308",
		name: "Camcorders"
	},
	{
		id: "1383",
		name: "Camera Lenses"
	},
	{
		id: "307",
		name: "Cameras"
	},
	{
		id: "577",
		name: "Photo & Video Software"
	},
	{
		id: "1315",
		name: "Video File Formats & Codecs"
	},
	{
		id: "47",
		name: "Autos & Vehicles"
	},
	{
		id: "1190",
		name: "Automotive Industry"
	},
	{
		id: "1191",
		name: "Bicycles & Accessories"
	},
	{
		id: "1140",
		name: "Boats & Watercraft"
	},
	{
		id: "1213",
		name: "Campers & RVs"
	},
	{
		id: "1013",
		name: "Classic Vehicles"
	},
	{
		id: "1214",
		name: "Commercial Vehicles"
	},
	{
		id: "1215",
		name: "Cargo Trucks & Trailers"
	},
	{
		id: "806",
		name: "Custom & Performance Vehicles"
	},
	{
		id: "810",
		name: "Hybrid & Alternative Vehicles"
	},
	{
		id: "1380",
		name: "Electric & Plug-In Vehicles"
	},
	{
		id: "1317",
		name: "Microcars & City Cars"
	},
	{
		id: "273",
		name: "Motorcycles"
	},
	{
		id: "148",
		name: "Off-Road Vehicles"
	},
	{
		id: "1147",
		name: "Personal Aircraft"
	},
	{
		id: "1212",
		name: "Scooters & Mopeds"
	},
	{
		id: "610",
		name: "Trucks & SUVs"
	},
	{
		id: "1057",
		name: "SUVs"
	},
	{
		id: "1056",
		name: "Trucks"
	},
	{
		id: "1058",
		name: "Vans & Minivans"
	},
	{
		id: "815",
		name: "Vehicle Brands"
	},
	{
		id: "820",
		name: "Acura"
	},
	{
		id: "821",
		name: "Audi"
	},
	{
		id: "1059",
		name: "Bentley"
	},
	{
		id: "822",
		name: "BMW"
	},
	{
		id: "1060",
		name: "Buick"
	},
	{
		id: "823",
		name: "Cadillac"
	},
	{
		id: "826",
		name: "Chevrolet"
	},
	{
		id: "833",
		name: "Chrysler"
	},
	{
		id: "834",
		name: "Citroën"
	},
	{
		id: "836",
		name: "Dodge"
	},
	{
		id: "1061",
		name: "Ferrari"
	},
	{
		id: "838",
		name: "Fiat"
	},
	{
		id: "840",
		name: "Ford"
	},
	{
		id: "896",
		name: "GM-Daewoo"
	},
	{
		id: "842",
		name: "GMC"
	},
	{
		id: "843",
		name: "Honda"
	},
	{
		id: "1062",
		name: "Hummer"
	},
	{
		id: "845",
		name: "Hyundai"
	},
	{
		id: "1378",
		name: "Isuzu"
	},
	{
		id: "1063",
		name: "Jaguar"
	},
	{
		id: "846",
		name: "Jeep"
	},
	{
		id: "848",
		name: "Kia"
	},
	{
		id: "1064",
		name: "Lamborghini"
	},
	{
		id: "1065",
		name: "Land Rover"
	},
	{
		id: "849",
		name: "Lexus"
	},
	{
		id: "850",
		name: "Lincoln"
	},
	{
		id: "1066",
		name: "Maserati"
	},
	{
		id: "851",
		name: "Mazda"
	},
	{
		id: "852",
		name: "Mercedes-Benz"
	},
	{
		id: "853",
		name: "Mercury"
	},
	{
		id: "1067",
		name: "Mini"
	},
	{
		id: "854",
		name: "Mitsubishi"
	},
	{
		id: "855",
		name: "Nissan"
	},
	{
		id: "1377",
		name: "Infiniti"
	},
	{
		id: "856",
		name: "Peugeot"
	},
	{
		id: "857",
		name: "Pontiac"
	},
	{
		id: "858",
		name: "Porsche"
	},
	{
		id: "859",
		name: "Renault-Samsung"
	},
	{
		id: "1068",
		name: "Rolls-Royce"
	},
	{
		id: "897",
		name: "Saab"
	},
	{
		id: "860",
		name: "Saturn"
	},
	{
		id: "861",
		name: "Subaru"
	},
	{
		id: "1070",
		name: "Suzuki"
	},
	{
		id: "863",
		name: "Toyota"
	},
	{
		id: "1069",
		name: "Scion"
	},
	{
		id: "898",
		name: "Vauxhall-Opel"
	},
	{
		id: "865",
		name: "Volkswagen"
	},
	{
		id: "867",
		name: "Volvo"
	},
	{
		id: "1294",
		name: "Vehicle Codes & Driving Laws"
	},
	{
		id: "968",
		name: "Drunk Driving Law"
	},
	{
		id: "170",
		name: "Vehicle Licensing & Registration"
	},
	{
		id: "138",
		name: "Vehicle Maintenance"
	},
	{
		id: "89",
		name: "Vehicle Parts & Accessories"
	},
	{
		id: "1217",
		name: "Auto Exterior"
	},
	{
		id: "1218",
		name: "Auto Interior"
	},
	{
		id: "1188",
		name: "Car Electronics"
	},
	{
		id: "230",
		name: "Car Audio"
	},
	{
		id: "1189",
		name: "Car Video"
	},
	{
		id: "794",
		name: "GPS & Navigation"
	},
	{
		id: "1216",
		name: "Engine & Transmission"
	},
	{
		id: "1269",
		name: "Vehicle Fuels & Lubricants"
	},
	{
		id: "438",
		name: "Vehicle Wheels & Tires"
	},
	{
		id: "473",
		name: "Vehicle Shopping"
	},
	{
		id: "1268",
		name: "Fuel Economy & Gas Prices"
	},
	{
		id: "1267",
		name: "Vehicle Specs, Reviews & Comparisons"
	},
	{
		id: "803",
		name: "Vehicle Shows"
	},
	{
		id: "44",
		name: "Beauty & Fitness"
	},
	{
		id: "1219",
		name: "Beauty Pageants"
	},
	{
		id: "239",
		name: "Body Art"
	},
	{
		id: "1220",
		name: "Cosmetic Procedures"
	},
	{
		id: "238",
		name: "Cosmetic Surgery"
	},
	{
		id: "147",
		name: "Cosmetology & Beauty Professionals"
	},
	{
		id: "143",
		name: "Face & Body Care"
	},
	{
		id: "244",
		name: "Hygiene & Toiletries"
	},
	{
		id: "234",
		name: "Make-Up & Cosmetics"
	},
	{
		id: "242",
		name: "Perfumes & Fragrances"
	},
	{
		id: "93",
		name: "Skin & Nail Care"
	},
	{
		id: "144",
		name: "Unwanted Body & Facial Hair Removal"
	},
	{
		id: "185",
		name: "Fashion & Style"
	},
	{
		id: "98",
		name: "Fashion Designers & Collections"
	},
	{
		id: "1155",
		name: "Fashion Modeling"
	},
	{
		id: "94",
		name: "Fitness"
	},
	{
		id: "241",
		name: "Bodybuilding"
	},
	{
		id: "611",
		name: "Yoga & Pilates"
	},
	{
		id: "146",
		name: "Hair Care"
	},
	{
		id: "235",
		name: "Hair Loss"
	},
	{
		id: "145",
		name: "Spas & Beauty Services"
	},
	{
		id: "557",
		name: "Massage Therapy"
	},
	{
		id: "236",
		name: "Weight Loss"
	},
	{
		id: "22",
		name: "Books & Literature"
	},
	{
		id: "690",
		name: "Biographies & Quotations"
	},
	{
		id: "355",
		name: "Book Retailers"
	},
	{
		id: "1183",
		name: "Children's Literature"
	},
	{
		id: "608",
		name: "E-Books"
	},
	{
		id: "540",
		name: "Fan Fiction"
	},
	{
		id: "1184",
		name: "Literary Classics"
	},
	{
		id: "412",
		name: "Magazines"
	},
	{
		id: "565",
		name: "Poetry"
	},
	{
		id: "1177",
		name: "Writers Resources"
	},
	{
		id: "12",
		name: "Business & Industrial"
	},
	{
		id: "25",
		name: "Advertising & Marketing"
	},
	{
		id: "83",
		name: "Marketing Services"
	},
	{
		id: "1309",
		name: "Loyalty Cards & Programs"
	},
	{
		id: "327",
		name: "Public Relations"
	},
	{
		id: "84",
		name: "Search Engine Optimization & Marketing"
	},
	{
		id: "328",
		name: "Telemarketing"
	},
	{
		id: "356",
		name: "Aerospace & Defense"
	},
	{
		id: "669",
		name: "Defense Industry"
	},
	{
		id: "668",
		name: "Space Technology"
	},
	{
		id: "46",
		name: "Agriculture & Forestry"
	},
	{
		id: "748",
		name: "Agricultural Equipment"
	},
	{
		id: "747",
		name: "Aquaculture"
	},
	{
		id: "749",
		name: "Crops & Seed"
	},
	{
		id: "621",
		name: "Food Production"
	},
	{
		id: "750",
		name: "Forestry"
	},
	{
		id: "751",
		name: "Horticulture"
	},
	{
		id: "752",
		name: "Livestock"
	},
	{
		id: "799",
		name: "Business Education"
	},
	{
		id: "1138",
		name: "Business Finance"
	},
	{
		id: "1160",
		name: "Commercial Lending"
	},
	{
		id: "1139",
		name: "Investment Banking"
	},
	{
		id: "620",
		name: "Risk Management"
	},
	{
		id: "905",
		name: "Venture Capital"
	},
	{
		id: "784",
		name: "Business News"
	},
	{
		id: "1179",
		name: "Company News"
	},
	{
		id: "1240",
		name: "Company Earnings"
	},
	{
		id: "1241",
		name: "Mergers & Acquisitions"
	},
	{
		id: "1164",
		name: "Economy News"
	},
	{
		id: "1163",
		name: "Financial Markets"
	},
	{
		id: "1165",
		name: "Fiscal Policy News"
	},
	{
		id: "1159",
		name: "Business Operations"
	},
	{
		id: "336",
		name: "Business Plans & Presentations"
	},
	{
		id: "157",
		name: "Human Resources"
	},
	{
		id: "723",
		name: "Compensation & Benefits"
	},
	{
		id: "331",
		name: "Corporate Training"
	},
	{
		id: "724",
		name: "Payroll Services"
	},
	{
		id: "330",
		name: "Recruitment & Staffing"
	},
	{
		id: "338",
		name: "Management"
	},
	{
		id: "721",
		name: "Business Process"
	},
	{
		id: "1360",
		name: "Project Management"
	},
	{
		id: "1359",
		name: "Project Management Software"
	},
	{
		id: "722",
		name: "Strategic Planning"
	},
	{
		id: "801",
		name: "Supply Chain Management"
	},
	{
		id: "329",
		name: "Business Services"
	},
	{
		id: "1162",
		name: "Consulting"
	},
	{
		id: "334",
		name: "Corporate Events"
	},
	{
		id: "335",
		name: "Trade Shows & Conventions"
	},
	{
		id: "340",
		name: "E-Commerce Services"
	},
	{
		id: "280",
		name: "Merchant Services & Payment Systems"
	},
	{
		id: "726",
		name: "Fire & Security Services"
	},
	{
		id: "800",
		name: "Knowledge Management"
	},
	{
		id: "28",
		name: "Office Services"
	},
	{
		id: "337",
		name: "Office & Facilities Management"
	},
	{
		id: "95",
		name: "Office Supplies"
	},
	{
		id: "1375",
		name: "Business Cards & Stationary"
	},
	{
		id: "333",
		name: "Office Furniture"
	},
	{
		id: "1330",
		name: "Printers, Copiers & Fax"
	},
	{
		id: "1331",
		name: "Copiers"
	},
	{
		id: "1332",
		name: "Fax Machines"
	},
	{
		id: "1333",
		name: "Ink & Toner"
	},
	{
		id: "494",
		name: "Printers"
	},
	{
		id: "495",
		name: "Scanners"
	},
	{
		id: "718",
		name: "Outsourcing"
	},
	{
		id: "576",
		name: "Photo & Video Services"
	},
	{
		id: "719",
		name: "Physical Asset Management"
	},
	{
		id: "720",
		name: "Quality Control & Tracking"
	},
	{
		id: "1076",
		name: "Signage"
	},
	{
		id: "725",
		name: "Writing & Editing Services"
	},
	{
		id: "288",
		name: "Chemicals Industry"
	},
	{
		id: "670",
		name: "Agrochemicals"
	},
	{
		id: "671",
		name: "Cleaning Agents"
	},
	{
		id: "672",
		name: "Coatings & Adhesives"
	},
	{
		id: "673",
		name: "Dyes & Pigments"
	},
	{
		id: "674",
		name: "Plastics & Polymers"
	},
	{
		id: "48",
		name: "Construction & Maintenance"
	},
	{
		id: "650",
		name: "Building Materials & Supplies"
	},
	{
		id: "827",
		name: "Doors & Windows"
	},
	{
		id: "828",
		name: "HVAC & Climate Control"
	},
	{
		id: "829",
		name: "Nails Screws & Fasteners"
	},
	{
		id: "830",
		name: "Plumbing Fixtures & Equipment"
	},
	{
		id: "831",
		name: "Wood & Plastics"
	},
	{
		id: "651",
		name: "Civil Engineering"
	},
	{
		id: "652",
		name: "Construction Consulting & Contracting"
	},
	{
		id: "686",
		name: "Urban & Regional Planning"
	},
	{
		id: "233",
		name: "Energy & Utilities"
	},
	{
		id: "658",
		name: "Electricity"
	},
	{
		id: "954",
		name: "Nuclear Energy"
	},
	{
		id: "659",
		name: "Oil & Gas"
	},
	{
		id: "657",
		name: "Renewable & Alternative Energy"
	},
	{
		id: "660",
		name: "Waste Management"
	},
	{
		id: "1307",
		name: "Recycling"
	},
	{
		id: "1349",
		name: "Water Supply & Treatment"
	},
	{
		id: "77",
		name: "Enterprise Technology"
	},
	{
		id: "341",
		name: "Customer Relationship Management (CRM)"
	},
	{
		id: "343",
		name: "Data Management"
	},
	{
		id: "342",
		name: "Enterprise Resource Planning (ERP)"
	},
	{
		id: "955",
		name: "Hospitality Industry"
	},
	{
		id: "956",
		name: "Event Planning"
	},
	{
		id: "957",
		name: "Food Service"
	},
	{
		id: "121",
		name: "Grocery & Food Retailers"
	},
	{
		id: "816",
		name: "Restaurant Supply"
	},
	{
		id: "287",
		name: "Industrial Materials & Equipment"
	},
	{
		id: "1152",
		name: "Fluid Handling"
	},
	{
		id: "839",
		name: "Valves Hoses & Fittings"
	},
	{
		id: "835",
		name: "Generators"
	},
	{
		id: "837",
		name: "Heavy Machinery"
	},
	{
		id: "49",
		name: "Manufacturing"
	},
	{
		id: "661",
		name: "Factory Automation"
	},
	{
		id: "606",
		name: "Metals & Mining"
	},
	{
		id: "255",
		name: "Pharmaceuticals & Biotech"
	},
	{
		id: "1176",
		name: "Printing & Publishing"
	},
	{
		id: "332",
		name: "Document & Printing Services"
	},
	{
		id: "1204",
		name: "Journalism & News Industry"
	},
	{
		id: "1199",
		name: "Professional & Trade Associations"
	},
	{
		id: "841",
		name: "Retail Trade"
	},
	{
		id: "844",
		name: "Retail Equipment & Technology"
	},
	{
		id: "551",
		name: "Small Business"
	},
	{
		id: "1200",
		name: "Business Formation"
	},
	{
		id: "727",
		name: "Home Office"
	},
	{
		id: "552",
		name: "MLM & Business Opportunities"
	},
	{
		id: "566",
		name: "Textiles & Nonwovens"
	},
	{
		id: "50",
		name: "Transportation & Logistics"
	},
	{
		id: "662",
		name: "Aviation"
	},
	{
		id: "664",
		name: "Distribution & Logistics"
	},
	{
		id: "289",
		name: "Freight & Trucking"
	},
	{
		id: "354",
		name: "Import & Export"
	},
	{
		id: "1150",
		name: "Mail & Package Delivery"
	},
	{
		id: "663",
		name: "Couriers & Messengers"
	},
	{
		id: "665",
		name: "Maritime Transport"
	},
	{
		id: "291",
		name: "Moving & Relocation"
	},
	{
		id: "290",
		name: "Packaging"
	},
	{
		id: "1306",
		name: "Parking"
	},
	{
		id: "1245",
		name: "Airport Parking & Transportation"
	},
	{
		id: "1347",
		name: "Public Storage"
	},
	{
		id: "666",
		name: "Rail Transport"
	},
	{
		id: "667",
		name: "Urban Transport"
	},
	{
		id: "5",
		name: "Computers & Electronics"
	},
	{
		id: "30",
		name: "Computer Hardware"
	},
	{
		id: "717",
		name: "Computer Components"
	},
	{
		id: "741",
		name: "Chips & Processors"
	},
	{
		id: "226",
		name: "Computer Memory"
	},
	{
		id: "740",
		name: "Sound & Video Cards"
	},
	{
		id: "496",
		name: "Computer Drives & Storage"
	},
	{
		id: "1321",
		name: "CD & DVD Drives & Burners"
	},
	{
		id: "1322",
		name: "CD & DVD Storage Media"
	},
	{
		id: "1323",
		name: "Data Backup & Recovery"
	},
	{
		id: "1318",
		name: "Flash Drives & Memory Cards"
	},
	{
		id: "1320",
		name: "Hard Drives"
	},
	{
		id: "1319",
		name: "Memory Card Readers"
	},
	{
		id: "729",
		name: "Network Storage"
	},
	{
		id: "312",
		name: "Computer Peripherals"
	},
	{
		id: "487",
		name: "Computer Monitors & Displays"
	},
	{
		id: "493",
		name: "Input Devices"
	},
	{
		id: "728",
		name: "Computer Servers"
	},
	{
		id: "309",
		name: "Desktop Computers"
	},
	{
		id: "739",
		name: "Hardware Modding & Tuning"
	},
	{
		id: "310",
		name: "Laptops & Notebooks"
	},
	{
		id: "1277",
		name: "Tablet PCs"
	},
	{
		id: "314",
		name: "Computer Security"
	},
	{
		id: "315",
		name: "Antivirus & Malware"
	},
	{
		id: "344",
		name: "Network Security"
	},
	{
		id: "78",
		name: "Consumer Electronics"
	},
	{
		id: "361",
		name: "Audio Equipment"
	},
	{
		id: "1396",
		name: "Headphones"
	},
	{
		id: "227",
		name: "MP3 & Portable Media Players"
	},
	{
		id: "1158",
		name: "Speakers"
	},
	{
		id: "91",
		name: "Stereo Systems & Components"
	},
	{
		id: "1192",
		name: "Electronic Accessories"
	},
	{
		id: "362",
		name: "Gadgets & Portable Electronics"
	},
	{
		id: "1324",
		name: "E-Book Readers"
	},
	{
		id: "1046",
		name: "Handheld Game Consoles"
	},
	{
		id: "228",
		name: "PDAs & Handhelds"
	},
	{
		id: "899",
		name: "Game Systems & Consoles"
	},
	{
		id: "1043",
		name: "Nintendo"
	},
	{
		id: "1044",
		name: "Sony PlayStation"
	},
	{
		id: "1045",
		name: "Xbox"
	},
	{
		id: "229",
		name: "TV & Video Equipment"
	},
	{
		id: "1393",
		name: "DVRs & Set-Top Boxes"
	},
	{
		id: "1157",
		name: "Home Theater Systems"
	},
	{
		id: "1334",
		name: "Projectors & Screens"
	},
	{
		id: "305",
		name: "Televisions"
	},
	{
		id: "1354",
		name: "HDTVs"
	},
	{
		id: "1356",
		name: "LCD TVs"
	},
	{
		id: "1355",
		name: "Plasma TVs"
	},
	{
		id: "1357",
		name: "Projection TVs"
	},
	{
		id: "492",
		name: "Video Players & Recorders"
	},
	{
		id: "1394",
		name: "Blu-Ray Players & Recorders"
	},
	{
		id: "1395",
		name: "DVD Players & Recorders"
	},
	{
		id: "434",
		name: "Electronics & Electrical"
	},
	{
		id: "900",
		name: "Data Sheets & Electronics Reference"
	},
	{
		id: "743",
		name: "Electromechanical Devices"
	},
	{
		id: "742",
		name: "Electronic Components"
	},
	{
		id: "744",
		name: "Optoelectronics & Fiber"
	},
	{
		id: "745",
		name: "Power Supplies"
	},
	{
		id: "746",
		name: "Test & Measurement"
	},
	{
		id: "311",
		name: "Networking"
	},
	{
		id: "488",
		name: "Data Formats & Protocols"
	},
	{
		id: "1298",
		name: "Distributed & Parallel Computing"
	},
	{
		id: "347",
		name: "Network Monitoring & Management"
	},
	{
		id: "346",
		name: "Networking Equipment"
	},
	{
		id: "1279",
		name: "VPN & Remote Access"
	},
	{
		id: "31",
		name: "Programming"
	},
	{
		id: "731",
		name: "C & C++"
	},
	{
		id: "802",
		name: "Developer Jobs"
	},
	{
		id: "730",
		name: "Development Tools"
	},
	{
		id: "732",
		name: "Java"
	},
	{
		id: "733",
		name: "Scripting Languages"
	},
	{
		id: "734",
		name: "Windows & .NET"
	},
	{
		id: "32",
		name: "Software"
	},
	{
		id: "498",
		name: "Business & Productivity Software"
	},
	{
		id: "1341",
		name: "Accounting & Financial Software"
	},
	{
		id: "1358",
		name: "Calendar & Scheduling Software"
	},
	{
		id: "1346",
		name: "Presentation Software"
	},
	{
		id: "1344",
		name: "Spreadsheet Software"
	},
	{
		id: "1345",
		name: "Word Processing Software"
	},
	{
		id: "225",
		name: "Device Drivers"
	},
	{
		id: "804",
		name: "Educational Software"
	},
	{
		id: "901",
		name: "Freeware & Shareware"
	},
	{
		id: "807",
		name: "Internet Software"
	},
	{
		id: "808",
		name: "Content Management"
	},
	{
		id: "304",
		name: "Internet Clients & Browsers"
	},
	{
		id: "902",
		name: "Proxying & Filtering"
	},
	{
		id: "1109",
		name: "Mobile Apps & Add-Ons"
	},
	{
		id: "532",
		name: "Ringtones & Mobile Goodies"
	},
	{
		id: "497",
		name: "Multimedia Software"
	},
	{
		id: "1089",
		name: "Audio & Music Software"
	},
	{
		id: "1092",
		name: "Audio Files Formats & Codecs"
	},
	{
		id: "1088",
		name: "Desktop Publishing"
	},
	{
		id: "805",
		name: "Fonts"
	},
	{
		id: "486",
		name: "Graphics & Animation Software"
	},
	{
		id: "1090",
		name: "Media Players"
	},
	{
		id: "313",
		name: "Open Source"
	},
	{
		id: "303",
		name: "Operating Systems"
	},
	{
		id: "736",
		name: "Linux & Unix"
	},
	{
		id: "735",
		name: "Mac OS"
	},
	{
		id: "1382",
		name: "Mobile OS"
	},
	{
		id: "737",
		name: "Windows OS"
	},
	{
		id: "224",
		name: "Software Utilities"
	},
	{
		id: "1142",
		name: "Web Apps & Online Tools"
	},
	{
		id: "567",
		name: "Technical Support"
	},
	{
		id: "785",
		name: "Technology News"
	},
	{
		id: "7",
		name: "Finance"
	},
	{
		id: "278",
		name: "Accounting & Auditing"
	},
	{
		id: "1283",
		name: "Tax Preparation & Planning"
	},
	{
		id: "37",
		name: "Banking"
	},
	{
		id: "279",
		name: "Credit & Lending"
	},
	{
		id: "468",
		name: "Auto Financing"
	},
	{
		id: "813",
		name: "College Financing"
	},
	{
		id: "811",
		name: "Credit Cards"
	},
	{
		id: "812",
		name: "Debt Management"
	},
	{
		id: "466",
		name: "Home Financing"
	},
	{
		id: "814",
		name: "Currencies & Foreign Exchange"
	},
	{
		id: "903",
		name: "Financial Planning"
	},
	{
		id: "1282",
		name: "Grants & Financial Assistance"
	},
	{
		id: "38",
		name: "Insurance"
	},
	{
		id: "467",
		name: "Auto Insurance"
	},
	{
		id: "249",
		name: "Health Insurance"
	},
	{
		id: "465",
		name: "Home Insurance"
	},
	{
		id: "107",
		name: "Investing"
	},
	{
		id: "904",
		name: "Commodities & Futures Trading"
	},
	{
		id: "619",
		name: "Retirement & Pension"
	},
	{
		id: "71",
		name: "Food & Drink"
	},
	{
		id: "277",
		name: "Alcoholic Beverages"
	},
	{
		id: "404",
		name: "Beer"
	},
	{
		id: "406",
		name: "Liquor"
	},
	{
		id: "405",
		name: "Wine"
	},
	{
		id: "906",
		name: "Candy & Sweets"
	},
	{
		id: "122",
		name: "Cooking & Recipes"
	},
	{
		id: "907",
		name: "Baked Goods"
	},
	{
		id: "908",
		name: "Fruits & Vegetables"
	},
	{
		id: "909",
		name: "Meat & Seafood"
	},
	{
		id: "910",
		name: "Soups & Stews"
	},
	{
		id: "825",
		name: "Vegetarian Cuisine"
	},
	{
		id: "911",
		name: "World Cuisines"
	},
	{
		id: "912",
		name: "Asian Cuisine"
	},
	{
		id: "913",
		name: "Latin American Cuisine"
	},
	{
		id: "914",
		name: "Mediterranean Cuisine"
	},
	{
		id: "915",
		name: "North American Cuisine"
	},
	{
		id: "297",
		name: "Culinary Training"
	},
	{
		id: "560",
		name: "Non-Alcoholic Beverages"
	},
	{
		id: "916",
		name: "Coffee & Tea"
	},
	{
		id: "276",
		name: "Restaurants"
	},
	{
		id: "917",
		name: "Dining Guides"
	},
	{
		id: "918",
		name: "Fast Food"
	},
	{
		id: "8",
		name: "Games"
	},
	{
		id: "919",
		name: "Arcade & Coin-Op Games"
	},
	{
		id: "920",
		name: "Board Games"
	},
	{
		id: "921",
		name: "Chess & Abstract Strategy Games"
	},
	{
		id: "922",
		name: "Miniatures & Wargaming"
	},
	{
		id: "39",
		name: "Card Games"
	},
	{
		id: "923",
		name: "Collectible Card Games"
	},
	{
		id: "924",
		name: "Poker & Casino Games"
	},
	{
		id: "41",
		name: "Computer & Video Games"
	},
	{
		id: "1311",
		name: "Action & Platform Games"
	},
	{
		id: "925",
		name: "Adventure Games"
	},
	{
		id: "926",
		name: "Casual Games"
	},
	{
		id: "927",
		name: "Driving & Racing Games"
	},
	{
		id: "928",
		name: "Fighting Games"
	},
	{
		id: "1343",
		name: "Gaming Media & Reference"
	},
	{
		id: "381",
		name: "Game Cheats & Hints"
	},
	{
		id: "929",
		name: "Music & Dance Games"
	},
	{
		id: "930",
		name: "Shooter Games"
	},
	{
		id: "931",
		name: "Simulation Games"
	},
	{
		id: "932",
		name: "Sports Games"
	},
	{
		id: "933",
		name: "Strategy Games"
	},
	{
		id: "1342",
		name: "Video Game Emulation"
	},
	{
		id: "1146",
		name: "Video Game Retailers"
	},
	{
		id: "1290",
		name: "Family-Oriented Games & Activities"
	},
	{
		id: "1397",
		name: "Drawing & Coloring"
	},
	{
		id: "936",
		name: "Party Games"
	},
	{
		id: "937",
		name: "Puzzles & Brainteasers"
	},
	{
		id: "622",
		name: "Roleplaying Games"
	},
	{
		id: "938",
		name: "Table Games"
	},
	{
		id: "939",
		name: "Billiards"
	},
	{
		id: "940",
		name: "Table Tennis"
	},
	{
		id: "45",
		name: "Health"
	},
	{
		id: "623",
		name: "Aging & Geriatrics"
	},
	{
		id: "624",
		name: "Alzheimer's Disease"
	},
	{
		id: "499",
		name: "Alternative & Natural Medicine"
	},
	{
		id: "1239",
		name: "Acupuncture & Chinese Medicine"
	},
	{
		id: "1238",
		name: "Cleansing & Detoxification"
	},
	{
		id: "419",
		name: "Health Conditions"
	},
	{
		id: "625",
		name: "AIDS & HIV"
	},
	{
		id: "626",
		name: "Allergies"
	},
	{
		id: "628",
		name: "Arthritis"
	},
	{
		id: "429",
		name: "Cancer"
	},
	{
		id: "629",
		name: "Cold & Flu"
	},
	{
		id: "630",
		name: "Diabetes"
	},
	{
		id: "1211",
		name: "Ear Nose & Throat"
	},
	{
		id: "571",
		name: "Eating Disorders"
	},
	{
		id: "1328",
		name: "Endocrine Conditions"
	},
	{
		id: "1329",
		name: "Thyroid Conditions"
	},
	{
		id: "941",
		name: "Genetic Disorders"
	},
	{
		id: "638",
		name: "GERD & Digestive Disorders"
	},
	{
		id: "559",
		name: "Heart & Hypertension"
	},
	{
		id: "632",
		name: "Infectious Diseases"
	},
	{
		id: "1262",
		name: "Parasites & Parasitic Diseases"
	},
	{
		id: "421",
		name: "Sexually Transmitted Diseases"
	},
	{
		id: "1263",
		name: "Vaccines & Immunizations"
	},
	{
		id: "817",
		name: "Injury"
	},
	{
		id: "942",
		name: "Neurological Disorders"
	},
	{
		id: "818",
		name: "Obesity"
	},
	{
		id: "819",
		name: "Pain Management"
	},
	{
		id: "631",
		name: "Headaches & Migraines"
	},
	{
		id: "824",
		name: "Respiratory Conditions"
	},
	{
		id: "627",
		name: "Asthma"
	},
	{
		id: "420",
		name: "Skin Conditions"
	},
	{
		id: "633",
		name: "Sleep Disorders"
	},
	{
		id: "254",
		name: "Health Education & Medical Training"
	},
	{
		id: "252",
		name: "Health Foundations & Medical Research"
	},
	{
		id: "1253",
		name: "Health News"
	},
	{
		id: "1256",
		name: "Health Policy"
	},
	{
		id: "251",
		name: "Medical Devices & Equipment"
	},
	{
		id: "1352",
		name: "Assistive Technology"
	},
	{
		id: "1353",
		name: "Mobility Equipment & Accessories"
	},
	{
		id: "256",
		name: "Medical Facilities & Services"
	},
	{
		id: "634",
		name: "Doctors' Offices"
	},
	{
		id: "250",
		name: "Hospitals & Treatment Centers"
	},
	{
		id: "635",
		name: "Medical Procedures"
	},
	{
		id: "943",
		name: "Medical Tests & Exams"
	},
	{
		id: "944",
		name: "Surgery"
	},
	{
		id: "500",
		name: "Physical Therapy"
	},
	{
		id: "253",
		name: "Medical Literature & Resources"
	},
	{
		id: "945",
		name: "Medical Photos & Illustration"
	},
	{
		id: "636",
		name: "Men's Health"
	},
	{
		id: "202",
		name: "Erectile Dysfunction"
	},
	{
		id: "437",
		name: "Mental Health"
	},
	{
		id: "639",
		name: "Anxiety & Stress"
	},
	{
		id: "640",
		name: "Depression"
	},
	{
		id: "641",
		name: "Learning & Developmental Disabilities"
	},
	{
		id: "642",
		name: "ADD & ADHD"
	},
	{
		id: "418",
		name: "Nursing"
	},
	{
		id: "649",
		name: "Assisted Living & Long Term Care"
	},
	{
		id: "456",
		name: "Nutrition"
	},
	{
		id: "457",
		name: "Special & Restricted Diets"
	},
	{
		id: "643",
		name: "Cholesterol Issues"
	},
	{
		id: "237",
		name: "Vitamins & Supplements"
	},
	{
		id: "245",
		name: "Oral & Dental Care"
	},
	{
		id: "645",
		name: "Pediatrics"
	},
	{
		id: "248",
		name: "Pharmacy"
	},
	{
		id: "646",
		name: "Drugs & Medications"
	},
	{
		id: "947",
		name: "Public Health"
	},
	{
		id: "644",
		name: "Occupational Health & Safety"
	},
	{
		id: "946",
		name: "Poisons & Overdoses"
	},
	{
		id: "195",
		name: "Reproductive Health"
	},
	{
		id: "198",
		name: "Birth Control"
	},
	{
		id: "647",
		name: "Infertility"
	},
	{
		id: "558",
		name: "OBGYN"
	},
	{
		id: "401",
		name: "Pregnancy & Maternity"
	},
	{
		id: "536",
		name: "Sex Education & Counseling"
	},
	{
		id: "1236",
		name: "Sexual Enhancement"
	},
	{
		id: "257",
		name: "Substance Abuse"
	},
	{
		id: "1351",
		name: "Drug & Alcohol Testing"
	},
	{
		id: "1350",
		name: "Drug & Alcohol Treatment"
	},
	{
		id: "1237",
		name: "Smoking & Smoking Cessation"
	},
	{
		id: "1235",
		name: "Steroids & Performance-Enhancing Drugs"
	},
	{
		id: "246",
		name: "Vision Care"
	},
	{
		id: "1224",
		name: "Eyeglasses & Contacts"
	},
	{
		id: "648",
		name: "Women's Health"
	},
	{
		id: "65",
		name: "Hobbies & Leisure"
	},
	{
		id: "64",
		name: "Antiques & Collectibles"
	},
	{
		id: "1016",
		name: "Bowling"
	},
	{
		id: "189",
		name: "Clubs & Organizations"
	},
	{
		id: "1276",
		name: "Contests, Awards & Prizes"
	},
	{
		id: "364",
		name: "Lottery & Sweepstakes"
	},
	{
		id: "284",
		name: "Crafts"
	},
	{
		id: "1230",
		name: "Fiber & Textile Arts"
	},
	{
		id: "458",
		name: "Cycling"
	},
	{
		id: "688",
		name: "Outdoors"
	},
	{
		id: "568",
		name: "Equestrian"
	},
	{
		id: "462",
		name: "Fishing"
	},
	{
		id: "542",
		name: "Hiking & Camping"
	},
	{
		id: "461",
		name: "Hunting & Shooting"
	},
	{
		id: "786",
		name: "Paintball"
	},
	{
		id: "66",
		name: "Pets & Animals"
	},
	{
		id: "882",
		name: "Animal Products & Services"
	},
	{
		id: "883",
		name: "Animal Welfare"
	},
	{
		id: "379",
		name: "Pet Food & Supplies"
	},
	{
		id: "380",
		name: "Veterinarians"
	},
	{
		id: "563",
		name: "Pets"
	},
	{
		id: "884",
		name: "Birds"
	},
	{
		id: "885",
		name: "Cats"
	},
	{
		id: "886",
		name: "Dogs"
	},
	{
		id: "607",
		name: "Exotic Pets"
	},
	{
		id: "887",
		name: "Fish & Aquaria"
	},
	{
		id: "888",
		name: "Horses"
	},
	{
		id: "889",
		name: "Rabbits & Rodents"
	},
	{
		id: "890",
		name: "Reptiles & Amphibians"
	},
	{
		id: "119",
		name: "Wildlife"
	},
	{
		id: "1278",
		name: "Insects & Entomology"
	},
	{
		id: "1009",
		name: "Zoos-Aquariums-Preserves"
	},
	{
		id: "787",
		name: "Radio Control & Modeling"
	},
	{
		id: "999",
		name: "Recreational Aviation"
	},
	{
		id: "541",
		name: "Running & Walking"
	},
	{
		id: "977",
		name: "Special Occasions"
	},
	{
		id: "70",
		name: "Gifts & Special Event Items"
	},
	{
		id: "100",
		name: "Cards & Greetings"
	},
	{
		id: "323",
		name: "Flowers"
	},
	{
		id: "99",
		name: "Gifts"
	},
	{
		id: "324",
		name: "Party & Holiday Supplies"
	},
	{
		id: "678",
		name: "Holidays & Seasonal Events"
	},
	{
		id: "1270",
		name: "Birthdays & Name Days"
	},
	{
		id: "1246",
		name: "Carnival & Mardi Gras"
	},
	{
		id: "1274",
		name: "Christian Holidays"
	},
	{
		id: "1078",
		name: "Christmas"
	},
	{
		id: "1123",
		name: "Easter"
	},
	{
		id: "1079",
		name: "Halloween & October 31st"
	},
	{
		id: "1275",
		name: "Islamic Holidays"
	},
	{
		id: "1124",
		name: "Jewish Holidays"
	},
	{
		id: "1271",
		name: "New Year"
	},
	{
		id: "1125",
		name: "Thanksgiving"
	},
	{
		id: "1122",
		name: "Valentine's Day"
	},
	{
		id: "293",
		name: "Weddings"
	},
	{
		id: "502",
		name: "Subcultures & Niche Interests"
	},
	{
		id: "503",
		name: "Goth Subculture"
	},
	{
		id: "676",
		name: "Science Fiction & Fantasy"
	},
	{
		id: "1002",
		name: "Water Activities"
	},
	{
		id: "459",
		name: "Boating"
	},
	{
		id: "1305",
		name: "Diving & Underwater Activities"
	},
	{
		id: "689",
		name: "Surf & Swim"
	},
	{
		id: "118",
		name: "Water Sports"
	},
	{
		id: "11",
		name: "Home & Garden"
	},
	{
		id: "948",
		name: "Bed & Bath"
	},
	{
		id: "1365",
		name: "Bathroom"
	},
	{
		id: "1366",
		name: "Bedroom"
	},
	{
		id: "1369",
		name: "Bedding & Bed Linens"
	},
	{
		id: "1367",
		name: "Beds & Headboards"
	},
	{
		id: "1368",
		name: "Mattresses"
	},
	{
		id: "472",
		name: "Domestic Services"
	},
	{
		id: "949",
		name: "Cleaning Supplies & Services"
	},
	{
		id: "269",
		name: "Gardening & Landscaping"
	},
	{
		id: "271",
		name: "Home Appliances"
	},
	{
		id: "1293",
		name: "Major Kitchen Appliances"
	},
	{
		id: "1292",
		name: "Small Kitchen Appliances"
	},
	{
		id: "1371",
		name: "Water Filters & Purifiers"
	},
	{
		id: "270",
		name: "Home Furnishings"
	},
	{
		id: "1363",
		name: "Clocks"
	},
	{
		id: "272",
		name: "Lamps & Lighting"
	},
	{
		id: "1362",
		name: "Rugs & Carpets"
	},
	{
		id: "1370",
		name: "Sofas & Chairs"
	},
	{
		id: "158",
		name: "Home Improvement"
	},
	{
		id: "950",
		name: "Construction & Power Tools"
	},
	{
		id: "832",
		name: "Flooring"
	},
	{
		id: "1232",
		name: "House Painting & Finishing"
	},
	{
		id: "1153",
		name: "Plumbing"
	},
	{
		id: "1175",
		name: "Roofing"
	},
	{
		id: "1348",
		name: "Home Storage & Shelving"
	},
	{
		id: "137",
		name: "Homemaking & Interior Decor"
	},
	{
		id: "951",
		name: "Kitchen & Dining"
	},
	{
		id: "120",
		name: "Cookware & Diningware"
	},
	{
		id: "1373",
		name: "Cutlery & Cutting Accessories"
	},
	{
		id: "1364",
		name: "Laundry"
	},
	{
		id: "1372",
		name: "Nursery & Playroom"
	},
	{
		id: "471",
		name: "Pest Control"
	},
	{
		id: "952",
		name: "Swimming Pools & Spas"
	},
	{
		id: "953",
		name: "Yard & Patio"
	},
	{
		id: "13",
		name: "Internet & Telecom"
	},
	{
		id: "385",
		name: "Communications Equipment"
	},
	{
		id: "1182",
		name: "Radio Equipment"
	},
	{
		id: "394",
		name: "Email & Messaging"
	},
	{
		id: "1381",
		name: "Microblogging"
	},
	{
		id: "1379",
		name: "Text & Instant Messaging"
	},
	{
		id: "386",
		name: "Voice & Video Chat"
	},
	{
		id: "382",
		name: "Mobile & Wireless"
	},
	{
		id: "1171",
		name: "Mobile & Wireless Accessories"
	},
	{
		id: "1170",
		name: "Bluetooth Accessories"
	},
	{
		id: "390",
		name: "Mobile Phones"
	},
	{
		id: "1071",
		name: "Smart Phones"
	},
	{
		id: "485",
		name: "Search Engines"
	},
	{
		id: "1234",
		name: "People Search"
	},
	{
		id: "383",
		name: "Service Providers"
	},
	{
		id: "501",
		name: "Cable & Satellite Providers"
	},
	{
		id: "104",
		name: "ISPs"
	},
	{
		id: "384",
		name: "Phone Service Providers"
	},
	{
		id: "389",
		name: "Calling Cards"
	},
	{
		id: "392",
		name: "Teleconferencing"
	},
	{
		id: "302",
		name: "Web Services"
	},
	{
		id: "326",
		name: "Affiliate Programs"
	},
	{
		id: "422",
		name: "Web Design & Development"
	},
	{
		id: "53",
		name: "Web Hosting & Domain Registration"
	},
	{
		id: "675",
		name: "Web Stats & Analytics"
	},
	{
		id: "958",
		name: "Jobs & Education"
	},
	{
		id: "74",
		name: "Education"
	},
	{
		id: "1289",
		name: "Academic Conferences & Publications"
	},
	{
		id: "1015",
		name: "Alumni & Reunions"
	},
	{
		id: "372",
		name: "Colleges & Universities"
	},
	{
		id: "367",
		name: "Distance Learning"
	},
	{
		id: "1012",
		name: "Early Childhood Education"
	},
	{
		id: "1266",
		name: "Foreign Language Study"
	},
	{
		id: "791",
		name: "Homeschooling"
	},
	{
		id: "792",
		name: "Legal Education"
	},
	{
		id: "371",
		name: "Primary & Secondary Schooling (K-12)"
	},
	{
		id: "1118",
		name: "Special Education"
	},
	{
		id: "373",
		name: "Standardized & Admissions Tests"
	},
	{
		id: "1308",
		name: "Study Abroad"
	},
	{
		id: "700",
		name: "Teaching & Classroom Resources"
	},
	{
		id: "1388",
		name: "Training & Certification"
	},
	{
		id: "369",
		name: "Vocational & Continuing Education"
	},
	{
		id: "1229",
		name: "Computer Education"
	},
	{
		id: "60",
		name: "Jobs"
	},
	{
		id: "959",
		name: "Career Resources & Planning"
	},
	{
		id: "960",
		name: "Job Listings"
	},
	{
		id: "961",
		name: "Resumes & Portfolios"
	},
	{
		id: "19",
		name: "Law & Government"
	},
	{
		id: "76",
		name: "Government"
	},
	{
		id: "1075",
		name: "Courts & Judiciary"
	},
	{
		id: "962",
		name: "Embassies & Consulates"
	},
	{
		id: "963",
		name: "Executive Branch"
	},
	{
		id: "1387",
		name: "Government Agencies"
	},
	{
		id: "1385",
		name: "Government Contracting & Procurement"
	},
	{
		id: "1221",
		name: "Intelligence & Counterterrorism"
	},
	{
		id: "964",
		name: "Legislative Branch"
	},
	{
		id: "1386",
		name: "Lobbying"
	},
	{
		id: "965",
		name: "Multilateral Organizations"
	},
	{
		id: "1161",
		name: "Public Finance"
	},
	{
		id: "1316",
		name: "Public Policy"
	},
	{
		id: "1314",
		name: "Drug Laws & Policy"
	},
	{
		id: "1313",
		name: "Immigration Policy & Border Issues"
	},
	{
		id: "521",
		name: "International Relations"
	},
	{
		id: "702",
		name: "Royalty"
	},
	{
		id: "966",
		name: "State & Local Government"
	},
	{
		id: "555",
		name: "Visa & Immigration"
	},
	{
		id: "75",
		name: "Legal"
	},
	{
		id: "427",
		name: "Accident & Personal Injury Law"
	},
	{
		id: "423",
		name: "Bankruptcy"
	},
	{
		id: "1272",
		name: "Business & Corporate Law"
	},
	{
		id: "967",
		name: "Constitutional Law & Civil Rights"
	},
	{
		id: "424",
		name: "Criminal Law"
	},
	{
		id: "522",
		name: "Family Law"
	},
	{
		id: "426",
		name: "Intellectual Property"
	},
	{
		id: "701",
		name: "Labor & Employment Law"
	},
	{
		id: "969",
		name: "Legal Services"
	},
	{
		id: "970",
		name: "Product Liability"
	},
	{
		id: "366",
		name: "Military"
	},
	{
		id: "1247",
		name: "Air Force"
	},
	{
		id: "1248",
		name: "Army"
	},
	{
		id: "1250",
		name: "Marines"
	},
	{
		id: "1288",
		name: "Military History"
	},
	{
		id: "1249",
		name: "Navy"
	},
	{
		id: "793",
		name: "Veterans"
	},
	{
		id: "166",
		name: "Public Safety"
	},
	{
		id: "704",
		name: "Crime & Justice"
	},
	{
		id: "1181",
		name: "Corporate & Financial Crime"
	},
	{
		id: "1312",
		name: "Gangs & Organized Crime"
	},
	{
		id: "1284",
		name: "Prisons & Corrections"
	},
	{
		id: "168",
		name: "Emergency Services"
	},
	{
		id: "535",
		name: "Law Enforcement"
	},
	{
		id: "705",
		name: "Security Products & Services"
	},
	{
		id: "508",
		name: "Social Services"
	},
	{
		id: "511",
		name: "Counseling Services"
	},
	{
		id: "706",
		name: "Welfare & Unemployment"
	},
	{
		id: "16",
		name: "News"
	},
	{
		id: "112",
		name: "Broadcast & Network News"
	},
	{
		id: "507",
		name: "Gossip & Tabloid News"
	},
	{
		id: "1259",
		name: "Scandals & Investigations"
	},
	{
		id: "572",
		name: "Local News"
	},
	{
		id: "408",
		name: "Newspapers"
	},
	{
		id: "396",
		name: "Politics"
	},
	{
		id: "398",
		name: "Campaigns & Elections"
	},
	{
		id: "410",
		name: "Left-Wing Politics"
	},
	{
		id: "1203",
		name: "Media Critics & Watchdogs"
	},
	{
		id: "1201",
		name: "Opinion & Commentary"
	},
	{
		id: "1202",
		name: "Political Polls & Surveys"
	},
	{
		id: "409",
		name: "Right-Wing Politics"
	},
	{
		id: "1077",
		name: "Sports News"
	},
	{
		id: "63",
		name: "Weather"
	},
	{
		id: "1209",
		name: "World News"
	},
	{
		id: "299",
		name: "Online Communities"
	},
	{
		id: "504",
		name: "Blogging Resources & Services"
	},
	{
		id: "55",
		name: "Dating & Personals"
	},
	{
		id: "546",
		name: "Matrimonial Services"
	},
	{
		id: "102",
		name: "Personals"
	},
	{
		id: "321",
		name: "File Sharing & Hosting"
	},
	{
		id: "191",
		name: "Forum & Chat Providers"
	},
	{
		id: "43",
		name: "Online Goodies"
	},
	{
		id: "1223",
		name: "Clip Art & Animated GIFs"
	},
	{
		id: "578",
		name: "Skins Themes & Wallpapers"
	},
	{
		id: "847",
		name: "Social Network Apps & Add-Ons"
	},
	{
		id: "582",
		name: "Online Journals & Personal Sites"
	},
	{
		id: "275",
		name: "Photo & Video Sharing"
	},
	{
		id: "529",
		name: "Social Networks"
	},
	{
		id: "972",
		name: "Virtual Worlds"
	},
	{
		id: "14",
		name: "People & Society"
	},
	{
		id: "677",
		name: "Disabled & Special Needs"
	},
	{
		id: "56",
		name: "Ethnic & Identity Groups"
	},
	{
		id: "579",
		name: "Africans & Diaspora"
	},
	{
		id: "547",
		name: "African-Americans"
	},
	{
		id: "556",
		name: "Arabs & Middle Easterners"
	},
	{
		id: "1257",
		name: "Asians & Diaspora"
	},
	{
		id: "549",
		name: "East Asians & Diaspora"
	},
	{
		id: "528",
		name: "South Asians & Diaspora"
	},
	{
		id: "580",
		name: "Southeast Asians & Pacific Islanders"
	},
	{
		id: "1205",
		name: "Discrimination & Identity Relations"
	},
	{
		id: "682",
		name: "Eastern Europeans"
	},
	{
		id: "973",
		name: "Expatriate Communities"
	},
	{
		id: "113",
		name: "Gay-Lesbian-Bisexual-Transgender"
	},
	{
		id: "681",
		name: "Indigenous Peoples"
	},
	{
		id: "171",
		name: "Native Americans"
	},
	{
		id: "550",
		name: "Jewish Culture"
	},
	{
		id: "548",
		name: "Latinos & Latin-Americans"
	},
	{
		id: "683",
		name: "Western Europeans"
	},
	{
		id: "1131",
		name: "Family & Relationships"
	},
	{
		id: "1304",
		name: "Etiquette"
	},
	{
		id: "1132",
		name: "Family"
	},
	{
		id: "400",
		name: "Ancestry & Genealogy"
	},
	{
		id: "1231",
		name: "Baby & Pet Names"
	},
	{
		id: "58",
		name: "Parenting"
	},
	{
		id: "974",
		name: "Adoption"
	},
	{
		id: "1374",
		name: "Babies & Toddlers"
	},
	{
		id: "115",
		name: "Baby Care & Hygiene"
	},
	{
		id: "403",
		name: "Child Care"
	},
	{
		id: "402",
		name: "Youth Camps"
	},
	{
		id: "1134",
		name: "Friendship"
	},
	{
		id: "1133",
		name: "Marriage"
	},
	{
		id: "1261",
		name: "Divorce & Separation"
	},
	{
		id: "1135",
		name: "Romance"
	},
	{
		id: "1260",
		name: "Troubled Relationships"
	},
	{
		id: "154",
		name: "Kids & Teens"
	},
	{
		id: "679",
		name: "Children's Interests"
	},
	{
		id: "680",
		name: "Teen Interests"
	},
	{
		id: "59",
		name: "Religion & Belief"
	},
	{
		id: "448",
		name: "Astrology & Divination"
	},
	{
		id: "862",
		name: "Buddhism"
	},
	{
		id: "864",
		name: "Christianity"
	},
	{
		id: "866",
		name: "Hinduism"
	},
	{
		id: "868",
		name: "Islam"
	},
	{
		id: "869",
		name: "Judaism"
	},
	{
		id: "1258",
		name: "Pagan & Esoteric Traditions"
	},
	{
		id: "1296",
		name: "Places of Worship"
	},
	{
		id: "1251",
		name: "Scientology"
	},
	{
		id: "870",
		name: "Self-Help & Motivational"
	},
	{
		id: "975",
		name: "Skeptics & Non-Believers"
	},
	{
		id: "101",
		name: "Spirituality"
	},
	{
		id: "1340",
		name: "Theology & Religious Study"
	},
	{
		id: "298",
		name: "Seniors & Retirement"
	},
	{
		id: "54",
		name: "Social Issues & Advocacy"
	},
	{
		id: "57",
		name: "Charity & Philanthropy"
	},
	{
		id: "82",
		name: "Environmental Issues"
	},
	{
		id: "1255",
		name: "Climate Change & Global Warming"
	},
	{
		id: "1166",
		name: "Housing & Development"
	},
	{
		id: "1280",
		name: "Human Rights & Liberties"
	},
	{
		id: "1127",
		name: "Poverty & Hunger"
	},
	{
		id: "1281",
		name: "Privacy Issues"
	},
	{
		id: "976",
		name: "Reproductive Rights"
	},
	{
		id: "1301",
		name: "Same-Sex Marriage"
	},
	{
		id: "703",
		name: "Work & Labor Issues"
	},
	{
		id: "1121",
		name: "Unions & Labor Movement"
	},
	{
		id: "509",
		name: "Social Sciences"
	},
	{
		id: "1302",
		name: "Communications & Media Studies"
	},
	{
		id: "1303",
		name: "Public Speaking"
	},
	{
		id: "510",
		name: "Demographics"
	},
	{
		id: "520",
		name: "Economics"
	},
	{
		id: "543",
		name: "Psychology"
	},
	{
		id: "29",
		name: "Real Estate"
	},
	{
		id: "378",
		name: "Apartments & Residential Rentals"
	},
	{
		id: "1178",
		name: "Commercial & Investment Real Estate"
	},
	{
		id: "687",
		name: "Property Development"
	},
	{
		id: "463",
		name: "Property Inspections & Appraisals"
	},
	{
		id: "425",
		name: "Property Management"
	},
	{
		id: "96",
		name: "Real Estate Agencies"
	},
	{
		id: "1080",
		name: "Real Estate Listings"
	},
	{
		id: "1081",
		name: "Timeshares & Vacation Properties"
	},
	{
		id: "533",
		name: "Reference"
	},
	{
		id: "527",
		name: "Directories & Listings"
	},
	{
		id: "377",
		name: "Business & Personal Listings"
	},
	{
		id: "980",
		name: "General Reference"
	},
	{
		id: "691",
		name: "Calculators & Reference Tools"
	},
	{
		id: "692",
		name: "Dictionaries & Encyclopedias"
	},
	{
		id: "374",
		name: "Educational Resources"
	},
	{
		id: "693",
		name: "Forms Guides & Templates"
	},
	{
		id: "1137",
		name: "Legal Forms"
	},
	{
		id: "694",
		name: "How-To, DIY & Expert Content"
	},
	{
		id: "1136",
		name: "Public Records"
	},
	{
		id: "695",
		name: "Time & Calendars"
	},
	{
		id: "1084",
		name: "Geographic Reference"
	},
	{
		id: "1014",
		name: "City & Local Guides"
	},
	{
		id: "268",
		name: "Maps"
	},
	{
		id: "685",
		name: "Traffic & Public Transit"
	},
	{
		id: "474",
		name: "Humanities"
	},
	{
		id: "433",
		name: "History"
	},
	{
		id: "609",
		name: "Myth & Folklore"
	},
	{
		id: "1093",
		name: "Philosophy"
	},
	{
		id: "108",
		name: "Language Resources"
	},
	{
		id: "1264",
		name: "Foreign Language Resources"
	},
	{
		id: "1265",
		name: "Translation Tools & Resources"
	},
	{
		id: "375",
		name: "Libraries & Museums"
	},
	{
		id: "1233",
		name: "Technical Reference"
	},
	{
		id: "174",
		name: "Science"
	},
	{
		id: "435",
		name: "Astronomy"
	},
	{
		id: "440",
		name: "Biological Sciences"
	},
	{
		id: "788",
		name: "Anatomy"
	},
	{
		id: "981",
		name: "Flora & Fauna"
	},
	{
		id: "982",
		name: "Genetics"
	},
	{
		id: "1226",
		name: "Neuroscience"
	},
	{
		id: "505",
		name: "Chemistry"
	},
	{
		id: "1227",
		name: "Computer Science"
	},
	{
		id: "1299",
		name: "Machine Learning & Artificial Intelligence"
	},
	{
		id: "1168",
		name: "Earth Sciences"
	},
	{
		id: "1254",
		name: "Atmospheric Science"
	},
	{
		id: "443",
		name: "Geology"
	},
	{
		id: "1169",
		name: "Paleontology"
	},
	{
		id: "441",
		name: "Water & Marine Sciences"
	},
	{
		id: "442",
		name: "Ecology & Environment"
	},
	{
		id: "231",
		name: "Engineering & Technology"
	},
	{
		id: "1141",
		name: "Robotics"
	},
	{
		id: "436",
		name: "Mathematics"
	},
	{
		id: "1252",
		name: "Statistics"
	},
	{
		id: "444",
		name: "Physics"
	},
	{
		id: "445",
		name: "Scientific Equipment"
	},
	{
		id: "446",
		name: "Scientific Institutions"
	},
	{
		id: "18",
		name: "Shopping"
	},
	{
		id: "68",
		name: "Apparel"
	},
	{
		id: "1228",
		name: "Apparel Services"
	},
	{
		id: "983",
		name: "Athletic Apparel"
	},
	{
		id: "984",
		name: "Casual Apparel"
	},
	{
		id: "428",
		name: "T-Shirts"
	},
	{
		id: "985",
		name: "Children's Clothing"
	},
	{
		id: "124",
		name: "Clothing Accessories"
	},
	{
		id: "350",
		name: "Gems & Jewelry"
	},
	{
		id: "986",
		name: "Handbags & Purses"
	},
	{
		id: "987",
		name: "Watches"
	},
	{
		id: "988",
		name: "Costumes"
	},
	{
		id: "989",
		name: "Eyewear"
	},
	{
		id: "697",
		name: "Footwear"
	},
	{
		id: "990",
		name: "Formal Wear"
	},
	{
		id: "991",
		name: "Headwear"
	},
	{
		id: "992",
		name: "Men's Clothing"
	},
	{
		id: "993",
		name: "Outerwear"
	},
	{
		id: "994",
		name: "Sleepwear"
	},
	{
		id: "995",
		name: "Swimwear"
	},
	{
		id: "530",
		name: "Undergarments"
	},
	{
		id: "996",
		name: "Uniforms & Workwear"
	},
	{
		id: "997",
		name: "Women's Clothing"
	},
	{
		id: "292",
		name: "Auctions"
	},
	{
		id: "61",
		name: "Classifieds"
	},
	{
		id: "69",
		name: "Consumer Resources"
	},
	{
		id: "97",
		name: "Consumer Advocacy & Protection"
	},
	{
		id: "365",
		name: "Coupons & Discount Offers"
	},
	{
		id: "450",
		name: "Customer Services"
	},
	{
		id: "451",
		name: "Warranties & Service Contracts"
	},
	{
		id: "353",
		name: "Product Reviews & Price Comparisons"
	},
	{
		id: "352",
		name: "Price Comparisons"
	},
	{
		id: "1143",
		name: "Entertainment Media"
	},
	{
		id: "1144",
		name: "Entertainment Media Rentals"
	},
	{
		id: "696",
		name: "Luxury Goods"
	},
	{
		id: "73",
		name: "Mass Merchants & Department Stores"
	},
	{
		id: "531",
		name: "Shopping Portals & Search Engines"
	},
	{
		id: "263",
		name: "Sporting Goods"
	},
	{
		id: "1083",
		name: "Sports Memorabilia"
	},
	{
		id: "1210",
		name: "Swap Meets & Outdoor Markets"
	},
	{
		id: "123",
		name: "Tobacco Products"
	},
	{
		id: "432",
		name: "Toys"
	},
	{
		id: "1225",
		name: "Wholesalers & Liquidators"
	},
	{
		id: "20",
		name: "Sports"
	},
	{
		id: "1073",
		name: "College Sports"
	},
	{
		id: "514",
		name: "Combat Sports"
	},
	{
		id: "515",
		name: "Boxing"
	},
	{
		id: "516",
		name: "Martial Arts"
	},
	{
		id: "512",
		name: "Wrestling"
	},
	{
		id: "554",
		name: "Extreme Sports"
	},
	{
		id: "1206",
		name: "Drag & Street Racing"
	},
	{
		id: "1207",
		name: "Stunts & Dangerous Feats"
	},
	{
		id: "998",
		name: "Fantasy Sports"
	},
	{
		id: "1000",
		name: "Individual Sports"
	},
	{
		id: "261",
		name: "Golf"
	},
	{
		id: "519",
		name: "Gymnastics"
	},
	{
		id: "262",
		name: "Racquet Sports"
	},
	{
		id: "1376",
		name: "Tennis"
	},
	{
		id: "1126",
		name: "Skate Sports"
	},
	{
		id: "518",
		name: "Track & Field"
	},
	{
		id: "180",
		name: "Motor Sports"
	},
	{
		id: "1082",
		name: "Sports Coaching & Training"
	},
	{
		id: "1001",
		name: "Team Sports"
	},
	{
		id: "258",
		name: "American Football"
	},
	{
		id: "259",
		name: "Baseball"
	},
	{
		id: "264",
		name: "Basketball"
	},
	{
		id: "534",
		name: "Cheerleading"
	},
	{
		id: "296",
		name: "Cricket"
	},
	{
		id: "1017",
		name: "Handball"
	},
	{
		id: "260",
		name: "Hockey"
	},
	{
		id: "517",
		name: "Rugby"
	},
	{
		id: "294",
		name: "Soccer"
	},
	{
		id: "699",
		name: "Volleyball"
	},
	{
		id: "265",
		name: "Winter Sports"
	},
	{
		id: "1149",
		name: "Ice Skating"
	},
	{
		id: "1148",
		name: "Skiing & Snowboarding"
	},
	{
		id: "1198",
		name: "World Sports Competitions"
	},
	{
		id: "513",
		name: "Olympics"
	},
	{
		id: "67",
		name: "Travel"
	},
	{
		id: "203",
		name: "Air Travel"
	},
	{
		id: "708",
		name: "Bus & Rail"
	},
	{
		id: "205",
		name: "Car Rental & Taxi Services"
	},
	{
		id: "1339",
		name: "Carpooling & Ridesharing"
	},
	{
		id: "206",
		name: "Cruises & Charters"
	},
	{
		id: "179",
		name: "Hotels & Accommodations"
	},
	{
		id: "1003",
		name: "Luggage & Travel Accessories"
	},
	{
		id: "1004",
		name: "Specialty Travel"
	},
	{
		id: "707",
		name: "Adventure Travel"
	},
	{
		id: "1389",
		name: "Agritourism"
	},
	{
		id: "1005",
		name: "Ecotourism"
	},
	{
		id: "1390",
		name: "Sightseeing Tours"
	},
	{
		id: "1391",
		name: "Vineyards & Wine Tourism"
	},
	{
		id: "208",
		name: "Tourist Destinations"
	},
	{
		id: "1074",
		name: "Beaches & Islands"
	},
	{
		id: "1006",
		name: "Historical Sites & Buildings"
	},
	{
		id: "1120",
		name: "Lakes & Rivers"
	},
	{
		id: "1119",
		name: "Mountain & Ski Resorts"
	},
	{
		id: "1007",
		name: "Regional Parks & Gardens"
	},
	{
		id: "1008",
		name: "Theme Parks"
	},
	{
		id: "1010",
		name: "Travel Agencies & Services"
	},
	{
		id: "1392",
		name: "Tourist Boards & Visitor Centers"
	},
	{
		id: "1019",
		name: "Vacation Offers"
	},
	{
		id: "1011",
		name: "Travel Guides & Travelogues"
	}
]