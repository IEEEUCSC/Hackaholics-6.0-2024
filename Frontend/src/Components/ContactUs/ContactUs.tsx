import "./ContactUs.css";
import image1 from "../../Assets/Contact Us/Uthpalani Jayasinge.jpeg";
import image2 from "../../Assets/Contact Us/oshani.jpeg";
import image3 from "../../Assets/Contact Us/Dilanga Harshani.png";

const ContactUs = () => {
  return (
    <div className="contactUsDiv">
      <div className="contactUsHead">
        <div className="shape">
          <h1>
            <span>Contact Us</span>
          </h1>
        </div>
      </div>
      <div className="contactUsDivRow">
        <div className="contactUsColumn">
          <div className="ocPeopleImageDiv1">
            <img src={image1} alt="Avatar" className="ocPeopleImage" />
          </div>
          <div className="nameDivContactUs">
            <p>
              <b>Ms. Uthpalani Jayasinghe</b>
            </p>
          </div>
          <div className="roleDivContactUs">
            <p>Chairperson</p>
          </div>
          <div className="phoneNumberDiv">
            <p>
              <i className="fas fa-phone-alt"></i> +94 76 336 1822
            </p>
          </div>
          <div className="emailDiv">
            <p>
              <b className="fas fa-envelope">uthpalani.jayasinghe@ieee.org</b>
            </p>
          </div>
        </div>
        <div className="contactUsColumn">
          <div className="ocPeopleImageDiv2">
            <img src={image2} alt="Avatar" className="ocPeopleImage" />
          </div>
          <div className="nameDivContactUs">
            <p>
              <b>Ms. Oshani Wickramasinghe</b>
            </p>
          </div>
          <div className="roleDivContactUs">
            <p>Vice Chairperson</p>
          </div>
          <div className="phoneNumberDiv">
            <p>
              <i className="fas fa-phone-alt"></i> +94 71 179 5560
            </p>
          </div>
          <div className="emailDiv">
            <p>
              <b className="fas fa-envelope">oewickramasingha@gmail.com</b>
            </p>
          </div>
        </div>
        <div className="contactUsColumn">
          <div className="ocPeopleImageDiv3">
            <img src={image3} alt="Avatar" className="ocPeopleImage" />
          </div>
          <div className="nameDivContactUs">
            <p>
              <b>Ms. Dilanga Harshani</b>
            </p>
          </div>
          <div className="roleDivContactUs">
            <p>Secretary</p>
          </div>
          <div className="phoneNumberDiv">
            <p>
              <i className="fas fa-phone-alt"></i> +94 70 1 665 087
            </p>
          </div>
          <div className="emailDiv">
            <p>
              <b className="fas fa-envelope">
                Email: aadilangaharshani@ieee.org
              </b>
            </p>
          </div>
        </div>
        <div className="contactUsColumn">
          <div className="ocPeopleImageDiv4">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="ocPeopleImage"
            />
          </div>
          <div className="nameDivContactUs">
            <p>
              <b>Ms. Buddhi Yapa</b>
            </p>
          </div>
          <div className="roleDivContactUs">
            <p>Treasurer</p>
          </div>
          <div className="phoneNumberDiv">
            <p>
              <i className="fas fa-phone-alt"></i> +94 76 684 8398
            </p>
          </div>
          <div className="emailDiv">
            <p>
              <b className="fas fa-envelope">buddhi_yapa@ieee.org</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
