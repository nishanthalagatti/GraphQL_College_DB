export async function hasStudents(parent, args, contextValue, info) {
  const students = await contextValue.prisma.takes.findMany({
    where: {
      courseId: parent.id,
    },
  });
  return teach;
}
