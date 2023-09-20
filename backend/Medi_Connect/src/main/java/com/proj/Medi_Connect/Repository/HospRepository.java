package com.proj.Medi_Connect.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proj.Medi_Connect.Entity.Hospital;

public interface HospRepository extends JpaRepository<Hospital,Integer> {
	List<Hospital>findAll();

	List<Hospital> findByCityAndSpeciality(String city, String speciality);

}
