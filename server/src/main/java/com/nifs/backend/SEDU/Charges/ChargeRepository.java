package com.nifs.backend.SEDU.Charges;

import com.nifs.backend.SEDU.Facility.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ChargeRepository extends JpaRepository<Charges, Integer> {

    @Query(value="SELECT * FROM venue_charges_master WHERE charge_id =?1", nativeQuery = true)
    Charges returnCharge(String id);



}
