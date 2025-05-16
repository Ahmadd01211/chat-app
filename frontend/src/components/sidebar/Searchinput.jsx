import { IoSearchCircleSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center ml-1 mt-2 gap-2">
        <input type="text" placeholder='Search' className="input input-bordered rounded-full" />
        <button type='submit' className="btn btn-circle bg-sky-500 hover:bg-black text-white">
        <IoSearchCircleSharp className="w-8 h-8 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput