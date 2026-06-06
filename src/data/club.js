import computerImg from '../assets/computer.jpg';
import gamingImg from '../assets/gaming.jpg';
import basketImg from '../assets/basket.jpg';
import footballImg from '../assets/foootball.jpg';
import danceImg from '../assets/dance.jpg';

export const clubs = [
  {
    id: 'computer',
    name: 'Computer Club',
    image: computerImg,
    shortDescription: 'Explore programming, web development, and cybersecurity.',
    description: 'Master coding, participate in hackathons, build web applications, and discuss the latest trends in tech and cybersecurity.',
    events: [
      { name: 'Web Dev Hackathon', date: '2026-06-25' },
      { name: 'Git & GitHub Workshop', date: '2026-07-05' }
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming Club',
    image: gamingImg,
    shortDescription: 'Connect with fellow gamers and join esports tournaments.',
    description: 'A community for casual and competitive gamers. We host weekly LAN parties, discuss game design, and organize esports Tournaments.',
    events: [
      { name: 'Valorant Tournament', date: '2026-06-20' },
      { name: 'Game Night (Smash Bros)', date: '2026-07-15' }
    ]
  },
  {
    id: 'basketball',
    name: 'Basketball Club',
    image: basketImg,
    shortDescription: 'Improve your game, stay active, and compete in matches.',
    description: 'Develop your basketball skills with professional coaching, join weekly practice matches, and represent our school in regional student leagues.',
    events: [
      { name: 'Three-Point Contest', date: '2026-06-18' },
      { name: 'Friendly Match vs HighSchool A', date: '2026-07-10' }
    ]
  },
  {
    id: 'football',
    name: 'Football Club',
    image: footballImg,
    shortDescription: 'Play the beautiful game and practice tactical teamwork.',
    description: 'Join our football community to practice dribbling, shooting, and match strategies. We hold regular training sessions and tournament matches.',
    events: [
      { name: 'Summer Cup Opener', date: '2026-06-22' },
      { name: 'Weekly Scrimmage Match', date: '2026-07-08' }
    ]
  },
  {
    id: 'dance',
    name: 'Dance Club',
    image: danceImg,
    shortDescription: 'Learn choreography, express yourself, and perform on stage.',
    description: 'From hip-hop to contemporary and traditional dances, express your creativity and energy. We prepare routines for school festivals and state dance competitions.',
    events: [
      { name: 'Choreography Workshop', date: '2026-06-15' },
      { name: 'Dance Showcase Practice', date: '2026-07-30' }
    ]
  }
];