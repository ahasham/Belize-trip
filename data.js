// ═══════════════════════════════════════════════
// BELIZE FAMILY TRIP 2026 — TRIP DATA
// Edit this file to update trip details
// ═══════════════════════════════════════════════

var FAMILIES = [
  { name:"Hasham-Khanna", color:"#E8A838", code:"DAS", members:[
    {name:"Diya",icon:"🌸"},{name:"Adam",icon:"😎"},{name:"Shaan",icon:"🐛"}
  ]},
  { name:"Patel-Khanna", color:"#3B9B8F", code:"GARK", members:[
    {name:"Amini",icon:"🐆"},{name:"Gautam",icon:"🐉"},{name:"Reyan",icon:"🐨"},{name:"Kamrin",icon:"🦁"}
  ]},
  { name:"Pops", color:"#C06050", code:"CV", members:[
    {name:"CV",icon:"🦜"}
  ]},
];

var MEMBERS = {Adam:"😎",Diya:"🌸",Shaan:"🐛",Gautam:"🐉",Amini:"🐆",Reyan:"🐨",Kamrin:"🦁",CV:"🦜"};

var TG = {
  DAS:{label:"DAS",color:"#E8A838",icons:"🌸😎🐛"},
  GARK:{label:"GARK",color:"#3B9B8F",icons:"🐆🐉🐨🦁"},
  CV:{label:"CV",color:"#C06050",icons:"🦜"},
  ALL_NO_CV:{label:"DAS+GARK",color:"#888",icons:"🌸😎🐛🐆🐉🐨🦁"},
};

var LOCS = {
  "San Ignacio":{lat:17.1589,lon:-89.0697},
  "Placencia":{lat:16.5167,lon:-88.3667},
  "Caye Caulker":{lat:17.75,lon:-88.0167},
  "Belize City":{lat:17.4985,lon:-88.1863},
};
var DLOC = [null,"San Ignacio","San Ignacio","San Ignacio","Placencia","Placencia","Placencia","Caye Caulker","Caye Caulker",null,null];

var FLIGHTS = [
  {code:"DL2851",label:"DAS SEA→DEN",day:0,url:"https://www.flightaware.com/live/flight/DAL2851"},
  {code:"AS642",label:"GARK SEA→DEN",day:0,url:"https://www.flightaware.com/live/flight/ASA642"},
  {code:"WS2562",label:"CV YYZ→BZE",day:1,url:"https://www.flightaware.com/live/flight/WJA2562"},
  {code:"WN288",label:"DAS+GARK DEN→BZE",day:1,url:"https://www.flightaware.com/live/flight/SWA288"},
  {code:"2M1067",label:"DAS+CV PLJ→BZE",day:7,url:"https://www.flightaware.com/live/flight/MYA1067"},
  {code:"AA312",label:"GARK BZE→DFW→SEA",day:8,url:"https://www.flightaware.com/live/flight/AAL312"},
  {code:"AS1335",label:"DAS BZE→LAX",day:9,url:"https://www.flightaware.com/live/flight/ASA1335"},
  {code:"DL1802",label:"CV BZE→ATL→YYZ",day:9,url:"https://www.flightaware.com/live/flight/DAL1802"},
  {code:"AS84",label:"DAS LAX→SEA",day:10,url:"https://www.flightaware.com/live/flight/ASA84"},
];

// ─── MAP ───
var MAP_PTS = [
  {id:"sea",name:"Seattle",lat:47.45,lon:-122.31,type:"transit"},
  {id:"den",name:"Denver",lat:39.85,lon:-104.67,type:"transit"},
  {id:"yyz",name:"Toronto",lat:43.68,lon:-79.63,type:"transit"},
  {id:"bze",name:"BZE Airport",lat:17.54,lon:-88.31,type:"transit"},
  {id:"si",name:"San Ignacio Resort",lat:17.159,lon:-89.07,type:"stay",info:"Pool, spa, jungle views · 824-2034"},
  {id:"mf",name:"Monkey Falls",lat:17.11,lon:-89.00,type:"activity",info:"Sky-blue pools, small waterfalls · Free entry"},
  {id:"xun",name:"Xunantunich",lat:17.09,lon:-89.14,type:"activity",info:"El Castillo 130ft · $12.50/adult"},
  {id:"bh",name:"Blue Hole",lat:17.15,lon:-88.59,type:"activity",info:"Cenote swim · $5 entry"},
  {id:"v99",name:"Villa 99",lat:16.646,lon:-88.318,type:"stay",info:"6BR beachfront · WiFi: TM6/angelbaby"},
  {id:"lbc",name:"Laughing Bird Caye",lat:16.44,lon:-88.20,type:"activity",info:"UNESCO · Private snorkel $650"},
  {id:"mc",name:"Moho Caye",lat:16.51,lon:-88.07,type:"activity",info:"Turtles, sharks, stingrays"},
  {id:"cc",name:"Caye Caulker",lat:17.75,lon:-88.02,type:"stay",info:"Sea Dreams · The Split"},
  {id:"sc",name:"Seaside Chateau",lat:17.53,lon:-88.30,type:"stay",info:"Gated, near BZE airport"},
  {id:"lax",name:"Los Angeles",lat:33.94,lon:-118.41,type:"transit"},
];

var DAY_RT = [
  {segs:[{from:"sea",to:"den",t:"fly"}]},
  {segs:[{from:"den",to:"bze",t:"fly"},{from:"bze",to:"si",t:"drive"}],cv:[{from:"yyz",to:"bze",t:"fly"}]},
  {segs:[{from:"si",to:"mf",t:"drive"}]},
  {segs:[{from:"si",to:"xun",t:"drive"}]},
  {segs:[{from:"si",to:"bh",t:"drive"},{from:"bh",to:"v99",t:"drive"}]},
  {segs:[{from:"v99",to:"lbc",t:"boat"}]},
  {segs:[{from:"v99",to:"mc",t:"boat"}]},
  {segs:[{from:"v99",to:"bze",t:"fly"},{from:"bze",to:"cc",t:"boat"}],gark:[{from:"v99",to:"sc",t:"drive"}]},
  {segs:[{from:"cc",to:"sc",t:"boat"}],gark:[{from:"sc",to:"bze",t:"fly"}]},
  {segs:[{from:"sc",to:"bze",t:"drive"},{from:"bze",to:"lax",t:"fly"}],cv:[{from:"bze",to:"yyz",t:"fly"}]},
  {segs:[{from:"lax",to:"sea",t:"fly"}]},
];

// ─── ACCOMMODATIONS ───
var ACCOM = {
  0:{name:"Hampton Inn Denver Airport",ci:"Late night",co:"10:00 AM",am:"Free shuttle, free breakfast, pool",link:"https://www.hilton.com/en/hotels/denaphx-hampton-suites-denver-airport-gateway-park/"},
  1:{name:"San Ignacio Resort Hotel",ci:"2:00 PM",co:"12:00 PM",am:"Pool, spa, Running W Restaurant, Green Iguana on-site, free WiFi, 17-acre jungle estate",link:"https://www.sanignaciobelize.com/",addr:"18 Buena Vista Street, San Ignacio"},
  2:{name:"San Ignacio Resort Hotel",ref:1},
  3:{name:"San Ignacio Resort Hotel",ref:1},
  4:{name:"Villa 99 Seahorse Safari",ci:"4:00 PM (no early check-in)",co:"11:00 AM",am:"6BR beachfront, pool, 2 BBQ grills, beach palapa, AC, full kitchen, laundry",link:"https://www.airbnb.com/rooms/922568575438630173",addr:"Mile 12, Placencia Main Road, Maya Beach",wifi:"TM6 / angelbaby",note:"⚠️ Sargassum on beach — go to The Pointe or cayes for swimming"},
  5:{name:"Villa 99 Seahorse Safari",ref:4},
  6:{name:"Villa 99 Seahorse Safari",ref:4},
  7:{name:"Sea Dreams (DAS+CV) / Seaside Chateau (GARK)",ci:"2:00 PM",co:"11:00 AM",am:"Sea Dreams: 50m from The Split, free bikes/canoe/paddleboards",link:"http://www.seadreamsbelize.com/"},
  8:{name:"Seaside Chateau",ci:"2:00 PM",co:"11:00 AM",am:"Gated compound near BZE airport",link:"https://www.seasidechateaubelize.com/"},
};

// ─── PACKING TIPS ───
var PACK = {
  0:null,
  1:{icon:"🧴",tip:"Sunscreen, hat, bug spray for evening"},
  2:{icon:"🥾",tip:"Swimsuit, water shoes, sunscreen, bug spray, water bottle"},
  3:{icon:"🏛️",tip:"Comfortable shoes, sunscreen, hat, water, camera"},
  4:{icon:"🏊",tip:"Swimsuit for Blue Hole, sunscreen, change of clothes"},
  5:{icon:"🤿",tip:"Reef-safe sunscreen, snorkel gear, water shoes, dry bag for phone"},
  6:{icon:"🤿",tip:"Reef-safe sunscreen, snorkel gear, water shoes, dry bag"},
  7:{icon:"🏝️",tip:"Sunscreen, swimsuit, sunglasses, hat"},
  8:{icon:"🤿",tip:"Snorkel gear for Hol Chan, reef-safe sunscreen"},
  9:null,10:null,
};

// ─── ACTIVITY LINKS ───
var ACT_LINKS = {
  "Monkey Falls":"https://ecolodgesanywhere.com/belize-waterfalls/",
  "Green Iguana":"https://www.sanignaciobelize.com/green-iguana-conservation-project/",
  "San Ignacio Market":"https://www.sanignaciobelize.com/san-ignacio-belize-hotel/",
  "Xunantunich":"https://nichbelize.org/product/xunantunich/",
  "Barton Creek Cave":"https://www.sanignaciobelize.com/barton-creek-cave/",
  "Blue Hole":"https://www.travelbelize.org/attraction/st-hermans-blue-hole-national-park/",
  "Laughing Bird Caye":"https://cabelize.com/tours_experiences/island_snorkeling_tours.html",
  "Moho Caye":"https://cabelize.com/tours_experiences/island_snorkeling_tours.html",
  "The Split":"https://www.travelbelize.org/destination/caye-caulker/",
  "Hol Chan":"https://www.travelbelize.org/attraction/hol-chan-marine-reserve/",
};

// ─── ITINERARY ───
var DAYS = [
  {date:"Fri Apr 10",dn:1,title:"Seattle → Denver",loc:"Denver",icon:"✈️",color:"#4A6FA5",events:[
    {time:"7:46 PM",desc:"DAS — DL 2851 SEA → DEN",group:"DAS",type:"flight",fl:"DL2851"},
    {time:"8:11 PM",desc:"GARK — AS 642 SEA → DEN",group:"GARK",type:"flight",fl:"AS642"},
    {time:"11:30 PM",desc:"Hampton Inn — free shuttle & breakfast",group:"ALL_NO_CV",type:"hotel"},
  ]},
  {date:"Sat Apr 11",dn:2,title:"→ Belize → San Ignacio",loc:"San Ignacio",icon:"🌎",color:"#2D7D46",events:[
    {time:"10:15 AM",desc:"CV — WS 2562 YYZ → BZE (arrives 12:54pm)",group:"CV",type:"flight",fl:"WS2562"},
    {time:"10:15 AM",desc:"DAS+GARK — WN 288 DEN → BZE (arrives 2:20pm). SW Booking: AONQQO",group:"ALL_NO_CV",type:"flight",fl:"WN288"},
    {time:"3:00 PM",desc:"San Ignacio Shuttle — $35/pp ($280 total)",group:"ALL",type:"transport"},
    {time:"4:00 PM",desc:"Check-in: San Ignacio Resort Hotel",group:"ALL",type:"hotel"},
    {time:"7:00 PM",desc:"Dinner: Running W — reservation for 8",group:"ALL",type:"food"},
  ]},
  {date:"Sun Apr 12",dn:3,title:"Monkey Falls & Market",loc:"San Ignacio",icon:"🐒",color:"#1B8A5A",events:[
    {time:"8:00 AM",desc:"Breakfast at San Ignacio Market",group:"ALL",type:"food",link:"San Ignacio Market"},
    {time:"~10:00 AM",desc:"Taxi to Monkey Falls — sky-blue pools & waterfalls (~20 min drive)",group:"ALL",type:"activity",link:"Monkey Falls"},
    {time:"~3:00 PM",desc:"Green Iguana Conservation Project — at hotel, $10/pp, 45 min",group:"ALL",type:"activity",link:"Green Iguana"},
    {time:"Evening",desc:"Dinner at local restaurant",group:"ALL",type:"food"},
  ]},
  {date:"Mon Apr 13",dn:4,title:"Adventure Day",loc:"San Ignacio",icon:"🏛️",color:"#8B6914",events:[
    {time:"8:00 AM",desc:"Xunantunich Mayan Ruins — El Castillo (130ft), $12.50/adult ✅ BOOKED",group:"ALL",type:"activity",link:"Xunantunich"},
    {time:"PM",desc:"Barton Creek Cave — canoe through ceremonial cave ✅ BOOKED",group:"ALL",type:"activity",link:"Barton Creek Cave"},
    {time:"Evening",desc:"Local dinner",group:"ALL",type:"food"},
  ]},
  {date:"Tue Apr 14",dn:5,title:"→ Placencia",loc:"Maya Beach",icon:"🚐",color:"#5B4A8A",events:[
    {time:"Morning",desc:"Shuttle 3.5hrs via Hummingbird Hwy",group:"ALL",type:"transport"},
    {time:"En route",desc:"St. Herman's Blue Hole — cenote swim, $5 entry",group:"ALL",type:"activity",link:"Blue Hole"},
    {time:"Noon",desc:"Golf cart pickup — Captain Jak's",group:"ALL",type:"transport"},
    {time:"4:00 PM",desc:"Check-in Villa 99 — 6BR beachfront villa",group:"ALL",type:"hotel"},
    {time:"Evening",desc:"Maya Beach Bistro — lobster grilled cheese 🦞",group:"ALL",type:"food"},
  ]},
  {date:"Wed Apr 15",dn:6,title:"Laughing Bird Caye",loc:"Laughing Bird Caye",icon:"🤿",color:"#007BA7",events:[
    {time:"9:00 AM",desc:"PRIVATE snorkel — Laughing Bird Caye (UNESCO). Guide: Akeem. $650",group:"ALL",type:"activity",link:"Laughing Bird Caye"},
    {time:"",desc:"Meet: Hummingbird Marina, Mile 21. ~25 min boat",group:"ALL",type:"activity"},
    {time:"Noon",desc:"Grilled lobster & pineapple on the beach 🍍",group:"ALL",type:"food"},
    {time:"Evening",desc:"Rumfish → Barefoot Beach Bar → Tutti Frutti 🍦",group:"ALL",type:"food"},
  ]},
  {date:"Thu Apr 16",dn:7,title:"Moho Caye",loc:"Moho Caye",icon:"🐢",color:"#006D5B",events:[
    {time:"9:00 AM",desc:"PRIVATE snorkel — Moho Caye. Turtles & sharks! $650",group:"ALL",type:"activity",link:"Moho Caye"},
    {time:"",desc:"Meet: Hummingbird Marina. ~45-60 min boat (rougher)",group:"ALL",type:"activity"},
    {time:"Evening",desc:"BBQ night at Villa 99 🔥",group:"ALL",type:"food"},
  ]},
  {date:"Fri Apr 17",dn:8,title:"Groups Split",loc:"Caye Caulker / BZE",icon:"🏝️",color:"#D35400",events:[
    {time:"11:00 AM",desc:"Check-out Villa 99",group:"ALL",type:"hotel"},
    {time:"11:00 AM",desc:"GARK → Belize City → Seaside Chateau",group:"GARK",type:"transport"},
    {time:"11:00 AM",desc:"DAS+CV — Maya Air PLJ → BZE (25 min)",group:"DAS",type:"flight",fl:"2M1067"},
    {time:"12:00 PM",desc:"DAS+CV — Water taxi → Caye Caulker",group:"DAS",type:"transport"},
    {time:"PM",desc:"DAS+CV — The Split + Sea Dreams Hotel 🏊",group:"DAS",type:"activity",link:"The Split"},
  ]},
  {date:"Sat Apr 18",dn:9,title:"GARK Flies Home",loc:"Caye Caulker",icon:"🦈",color:"#2980B9",events:[
    {time:"AM",desc:"DAS+CV — Hol Chan & Shark Ray Alley snorkel ~$50/pp",group:"DAS",type:"activity",link:"Hol Chan"},
    {time:"1:39 PM",desc:"GARK — AA BZE → DFW → SEA 👋",group:"GARK",type:"flight",fl:"AA312"},
    {time:"PM",desc:"DAS+CV — Water taxi → Seaside Chateau",group:"DAS",type:"transport"},
  ]},
  {date:"Sun Apr 19",dn:10,title:"→ LA / Toronto",loc:"LA / Toronto",icon:"🌅",color:"#C0392B",events:[
    {time:"10:00 AM",desc:"DAS — AS 1335 BZE → LAX",group:"DAS",type:"flight",fl:"AS1335"},
    {time:"~12:30 PM",desc:"CV — DL 1802 BZE → ATL → YYZ",group:"CV",type:"flight",fl:"DL1802"},
    {time:"PM",desc:"DAS — Cambria Hotel Calabasas 🌄",group:"DAS",type:"hotel"},
  ]},
  {date:"Mon Apr 20",dn:11,title:"LA → Home",loc:"Home 🏠",icon:"🏠",color:"#7F8C8D",events:[
    {time:"7:00 PM",desc:"DAS — AS 84 LAX → SEA. Welcome home!",group:"DAS",type:"flight",fl:"AS84"},
  ]},
];

// ─── EXPENSES ───
var INIT_EXP = [
  {id:1,item:"San Ignacio Resort (3 rooms, 3 nights)",amount:3213,paidBy:"CV",cat:"Accommodation"},
  {id:2,item:"Villa 99 (3 nights)",amount:1965.27,paidBy:"DAS",cat:"Accommodation"},
  {id:3,item:"San Ignacio Shuttle (9 ppl)",amount:280,paidBy:"TBD",cat:"Transport"},
  {id:4,item:"Laughing Bird Caye snorkel",amount:650,paidBy:"GARK",cat:"Activities"},
  {id:5,item:"Moho Caye snorkel",amount:650,paidBy:"GARK",cat:"Activities"},
  {id:6,item:"Golf Cart (~3 days)",amount:165,paidBy:"TBD",cat:"Transport"},
  {id:7,item:"Mountain Pine Ridge (placeholder)",amount:1000,paidBy:"TBD",cat:"Activities"},
  {id:8,item:"Xunantunich + Barton Creek combo",amount:855,paidBy:"TBD",cat:"Activities"},
  {id:9,item:"Green Iguana Project (9×$10)",amount:90,paidBy:"TBD",cat:"Activities"},
  {id:10,item:"Maya Air PLJ→BZE",amount:1064,paidBy:"DAS",cat:"Flights"},
  {id:11,item:"Sea Dreams Hotel",amount:256.15,paidBy:"DAS",cat:"Accommodation"},
  {id:12,item:"Seaside Chateau (DAS+CV)",amount:143.67,paidBy:"DAS",cat:"Accommodation"},
  {id:13,item:"Seaside Chateau (GARK)",amount:136.25,paidBy:"GARK",cat:"Accommodation"},
];

// ─── KRIOL ───
var KRIOL = [
  {k:"Gud maahnin!",e:"Good morning!",tts:"Good morning"},
  {k:"Weh di go ahn?",e:"What's up?",tts:"Way dee go on"},
  {k:"Aarite",e:"All right / OK",tts:"Alright"},
  {k:"Cho!",e:"Wow!",tts:"Cho"},
  {k:"Weh yuh nayhn?",e:"What's your name?",tts:"Way you name"},
  {k:"Mi nayhn da ___",e:"My name is ___",tts:"Me name da"},
  {k:"Weh di praiz?",e:"What's the price?",tts:"Way dee price"},
  {k:"Mi love Bileez!",e:"I love Belize!",tts:"Me love Belize"},
  {k:"Dat mi wikid!",e:"That was awesome!",tts:"Dat me wicked"},
  {k:"Tek yuh time",e:"Take it easy",tts:"Tek you time"},
  {k:"Lesgo bash!",e:"Let's party!",tts:"Less go bash"},
  {k:"Lata!",e:"See you later!",tts:"Lata"},
  {k:"You nuh eezih!",e:"Look at you!",tts:"You nuh easy"},
  {k:"Ah tayad",e:"I'm tired",tts:"Ah tired"},
  {k:"Ah pekish",e:"I'm hungry",tts:"Ah peckish"},
];

// ─── EMERGENCY ───
var EMERG = [
  {l:"Police / Fire / Ambulance",n:"911",note:"Works everywhere"},
  {l:"Fire Service",n:"990"},
  {l:"NEMO (disasters)",n:"936"},
  {l:"San Ignacio Police",n:"+501 824-2022"},
  {l:"San Ignacio Medical",n:"+501 824-2066"},
  {l:"Dangriga Hospital",n:"+501 522-3832",note:"Nearest to Placencia"},
  {l:"Caye Caulker Police",n:"+501 226-0179"},
  {l:"Belize Healthcare Partners",n:"+501 280-5000",note:"Private, BZE City"},
  {l:"Canadian Consulate 24/7",n:"+501 822-4011"},
  {l:"Canada Emergency (Ottawa)",n:"+1 613-996-8885",note:"Collect calls OK"},
  {l:"U.S. Embassy",n:"+501 822-4011",note:"After-hrs: +501 610-5030"},
  {l:"Red Cross Belize",n:"+501 227-3319"},
];

// ─── CONTACTS ───
var CONTACTS = [
  {name:"Villa 99 (Nina)",phone:"+501 630-2848",wa:true,email:"reservations@flowersvacationrentals.com"},
  {name:"Captain Jak's (Golf Cart)",phone:"+501 628-6447"},
  {name:"Cultural Exp. Belize (Akeem)",phone:"+501 671-1257"},
  {name:"San Ignacio Resort",phone:"824-2034",email:"events@sanignaciobelize.com"},
  {name:"San Ignacio Shuttle",email:"sanignacioshuttle@gmail.com"},
];

// ─── RESTAURANTS ───
var RESTS = {
  "San Ignacio":[{n:"Running W Restaurant",d:"Award-winning steakhouse, ranch-sourced meats"}],
  "Placencia":[
    {n:"Maya Beach Bistro",d:"Famous lobster grilled cheese 🦞"},
    {n:"Barefoot Beach Bar",d:"On the beach, casual, big menu"},
    {n:"Rumfish",d:"Drinks & seafood"},
    {n:"Tutti Frutti",d:"Gelato 🍦"},
    {n:"Wendy's Creole Food",d:"Authentic — fry jacks, grilled fish"},
    {n:"The Shak",d:"Smoothies, wraps, curries"},
    {n:"Inky's",d:"Kid-friendly, near mini golf"},
  ],
  "Caye Caulker":[
    {n:"Sip N' Dip",d:"In-water seating at The Split"},
    {n:"Lazy Lizard",d:"Famous bar at The Split"},
  ],
};

// ─── ESSENTIALS ───
var ESSENTIALS = [
  {icon:"💵",title:"Currency",body:"2 BZD = 1 USD. US dollars accepted everywhere. Bring small bills ($1, $5, $10). ATMs in San Ignacio & Placencia."},
  {icon:"💧",title:"Drinking Water",body:"Tap water safe in Placencia and most hotels. Bottled available everywhere (~$1 USD). Carry a reusable bottle."},
  {icon:"💰",title:"Tipping",body:"Not culturally expected but appreciated. Some restaurants add 10% service charge — check the bill. Tour guides: $10–20/group."},
  {icon:"📱",title:"Phone & Data",body:"DAS plan includes international (upgraded). Amini's plan works free. Gautam's work phone fine. Cell service spotty in jungle areas."},
  {icon:"🔌",title:"Power",body:"Same plugs as US/Canada (Type A/B, 110V). No adapter needed."},
  {icon:"🦟",title:"Bugs",body:"Low bug season in April. Bring DEET or picaridin for jungle/caves and evenings. Sand flies possible on beaches at dawn/dusk."},
  {icon:"🧴",title:"Sunscreen",body:"UV index 10–11. Use reef-safe (no oxybenzone) — required for snorkeling. Reapply every 2 hours. Bring rash guards."},
  {icon:"🏥",title:"Health",body:"No vaccinations required. Bring personal meds + copies of prescriptions. No level-1 trauma centers — travel insurance recommended."},
  {icon:"🔒",title:"Safety",body:"Placencia & Caye Caulker very safe. Avoid Belize City Southside. Lock valuables in hotel safes."},
  {icon:"🛃",title:"Immigration",body:"Immigration Form PDF completed — show on entry. Canadians: no visa for stays under 30 days. Passport valid 6+ months."},
  {icon:"🚗",title:"Driving",body:"Drive on the right. Many speed bumps. Avoid driving at night. Golf carts are the way to go in Placencia."},
  {icon:"🛒",title:"Groceries",body:"Placencia: Nang Kee's, Everyday Discount, Top Value. San Ignacio: great daily market (special farmers market Saturdays). Fresh seafood abundant."},
];

var TABS = ["Today","Itinerary","Expenses","Guide"];

// ─── ACCOMMODATION PHOTOS ───
var ACCOM_PHOTOS = {
  0: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a5/3e/52/hampton-inn-suites-denver.jpg",
  1: "https://www.sanignaciobelize.com/wp-content/uploads/2023/08/san-ignacio-resort-hotel-belize.jpg",
  4: "https://a0.muscache.com/im/pictures/miso/Hosting-922568575438630173/original/e4a99d1b-3b1e-4b0a-8a42-6b7f2c36a8c4.jpeg",
  7: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/487706741.jpg",
  8: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350765893.jpg",
};
