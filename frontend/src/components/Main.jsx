import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:'fileUpload',
      imgUrl:''
    }
  }

  handleSubmit = e => {
     e.preventDefault();
     console.log('submit');

     const data =  new FormData();
     data.append('file',this.uploadInput.files[0]);
     data.append('filename',this.fileName.value);

     fetch('http://localhost:3000/upload',{
       method:'POST',
       body:data
     }).then(res => res.json())
       .then(data => {
           this.setState({
             imgUrl:`http://localhost:3000/${data.file}`
           })
       })
       .catch(err => {
         console.log(err);
       })
  }

  render () {
      return(
        <div>
           <form onSubmit={this.handleSubmit}>
               <div>
                  <input ref ={ (ref) => { this.uploadInput =  ref; }} type="file" />
               </div>
               <div>
                  <input ref ={ (ref) => { this.fileName=  ref; }} type="text" placeholder="enter the decired name of the file" />
               </div>
               <br/>
               <div>
                  <input type="submit" value="upload file" />
               </div>
               {this.state.imgUrl ? (
                 <img  src={this.state.imgUrl} alt="image..."/>
               ) : null}

           </form>
        </div>
      )
  }
}

export default Main;
