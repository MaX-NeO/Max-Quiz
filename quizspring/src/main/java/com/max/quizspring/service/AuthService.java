package com.max.quizspring.service;

import com.max.quizspring.dto.request.LoginRequest;
import com.max.quizspring.dto.request.RegisterRequest;
import com.max.quizspring.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}
