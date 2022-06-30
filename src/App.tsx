import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Evento } from "./pages/Evento";
import { Router } from "./Router";

/* const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
} */

function App() {
  /* useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []); */

  /* const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);
 */
  return (
    /* <ul>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul> */

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
