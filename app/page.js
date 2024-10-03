import Header from "./_components/Header"
import Body from "./_components/Body"



const Home = () => {
  console.log("home pagess")
  return(
      <div className="bg-white h-screen" id='HomeSection'>
        <Header/>
          <div>
            <Body />
          </div>
      </div>
  )
}

export default Home