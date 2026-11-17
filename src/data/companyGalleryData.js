/**
 * Company Workplace Photographs & Media Allocations
 * Strict Non-Duplicate Image Policy (All 6 authentic company images used exactly once):
 * - 02-open-office-wide-view.jpg            -> Homepage Company Introduction
 * - 03-meeting-room.jpg                     -> About Us Collaboration Conference Room
 * - 01-open-office-workstations.jpg         -> About Us Workplace Gallery (Workstations)
 * - 04-office-corridor.jpg                  -> About Us Workplace Gallery (Corridor)
 * - 06-office-workspace-alternate-view.jpg -> About Us Workplace Gallery (Development Pods)
 * - 05-office-entrance-signage.jpg          -> Contact Us Facility Entrance & Reception
 */

import img01Workstations from '../assets/images/company/01-open-office-workstations.jpg';
import img02WideView from '../assets/images/company/02-open-office-wide-view.jpg';
import img03MeetingRoom from '../assets/images/company/03-meeting-room.jpg';
import img04Corridor from '../assets/images/company/04-office-corridor.jpg';
import img05EntranceSignage from '../assets/images/company/05-office-entrance-signage.jpg';
import img06AlternateWorkspace from '../assets/images/company/06-office-workspace-alternate-view.jpg';

export const COMPANY_AUTHENTIC_IMAGES = {
  // 1. Homepage Company Introduction (Strictly exclusive to Homepage)
  homeIntro: {
    src: img02WideView,
    alt: "GTSInfo collaborative engineering workspace and open-plan workstations in Bengaluru",
    title: "GTSInfo Bengaluru Engineering Center",
    caption: "Authentic open-plan engineering facility in Bengaluru designed for cross-functional agile development and systems engineering."
  },

  // 2. About Us Collaboration Section (Strictly exclusive to About Us)
  aboutCollaboration: {
    src: img03MeetingRoom,
    alt: "GTSInfo executive conference and technical collaboration room in Bengaluru",
    title: "Technical Collaboration & Design Room",
    caption: "Dedicated conference space for architectural alignment, technical reviews, and cross-functional planning."
  },

  // 3. About Us Workplace Gallery (Strictly exclusive to About Us)
  aboutGallery: [
    {
      id: "gal-01",
      src: img01Workstations,
      title: "Open-Plan Engineering Workstations",
      description: "Ergonomic developer desks tailored for full-stack engineering, pair programming, and automated testing.",
      aspect: "wide",
      alt: "Open-plan workstations at GTSInfo facility in Bengaluru"
    },
    {
      id: "gal-02",
      src: img04Corridor,
      title: "Architectural Interior Corridor",
      description: "Modern interior walkway connecting project bays, meeting rooms, and quiet work zones.",
      aspect: "tall",
      alt: "Glass-partitioned interior corridor at GTSInfo office"
    },
    {
      id: "gal-03",
      src: img06AlternateWorkspace,
      title: "Development Pods & Focus Bays",
      description: "Dedicated team pods configured for focused coding, peer reviews, and sprint execution.",
      aspect: "wide",
      alt: "Alternate perspective of workspace development bays at GTSInfo"
    }
  ],

  // 4. Contact Us Facility Entrance (Strictly exclusive to Contact Us)
  contactEntrance: {
    src: img05EntranceSignage,
    alt: "GTSInfo corporate facility entrance and reception access in Bengaluru",
    title: "Bengaluru Corporate Entrance",
    caption: "Official entrance to GTSInfo facility located at 2nd Floor, 7, 1st Main Road, Mahalakshmipuram Layout, Bengaluru."
  },

  // 5. Services Page Enterprise Feature (Licensed high-resolution cloud architecture visual)
  servicesArchitecture: {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    alt: "Global enterprise cloud infrastructure and secure data architecture",
    title: "Enterprise Cloud Infrastructure & Distributed Networks",
    caption: "Resilient systems architecture and cloud engineering solutions built for high-throughput enterprise scale."
  },

  // 6. Careers Page Talent & Culture Feature (Licensed high-resolution recruitment visual)
  careersCulture: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    alt: "Collaborative software engineering team working on modern digital solutions",
    title: "Engineering-First Workplace Culture",
    caption: "Empowering software engineers with modern tooling, transparent mentorship, and high-impact enterprise projects."
  }
};

// Backward-compatible aliases
export const PAGE_UNIQUE_IMAGES = {
  homeIntro: COMPANY_AUTHENTIC_IMAGES.homeIntro,
  aboutCollaboration: COMPANY_AUTHENTIC_IMAGES.aboutCollaboration,
  contactEntrance: COMPANY_AUTHENTIC_IMAGES.contactEntrance,
  careersCulture: COMPANY_AUTHENTIC_IMAGES.careersCulture,
  servicesBanner: COMPANY_AUTHENTIC_IMAGES.servicesArchitecture,
};

export const ABOUT_WORKPLACE_GALLERY = COMPANY_AUTHENTIC_IMAGES.aboutGallery;
