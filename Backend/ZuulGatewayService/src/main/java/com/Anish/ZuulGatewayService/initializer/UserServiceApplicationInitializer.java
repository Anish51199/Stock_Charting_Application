package com.Anish.ZuulGatewayService.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.Anish.ZuulGatewayService.dao.UserRepository;
import com.Anish.ZuulGatewayService.model.User;

@Component
public class UserServiceApplicationInitializer implements CommandLineRunner
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception
    {
        userRepository.deleteAll();
        User admin = new User("admin", passwordEncoder.encode("password"), "ranjan.anish51199@gmail.com", "9079679528");
        admin.setRole("ADMIN");
        admin.setConfirmed(true);
        userRepository.save(admin);
    }
}

