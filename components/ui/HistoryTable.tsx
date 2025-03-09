import React from "react";

interface HistoryTableProps {
  history: { original: string; short: string; created_at: string }[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ history }) => (
  <div className="mt-10 w-full max-w-4xl">
    <h3 className="text-lg font-semibold mb-2">Short Links History:</h3>
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-900 text-[#fff]">
          <tr>
            <th className="px-4 py-3">Original URL</th>
            <th className="px-4 py-3">Short URL</th>
            <th className="px-4 py-3">Created At</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 text-[#C9CED6]">
          {history.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-3 truncate max-w-xs">{item.original}</td>
              <td className="px-4 py-3">
                <a
                  href={item.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9CED6] underline"
                >
                  {item.short}
                </a>
              </td>
              <td className="px-4 py-3">{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default HistoryTable;
