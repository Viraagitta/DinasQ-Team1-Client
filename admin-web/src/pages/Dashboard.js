import Male from "../assets/undraw_male_avatar_323b.svg";
export default function Dashboard() {
  return (
    <>
      <div className="main">
        <div className="topbar">
          <div>
            <p id="welcome">Welcome to DinasQ</p>
            <p id="under-welcome">Hello admin, welcome back</p>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className="user">
            <img src="" alt="user" />
          </div>
        </div>

        <div className="img-dashboard">
          <img
            className="img-finance"
            src="https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?w=996"
            alt="img-finance"
          />
          <img
            className="img-finance2"
            src="https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg?w=1060&t=st=1660291565~exp=1660292165~hmac=a9a9f281d74f16b851f775ab28fe6b4a10b5be955bb0cf17b4f61e13da01377b"
            alt="img-finance2"
          />
        </div>

        <p className="title-list">List Official Letters</p>
        <div className="cardBox">
          <div className="card">
            <div>
              <img src={Male} alt="img-official-letters" />
              <div className="cardName">nama karyawan</div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={Male} alt="img-official-letters" />
              <div className="cardName">nama karyawan</div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={Male} alt="img-official-letters" />
              <div className="cardName">nama karyawan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
