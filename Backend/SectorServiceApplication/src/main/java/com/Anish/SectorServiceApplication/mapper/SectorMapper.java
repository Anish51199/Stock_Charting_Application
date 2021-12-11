package com.Anish.SectorServiceApplication.mapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.Anish.SectorServiceApplication.dto.SectorDto;
import com.Anish.SectorServiceApplication.model.Sector;

@Component
public class SectorMapper
{
    public SectorDto toSectorDto(Sector sector)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        SectorDto sectorDto = mapper.map(sector, SectorDto.class);
        return sectorDto;
    }

    public Sector toSector(SectorDto sectorDto)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Sector sector = mapper.map(sectorDto, Sector.class);
        return sector;
    }

    public List<SectorDto> toSectorDtos(List<Sector> sectors)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        List<SectorDto> sectorDtos = Arrays.asList(mapper.map(sectors, SectorDto[].class));
        return sectorDtos;
    }
}
