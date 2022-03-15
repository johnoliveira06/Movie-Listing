package com.springreact.springreact.repositories;

import com.springreact.springreact.entities.Score;
import com.springreact.springreact.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
    
}
