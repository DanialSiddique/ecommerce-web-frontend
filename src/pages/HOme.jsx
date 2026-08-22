

const HOme = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans mt-10">
      
      {/* ================= HEADER & NAVIGATION ================= */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-800 pb-4 ">
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Interactive E-Commerce & Portfolio Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Built with React, Tailwind CSS, and a RESTful JSON Server Backend
          </p>
        </div>
      </header>

      {/* ================= APP INFO & QUALIFICATIONS SECTION ================= */}
      <section className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-800 mb-10 shadow-xl">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-wider bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full font-semibold">
            System Overview & Developer Credentials
          </span>
          
          <h2 className="text-2xl font-bold text-slate-100 mt-3 mb-2">
            About This Web Application & My Background
          </h2>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            This application is designed to simulate a fully functional e-commerce ecosystem integrated with a modern developer portfolio. In <strong>User Mode</strong>, customers can browse catalogs, filter items via live search, manage a shopping cart, and place mock orders. In <strong>Admin Mode</strong>, managers can perform complete CRUD operations—creating, updating, and deleting products dynamically synchronized with a local JSON server backend.
          </p>

          <h2  className="text-2xl font-bold text-slate-100 mt-3 mb-2"><b>Admin mode</b></h2>
          <p>If you can use <strong>Admin</strong> mode then use this Info <br />
          User Name --- Admain@1234.com <br />
          Password --- Admain@1234 <br />
          </p>
          <h2  className="text-2xl font-bold text-slate-100 mt-3 mb-2"><b>User mode</b></h2>
          <p className="text-slate-300 leading-relaxed mb-6">you can use any dummy account for user mode first signin and then login then use user mode</p>
          
          <h2><b>User mode</b></h2>
          <p className="text-slate-300 leading-relaxed mb-6">If you can use <strong>User</strong> mode then use this Info <br />
          But you can also use any dummy account for user mode first signin and then login then use user mode <br />  
          And Also you update  Any Profile and also you can add product in cart and also you can remove product from cart <br />  
          and also you can see the product details and also you can see the product details in user mode <br /> 
          and also update and delete the profile in user mode <br />
          <strong>User Name --- user@gmail.com</strong> 

          <br />
          <strong>Password --- User@1234 </strong>  <br />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                Academic Qualifications
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Degree Track:</strong> 6th-Semester Computer Science Undergraduate Student.</li>
                <li>• <strong>Core Coursework:</strong> Software Engineering, Database Management Systems, Data Structures, and Algorithms.</li>
                <li>• <strong>Focus:</strong> Designing clean user interfaces and implementing robust client-server architectures.</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Technical Stack Expertise
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Frontend UI:</strong> React.js (Functional Components, Hooks, State Management) and Tailwind CSS.</li>
                <li>• <strong>Backend & APIs:</strong> JSON Server, RESTful routing principles, asynchronous JavaScript (`fetch`, `async/await`).</li>
                <li>• <strong>Development Tools:</strong> Git version control, component lifecycle synchronization, and responsive web design.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


     

    </div>
  );
}

export default HOme
