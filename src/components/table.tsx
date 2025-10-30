

export default function Table() {





  

  


  return (
    <div className="p-6 bg-white rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-gray-600 font-semibold">
            <th className="px-4">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-500"
              />
            </th>
            <th className="py-2">Title</th>
            <th className="py-2">Place of Origin</th>
            <th className="py-2">Artist</th>
            <th className="py-2">Display</th>
            <th className="py-2">Start Date</th>
            <th className="py-2">End Date</th>
          </tr>
        </thead>
      </table>  
    </div>
  );
}