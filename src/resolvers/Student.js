export async function takesCourse(parent, args, contextValue, info) {
  const takes = await contextValue.prisma.takes.findMany({
    where: {
      studentId: parent.id,
    },
  });
}
