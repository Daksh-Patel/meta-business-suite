import Home from "../../components/home"
import Layout from "../../components/layout"
import Title from "../../components/title"
import TodoList from "../../components/todo-list"

const HomePage = () => (
  <Layout>
    <Title title='Home' />

    <Home />

    <TodoList />
  </Layout>
)

export default HomePage
