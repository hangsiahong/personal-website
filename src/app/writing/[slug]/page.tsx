import { getBlogPost, getBlogPosts } from '../../../lib/writing'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="font-mono text-sm text-gray-500 mb-8">
        {formatDate(post.date)} · Experiment
      </div>
      <div className="prose prose-lg">
        {post.content}
      </div>
    </article>
  )
}
