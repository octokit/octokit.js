    "test: <%name%>":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.<%funcName%>(
            <%params%>,
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }