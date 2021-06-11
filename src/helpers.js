// HELPERS
// reusable functions not to overload components
export const reviewBudget = (budget, remaining) => {
  let classStyle;

  if (budget / 4 > remaining) {
    classStyle = 'alert alert-danger';
  } else if (budget / 2 > remaining) {
    classStyle = 'alert alert-warning';
  } else {
    classStyle = 'alert alert-success';
  }
  return classStyle;
};
