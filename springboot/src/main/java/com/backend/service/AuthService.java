package com.backend.service;

import com.backend.dto.LoginRequest;
import com.backend.dto.LoginResponse;
import com.backend.repository.UserRepository;
import com.backend.security.JwtService;
import jakarta.validation.Valid;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Security;

@Service
@Slf4j
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public LoginResponse login( LoginRequest loginReq) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginReq.getEmail(),
                        loginReq.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt = jwtService.generateToken((CustomUserDetails) auth.getPrincipal());
        return LoginResponse.builder().
                accessToken(jwt).
                build();
    }
}
