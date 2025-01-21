interface Course {
  code: string
  title: string
  description: string
}

interface CourseListProps {
  semester: number
  courses: Course[]
}

const CourseList = ({ semester, courses }: CourseListProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Semestre {semester}</h3>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.code} className="border-b pb-4">
            <h4 className="text-xl font-medium">
              {course.code}: {course.title}
            </h4>
            <p className="mt-2">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList

