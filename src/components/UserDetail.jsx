import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const UserDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user)
    return <p className="text-center text-lg font-semibold">User not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Button onClick={() => navigate(-1)} variant="default" className="mb-4">
        Back
      </Button>

      <Card className="max-w-lg w-full">
        <CardContent className="p-6 flex flex-col items-center">
          <Avatar className="w-32 h-32 border-4 border-indigo-500 shadow-md">
            <AvatarImage src={user.picture.large} alt="User" />
          </Avatar>
          <h2 className="text-2xl font-bold mt-3">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </CardContent>

        <Separator />

        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Nationality:</strong> {user.nat}</p>
          <p><strong>Age:</strong> {user.dob.age}</p>
          <p><strong>DOB:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
        </CardContent>

        <Separator />

        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>{user.location.street.number}, {user.location.street.name}</p>
          <p>{user.location.city}, {user.location.state}</p>
          <p>{user.location.country} - {user.location.postcode}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetail;
