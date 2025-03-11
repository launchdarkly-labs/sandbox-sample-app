import React from "react";
import Image from "next/image";

interface UserProfileProps {
  enableEnhancedProfiles: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ enableEnhancedProfiles }) => {
  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Product Manager",
    joinDate: "January 2022",
    // Enhanced profile data
    bio: "Product enthusiast with 5+ years of experience in SaaS platforms.",
    location: "San Francisco, CA",
    skills: ["Product Strategy", "User Research", "Agile", "Data Analytics"],
    languages: ["English", "Spanish"],
    socialLinks: {
      twitter: "janedoe",
      linkedin: "jane-doe-pm",
      github: "janedoe-dev",
    },
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex items-start gap-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={`https://ui-avatars.com/api/?name=${user.name.replace(" ", "+")}&background=random`}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700 mt-1">{user.role}</p>
          <p className="text-sm text-gray-500">Member since {user.joinDate}</p>

          {enableEnhancedProfiles && (
            <>
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">About</h4>
                <p className="text-gray-700">{user.bio}</p>
                
                <div className="mt-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {user.location}
                  </p>
                </div>

                <div className="mt-3">
                  <h4 className="font-medium mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="font-medium mb-1">Languages</h4>
                  <p className="text-gray-700">{user.languages.join(", ")}</p>
                </div>

                <div className="mt-3">
                  <h4 className="font-medium mb-1">Connect</h4>
                  <div className="flex gap-3">
                    {Object.entries(user.socialLinks).map(([platform, handle]) => (
                      <a 
                        key={platform} 
                        href={`https://${platform}.com/${handle}`}
                        className="text-blue-600 hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 