import Form from 'react-bootstrap/Form'

const CommentArea = (props) => {
  const fetched = () => {
    fetch(fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzk5YTE4N2U1YzAwMTgxNGM2MGQiLCJpYXQiOjE3MDcxNDAwMjIsImV4cCI6MTcwODM0OTYyMn0.IsnPYo5UGzzZ1wMADp990HD6rcc4aQRJKcJdj8ozp1U"
      }
      }))
    .then((response) => {
      if(response.ok){
        return response.json()
      }else{
        throw new Error("errore nel compilamento dati")
      }
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  fetched()
    return(
      <Form.Select
      aria-label="book chooser select"
      value={props.BookTitle}
      onChange={(e) => props.changeBookTitle(e.target.value)}
    >
      <option>Sword of Destiny</option>
      <option>D&D MORDENKAINEN'S TOME OF FOES</option>
      <option>Destiny Grimoire Anthology, Volume II: Fallen Kingdoms</option>
      <option>American Gods: The Tenth Anniversary Edition: A Novel</option>
      <option>Haroun and the Sea of Stories</option>
      <option>Stiletto: A Novel </option>
    </Form.Select>
    )
  }

export default CommentArea
