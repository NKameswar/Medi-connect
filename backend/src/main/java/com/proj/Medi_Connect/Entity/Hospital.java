package com.proj.Medi_Connect.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    int id;
    String city;
    String speciality;
    String doctor_name;
    String hospital_name;

    public Hospital() {
    }

    public Hospital(Integer id,String city, String speciality, String doctor_name, String hospital_name) {
        this.id=id;
    	this.city = city;
        this.speciality = speciality;
        this.doctor_name = doctor_name;
        this.hospital_name = hospital_name;
    }

    public Integer getId() {
        return id;
    }

    public String getCity() {
        return city;
    }

    public String getSpeciality() {
        return speciality;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public String getHospital_name() {
        return hospital_name;
    }

}
