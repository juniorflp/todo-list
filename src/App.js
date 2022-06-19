import { ContentList } from "./components/ContentList";
import { NumeroTask } from "./components/NumeroTask";
import { SearchBar } from "./components/SearchBar";
import { Container } from "./styles/Container";
import { Content } from "./styles/Content";

function App() {
  return (
    <>
      <Container>
        <Content>
          <header>Lista de tarefas</header>
          <NumeroTask />
          <SearchBar></SearchBar>
          <ContentList></ContentList>
        </Content>
      </Container>
    </>
  );
}

export default App;
