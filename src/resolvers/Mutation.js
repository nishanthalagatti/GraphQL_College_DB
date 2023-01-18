export async function addStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.create({
    data: { ...args },
  });
  if (student) student.takesCourse = [];
  console.log(student);
  return student;
}
