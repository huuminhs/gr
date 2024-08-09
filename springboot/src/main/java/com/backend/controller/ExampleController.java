package com.backend.controller;

import com.backend.model.User;
import com.backend.dto.LoginRequest;
import com.backend.dto.LoginResponse;
import com.backend.repository.UserRepository;
import com.backend.security.JwtService;
import com.backend.service.AuthService;
import com.backend.service.CustomUserDetails;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@AllArgsConstructor
public class ExampleController {
    UserRepository userRepository;
    private AuthService authService;
    private JwtService jwtService;
    private AuthenticationManager authenticationManager;

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
    }

    @PostMapping("/api/login")
    public LoginResponse authenticateUser (@Valid @RequestBody LoginRequest loginRequest) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt = jwtService.generateToken((CustomUserDetails) auth.getPrincipal());
        return LoginResponse.builder().
                accessToken(jwt).
                build();
    }
}
