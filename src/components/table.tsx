

export default function Table() {





  

  


  return (
    <div className="p-3 bg-white rounded-xl shadow-md overflow-x-auto">
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
                <tbody className="text-gray-800">
          <tr className="bg-gray-50 hover:bg-gray-100 transition rounded-lg">
            <td className="px-4 py-3">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-500"
              />
            </td>
            <td className="py-3">Ancient Sculptures</td>
            <td className="py-3">Greece</td>
            <td className="py-3">Unknown</td>
            <td className="py-3">Main Hall</td>
            <td className="py-3">2024-05-12</td>
            <td className="py-3">2025-01-20</td>
          </tr>
        </tbody>
      </table>  
    </div>
  );
}