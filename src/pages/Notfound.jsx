import {Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-150 p-10 '>
        <div className="bounce-animation text-lg md:text-4xl py-2 mb-5">
          404----Page Not Found......!   
        </div>
        <p className='typing  py-2 mb-3 text-2xl'>Page doesn't found.</p>
        <Link className="rounded-4xl bg-gray-800 px-4 py-2 border-tansparent hover:bg-transparent
         hover:border" to="/">Go Back Home</Link>

    </div>
  )
}

export default Notfound
