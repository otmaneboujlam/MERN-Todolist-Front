function SignIn({checkUser}) {

    function create(){
        let email = document.querySelector("#emaill")
        let mdp = document.querySelector("#passwordd")
        if(email.value && mdp.value) {
            const user = {"email" : email.value, "mdp" : mdp.value}
            checkUser(user)
        }        
    }

    return <form className="mt-3">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="emaill" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="passwordd" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary mt-2" onClick={create}>Submit</button>
    </form>
}

export default SignIn