import { CourseCard } from '@/components/courses/course-card'
import { getCoursesWithImages } from '@/server/db/courses/getters'

export default async function CoursesPage() {
  const courses = await getCoursesWithImages()

  return (
    <div className="p-5">
      <h1 className="text-lg font-semibold mb-3">Courses</h1>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  )
}
