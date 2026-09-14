// Reusable chevron icon.
// Orientation (rotation) and size are handled by the parent's CSS.
function ChevronIcon({ color = 'white' }) {
  return (
    <svg viewBox="0 0 14 8" fill="none">
      <path
        d="M1 7L7 1L13 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronIcon
