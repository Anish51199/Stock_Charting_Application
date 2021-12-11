package com.Anish.StockExchangeApplication.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Anish.StockExchangeApplication.model.StockExchange;


@Repository
public interface StockExchangeRepository extends MongoRepository<StockExchange, String>
{
    public StockExchange findById(int id);
    public StockExchange findByName(String name);
}
