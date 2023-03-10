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

export async function updateStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.update({
    where: { studentId: args.studentId },
    data: { ...args },
  });
  return student;
}

export async function updateInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.prisma.instructor.update({
    where: { instructorId: args.instructorId },
    data: { ...args },
  });
  return instructor;
}

export async function updateCourse(parent, args, contextValue, info) {
  const course = await contextValue.prisma.course.update({
    where: { courseId: args.courseId },
    data: { ...args },
  });
  return course;
}

export async function updateTake(parent, args, contextValue, info) {
  const take = await contextValue.prisma.takes.update({
    where: {
      studentId_courseId: {
        studentId: args.studentId,
        courseId: args.courseId,
      },
    },
    data: { ...args },
  });
  return take;
}

export async function deleteStudent(parent, args, contextValue, info) {
  const student = await contextValue.prisma.student.delete({
    where: { studentId: args.studentId },
  });
  return student;
}

export async function deleteInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.prisma.instructor.delete({
    where: { instructorId: args.instructorId },
  });
  return instructor;
}

export async function deleteCourse(parent, args, contextValue, info) {
  const course = await contextValue.prisma.course.delete({
    where: { courseId: args.courseId },
  });
  return course;
}

export async function deleteTake(parent, args, contextValue, info) {
  const take = await contextValue.prisma.takes.delete({
    where: {
      studentId_courseId: {
        studentId: args.studentId,
        courseId: args.courseId,
      },
    },
  });
  return take;
}
