import PostHeader from "./headers";

const Profile = () => {
  const styles = {};
  return (
    <>
      <PostHeader />
      <h2>Inspiration for your first order</h2>

      <div className="food1" style={{ display: "flex" }}>
        <div>
          <img
            src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            style={{ height: 150, width: 150,margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Biryani</h6>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Dosa</h6>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Pizza</h6>
        </div>
        <div>
          <img
            src=" https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            style={{ height: 150, width: 150,margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Chicken</h6>
        </div>

        <div>
          <img
            src=" https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
            style={{ height: 150, width: 150 ,margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6}}>Idli</h6>
        </div>
        <div>
          <img
            src=" https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            style={{ height: 150, width: 150,margin:15  }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Burger</h6>
        </div>
       <div>
        <img src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"   style={{ height: 150, width: 150, borderRadius:"50%",margin:15  }}/>
        <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>North Indian</h6>
      </div>

      </div>

      <h1>Top brands for you</h1>
      <div style={{display:"flex"}}>

      <div>
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png"
            style={{ height: 150, width: 150,margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Mehfil</h6>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png"
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Shah Ghouse Hotel & Restaurant</h6>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png"
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Pista House</h6>
        </div>
        <div>
          <img
            src=" https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png"
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Paradise Biryani - A Legend Since 1953</h6>
        </div>

        <div>
          <img
            src=" https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png"
            style={{ height: 150, width: 150, borderRadius: "50%" ,margin:15 }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6}}>Cream Stone Ice Cream</h6>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png "
            style={{ height: 150, width: 150, borderRadius: "50%",margin:15  }}
          />
          <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>KFC</h6>
        </div>
       <div>
        <img src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187971.png"   style={{ height: 150, width: 150, borderRadius:"50%",margin:15  }}/>
        <h6 style={{ textAlign: "center", paddingRight: 1.6 }}>Burger King</h6>
      </div>

        

        </div>
      <h1 style={{margin: "100 0 100 0"}}>Delivery Restaurants in Hyderabad</h1>
      <img src="https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg" />
    </>
  );
};
export default Profile;
