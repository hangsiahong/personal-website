import Link from 'next/link'
import { getBlogPosts } from './lib/writing'

// This is a mock function. In a real application, you'd fetch this data from your backend or CMS.
function getProjectHighlights() {
  return [
    {
      title: "personal portfolio website",
      description: "a minimalist portfolio website built with next.js and tailwind css.",
      link: "/projects#portfolio"
    },
    {
      title: "task management app",
      description: "a full-stack task management application with user authentication.",
      link: "/projects#task-manager"
    }
  ]
}

export default function Home() {
  const projectHighlights = getProjectHighlights()
  const recentPosts = getBlogPosts().slice(0, 3)

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">welcome</h1>
        <p className="text-lg mb-4">
          hello, i'm [your name]. i'm a web developer and designer passionate about creating beautiful, functional websites.
        </p>
        <p className="text-lg">
          explore my projects and writings below, or learn more <Link href="/about" className="text-blue-600 hover:underline">about me</Link>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">highlights</h2>
        <div className="space-y-4">
          {projectHighlights.map((project, index) => (
            <div key={index} className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={project.link} className="hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/projects" className="text-blue-600 hover:underline">view all projects →</Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">latest blog posts</h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.slug} className="border-t pt-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/writing/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/writing" className="text-blue-600 hover:underline">view all posts →</Link>
          </div>
        </section>
      )}
    </div>
  )
}
