import Link from "next/link";

export default function Home() {
  <div>
    <h1 className="text-2xl mb-4 font-bold">Welcome Home</h1>
    <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
      <Link
        href="https://clerk.com/"
        className="text-xl text-blue-700 font-bold"
      >
        clerk.com
      </Link>
      <p className="mb-3">this is a demo of clerk.</p>
    </div>
    <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
      <Link
        href="https://api.github.com/"
        className="text-xl text-blue-700 font-bold"
      >
        api.github.com
      </Link>
      <p className="mb-2">Explore github repositories using Fetch API</p>
    </div>
    <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
      <Link href="/api/courses" className="text-xl text-blue-700 font-bold">
        Backed API
      </Link>
      <p className="mb-4">
        rovide Backend API service that provide extensive courses information in
        web development
      </p>
    </div>
  </div>;
}
