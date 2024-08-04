package com.backend.controller;

import com.backend.model.User;
import com.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
public class ExampleController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public Map<String, String> home() {
        return Collections.singletonMap("message", "application is up and running");
    }

    @GetMapping("/user")
    public List<User> user(@RequestParam(required = false) String email){
        if (email == null){
            User user = new User();
            user.setEmail("abc");
            user.setPassword("abc");
            userRepository.save(user);
        }
        else {
            List<User> to_delete = userRepository.findAllByEmail(email);
            userRepository.deleteAll(to_delete);
        }

        return userRepository.findAll();
    }
}
