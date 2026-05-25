export default function PortfolioLogo() {
  return (
    <div className="relative group cursor-pointer overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-pink-300 blur-2xl opacity-20 group-hover:opacity-40 transition duration-700 rounded-full"></div>

      {/* Logo */}
      <h1 className="relative text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900 whitespace-nowrap">
        <span className="inline-block animate-slideLeft text-pink-500">
          Port
        </span>
        <span className="inline-block animate-slideRight text-gray-800">
          folio
        </span>
      </h1>

      {/* Animated line */}
      <div className="mt-1 h-0.5 w-0 bg-pink-500 rounded-full animate-line"></div>

      <style>{`
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lineGrow {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1.3s ease forwards;
        }
      `}</style>
    </div>
  );
}