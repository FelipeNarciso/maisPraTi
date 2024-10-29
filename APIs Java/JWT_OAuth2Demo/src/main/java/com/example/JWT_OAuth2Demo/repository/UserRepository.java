package com.example.JWT_OAuth2Demo.repository;

import com.example.JWT_OAuth2Demo.userDocument.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUserName(String username);
}
