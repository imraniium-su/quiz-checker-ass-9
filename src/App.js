import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ReactQuiz from './components/ReactQuiz/ReactQuiz';
import Reachart from './components/Statistics/Reachart/Reachart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/quiz',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistic',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/quiz/:quizID',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
          },
          element: <ReactQuiz></ReactQuiz>
        },
        {
          path: '/recart', element: <Reachart></Reachart>
        }
      ]
    },
    { path: '*', element: 'This router is not found' }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
