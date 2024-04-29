package com.max.quizspring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.quizspring.dto.request.SiteRequest;
import com.max.quizspring.service.WebService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.OK;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/web")
@Tag(name = "Website", description = "Endpoints for social media")
@RequiredArgsConstructor
public class WebController {

    private final WebService webService;
     Logger log =LoggerFactory.getLogger(WebController.class);

    @GetMapping("/site")
    @Operation(summary = "Retrieve social media data", description = "Retrieves dynamic user data from social media sites for display on the website's contact page or footer.")
    public ResponseEntity<?> getSiteData() {
        return new ResponseEntity<>(webService.getSiteData(), OK);
    }

    @PostMapping("/add/site")
    @Operation(summary = "Add new social media site", description = "Adds data for a new social media site.")
    public ResponseEntity<?> addSiteData(@RequestBody SiteRequest siteRequest) {
        log.info(siteRequest.toString());
        return new ResponseEntity<>(webService.addSiteData(siteRequest), OK);
    }

    // @PatchMapping("/update/site")
    // @Operation(summary = "Update social media site", description = "Updates data
    // for an existing social media site.")
    // public ResponseEntity<?> updateSiteData(@RequestBody SiteRequest siteRequest,
    // @PathVariable Long id){
    // return new ResponseEntity<>(webService.updateSiteData(siteRequest, id), OK);
    // }
    @PutMapping("/update/site/{id}")
    @Operation(summary = "Update social media site", description = "Updates data for an existing social media site.")
    public ResponseEntity<?> updateSiteData(@RequestBody SiteRequest siteRequest, @PathVariable Long id) {
        return new ResponseEntity<>(webService.updateSiteData(siteRequest, id), OK);
    }

    @DeleteMapping("/delete/site/{id}")
    @Operation(summary = "Delete social media site", description = "Delete data for an existing social media site.")
    public ResponseEntity<?> deleteSiteData(@PathVariable Long id) {
        return new ResponseEntity<>(webService.deleteSiteData(id), OK);
    }
}
