import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contact</span></h1>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder='Enter your email' required/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea rows='10' placeholder='Enter your message' required/>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact