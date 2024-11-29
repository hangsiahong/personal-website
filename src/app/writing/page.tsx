import Link from 'next/link'
import { getBlogPosts } from '../lib/writing'

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')
}

export default function Writing() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Writing</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="group">
            <Link href={`/writing/${post.slug}`}>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline">
                  <h2 className="font-bold hover:underline">{post.title}</h2>
                </div>
                <div className="font-mono text-sm text-gray-500">
                  {formatDate(post.date)}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
