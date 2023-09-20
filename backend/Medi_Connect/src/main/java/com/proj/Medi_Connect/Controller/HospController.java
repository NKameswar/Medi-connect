package com.proj.Medi_Connect.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proj.Medi_Connect.Entity.Hospital;
import com.proj.Medi_Connect.Repository.HospRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HospController {
	@Autowired
	
	private final HospRepository hospitalRepository;

    public HospController(HospRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    @GetMapping("/docdetails")
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }
    @GetMapping("/docout")
    public List<Hospital> getHospitalsByCityAndSpeciality(
        @RequestParam(name = "city") String city,
        @RequestParam(name = "speciality") String speciality
    ) {
        // Fetch hospitals based on city and speciality
        return hospitalRepository.findByCityAndSpeciality(city, speciality);
    }
   

}
