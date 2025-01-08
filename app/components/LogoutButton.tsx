// app/components/LogoutButton.tsx
"use client";

export default function LogoutButton({ useV2 }: { useV2: boolean }) {
  const handleLogout = async () => {
    // Simulating different API versions
    const endpoint = useV2 ? "/api/v2/logout" : "/api/v1/logout";
    console.log(`Using ${endpoint} for logout`);
  };

  return (
    <button onClick={handleLogout} className="text-sm hover:opacity-50">
      Sign Out {useV2 && "(v2)"}
    </button>
  );
}
