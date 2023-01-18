export async function getStudents(parent, args, contextValue, info) {
  const students = await contextValue.prisma.student.findMany();
  return students;
}

export async function getStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.findUnique({
    where: { ...args },
  });
  return student;
}

export async function getInstructors(parent, args, contextValue, info) {
  const instructors = await contextValue.prisma.instructor.findMany();
  return instructors;
}

export async function getInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.prisma.instructor.findUnique({
    where: { ...args },
  });
  return instructor;
}

export async function getCourses(parent, args, contextValue, info) {
  const courses = await contextValue.prisma.course.findMany();
  return courses;
}

export async function getCourse(parent, args, contextValue, info) {
  const course = await contextValue.prisma.course.findUnique({
    where: { ...args },
  });
  return course;
}

export async function getTakes(parent, args, contextValue, info) {
  const takes = await contextValue.prisma.takes.findMany();
  return takes;
}

export async function getTake(parent, args, contextValue, info) {
  const take = await contextValue.prisma.takes.findUnique({
    where: {
      studentId_courseId: { ...args },
    },
  });
  return take;
}
