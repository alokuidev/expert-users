import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { User } from "../types/User";
import { UserApi } from "../api/users";
import AlbumModal from "../components/AlbumModal";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    UserApi().then(setUsers);
  }, []);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <>
      <div className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={handleUserClick} />
        ))}
      </div>

      {selectedUserId !== null && (
        <AlbumModal
          userId={selectedUserId}
          onClose={() => setSelectedUserId(null)}
        />
      )}
    </>
  );
};

export default UsersList;
