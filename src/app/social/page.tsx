import { FaLinkedin, FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa'

export default function Social() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">connect</h1>
      <div className="flex justify-center space-x-12">
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaLinkedin className="w-12 h-12" />
        </a>
        <a href="https://twitter.com/rithythul" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaTwitter className="w-12 h-12" />
        </a>
        <a href="https://t.me/notestothyself" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <FaTelegram className="w-12 h-12" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <FaGithub className="w-12 h-12" />
        </a>
      </div>
    </div>
  )
}
