export async function getStudents(parent, args, contextValue, info) {
  const students = await contextValue.prisma.student.findMany();
  console.log(students);
  return students;
}

export async function getStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.findUnique({
    where: { ...args },
  });
  console.log(student);
  return student;
}
