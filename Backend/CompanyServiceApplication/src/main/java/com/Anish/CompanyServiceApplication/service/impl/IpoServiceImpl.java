package com.Anish.CompanyServiceApplication.service.impl;

import java.util.List;
import java.util.Optional;

import com.Anish.CompanyServiceApplication.service.IpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Anish.CompanyServiceApplication.dao.IpoRepository;
import com.Anish.CompanyServiceApplication.dto.CompanyDto;
import com.Anish.CompanyServiceApplication.dto.IpoDto;
import com.Anish.CompanyServiceApplication.mapper.IpoMapper;
import com.Anish.CompanyServiceApplication.model.Ipo;
import com.Anish.CompanyServiceApplication.service.CompanyService;
import com.Anish.CompanyServiceApplication.service.IpoService;

@Service
public class IpoServiceImpl implements IpoService {
    @Autowired
    private IpoRepository ipoRepository;

    @Autowired
    private IpoMapper ipoMapper;

    @Autowired
    private CompanyService companyService;

    @Override
    public List<IpoDto> findAll() {
        List<Ipo> ipos = ipoRepository.findAll();
        return ipoMapper.toIpoDtos(ipos);
    }

    @Override
    public IpoDto findById(String id) {
        Optional<Ipo> ipo = ipoRepository.findById(id);
        if(!ipo.isPresent())
            return null;
        return ipoMapper.toIpoDto(ipo.get());
    }

    @Override
    public IpoDto save(IpoDto ipoDto) {
        Ipo ipo = ipoMapper.toIpo(ipoDto);
        ipo = ipoRepository.save(ipo);
        ipoDto = ipoMapper.toIpoDto(ipo);
        CompanyDto companyDto = companyService.addIpoToCompany(ipo.getCompanyName(), ipoDto);
        if(companyDto == null)
            return null;
        return ipoDto;
    }

    @Override
    public IpoDto update(IpoDto ipoDto) {
        if(findById(ipoDto.getId()) == null)
            return null;
        Ipo ipo = ipoRepository.save(ipoMapper.toIpo(ipoDto));
        return ipoMapper.toIpoDto(ipo);
    }

    @Override
    public void deleteById(String id) {
        ipoRepository.deleteById(id);
    }
}
