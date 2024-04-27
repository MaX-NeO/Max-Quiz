package com.max.quizspring.service;

import java.util.List;

import com.max.quizspring.dto.request.SiteRequest;
import com.max.quizspring.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

    String deleteSiteData(Long id);

}
