export async function teaches(parent, args, contextValue, info) {
  const teach = await contextValue.prisma.course.findMany({
    where: {
      instructorId: parent.instructorId,
    },
  });
  return teach;
}
