package com.backend.controller;

import com.backend.model.User;
import com.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ExampleController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public Map<String, String> home() {
        return Collections.singletonMap("message", "application is up and running");
    }

    @GetMapping("/user/delete")
    public Map<String, String> userDelete() {
        userRepository.deleteAll();
        return Collections.singletonMap("success", "true");
    }

    @GetMapping("/user/add")
    public Map<String, String> user(@RequestParam String email, String password) {
        User user = new User();
        user.setEmail(email);
        user.setPassword((new BCryptPasswordEncoder()).encode(password));
        userRepository.save(user);
        return Collections.singletonMap("success", "true");
    }

    @GetMapping("/user")
    public List<User> user(@RequestParam(required = false) String email){
        List<User> ul = new ArrayList<>();
        if (email != null){
            User user = userRepository.findByEmail(email);
            ul.add(user);
        }
        else
            ul = userRepository.findAll();
        return ul;
    }

    @PostMapping("/user")
    public void addUser(@RequestBody User user){
        if (user.getPassword() != null && user.getEmail() != null)
            userRepository.save(user);
        System.out.println(user.toString());
    }
}
