function SignUp({createUser}) {

    function check(){
        let email = document.querySelector("#email")
        let mdp = document.querySelector("#password")
        const id = crypto.randomUUID()
        if(email.value && mdp.value) {
            const user = {id : id ,"email" : email.value, "mdp" : mdp.value}
            createUser(user)
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
        <button type="button" className="btn btn-primary mt-2" onClick={check}>Submit</button>
    </form>
}

export default SignUp