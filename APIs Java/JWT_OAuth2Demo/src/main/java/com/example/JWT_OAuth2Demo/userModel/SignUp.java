package com.example.JWT_OAuth2Demo.userModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUp {

    private String username;
    private String password;

    public SignUp(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }
    public String getUserName() {
        return username;
    }
    public void setUserName(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}