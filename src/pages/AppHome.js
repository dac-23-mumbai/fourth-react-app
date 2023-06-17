import { Carousel } from "react-bootstrap";

function AppHome() {
  return (
    <>
    {/* hero */}
      <div className="row  mt-2 align-items-center" style={{ height: "80vh" }} >
        <div className="col-md-6 col-sm-12">
          <div className="row justify-content-center ">
            <div className="col-6">
              <h1 className="fa-school-flag">Private Chef</h1>
              <p className="f">Enjoy a customized culinary experience with a Private Chef in the comfort of your own home.
              </p>
              <button className="btn btn-rounded btn-lg rounded-5 btn-warning border-1">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
            <img src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-5 pe-2" alt=""/>
        </div>
      </div>
      <hr />



      {/* cards */}

    </>
  );
};

function AppCard() {
  let list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="row">
      {list.map((item, index) => (
        <div className="col-sm-12 col-md-3">
          <div>
            <img
              src={`https://picsum.photos/${300 + index}`}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, ea perspiciatis.
            </p>
            <input
              type="button"
              value="Add to Cart"
              className="btn btn-success"
            />
            <input
              type="button"
              value="Continue"
              className="btn btn-secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MyAppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=20232a"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=20232a"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppHome;
