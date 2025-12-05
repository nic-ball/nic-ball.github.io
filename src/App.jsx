import { useState, useEffect } from 'react'
import { getProjects } from './services/api'
import CppDemo from './components/CppDemo'
import ContactForm from './components/ContactForm'

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
      <div className="max-w-7x1 mx-auto space-y-12">

        <div className="text-center border-b pb-8">
          <h1 className="text 6x1 font-bold text-gray-800 mb-8 border-b pb-4">
            Developer Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A full-stack showcase of projects featuring C++ WebAssembly, Vite React and RESTful APIs using Python/Django.
          </p>
        </div>

        {/* Projects Section */}
        <section>
          <h2 classname="text-3xl font-bold text-gray-800 mb-6">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <img
              src={project.image_url || 'https://via.placeholder.com/400x300'}
              alt={project.title}
              className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p classname="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                  {project.technologies}
                </span>
              </div>
              <a
                href={project.github_link}
                target="_blank"
                className="block w-full text-center bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition"
              >
                View on GitHub
              </a>
            </div>
            </div>
          ))}
          </div>
        </section>

        {/* Interactive Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gaps-8 items-start">

          {/* LEFT COLUMN: C++ Demo */}
          <div>
            <h2 classname="text-2-xl font-bold text-gray-800 mb-4">Interactive Demo</h2>
            <div className="w-full">
              <CppDemo />
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div>
            <h2 classname="text-2-xl font-bold text-gray-800 mb-4">Contact Me</h2>
            <div classname="w-full">
              <ContactForm />
            </div>
          </div>
          
        </section>
      </div>
    </div>
  )
}

export default App
