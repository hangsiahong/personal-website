import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  content: string
}

// Mock data to use when the directory is not accessible
const mockPosts: BlogPost[] = [
  {
    slug: 'blockchain-interoperability',
    title: 'Blockchain Interoperability',
    date: '2024-01-15',
    content: 'Examining cross-chain communication and asset transfers...'
  },
  {
    slug: 'zero-knowledge-proofs',
    title: 'Zero-Knowledge Proofs in DeFi',
    date: '2024-01-10',
    content: 'Exploring the implementation of zk-proofs in decentralized finance...'
  }
]

export function getBlogPosts(): BlogPost[] {
  try {
    // Attempt to read from the actual directory
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName): BlogPost => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        content: matterResult.content
      }
    })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.warn("Failed to read from '/content/posts'. Using mock data instead.")
    return mockPosts
  }
}

export function getBlogPost(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return mockPosts.find(post => post.slug === slug)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content
    }
  } catch (error) {
    console.warn(`Failed to read post '${slug}'. Attempting to use mock data.`)
    return mockPosts.find(post => post.slug === slug)
  }
}
