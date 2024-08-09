package com.backend.security;

import com.backend.service.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.security.KeyPair;
import java.util.Date;

@Slf4j
@Component
public class JwtService {
    private final KeyPair JWT_SECRET = Jwts.SIG.ES256.keyPair().build();
    private final long JWT_EXPIRATION = 60 * 1000; // seconds * 1000

    public String generateToken(CustomUserDetails userDetails) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);

        return Jwts.builder()
                .subject(userDetails.getUser().getUid().toString())
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(JWT_SECRET.getPrivate())
                .compact();
    }

    public Long getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(JWT_SECRET.getPublic())
                .build().parseSignedClaims(token)
                .getPayload();
        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(JWT_SECRET.getPublic())
                    .build().parseSignedClaims(token)
                    .getPayload();
            return true;
        }
        catch (MalformedJwtException e) {
            log.error("Invalid JWT token");
        }
        catch (ExpiredJwtException e) {
            log.error("Expired JWT token");
        }
        catch (UnsupportedJwtException e) {
            log.error("Unsupported JWT token");
        }
        catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty");
        }
        return false;
    }
}
