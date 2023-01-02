import './MailList.css';

const MailList = () => {
  return (
    <div>
        <div className="mail">
            <h1 className="maititle">Save time Save Money!</h1>
            <span className="maildesc">Sign up and we'll send the best deals to you</span>
            <div className="mailinputcontainer">
                <input type="text" placeholder="enter your email" />
                <button>Subscribe</button>

            </div>
        </div>
      
    </div>
  );
}

export default MailList;
