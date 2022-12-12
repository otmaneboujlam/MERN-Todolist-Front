function Logging({ checkUser, createUser }) {

    function create() {
        let email = document.querySelector("#email")
        let mdp = document.querySelector("#password")
        const id = crypto.randomUUID()
        if (email.value && mdp.value) {
            const user = { id: id, "email": email.value, "mdp": mdp.value }
            createUser(user)
        }
    }

    function check() {
        let email = document.querySelector("#email")
        let mdp = document.querySelector("#password")
        if (email.value && mdp.value) {
            const user = { "email": email.value, "mdp": mdp.value }
            checkUser(user)
        }
    }

    return <form className="mt-3">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={check}>Sign In</button>
        <button type="button" className="btn btn-primary m-2 " onClick={create}>Sign Up</button>
    </form>
}

export default Logging