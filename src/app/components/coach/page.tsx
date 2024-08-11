'use client'

import { useEffect, useState } from 'react';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
}

export default function Coach() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchTeamMembers() {
      const response = await fetch('https://randomuser.me/api/?results=9');
      const data = await response.json();
      setTeamMembers(data.results);
    }

    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Meet Our Coach</h1>
        <p className="text-xl mt-4">
          Get to know the people behind GameCourse. Our Coach is dedicated to
          helping you improve your gaming skills.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-xs"
          >
            <img
              src={member.picture.large}
              alt={`${member.name.first} ${member.name.last}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-600">
              {member.name.first} {member.name.last}
            </h3>
            <p className="text-gray-600 mt-2">Email: {member.email}</p>
            <p className="text-gray-600">Phone: {member.phone}</p>
            <p className="text-gray-600">
              Location: {member.location.city}, {member.location.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
