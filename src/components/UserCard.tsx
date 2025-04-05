import { User } from "../types/User";

type UserCardProps = {
  user: User;
  onClick: (userId: number) => void;
};

const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <div
      onClick={() => onClick(user.id)}
      className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <h2 className="text-2xl font-semibold text-indigo-700 mb-1">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-4">@{user.username}</p>

      <div className="space-y-2 text-sm text-gray-700">
        <p>📧 {user.email}</p>
        <p>📱 {user.phone}</p>
        <p>🌐 {user.website}</p>
      </div>

      <div className="mt-4 border-t pt-4 text-sm text-gray-600">
        <p className="font-medium">🏢 {user.company.name}</p>
        <p className="italic text-gray-500 text-xs">“{user.company.catchPhrase}”</p>
      </div>
    </div>
  );
};

export default UserCard;
