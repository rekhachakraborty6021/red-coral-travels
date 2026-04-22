export interface ItinerarySlot {
    time: string;
    text: string;
}

export interface ItineraryDay {
    dayNum: number;
    title: string;
    slots: ItinerarySlot[];
}

export interface InterestOption {
    icon: string;
    label: string;
    description: string;
}

export interface StateItinerary {
    slug: string;
    stateName: string;
    duration: number; // number of days
    tagline: string;
    interests: InterestOption[];
    days: ItineraryDay[];
    summary: string;
    bestSeason: string;
    permitNote?: string;
}

export const stateItineraries: StateItinerary[] = [
    {
        slug: 'assam',
        stateName: 'Assam',
        duration: 5,
        tagline: 'Gateway to the Northeast',
        bestSeason: 'November – April',
        interests: [
            { icon: '🦏', label: 'Wildlife Focus', description: 'Kaziranga, Pobitora, Manas safaris with forest camp stays.' },
            { icon: '🛕', label: 'Culture & Heritage', description: 'Ahom ruins, Kamakhya, Majuli Satras, tribal villages.' },
            { icon: '🏔️', label: 'Hills & Nature', description: 'Haflong, Jatinga, waterfalls, Vistadome train journey.' },
            { icon: '🍃', label: 'Tea Tourism', description: 'Jorhat & Dibrugarh estates, tea auctions, planter bungalows.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Guwahati & Pobitora',
                slots: [
                    { time: 'Morning', text: 'Kamakhya Temple — Begin with blessings at Guwahati\'s iconic Shakti Peeth on Nilachal Hill. Buy VIP ticket ₹501 to avoid long queues.' },
                    { time: 'Afternoon', text: 'Drive 50 km to Pobitora Wildlife Sanctuary for a jeep safari among the world\'s densest one-horned rhino population. Stop at Mayong Village Museum on the way back.' },
                    { time: 'Evening', text: 'Return to Guwahati. Ride the scenic Brahmaputra Ropeway at sunset, then explore street food and shopping at Fancy Bazaar.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Dima Hasao & Haflong',
                slots: [
                    { time: 'Morning', text: 'Board the Vistadome train from Guwahati to New Haflong. Panoramic glass windows reveal lush hills and the spectacular Dayang Railway Bridge. Runs twice weekly.' },
                    { time: 'Afternoon', text: 'Check into a Dimasa tribal homestay. Enjoy a traditional lunch paired with Judima sticky rice beer. Visit serene Haflong Lake and Moulpong View Point.' },
                    { time: 'Evening', text: 'Head to the Jatinga Bird Watchtower. Between Aug–Nov, witness the mysterious phenomenon of birds flying into lights on foggy nights (7 PM – 10 PM).' },
                ],
            },
            {
                dayNum: 3,
                title: 'Kaziranga National Park',
                slots: [
                    { time: 'Morning', text: 'Depart Haflong early for Kaziranga (~5–6 hrs). Stop en route at the spectacular Panimoor Waterfalls for a break.' },
                    { time: 'Afternoon', text: 'Arrive in Kaziranga, check into a forest resort. Relax over an Assamese Thali lunch. Explore the resort grounds.' },
                    { time: 'Evening', text: 'Western Zone Jeep Safari — prime time to spot one-horned rhinos, wild water buffaloes, and perhaps a Bengal tiger. Book in advance.' },
                ],
            },
            {
                dayNum: 4,
                title: 'Sivasagar & Jorhat',
                slots: [
                    { time: 'Morning', text: 'Drive to Sivasagar (~2 hrs) to explore the Ahom Kingdom — visit the Charaideo Pyramids, Sivadol, Talatal Ghar palace, and Rang Ghar amphitheater.' },
                    { time: 'Afternoon', text: 'Travel to Jorhat, the Tea Capital. Take a guided walk through sprawling tea estates, observing tea leaves and black pepper vines being harvested.' },
                    { time: 'Evening', text: 'Settle into Jorhat. Try traditional dishes with Ou Tenga (elephant apple) and Khar at a local restaurant.' },
                ],
            },
            {
                dayNum: 5,
                title: 'Majuli Island',
                slots: [
                    { time: 'Morning', text: 'Catch the morning ferry from Nimati Ghat to Majuli (~1.5 hrs). Rent a bicycle and head to Samaguri Satra to watch traditional mask-making artisans at work.' },
                    { time: 'Afternoon', text: 'Tour a Missing tribe village — observe bamboo stilt houses built for monsoon floods. Enjoy an authentic outdoor Missing Thali with homemade Apong rice beer.' },
                    { time: 'Evening', text: 'Watch the sunset over the Brahmaputra from the island banks. Catch the last ferry back to the mainland. Must depart before 5 PM.' },
                ],
            },
        ],
        summary: 'This 5-day route takes you from the spiritual energy of Guwahati → the misty hills of Haflong → the wild grasslands of Kaziranga → the ancient Ahom ruins of Sivasagar → to the serene river island of Majuli. Best done between November and April to avoid monsoon closures.',
    },
    {
        slug: 'arunachal-pradesh',
        stateName: 'Arunachal Pradesh',
        duration: 5,
        tagline: 'Land of the Rising Sun',
        bestSeason: 'October – March',
        permitNote: 'Inner Line Permit (ILP) required. Apply online for ₹350–₹500 before entering the state.',
        interests: [
            { icon: '🏔️', label: 'Tawang Monasteries', description: 'India\'s largest monastery, Bumla Pass China border, high-altitude lakes.' },
            { icon: '🌾', label: 'Ziro Valley & Tribes', description: 'Apatani tribe, UNESCO paddy fields, bamboo villages.' },
            { icon: '🌿', label: 'Mechuka & Remote Valleys', description: 'Remote valley 30 km from China — healing waters, Buddhist traditions.' },
            { icon: '🛡️', label: 'WWII & Border History', description: 'Jaswant Garh memorial, Bumla Pass, Arunachal\'s military heritage.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Dirang & Sangti Valley',
                slots: [
                    { time: 'Morning', text: 'Arrive in Dirang after the drive from Guwahati or Tezpur. Visit the ancient Dirang Village — walk through 150-year-old stone and wood Monpa houses. ILP checked at state entry — have it ready.' },
                    { time: 'Afternoon', text: 'Visit the painted Dirang Monastery (Khopa) for silence and Tibetan Buddhist architecture. Take a 14 km drive to the pine-forested Sangti Valley to sit by the pristine Sangti River.' },
                    { time: 'Evening', text: 'Interact with locals over a warm glass of Ara — the traditional fermented corn liquor. Rest early. Tomorrow starts at 6 AM. Depart by 6 AM tomorrow — 4 PM sunset.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Sela Pass → Jaswant Garh → Tawang',
                slots: [
                    { time: '6 AM', text: 'Begin the drive before sunrise. Stop at Sela Pass (13,700 ft) — fog-wrapped lake, freezing air, and a hot tea at the Army Cafe perched above the clouds. Carry woolens and altitude medicine.' },
                    { time: 'Afternoon', text: 'Descend towards Tawang. Stop at the Jaswant Garh War Memorial to pay respects. Detour to the Chagzam Bridge — an ancient iron-link bridge with no visible joints.' },
                    { time: 'Evening', text: 'Arrive in Tawang. Check into a women-run local homestay. Hand over your ILP details to your driver to arrange the Bumla Pass permit for Day 4. Rest and acclimatise. Altitude ~15,000 ft — rest is important.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Tawang Local Sightseeing',
                slots: [
                    { time: 'Morning', text: 'Visit the 342-year-old Tawang Monastery — India\'s largest. Explore the main prayer halls and enter the dark Butter Lamp Room where monks craft religious offerings by hand.' },
                    { time: 'Afternoon', text: 'Head to the giant Buddha Statue overlooking the entire town for panoramic views. Drive 25 minutes to the Rice Bowl settlement to see stunning step-terraced paddy fields.' },
                    { time: 'Evening', text: 'Walk through Tawang\'s Old Market. Eat early at your homestay — the town shuts down as the 4 PM sunset fades and temperatures plummet.' },
                ],
            },
            {
                dayNum: 4,
                title: 'Bumla Pass & High-Altitude Lakes',
                slots: [
                    { time: 'Early AM', text: 'Board a local Tawang 4x4 taxi (mandatory — outside vehicles barred, ~₹5,500). Drive to Bumla Pass at 15,200 ft — meet Indian Army soldiers and view the Indo-China border.' },
                    { time: 'Afternoon', text: 'On the descent, stop at the breathtaking high-altitude Madhuri Lake, PTSO Lake, and Nagula Lake — three distinct mountain lakes each with their own character.' },
                    { time: 'Evening', text: 'Return to Tawang. The altitude and rough roads will be tiring. Rest fully — fatigue and mild breathlessness are normal. Camphor helps with altitude breathlessness.' },
                ],
            },
            {
                dayNum: 5,
                title: 'Holy Waterfall & Departure',
                slots: [
                    { time: 'Morning', text: 'Take the off-road drive to the sacred Chumi Gyatse Waterfall — the "Holy Water Waterfall" revered by locals for its religious significance and natural beauty.' },
                    { time: 'Afternoon', text: 'Begin the long descent back toward Guwahati / Tezpur, or head to the helipad for a scenic helicopter ride back — saving a full day\'s road journey.' },
                    { time: 'Evening', text: 'Transit out of the state. Arunachal Pradesh is the kind of place that changes how you think about India\'s scale, diversity, and wildness.' },
                ],
            },
        ],
        summary: 'This 5-day Dirang–Tawang circuit takes you from the stone-house valleys of Dirang → the frozen heights of Sela Pass (13,700 ft) → India\'s largest monastery in Tawang → the China border at Bumla Pass (15,200 ft) → sacred waters at Chumi Gyatse. Apply for the ILP before you leave home. Best visited October to March.',
    },
    {
        slug: 'meghalaya',
        stateName: 'Meghalaya',
        duration: 5,
        tagline: 'The Abode of Clouds',
        bestSeason: 'October – April',
        interests: [
            { icon: '💧', label: 'Waterfalls & Rivers', description: 'Cherrapunji, Krang Suri, Dawki river boat rides.' },
            { icon: '🧗', label: 'Adventure & Trekking', description: 'Root bridges, Wari Chora rafts, Krem Chympe caves.' },
            { icon: '🎵', label: 'Culture & Villages', description: 'Whistling village, sacred forests, Khasi markets.' },
            { icon: '🛻', label: 'Garo Hills Off-Road', description: 'Remote 4x4 trails, bamboo villages, canyon hiking.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Shillong → Cherrapunji & Root Bridge',
                slots: [
                    { time: 'Morning', text: 'Depart Shillong into the misty Khasi Hills. Descend to Nongriat village via 3,200+ steep steps to reach the legendary Double Decker Living Root Bridge. Strenuous — carry water & good shoes.' },
                    { time: 'Afternoon', text: 'Climb back up and visit the roaring Seven Sister Waterfall and the layered Wei Sawdong Waterfall through lush forest trails.' },
                    { time: 'Evening', text: 'Stop at the mystical Mawphlang Sacred Forest for a guided tour of monoliths and Khasi ritual sites. Leave nothing behind — not even a leaf. Return to Shillong for dinner.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Dawki & Jaintia Hills',
                slots: [
                    { time: 'Morning', text: 'Drive to Dawki / Shnongpdeng. Take a boat ride on the Umngot River — so clear the boats appear to float on glass. Best October–April for crystal-clear water.' },
                    { time: 'Afternoon', text: 'Head into the Jaintia Hills to swim and boat at Krang Suri Waterfall (entry ₹50). Cross the river by boat (₹100) to hike to the gorgeous Phe Phe (Fifi) Waterfalls.' },
                    { time: 'Evening', text: 'Drive to Kongthong — The Whistling Village. Spend the evening with locals who call each other using unique tunes sung by their mothers at birth.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Caves & Journey to Garo Hills',
                slots: [
                    { time: 'Morning', text: 'Explore the deep, natural river cave of Krem Chympe in the Jaintia Hills — one of India\'s most impressive underground cave systems.' },
                    { time: 'Afternoon', text: 'Begin the long scenic drive westward into the Garo Hills. Watch traditional bamboo houses and villages roll by along the misty road.' },
                    { time: 'Evening', text: 'Arrive at Siju Village. Visit the famous Siju Cave briefly, then head to Emangre Village to check into a local bamboo homestay for the night.' },
                ],
            },
            {
                dayNum: 4,
                title: 'Wari Chora Canyon',
                slots: [
                    { time: 'Morning', text: 'Wake early. Hire a local 4x4 vehicle (~₹3,000) to tackle the 15 km bumped road to the Wari Chora parking spot. 4x4 mandatory — normal cars cannot pass.' },
                    { time: 'Afternoon', text: 'Trek through dense forest to the river. Board an inflatable raft to float through the towering, hidden Wari Chora Canyon — breathtaking walls, secret waterfalls, and complete wilderness.' },
                    { time: 'Evening', text: 'Trek back, return to Emangre. Wind down at the peaceful local Fish Sanctuary nearby before a quiet bamboo homestay dinner.' },
                ],
            },
            {
                dayNum: 5,
                title: 'Culture, Cuisine & Departure',
                slots: [
                    { time: 'Morning', text: 'Take a village tour and observe the matriarchal Khasi society in action — visit local markets run entirely by women selling vegetables, meats, and traditional goods.' },
                    { time: 'Afternoon', text: 'Enjoy a traditional pork and rice meal. Try Kwai (betel nut with leaf and lime) as a post-meal cultural experience shared by almost every local.' },
                    { time: 'Evening', text: 'Pick up handmade bamboo souvenirs — a Kno (woven basket) or a Knup (hands-free bamboo rain umbrella). Conclude your Meghalaya journey.' },
                ],
            },
        ],
        summary: 'This 5-day route takes you from the misty waterfalls and living root bridges of Cherrapunji → the glass-bottom rivers of Dawki → the underground caves of the Jaintia Hills → the raw canyon wilderness of the Garo Hills. Best done between October and April.',
    },
    {
        slug: 'nagaland',
        stateName: 'Nagaland',
        duration: 4,
        tagline: 'Land of Festivals',
        bestSeason: 'October – February',
        interests: [
            { icon: '🏔️', label: 'Dzukou Valley Trek', description: 'Full trek from Viswema, base camp, valley exploration.' },
            { icon: '🌿', label: 'Village Immersion', description: 'Khonoma, Dzuleke, community trust experiences.' },
            { icon: '🍽️', label: 'Tribal Food Culture', description: 'Kohima market, insect foods, red rice, forest diet.' },
            { icon: '🎖️', label: 'WWII Heritage', description: 'Kohima War Cemetery, 1944 battle sites, history tour.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Dimapur → Kohima',
                slots: [
                    { time: 'Morning', text: 'Arrive at Dimapur by flight or train. Hire a shared jeep or private taxi for the scenic 2-hour climb up into the hills towards the capital.' },
                    { time: 'Afternoon', text: 'Visit the solemn and beautifully maintained Kohima War Cemetery — a memorial to the soldiers of the 1944 Battle of Kohima, one of WWII\'s most significant turning points in Asia.' },
                    { time: 'Evening', text: 'Head to the Kohima Supermarket — brace yourself. Live insects, silkworms, frogs, snails, and rats. An extraordinary window into tribal food culture. Genuine culture shock — go in curious.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Khonoma & Dzuleke',
                slots: [
                    { time: 'Morning', text: 'Drive to Khonoma — India\'s first Green Village. Walk the immaculate streets, admire the organic farms, and visit the extraordinary open-air community library with no locks and no librarian.' },
                    { time: 'Afternoon', text: 'Travel 10 km to the tiny village of Dzuleke. Put your phone away — zero mobile network. Experience buying a snack from an unmanned self-payment shop, leaving exact cash in the box. Carry exact change — no staff to give change.' },
                    { time: 'Evening', text: 'Travel to Viswema village at 5,300ft. Check into a local homestay. Eat a traditional meal of organic red rice, dal, and boiled greens. Rest early — tomorrow is a long trek.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Dzukou Valley Trek',
                slots: [
                    { time: 'Early AM', text: 'Start the 10 km trek to Dzukou Valley from Viswema at first light. The initial forest section is steep, narrow, and slippery. Watch your footing — and watch for snakes. Stay alert.' },
                    { time: 'Afternoon', text: 'Reach the base camp at 8,000ft. Eat a packed lunch with a panoramic view, then descend into the magical treeless valley to explore its cold streams and unique mountain curves.' },
                    { time: 'Evening', text: 'Hike back to base camp to spend the night under the stars, or return to the Viswema homestay before the early mountain sunset.' },
                ],
            },
            {
                dayNum: 4,
                title: 'Viswema & Departure',
                slots: [
                    { time: 'Morning', text: 'Take a gentle walk through Viswema\'s organic paddy fields. Watch elderly women at work, observe the unique red rice cultivation, and read the ancient wealth symbols carved into traditional homes.' },
                    { time: 'Afternoon', text: 'Pack up and take a taxi back down from the hills to Dimapur for your departing flight or train.' },
                    { time: 'Evening', text: 'Depart Nagaland — carrying a changed perspective on what community, trust, and connection to the land can look like. Most visitors leave wanting more time.' },
                ],
            },
        ],
        summary: 'This 4-day route takes you from the WWII history of Kohima → the extraordinary community trust of Khonoma and Dzuleke → the high-altitude base village of Viswema → the breathtaking treeless expanse of Dzukou Valley at 8,000ft. Carry exact change, expect early sunsets, watch for snakes on the trail.',
    },
    {
        slug: 'manipur',
        stateName: 'Manipur',
        duration: 4,
        tagline: 'The Jewel of India',
        bestSeason: 'Year-round (pleasant climate)',
        interests: [
            { icon: '🦌', label: 'Wildlife & Lakes', description: 'Keibul Lamjao rare deer, Loktak floating homestay.' },
            { icon: '🏛️', label: 'Heritage & History', description: 'Kangla Fort, State Museum, Govindaji Temple.' },
            { icon: '🧵', label: 'Culture & Markets', description: 'Ima Market, handlooms, Meitei village life.' },
            { icon: '🗻', label: 'Mountains & Trails', description: 'King Peak 3,114m, Senapati forests, waterfalls.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Imphal — Heritage & Culture',
                slots: [
                    { time: 'Morning', text: 'Begin at the historic Kangla Fort & Palace — the ancient seat of the Manipur Kingdom dating to 1632, set along the Imphal River. Continue to the State Museum for a deep dive into Manipuri history. Fly in — skip the 8–10 hr road trip.' },
                    { time: 'Afternoon', text: 'Visit the Shri Govindaji Temple and explore the religious sites in the Pakhangba area. Enjoy a traditional Manipuri lunch made with forest herbs and organic ingredients.' },
                    { time: 'Evening', text: 'Explore the bustling Ima Market — Asia\'s largest women-only market with over 5,000 female vendors. Browse handlooms, handicrafts, and traditional Manipuri textiles.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Bishnupur — Wildlife & Loktak Lake',
                slots: [
                    { time: 'Morning', text: 'Take a taxi ~47 km south to Keibul Lamjao National Park — the world\'s only floating national park — to spot the rare Sangai deer and diverse birdlife.' },
                    { time: 'Afternoon', text: 'Explore the adjacent Loktak Lake and its unique circular floating grass and plant islands (phumdis). Visit the nearby Bishnupur Temple.' },
                    { time: 'Evening', text: 'Check into a floating homestay on Loktak Lake for a truly one-of-a-kind overnight experience — floating on water, surrounded by phumdis and birdcalls. Book well in advance.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Senapati — Forests & Tribal Villages',
                slots: [
                    { time: 'Morning', text: 'Depart early for the Senapati District in the Naga Hills — a ~3.5 to 4 hour drive (~160 km) north of Imphal through scenic mountain roads. Depart by 7 AM for a full day.' },
                    { time: 'Afternoon', text: 'Spend the afternoon exploring dense forests, waterfalls, and mountain rivers in one of Manipur\'s most beautiful districts, surrounded by the songs of local birds.' },
                    { time: 'Evening', text: 'Visit rural tribal villages in the Senapati area — experience a way of life completely untouched by outside influence. Stay overnight locally or return to Imphal.' },
                ],
            },
            {
                dayNum: 4,
                title: 'King Peak & Departure',
                slots: [
                    { time: 'Morning', text: 'Head towards King Peak — Manipur\'s highest mountain at 3,114 meters above sea level. The journey through green hills and flower-filled meadows is itself a highlight.' },
                    { time: 'Afternoon', text: 'Enjoy a relaxing hike or picnic at the summit, taking in 360° panoramic views of Manipur\'s endless green valleys. A perfect ending to the journey.' },
                    { time: 'Evening', text: 'Travel back to Imphal city to rest before your departure from Tulihal International Airport. Airport is only 8 km from the city centre.' },
                ],
            },
        ],
        summary: 'This 4-day route covers the full range of Manipur — from the ancient heritage of Imphal\'s Kangla Fort and Ima Market → the floating wilderness of Loktak Lake and Keibul Lamjao → the pristine tribal forests of Senapati → the summit views of King Peak. Pleasant year-round climate.',
    },
    {
        slug: 'mizoram',
        stateName: 'Mizoram',
        duration: 3,
        tagline: 'Land of the Blue Mountains',
        bestSeason: 'October – March (Christmas is magical)',
        interests: [
            { icon: '🌄', label: 'Nature & Hiking', description: 'Deutland Hills, Sky Walk, mountain trails.' },
            { icon: '🔥', label: 'Culture & Homestay', description: 'Bonfire nights, family meals, Sunday church.' },
            { icon: '🎄', label: 'Christmas in Aizawl', description: 'Festive lights, decorations, community celebrations.' },
            { icon: '🚗', label: 'Scenic Road Trip', description: 'Guwahati → Meghalaya → Aizawl route.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Arrival & City Culture',
                slots: [
                    { time: 'Morning', text: 'Arrive in Aizawl by flight or after the scenic 10–12 hour road trip from Guwahati through Assam and Meghalaya. Check into a local homestay for the authentic Mizo welcome. Homestay over hotel — always.' },
                    { time: 'Afternoon', text: 'Head up to the Deutland Hills for an afternoon of hiking on trails of varying difficulty, rock climbing, and drinking in panoramic views of Aizawl spread across the mountain valleys below.' },
                    { time: 'Evening', text: 'Stroll through Aizawl\'s local markets — take in the locals\' remarkable fashion sense and the city\'s clean, proud streets. Return to your homestay for a shared dinner of homemade chicken curry and local tea.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Sunrise Above the Clouds',
                slots: [
                    { time: '4 AM', text: 'Wake before dawn and take a scooter to the Sky Walk. Stand above snowy clouds and watch the golden sunrise break below you — one of the most extraordinary natural experiences in all of Northeast India. Set two alarms — don\'t miss this.' },
                    { time: 'Afternoon', text: 'After returning, explore Aizawl\'s temples, mosques, and historical sites to understand the layered religious and cultural history of the state.' },
                    { time: 'Evening', text: 'Take a thrilling night ride in a local modified 4x4 through the mountain terrain. End the night at a bonfire with your host family — singing, storytelling, and tea under the stars.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Local Life & Departure',
                slots: [
                    { time: 'Morning', text: 'If it\'s a Sunday, dress up and attend church with your hosts — a deeply moving, community-wide experience. Note: all markets will be closed today. Markets fully closed on Sundays.' },
                    { time: 'Afternoon', text: 'Take a final walk through Aizawl\'s beautifully decorated streets — especially magical if visiting around Christmas. Enjoy one last homemade meal with your hosts.' },
                    { time: 'Evening', text: 'Pack your bags and depart Aizawl — carrying the warmth of the Mizo people with you. The hardest part is leaving.' },
                ],
            },
        ],
        summary: 'Mizoram is a 3-day experience that leaves a lifetime impression. Base yourself entirely in Aizawl — hike the Deutland Hills, wake at 4 AM for the Sky Walk sunrise above the clouds, and spend your evenings around a bonfire with a local family. Visit during Christmas for the most magical atmosphere.',
    },
    {
        slug: 'sikkim',
        stateName: 'Sikkim',
        duration: 5,
        tagline: 'The Land of Mystic Splendour',
        bestSeason: 'March – May or October – December',
        permitNote: 'Permits required for Nathu La Pass and North Sikkim. Arranged by your driver/tour operator.',
        interests: [
            { icon: '🏔️', label: 'North Sikkim Expedition', description: 'Gurudongmar, Zero Point, Bhutia homestays.' },
            { icon: '🛂', label: 'China Border & Lakes', description: 'Nathu La, Tsomgo Lake, Baba Temple.' },
            { icon: '🛕', label: 'West Sikkim & Pelling', description: 'Kanchenjunga views, Skywalk, monasteries.' },
            { icon: '☸️', label: 'South Sikkim Spiritual', description: 'Buddha Park, Namchi Chardham, tea estates.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Gangtok — Arrival & City Culture',
                slots: [
                    { time: 'Morning', text: 'Arrive at Bagdogra airport or NJP station. Take the scenic 4-hour taxi ride up into the hills to Gangtok. Check in near M.G. Marg. ~4 hrs from Bagdogra / NJP.' },
                    { time: 'Afternoon', text: 'Visit Banjhakri Waterfalls theme park, then take the Gangtok Ropeway for a bird\'s-eye view of the capital city spread across the hillside.' },
                    { time: 'Evening', text: 'Walk the pedestrian-only M.G. Marg — cafes, shops, and the pulse of Gangtok. Try a traditional Nepali Thali or street snacks like Sel Roti and Aloo Dum. Arrange Nathu La permits tonight.' },
                ],
            },
            {
                dayNum: 2,
                title: 'East Sikkim — Border, Temple & Lake',
                slots: [
                    { time: 'Early AM', text: 'Head to Tashi View Point before sunrise for a clear, golden view of Mount Kanchenjunga. Then begin the steep permitted drive to Nathu La Pass at 14,400 ft — bundle up for piercing winds. No photography at the border.' },
                    { time: 'Afternoon', text: 'Descend to pay respects at the Baba Harbhajan Singh Temple, then spend time marvelling at the crystal-clear (or frozen) Tsomgo (Changu) Lake.' },
                    { time: 'Evening', text: 'Return to Gangtok. Warm up at a local cafe with Chicken Thenthuk or Shyaphale. Rest — tomorrow is a long drive north.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Journey into North Sikkim — Lachen',
                slots: [
                    { time: 'Morning', text: 'Check out early and begin the scenic 6–7 hour drive towards North Sikkim. Stop to photograph the spectacular Seven Sisters Waterfall and Naga Waterfall from the road. Start by 7 AM.' },
                    { time: 'Afternoon', text: 'Stop in Mangan for a simple organic lunch at a roadside dhaba. Cross the Chungthang dam and continue into the high-altitude town of Lachen at 8,800 ft.' },
                    { time: 'Evening', text: 'Check into a Bhutia homestay. Sit by the chulha and share a traditional dinner of Khuri, Gundruk soup, and Butter Tea. Sleep early — tomorrow departs at 4 AM.' },
                ],
            },
            {
                dayNum: 4,
                title: 'Gurudongmar Lake & Lachung',
                slots: [
                    { time: '4 AM', text: 'Depart Lachen in darkness. Drive through the Thangu Valley checkpost to reach Gurudongmar Lake at 17,800 ft — walk gently, smell camphor if breathless, and stand before the holy partially-unfrozen waters. Leave before 11 AM — extreme winds arrive.' },
                    { time: 'Afternoon', text: 'Return to Lachen for a quick lunch. Drive toward Lachung (9,000 ft), stopping to view the towering Bheem Nala (Amitabh Bachchan) Waterfall.' },
                    { time: 'Evening', text: 'Arrive in Lachung. Check into your hotel, enjoy a mild-spiced organic Sikkimese dinner, and rest fully. The altitude and long drive will be exhausting. Drink water — altitude dehydration is common.' },
                ],
            },
            {
                dayNum: 5,
                title: 'Zero Point, Valley of Flowers & Departure',
                slots: [
                    { time: 'Early AM', text: 'Drive through the Yumthang Valley (Valley of Flowers) with the Teesta River winding through the mountains. Continue up to Zero Point at 15,300 ft — the last point on the civilian road, blanketed in snow.' },
                    { time: 'Afternoon', text: 'Descend back through Lachung for a quick meal, then begin the long 8-hour scenic drive back to Gangtok. Start the descent by noon.' },
                    { time: 'Evening', text: 'Arrive in Gangtok. Collect belongings and proceed to NJP or Bagdogra for your journey home — concluding one of India\'s most extraordinary Himalayan adventures.' },
                ],
            },
        ],
        summary: 'This 5-day Gangtok–North Sikkim circuit takes you from the vibrant streets of Gangtok → the Indo-China border at Nathu La (14,400 ft) → the traditional Bhutia homestays of Lachen (8,800 ft) → the holy waters of Gurudongmar Lake (17,800 ft) → the snow plains of Zero Point (15,300 ft). Always arrange permits in advance, carry camphor for altitude.',
    },
    {
        slug: 'tripura',
        stateName: 'Tripura',
        duration: 3,
        tagline: 'Land of Diversity',
        bestSeason: 'October – March',
        interests: [
            { icon: '🏛️', label: 'Royal Heritage', description: 'Ujjayanta & Rajbari palaces, dynasty history.' },
            { icon: '🐟', label: 'Food & Night Markets', description: 'Mui Borok, Indian-Chinese street food stalls.' },
            { icon: '🎨', label: 'Handicrafts & Culture', description: 'Artisan fairs, tribal weaving, bamboo crafts.' },
            { icon: '🌿', label: 'Nature & Outdoors', description: 'Howrah River, hiking, wildlife spotting.' },
        ],
        days: [
            {
                dayNum: 1,
                title: 'Agartala — Heritage & Palaces',
                slots: [
                    { time: 'Morning', text: 'Arrive at Agartala Airport or Railway Station — one of the most accessible capitals in the Northeast, with direct flights from Delhi and Kolkata. Check into your accommodation near the city centre. No ILP or special permits required.' },
                    { time: 'Afternoon', text: 'Begin at the grand Ujjayanta Palace (1901) — admire the extraordinary Mughal-meets-European architecture and learn about the Manikya dynasty\'s reign. Continue to Rajbari Palace and seek blessings at the Narangirudra Temple.' },
                    { time: 'Evening', text: 'Head into the night streets of Agartala — stalls lit up, vendors calling out, Indian and Chinese street food filling the air. Try the traditional Mui Borok fish dish — the single most essential culinary experience in Tripura.' },
                ],
            },
            {
                dayNum: 2,
                title: 'Culture, River & Handicrafts',
                slots: [
                    { time: 'Morning', text: 'Take a peaceful morning walk along the Howrah River banks — the very river on which Agartala was built. Bangladesh is just 2 km away from where you\'re standing.' },
                    { time: 'Afternoon', text: 'Dedicate the afternoon to Agartala\'s vibrant arts scene — visit local markets or attend one of the many handicraft fairs hosted year-round, showcasing tribal weaving, bamboo crafts, and traditional Tripuri textile work.' },
                    { time: 'Evening', text: 'Rent a bike and cycle through the city — observe the meticulously planned roads and municipal buildings laid out by Maharaja Bir Bikram Kishore Manikya Bahadur in 1940. Every street tells a royal story.' },
                ],
            },
            {
                dayNum: 3,
                title: 'Nature, Culture & Departure',
                slots: [
                    { time: 'Morning', text: 'Venture slightly out of the city for some outdoor adventure — hiking, biking, or wildlife spotting in the natural areas surrounding Agartala. The terrain is gentle and accessible without special equipment.' },
                    { time: 'Afternoon', text: 'Return to the city for a final lunch. Soak in the multilingual atmosphere — Bengali, Kokborok, English, Hindi, and Chakma spoken around you simultaneously — a living reminder of Tripura\'s remarkable cultural layering.' },
                    { time: 'Evening', text: 'Pack your bags and depart from Agartala Airport or Railway Station on a direct flight or train back to your home city. Direct flights to Delhi, Kolkata & Chennai.' },
                ],
            },
        ],
        summary: 'Tripura is Northeast India\'s most accessible and underrated royal destination. Three days in Agartala takes you through the Ujjayanta Palace (1901), the banks of the Howrah River, year-round handicraft fairs, and the glowing night food streets — all just 2 km from the Bangladesh border. No ILP required.',
    },
];

export function getItineraryBySlug(slug: string): StateItinerary | undefined {
    return stateItineraries.find(s => s.slug === slug);
}
