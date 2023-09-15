import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Akash Garg</span>
            </div>
            <div className="buttons">
            <button>follow</button>
              <button>Cancel</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Disha</span>
            </div>
            <div className="buttons">
            <button>follow</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Shrey</span> followed you
              </p>
            </div>
           <span>1 min ago</span>
          </div><div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Vansh</span> liked a picture
              </p>
            </div>
           <span>1 min ago</span>
          </div><div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Crr</span> posted a picture
              </p>
            </div>
           <span>1 min ago</span>
          </div><div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Shikhar</span> liked your picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Shikhar</span>
            </div>
        </div>
        <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Arushi</span>
            </div>
        </div> <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Shrey</span>
            </div>
        </div> <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Vansh</span>
            </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Rightbar