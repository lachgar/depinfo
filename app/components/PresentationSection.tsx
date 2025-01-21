import type { ReactNode } from "react"

interface PresentationSectionProps {
  title: string
  children: ReactNode
}

const PresentationSection = ({ title, children }: PresentationSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">{title}</h2>
      <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
    </section>
  )
}

export default PresentationSection

