package com.max.quizspring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.quizspring.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
