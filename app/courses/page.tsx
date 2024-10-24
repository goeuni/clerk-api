"use client";
import Courses from "@/components/Courses";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1 className="text-2xl font-blod mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  );
}
