package com.max.quizspring.dto.request;

// import com.max.quizspring.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserUpdateRequest {
    private String name;
    private String email;
    // private String password;
    private String phone;
    private String address;
    // private Role role;
}
