const PaginationButton = ({
  children,
  active = false,
  disabled = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-3 py-2 text-sm font-medium transition-colors
      ${
        active
          ? "text-blue-600 bg-blue-50 border border-blue-200 rounded"
          : disabled
          ? "text-gray-300 cursor-not-allowed"
          : "text-gray-500 hover:text-gray-700"
      }
    `}
  >
    {children}
  </button>
);

export default PaginationButton;
