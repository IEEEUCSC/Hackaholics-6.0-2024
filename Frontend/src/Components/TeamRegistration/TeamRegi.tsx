import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../TeamRegistration/Registration.scss";
import { Network } from "../../Network";
import Swal from "sweetalert2";

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {},
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamMemberCount, setTeamMemberCount] = useState(2); // Default to 2 members
  const [teamMembers, setTeamMembers] = useState<any[]>(["member1", "member2"]);

  // const [slotsRemaining, setSlotsRemaining] = useState(0);

  // get from the form
  const [university, setUniversity] = useState(
    "University of Colombo School of Computing"
  );

  const watchFields = watch(); // You can also specify specific fields like watch(['field1', 'field2'])

  // when form state changes , update the university
  useEffect(() => {
    // console.log(watchFields.university);
    // watchFields.university
    setUniversity(watchFields.university);
  }, [watchFields]);

  useEffect(() => {
    if (teamMemberCount === 2) {
      setTeamMembers(["member1"]);
    } else if (teamMemberCount === 3) {
      setTeamMembers(["member1", "member2"]);
    }
  }, [teamMemberCount]);

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      let response = await Network.shared.register(data);
      Swal.fire({
        title: response.message,
        icon: response.success ? "success" : "error",
        confirmButtonText: "Ok",
        background: "#232631",
        color: "#fff",
        footer:
          '<a href="https://chat.whatsapp.com/LJ7CwK4eiRd3jkLntBfoj0" target="_blank"> Join our whatsapp group <br> <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/></a>',
      });
      if (response.success) {
        reset();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  // get team count Network.shared.getTeamCount()
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const result = await Network.shared.getTeamCount();
  //         console.log(result);
  //         setSlotsRemaining(result);
  //     }
  //     fetchData();
  // }
  // , []);

  return (
    <div className="site-section local-bootstrap reg-section">
      <div className="container">
        <div className="row py-  justify-content-center">
          <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
            <div className="row form-group">
              <h1
                className="row py-20 registrationTopic"
                style={{ fontSize: "2rem", marginBottom: "2px" }}
              >
                Register your Team for Hackathon
              </h1>
              {/* display flex */}
              <div className="col-md-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <a href="/" target="_blank">
                    <button className="btn  btn-primary py-2 px-4 text-white">
                      Delegate Booklet
                    </button>
                  </a>
                  <div>
                    <br></br>
                  </div>
                  {/* <a  target="_blank">
                                    <button className="btn btn-primary py-2 px-4 text-red">
                                    Registration close
                                    </button>
                                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h4> Remaining slots :  <span 
                // background green and red if slots less than 10, use bootstrap classes
                className={slotsRemaining < 10 ? "slots-remaining-red" : "slots-remaining-green "}>
                    {slotsRemaining}
                </span></h4> */}

        <div className="row" style={{ fontSize: "1.1rem" }}>
          <div className="col-md-12 aos-init aos-animate" data-aos="fade-up">
            {/* form disable if no slots remaining , add class to disable */}
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              {/* Team Information */}
              <div className="row form-group">
                <div className="col-md-12">
                  <label
                    htmlFor="team-name"
                    className="form-label"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="team-name"
                    className="form-control"
                    {...register("teamName", { required: true })}
                  />
                </div>
                {/* <div className="col-md-12">
                                    <label htmlFor="university">University</label>
                                    <input type="text" id="university" className="form-control"
                                           {...register("university", { required: true })} />
                                </div> */}
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label
                    htmlFor="university"
                    className="form-label"
                    style={{ fontSize: "1.5rem" }}
                  >
                    University of study
                  </label>
                  <select
                    id="university"
                    className="form-control"
                    defaultValue={"Other"}
                    {...register("university", { required: true })}
                  >
                    {/* <option value="" disabled selected>University *</option> */}
                    <option value="University of Colombo School of Computing">
                      University of Colombo School of Computing (UCSC)
                    </option>
                    <option value="University of Moratuwa">
                      University of Moratuwa
                    </option>
                    <option value="University of Colombo">
                      University of Colombo
                    </option>
                    <option value="Sri Lanka Institute of Information Technology">
                      Sri Lanka Institute of Information Technology (SLIIT)
                    </option>
                    <option value="University of Kelaniya">
                      University of Kelaniya
                    </option>
                    <option value="University of Jayawardhanapura">
                      University of Jayawardhanapura
                    </option>
                    <option value="University of Peradeniya">
                      University of Peradeniya
                    </option>
                    <option value="University of Wayamba">
                      University of Wayamba
                    </option>
                    <option value="University of Uva Wellassa">
                      University of Uva Wellassa
                    </option>
                    <option value="University of Rajarata">
                      University of Rajarata
                    </option>
                    <option value="University of Sabaragamuwa">
                      University of Sabaragamuwa
                    </option>
                    <option value="University of Vavuniya">
                      University of Vavuniya
                    </option>
                    <option value="University of Ruhuna">
                      University of Ruhuna
                    </option>
                    <option value="University of Jaffna">
                      University of Jaffna
                    </option>
                    <option value="University of Vocational Technology">
                      University of Vocational Technology
                    </option>
                    <option value="South Eastern University of Sri Lanka">
                      South Eastern University of Sri Lanka
                    </option>
                    <option value="National School of Business Management">
                      National School of Business Management
                    </option>
                    <option value="National Institute of Business Management">
                      National Institute of Business Management
                    </option>
                    <option value="Open University of Sri Lanka">
                      Open University of Sri Lanka
                    </option>
                    <option value="Informatics Institute of Technology">
                      Informatics Institute of Technology
                    </option>
                    <option value="Sri Lanka Technological Campus">
                      Sri Lanka Technological Campus
                    </option>
                    <option value="General Sir John Kothalawala Defence University">
                      General Sir John Kothalawala Defence University
                    </option>
                    <option value="Colombo International Nautical and Engineering Campus">
                      Colombo International Nautical and Engineering Campus
                    </option>
                    <option value="International College of Business and Technology">
                      International College of Business and Technology
                    </option>
                    <option value="Australian College of Business and Technology">
                      Australian College of Business and Technology
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* if Other , Field to Enter */}

              {university === "Other" && (
                <div className="row form-group">
                  <div className="col-md-12">
                    <label
                      htmlFor="other"
                      className="form-label"
                      style={{ fontSize: "1.5rem" }}
                    >
                      University *
                    </label>
                    <input
                      type="text"
                      id="other"
                      className="form-control"
                      {...register("other", { required: false })}
                    />
                  </div>
                </div>
              )}

              {/* Team Member Count */}

              <div className="row form-group">
                {/* Member */}

                <div className="col-md-12">
                  <label
                    htmlFor="team-member-count"
                    className="form-label"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Number of Team Members
                  </label>
                  <select
                    id="team-member-count"
                    className="form-control"
                    onChange={(e) =>
                      setTeamMemberCount(parseInt(e.target.value))
                    }
                  >
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>

              {/* Team Leader Information */}
              {/* <h3>Team Leader</h3> */}
              {renderMemberFields("leader", register)}

              {/* Team Member Information */}
              {/* <h3>Team Members</h3> */}
              {teamMembers.map((member) =>
                renderMemberFields(member, register)
              )}

              <div className="row form-group">
                <div className="col-md-12  text-center align-items-center">
                  <input
                    type="submit"
                    value={isSubmitting ? "Registering..." : "Register"}
                    className={`btn btn-primary py-2 px-4 text-white ${
                      isSubmitting ? "btn-loading" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to render fields for each team member
function renderMemberFields(prefix: string, register: any) {
  return (
    <div className="row form-group">
      <div style={{ fontSize: "1.5rem" }}>
        <h3 className="teamLeaderOrMember">
          {prefix === "leader"
            ? "Team Leader"
            : `Team Member 0${prefix.replace("member", "")}`}
        </h3>
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor={`${prefix}-name`}>Name</label>
        <input
          type="text"
          id={`${prefix}-name`}
          className="form-control-leder-or-member"
          {...register(`${prefix}Name`, { required: true })}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor={`${prefix}-year`}>Year of Study</label>
        <select
          id={`${prefix}-year`}
          className="form-control-leder-or-member"
          {...register(`${prefix}Year`, { required: true })}
        >
          <option value="1st year">1st year</option>
          <option value="2nd year">2nd year</option>
          <option value="3rd year">3rd year</option>
          <option value="4th year">4th year</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor={`${prefix}-whatsapp`}>Whatsapp Number</label>
        <input
          type="tel"
          id={`${prefix}-whatsapp`}
          className="form-control-leder-or-member"
          {...register(`${prefix}Whatsapp`, { required: true })}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor={`${prefix}-email`}>Email</label>
        <input
          type="email"
          id={`${prefix}-email`}
          className="form-control-leder-or-member"
          {...register(`${prefix}Email`, { required: true })}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor={`${prefix}-nic`}>NIC</label>
        <input
          type="text"
          id={`${prefix}-nic`}
          className="form-control-leder-or-member"
          {...register(`${prefix}NIC`, { required: true })}
        />
      </div>
    </div>
  );
}
