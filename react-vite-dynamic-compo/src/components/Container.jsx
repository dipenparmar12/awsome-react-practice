export default function Container({ className, children }) {
  return (
    <div className={'w-full h-full mx-auto border p-5 ' + className}>
      {children}
    </div>
  )
}
