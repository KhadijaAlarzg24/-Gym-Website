package com.bmt.webapp.models;

import jakarta.validation.constraints.*;


public class ClientDto {

    @NotEmpty(message = "The first name is required")
    private String firstName;

    @NotEmpty(message = "The last name is required")
    private String lastName;

    @NotEmpty(message = "The email is required")
    @Email
    private String email;
    private String phone;
    private String address;
    @NotEmpty(message = "The status is required")
    private String status;
    
}
