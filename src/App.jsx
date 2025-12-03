import { useState, useEffect } from 'react'
import { getProjects } from './services/api'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProjects()
    .then(data => {
      setProjects(data)
      setLoading(false)
    })
    .catch(err => {
      setError('Failed to fetch projects')
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="text-center p-10">Loading...</div>
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-6x1 mx-auto">
        <h1 className="text 4x1 font-bold text-gray-800 mb-8 border-b pb-4">
          My Projects
        </h1>

        <div classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden
            hover:shadow-lg transition-shadow duration-300">

              {/* Image Section */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}}
                  />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div classNmae="flex flex-wrap gap-2 mb-4">
                  <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 font-medium"
                  >
                    Github Code
                  </a>
                  {project.live_link && (
                    <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default App
