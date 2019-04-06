import React, { Component } from 'react'
import './styles/app.css'
import axios from 'axios'
import Modal from './Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      error: '',
      title: '',
      body: '',
      time: '',
      open: false,
      showData: false
    }
  }

  handleChange = ({ target: { name, value } }) => 
    this.setState({ [name]: value })

  closeModal = () => 
    this.setState({ open: false})

  getData = (event) => {
    const id = this.state.id
    this.handleHideData()
    if (!isNaN(id) && id !== '')
      axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
          var today = new Date().toLocaleString('en-US', { hour12:  false })
          this.setState({error: '', body: res.data.body, title: res.data.title, time: today, open: true})
          console.log(this.state)
        })
        .catch(error => {
          this.setState({error: 'Error al conseguir los datos. Use un ID entre 1 y 100 o intente mas tarde.'})
          console.log(error)
        })
    else this.setState({error: 'El ID tiene que ser un numero entero.'})
    event.preventDefault()
  }

  handleShowData = () => 
    this.setState({showData: true})

  handleHideData = () =>
    this.setState({showData: false})

  render() {
    const { error, id, body, title, time, open, showData} = this.state
    console.log('open in app: ', open)
    return (
      <div className='container'>
        <form onSubmit={this.getData}>
          <p>Post ID</p>
          <input className={`input ${error ? 'error-input' : ''}`} name='id' value={id} onChange={this.handleChange} />
          <button className='btn' type='submit' value='Edit'>Edit</button>
        </form>
        {error && 
          <p className='error'>{error}</p>
        }
        {showData &&
          <div className='show-data'>
            <h5>Title:</h5>
            <p>"{title}"</p>
            <h5>Body:</h5>
            <p>"{body}"</p>
            <h5>Time:</h5>
            <p>{time}</p>
          </div>
        }
        <Modal
          open={open}
          close={this.closeModal}
          onOk={this.handleShowData}
          customHeaderTitle={'Editing: ' + id}
        >
          <div className='modal-info'>
            <div className='modal-input'>
              Title <input className='input' value={title} name='title' onChange={this.handleChange}/>
            </div>
            <div className='modal-input'>
              Body <textarea rows='4' className='input' value={body} name='body' onChange={this.handleChange}></textarea>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default App