export async function addStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.create({
    data: { ...args },
  });
  return student;
}

export async function addInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.prisma.instructor.create({
    data: { ...args },
  });
  return instructor;
}
