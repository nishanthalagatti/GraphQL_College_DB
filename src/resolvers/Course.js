export async function hasStudents(parent, args, contextValue, info) {
  const students = await contextValue.prisma.takes.findMany({
    where: {
      courseId: parent.courseId,
    },
  });
  return students;
}

export async function instructor(parent, args, contextValue, info) {
  const inst = await contextValue.prisma.instructor.findUnique({
    where: {
      instructorId: parent.instructorId,
    },
  });
  return inst;
}
