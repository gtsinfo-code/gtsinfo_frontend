/**
 * GTSInfo Official Corporate Details
 * Strict adherence to SRS Version 1.2 and verified company data.
 * No fabricated statistics, testimonials, partner badges, or unauthorized phone numbers.
 */

import { CompanyInfo, NavLinkItem } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: "GTSInfo",
  shortName: "GTS",
  industry: "Software Services & Technology",
  tagline: "Engineering the Future. Together.",
  email: "hr@gtsinfo.in",
  address: {
    title: "Corporate Headquarters",
    line1: "2nd Floor, 7, 1st Main Road",
    line2: "Mahalakshmipuram Layout, Mahalakshmi Layout",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560086",
    country: "India",
    full: "2nd Floor, 7, 1st Main Road, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086, India",
    mapsUrl: "https://www.google.com/maps?q=13.0079767,77.5426662"
  },
  secondaryAddress: {
    title: "Whitefield Technology Center",
    line1: "3rd Floor, Crescent 4, Prestige Shantiniketan",
    line2: "ITPL Main Road, Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560048",
    country: "India",
    full: "3rd Floor, Crescent 4, Prestige Shantiniketan, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560048, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Prestige+Shantiniketan+ITPL+Main+Road+Bengaluru"
  },
  // Universal cross-platform Google Maps location link (opens exact Mahalakshmipuram coordinates 13.0079767, 77.5426662 on both mobile and laptop)
  mapsUrl: "https://www.google.com/maps?q=13.0079767,77.5426662",
  mission: "To deliver reliable, scalable, and forward-looking software engineering solutions that empower modern enterprises in their digital journey.",
  vision: "To be a recognized technology partner known for engineering excellence, integrity, and sustainable digital solutions.",
  coreValues: [
    {
      title: "Engineering Excellence",
      description: "Delivering resilient, maintainable, and high-performance software architectures crafted with precision."
    },
    {
      title: "Integrity & Transparency",
      description: "Upholding complete openness, data privacy, and ethical standards across all client and employee engagements."
    },
    {
      title: "Collaborative Innovation",
      description: "Fostering teamwork and creative problem-solving to address complex technological and business challenges."
    },
    {
      title: "Client-Centric Agility",
      description: "Adapting swiftly to evolving industry standards and business requirements with rigorous quality assurance."
    }
  ]
};

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];
