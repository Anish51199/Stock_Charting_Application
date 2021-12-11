package com.Anish.StockPriceApplication.feignclient;

import java.util.List;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.Anish.StockPriceApplication.dto.CompanyDto;


@FeignClient("sector-service")
public interface SectorClient
{
    @GetMapping("/sectors/{sectorName}/companies")
    public List<CompanyDto> getSectorCompanies(@PathVariable String sectorName);
}
