package com.backend.security;

import com.backend.service.CustomUserDetails;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Slf4j
@Component
public class JwtTokenProvider {
    private final SecretKey JWT_SECRET = Keys.secretKeyFor(SignatureAlgorithm.HS512);
    private final long JWT_EXPIRATION = 3600;

    public String generateToken(CustomUserDetails userDetails) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);

        return Jwts.builder()
                .subject(userDetails.getUser().getUid().toString())
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(JWT_SECRET)
                .compact();
    }

    public Long getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(JWT_SECRET)
                    .build()
                    .parseClaimsJws(token)
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
