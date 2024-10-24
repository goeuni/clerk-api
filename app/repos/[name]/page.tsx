import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

export default function RepoDetailPage({
  params,
}: {
  params: { name: string };
}) {
  return (
    <div className="flex flex-col justify-start items-start max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      >
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
}