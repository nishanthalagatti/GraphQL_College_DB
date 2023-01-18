export async function student(parent, args, contextValue, info) {
  const stud = await contextValue.prisma.student.findUnique({
    where: {
      studentId: parent.studentId,
    },
  });
  return stud;
}

export async function course(parent, args, contextValue, info) {
  const cour = await contextValue.prisma.course.findUnique({
    where: {
      courseId: parent.courseId,
    },
  });
  return cour;
}
