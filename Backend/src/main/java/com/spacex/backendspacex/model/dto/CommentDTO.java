package com.spacex.backendspacex.model.dto;

import lombok.Data;

@Data
public class CommentDTO {
    Long missionId;
    String rocketId;
    String comment;

    public CommentDTO(Long missionId, String rocketId, String comment) {
        this.missionId = missionId;
        this.rocketId = rocketId;
        this.comment = comment;
    }


    public CommentDTO(){

    }
}
