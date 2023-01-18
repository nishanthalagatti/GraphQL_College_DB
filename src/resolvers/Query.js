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
