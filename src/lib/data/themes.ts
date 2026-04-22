import { Theme } from '@/types';

export const themes: Theme[] = [
    {
        id: '1',
        slug: 'wildlife-safaris',
        title: 'Wildlife Safaris',
        tagline: 'Encounter the Big Five',
        description: 'Experience rhinos, tigers, and elephants in their natural habitat.',
        icon: '🦏',
        image: '/images/themes/wildlife.jpg',
        color: 'from-green-700 via-lavender-purple to-deep-navy', // Updated
        tags: ['wildlife', 'safari', 'nature', 'rhino', 'tiger', 'elephant']
    },
    {
        id: '2',
        slug: 'buddhist-circuit',
        title: 'Buddhist Circuit',
        tagline: 'Journey to Enlightenment',
        description: 'Visit ancient monasteries from Tawang to Rumtek.',
        icon: '🕉️',
        image: '/images/themes/buddhist.jpg',
        color: 'from-orange-600 via-lavender-purple to-deep-navy', // Updated
        tags: ['buddhist', 'monastery', 'spiritual', 'pilgrimage']
    },
    {
        id: '3',
        slug: 'trekking-adventures',
        title: 'Trekking Adventures',
        tagline: 'Conquer the Valleys',
        description: 'Trek through Dzukou Valley and Living Root Bridges.',
        icon: '⛰️',
        image: '/images/themes/trekking.jpg',
        color: 'from-lavender-purple via-thistle to-deep-navy', // Updated
        tags: ['trekking', 'hiking', 'adventure', 'mountains']
    },
    {
        id: '4',
        slug: 'tribal-immersion',
        title: 'Tribal Immersion',
        tagline: 'Live with the Headhunters',
        description: 'Experience authentic tribal culture with indigenous communities.',
        icon: '🎭',
        image: '/images/themes/tribal.jpg',
        color: 'from-deep-navy via-lavender-purple to-lavender-veil', // Updated
        tags: ['tribal', 'culture', 'festival', 'village']
    },
    {
        id: '5',
        slug: 'waterfalls-lakes',
        title: 'Waterfalls & Lakes',
        tagline: 'Nature\'s Water Canvas',
        description: 'Marvel at Nohkalikai Falls and crystal-clear Umngot River.',
        icon: '💧',
        image: '/images/themes/waterfalls.jpg',
        color: 'from-cyan-600 via-lavender-purple to-thistle', // Updated
        tags: ['waterfalls', 'lakes', 'nature', 'scenic']
    },
    {
        id: '6',
        slug: 'heritage-history',
        title: 'Heritage & History',
        tagline: 'Walk Through Time',
        description: 'Explore Ahom palaces, WWII battlefields, and rock carvings.',
        icon: '🏛️',
        image: '/images/themes/heritage.jpg',
        color: 'from-amber-700 via-thistle to-deep-navy', // Updated
        tags: ['heritage', 'history', 'archaeological', 'monuments']
    },
    {
        id: '7',
        slug: 'spiritual-pilgrimage',
        title: 'Spiritual Pilgrimage',
        tagline: 'The Shakti Peeth Circuit',
        description: 'Visit sacred sites including Kamakhya and ancient temples.',
        icon: '🙏',
        image: '/images/themes/spiritual.jpg',
        color: 'from-lavender-veil via-lavender-purple to-deep-navy', // Updated
        tags: ['spiritual', 'temple', 'pilgrimage', 'shakti']
    },
    {
        id: '8',
        slug: 'offbeat-unexplored',
        title: 'Offbeat & Unexplored',
        tagline: 'Roads Less Traveled',
        description: 'Discover hidden gems like Mechuka and remote passes.',
        icon: '🗺️',
        image: '/images/themes/offbeat.jpg',
        color: 'from-graphite via-thistle to-lavender-purple', // Updated
        tags: ['offbeat', 'remote', 'unexplored', 'hidden']
    }
];
