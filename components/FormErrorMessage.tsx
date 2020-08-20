export default function FormErrorMessage({ message }) {
  if (!message) {
    return null
  }

  return (
    <span
      role="error"
      className="text-red-500 text-xs sm:ml-5 my-5 sm:my-2 inline-block"
    >
      {message}
    </span>
  )
}