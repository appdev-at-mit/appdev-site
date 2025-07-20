// Fake app window styling

export default function AppWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 shadow-lg shadow-gray-200 rounded-xl p-5 w-full border border-gray-300 relative">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2 saturate-50"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 saturate-50"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full saturate-50"></div>
      </div>
      {children}
    </div>
  );
}
