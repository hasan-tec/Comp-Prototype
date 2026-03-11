export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  coordinates: { x: number; y: number };
  bio: string;
  avatar: string;
  interests: string[];
  lookingFor: string;
  socialLinks: {
    facebook?: string;
    whatsapp?: string;
    instagram?: string;
  };
  answers: {
    idealWeekend: string;
    earlyBirdOrNightOwl: string;
    pets: string;
  };
}

export const mockUsers: UserProfile[] = [
  {
    id: "1",
    name: "Robert Davis",
    age: 62,
    location: "Downtown Area",
    coordinates: { x: 45, y: 35 },
    bio: "Recently retired teacher. I enjoy quiet mornings with coffee, tending to my garden, and discussing history.",
    avatar: "https://picsum.photos/seed/robert/400/400",
    interests: ["Gardening", "History", "Reading", "Walking"],
    lookingFor: "Friendship",
    socialLinks: {
      facebook: "robert.davis.123",
    },
    answers: {
      idealWeekend: "A long walk in the park followed by reading a good biography on the porch.",
      earlyBirdOrNightOwl: "Early Bird",
      pets: "I have a golden retriever named Max."
    }
  },
  {
    id: "2",
    name: "Susan Miller",
    age: 58,
    location: "Westside Suburbs",
    coordinates: { x: 30, y: 60 },
    bio: "Empty nester looking to meet new people. I love trying new restaurants and going to the theater.",
    avatar: "https://picsum.photos/seed/susan/400/400",
    interests: ["Theater", "Fine Dining", "Wine Tasting", "Travel"],
    lookingFor: "Romance",
    socialLinks: {
      facebook: "susan.miller.99",
      instagram: "susan_explores"
    },
    answers: {
      idealWeekend: "Dinner and a show downtown, then a relaxing Sunday brunch.",
      earlyBirdOrNightOwl: "Night Owl",
      pets: "No pets currently, but I love cats."
    }
  },
  {
    id: "3",
    name: "James Wilson",
    age: 65,
    location: "North Hills",
    coordinates: { x: 65, y: 25 },
    bio: "Widower looking for a golf partner and someone to share a laugh with. I don't take life too seriously.",
    avatar: "https://picsum.photos/seed/james/400/400",
    interests: ["Golf", "Classic Cars", "Cooking", "Jazz Music"],
    lookingFor: "Activity Partner",
    socialLinks: {
      whatsapp: "1234567890"
    },
    answers: {
      idealWeekend: "18 holes of golf in the morning, followed by grilling out in the evening.",
      earlyBirdOrNightOwl: "Early Bird",
      pets: "I have a parrot."
    }
  },
  {
    id: "4",
    name: "Martha Jones",
    age: 60,
    location: "Eastside Arts District",
    coordinates: { x: 75, y: 55 },
    bio: "Art enthusiast and amateur painter. Looking for someone to visit galleries with and enjoy deep conversations.",
    avatar: "https://picsum.photos/seed/martha/400/400",
    interests: ["Art Galleries", "Painting", "Classical Music", "Yoga"],
    lookingFor: "Friendship",
    socialLinks: {
      facebook: "martha.jones.art"
    },
    answers: {
      idealWeekend: "Visiting a new art exhibit and then having coffee to discuss it.",
      earlyBirdOrNightOwl: "A bit of both",
      pets: "Two lovely rescue cats."
    }
  }
];

export const mockActivities = [
  {
    id: "a1",
    title: "Sunday Morning Walking Group",
    location: "Centennial Park",
    coordinates: { x: 50, y: 45 },
    date: "This Sunday, 9:00 AM",
    host: "Robert Davis",
    hostId: "1",
    attendees: 4,
    maxAttendees: 10,
    description: "A gentle 2-mile walk around the lake followed by coffee at the park cafe. All paces welcome!"
  },
  {
    id: "a2",
    title: "Local Theater: 'The Odd Couple'",
    location: "Downtown Playhouse",
    coordinates: { x: 40, y: 50 },
    date: "Next Friday, 7:30 PM",
    host: "Susan Miller",
    hostId: "2",
    attendees: 2,
    maxAttendees: 4,
    description: "I have two extra tickets to the play next Friday. Looking for some company to enjoy the show and maybe grab a drink after."
  }
];
