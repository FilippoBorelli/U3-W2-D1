import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import BookList from './components/BookList'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import fantasy from './data/fantasy.json'
import CommentArea from './components/CommentArea'
import { Component } from 'react'

class App extends Component() {
  state={
    BookTitle : "The Last Wish: Introducing the Witcher"
  }
  changeBookTitle = (newTitle) => {
    this.setState({
      BookTitle: newTitle,
    })
  }
  render(){
  return (
    <>
    <Container>
      <MyNav />
      </Container>
      <Container>
      <Row>
      <Col xs={6} md={8}>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
        </Col>
        <Col xs={6} md={4}>
        <CommentArea BookTitle={this.state.BookTitle} changeBookTitle={this.changeBookTitle}/>
        </Col>
        </Row>
        </Container>
        <Container>
        <Row>
        <Col xs={12}>
        <MyFooter />
        </Col> 
        </Row>
        </Container>
    </>
  )
  }
}

export default App
