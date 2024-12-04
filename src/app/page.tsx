import Link from "next/link";

// This is a mock function. In a real application, you'd fetch this data from your backend or CMS.
function getProjectHighlights() {
  return [
    {
      title: "personal portfolio website",
      description:
        "a minimalist portfolio website built with next.js and tailwind css.",
      link: "/projects#portfolio",
    },
    {
      title: "task management app",
      description:
        "a full-stack task management application with user authentication.",
      link: "/projects#task-manager",
    },
  ];
}

export default function Home() {
  const projectHighlights = getProjectHighlights();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="space-y-6">
        {projectHighlights.map((highlight) => (
          <div key={highlight.title} className="group">
            <Link href={highlight.link}>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline">
                  <h2 className="font-bold hover:underline">
                    {highlight.title}
                  </h2>
                </div>
              </div>
            </Link>
            <p className="text-gray-500">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
