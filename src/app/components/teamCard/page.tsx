'use client'

import { useEffect, useState } from "react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  jobTitle: string;
  bio: string;
}

export default function TeamCards() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchTeamMembers() {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const data = await response.json();
      const jobTitles = [
        {
          title: "Co-Founder & CEO",
          bio: `John has over a decade of experience in the gaming industry, having
                worked with several top esports teams before co-founding GameCourse.`,
        },
        {
          title: "Lead Coach",
          bio: `With a passion for gaming and years of experience, our lead coach 
                helps players develop the skills needed to succeed in competitive gaming.`,
        },
        {
          title: "Marketing Director",
          bio: `A strategic thinker with a knack for understanding player needs, our 
                marketing director ensures that GameCourse reaches its audience effectively.`,
        },
      ];

      const members = data.results.map((member: any, index: number) => ({
        name: member.name,
        picture: member.picture,
        jobTitle: jobTitles[index].title,
        bio: jobTitles[index].bio,
      }));

      setTeamMembers(members);
    }

    fetchTeamMembers();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={member.picture.large}
            alt={`${member.name.first} ${member.name.last}`}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-indigo-600">
            {member.name.first} {member.name.last}
          </h3>
          <p className="text-gray-700">{member.jobTitle}</p>
          <p className="text-gray-600 mt-2">{member.bio}</p>
        </div>
      ))}
    </div>
  );
}
