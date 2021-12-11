package com.Anish.SectorServiceApplication.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Anish.SectorServiceApplication.model.Sector;

@Repository
public interface SectorRepository extends MongoRepository<Sector, String>
{
    public Sector findByName(String sectorName);
}
