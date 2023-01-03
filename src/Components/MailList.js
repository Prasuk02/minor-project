import "./MailList.css";

const MailList = () => {
  return (
    <>
      <div className="mail container-fluid">
        <h1 className="maititle">Save time Save Money!</h1>
        <p className="maildesc">
          Sign up and we'll send the best deals to you
        </p>
       

        <div class="input-group mb-3 form-container">
          <div class="input-group mb-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Email Address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary btn-outline-light mailbtn"
              type="button"
              id="button-addon2"
            >
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailList;
