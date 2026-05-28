export default function BarGraph({ name, percent }) {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="flex flex-row justify-between w-full text-base">
        <h2 className="text-gray-300 font-medium group-hover:text-white transition-colors">{name}</h2>
        <h2 className="text-gray-400 font-semibold group-hover:text-blue-400 transition-colors">{percent}%</h2>
      </div>
      <div className="relative w-full bg-gray-800/50 h-3 rounded-full overflow-hidden border border-gray-700/50">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full transition-all duration-1000 ease-out rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/50"
          style={{ width: `${percent}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
