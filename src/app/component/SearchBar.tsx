import { Input } from '@/components/ui/input';
export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md mx-auto bg-gray-100 rounded-lg p-4">
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="w-full bg-white border-none shadow-sm rounded-lg placeholder-gray-400 focus:ring focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-indigo-500 rounded-full text-white hover:bg-indigo-600 focus:outline-none"
      >
        🔍
      </button>
    </div>
  );
}
