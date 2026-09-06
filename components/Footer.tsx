export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#171713] py-8 text-white/60">
      <div className="page-shell flex flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <p className="font-semibold text-white">Rajendra Ladkat</p>
        <p>Platform engineering · Staff · FDE · Customer Solutions</p>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  )
}

