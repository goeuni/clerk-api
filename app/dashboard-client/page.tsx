"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function DashboardClient() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoaded: isLoadedAuth, userId, sessionId, getToken } = useAuth();
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser();

  if (!isLoadedAuth || !userId) {
    return null;
  }
  if (!isLoadedUser || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>
        Hello, {user.fullName} <br />
        Your user ID: {userId} <br />
        Your current active sesseion: {sessionId}
      </p>
    </div>
  );
}
