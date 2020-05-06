window.onload = function() {
    const login = this.document.getElementById("login");

    login.onclick = () => {
        var username = this.document.getElementById("user").value;
        var password = this.document.getElementById("password").value;
        
        fetch("/login", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    username: username,
                    password: password
                }
            )
        }).then(res => {
            return res.json();
        }).then(data => {
            this.console.log(data)
        })
    }
}