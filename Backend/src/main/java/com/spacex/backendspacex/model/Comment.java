package com.spacex.backendspacex.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long missionId;

    private String rocketId;

    private String comment;

    public Comment(Long missionId, String rocketId, String comment) {
        this.missionId = missionId;
        this.rocketId = rocketId;
        this.comment = comment;
    }

    public Comment(){

    }
}
