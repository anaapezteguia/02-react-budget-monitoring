![www.ana-am.es](./src/images/ana_am_es-logo.png)

# Budget monitoring app

This project is a small budget monitoring app made with React.

We create a component in which we assign a budget and validate the input showing error messages to the user in case we try to enter a negative amount or there is something wrong.

Once we assign an amount, we enter a form to introduce the expenses we have and they will be shown in another component at the same time that the amounts are subtracted from the budget.

Depending on whether the budget exceeds 25%, 50% or 75% of the total, the colour of the remaining amount changes like a traffic light to warn us.

**What I've learned:** once again destructuring of props; use of useEffect to update data (in this case the remaining amount) and creation of helper files with reusable functions so as not to overload the components.

This project is part of the Udemy [React - La Guía Completa: Hooks Context Redux MERN +15 Apps](https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/) course.

© Ana Apezteguía Martínez.
