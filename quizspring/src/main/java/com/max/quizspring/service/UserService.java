package com.max.quizspring.service;

import java.util.List;

import com.max.quizspring.dto.request.UserCreateRequest;
import com.max.quizspring.dto.request.UserUpdateRequest;
import com.max.quizspring.dto.response.UserResponse;
import com.max.quizspring.model.User;

public interface UserService {

    User createUser(UserCreateRequest registerRequest);

    User updateUser(Long userId, UserUpdateRequest userUpdateRequest);

    public void deleteUser(Long userId);

    public User getUserById(Long userId);

    public List<User> getAllUsers();

    UserResponse getUserByEmail(String email);

}
