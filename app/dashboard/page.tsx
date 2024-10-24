import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();
  console.log(userId);
  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard 대시보드</h1>
      <p className="md-4">welcome to Dashboard</p>

      {userId && (
        <div>
          <p>UserID: {userId}</p>
          <p>Name: {user?.fullName}</p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      )}
    </div>
  );
}
