class App extends React.Component{
    componentDidMount(t){
      $("div").on("click", function(){
        $("#sound").attr({
            'src':'media/water.mp3', 
            'autoplay':'autoplay'
        })
      })
      document.body.style.backgroundImage="url('media/grass.jpg')"
      let x=document.getElementsByClassName("lastfire")[0]
      let y=document.getElementsByClassName("fire")
      setInterval(()=>{for (var i = 0; i < y.length; i++) {
        y[i].style.transitionDuration= "5s";
        y[i].style.height= "55vh";
        x.style.transitionDuration= "5s";
        x.style.height= "55vh";
      }},3000,y)
    }
    reset(e){
      e.target.style.transitionDuration= "1s"
      e.target.style.height="1vh"
    }
    render() {
      return (
      <div>
        <div className="row">
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
        </div>
        <div className="fires">
          <img id="f1" className="fire" src="./media/fire.png" onClick={this.reset.bind(this)} alt=""></img> 
          <img id="f2" className="fire" src="./media/fire.png" onClick={this.reset.bind(this)} alt=""></img> 
          <img id="f3" className="fire" src="./media/fire.png" onClick={this.reset.bind(this)} alt=""></img> 
          <img id="f4" className="lastfire" src="./media/fire.png" onClick={this.reset.bind(this)} alt=""></img> 
        </div>
      </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
