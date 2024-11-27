package com.example.DockerExample.repository;

import com.example.DockerExample.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
