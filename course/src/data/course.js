const courses = [
  {
    id: 'aws-csa',
    title: 'AWS Certified Solutions Architect',
    duration: 100,
    instructor: { userId: 1, firstname: 'John' }
  },
  {
    id: 'aws-cda',
    title: 'AWS Certified Developer Associate',
    duration: 180,
    instructor: { userId: 3, firstname: 'Subash' }
  },
  {
    id: 'aws-csa-pro',
    title: 'AWS Certified Solutions Architect Professional',
    duration: 220,
    instructor: { userId: 3, firstname: 'Subash' }
  }
];

const userStartedCourses = [
  { id: 'aws-csa', userId: '1' },
  { id: 'aws-csa-pro', userId: '1' },
  { id: 'aws-csa', userId: '2' },
  { id: 'aws-cda', userId: '2' }
];

const userCompletedCourses = [
  { id: 'aws-csa', userId: '1' },
  { id: 'aws-cda', userId: '2' }
];

module.exports = { userStartedCourses, userCompletedCourses, courses };
