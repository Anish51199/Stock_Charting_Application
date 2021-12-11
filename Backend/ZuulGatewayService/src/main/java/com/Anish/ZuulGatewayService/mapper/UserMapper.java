package com.Anish.ZuulGatewayService.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.Anish.ZuulGatewayService.dto.UserDto;
import com.Anish.ZuulGatewayService.model.User;

@Component
public class UserMapper
{
    public UserDto toUserDto(User user)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = mapper.map(user, UserDto.class);
        return userDto;
    }

    public User toUser(UserDto userDto)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        User user = mapper.map(userDto, User.class);
        return user;
    }
}
