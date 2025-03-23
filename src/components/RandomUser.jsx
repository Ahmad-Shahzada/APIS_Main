import React from "react";
import { useGetRandomUsersQuery } from "../features/api/randomUserApi";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card"; // Importing ShadCN Card

const RandomUser = () => {
  const { data, error, isLoading } = useGetRandomUsersQuery();
  const navigate = useNavigate();

  console.log("API Response:", data); // Debugging

  if (isLoading)
    return <p className="text-center text-lg font-semibold text-white">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        Error fetching users
      </p>
    );

  // Extract only user data
  const users = Array.isArray(data?.data?.data) ? data.data.data : [];

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-4xl font-extrabold text-center  mb-6 tracking-wide">
        🔥 Amazing Random Users
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.length > 0 ? (
          users.map((user) => (
            <Card
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`, { state: { user } })}
              className="  border border-gray-700 shadow-md transition-all hover:scale-105 hover:border-indigo-500 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center p-6">
                <img
                  src={user.picture.large}
                  alt="User"
                  className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
                />
                <h3 className="text-lg font-bold mt-3">{user.name.first} {user.name.last}</h3>
                <p className="text-xs font-semibold text-indigo-400 mt-1">
                  {user.gender.toUpperCase()}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center">No users found</p>
        )}
      </div>
    </div>
  );
};

export default RandomUser;
