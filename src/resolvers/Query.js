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
