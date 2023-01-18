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

export async function addCourse(parent, args, contextValue, info) {
  const course = await contextValue.prisma.course.create({
    data: { ...args },
  });
  return course;
}

export async function addTake(parent, args, contextValue, info) {
  const take = await contextValue.prisma.takes.create({
    data: { ...args },
  });
  return take;
}
