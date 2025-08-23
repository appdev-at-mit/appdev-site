const getRoleColor = (role: string): string => {
  switch (role) {
    case "Co-President":
      return "bg-appdev-blue text-gray-100";
    case "Tech Chair":
      return "bg-[#F7BEC2] text-gray-100";
    case "Finance Chair":
      return "bg-[#D2CCED] text-gray-800";
    case "Outreach Chair":
      return "bg-[#c1cff5] text-gray-800";
    case "Webmaster":
      return "bg-[#e39a62] text-gray-100";
    case "Team Lead":
      return "bg-[#edadad] text-gray-800";
    case "Backend Engineer":
      return "bg-appdev-green text-gray-100";
    case "Frontend Engineer":
      return "bg-[#dec018] text-gray-800";
    case "Business/Marketing":
      return "bg-[#CDECCA] text-gray-800";
    default:
      return "bg-gray-300 text-gray-800";
  }
};

export default function RoleBadges({ roles }: { roles: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((role, index) => (
        <span
          className={`inline-block px-3 py-1 rounded-md font-mono text-sm font-semibold ${getRoleColor(
            role
          )}`}
          key={index}
          role={role}
        >
          {role}
        </span>
      ))}
    </div>
  );
}
