import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import DisplayTasks from './Display.js'
function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/300" alt="" height={200}/>
              <div className="card-body">
                <h5 className="card-title">Task_display</h5>
                <p className="card-text">If you want to see which task you have to complete today then you can see</p>
                <Link to="/DisplayTasks" className="btn btn-primary">Display</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/300" alt="" height={200}/>
              <div className="card-body">
                <h5 className="card-title">Task_creating</h5>
                <p className="card-text">If you want to manage the time by scheduling the task you can do.</p>
                <Link to="/create-account" className="btn btn-primary"> Create </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/300" alt="" height={200}/>
              <div className="card-body">
                <h5 className="card-title">Task_editing</h5>
                <p className="card-text">If you want to update the time deadline then you can do.</p>
                <Link to="/create-account" className="btn btn-primary">Updating</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA" alt="..." height={200} width={200}/>
              <div className="card-body">
                <h5 className="card-title">Task_delete</h5>
                <p className="card-text">You can delete the task if you have complete</p>
                <Link to="/create-account" className="btn btn-primary">Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/DisplayTasks" element={<DisplayTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// for checking the website like how to connect the frontend to backend
// import React from 'react';

// class SendMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//   }

//   handleMessageChange = (event) => {
//     this.setState({ message: event.target.value });
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/api/send-message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: this.state.message })
//       });
//       const data = await response.json();
//       console.log(data); // Assuming the backend sends back a response
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
//         <button type="submit">Send Message</button>
//       </form>
//     );
//   }
// }

// export default SendMessage;
