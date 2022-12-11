package com.nifs.backend.SEDU.Charges;

import com.nifs.backend.SEDU.Facility.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;


public interface ChargeRepository extends CrudRepository<Charges, String> {
    @Transactional
    @Modifying
    @Query("DELETE FROM Charges c WHERE c.chargeId LIKE :chargeId")
    void deleteByChargeIdLike(String chargeId);
    @Transactional
    @Modifying
    @Query("UPDATE Charges c set c.name = :name, c.charge = :charge WHERE c.chargeId LIKE :chargeId")
    void Update(@Param("name") String name, @Param("charge") double charge,
                @Param("chargeId") String chargeId);

    @Query(value="SELECT * FROM venue_charges_master WHERE charge_id =?1", nativeQuery = true)
    Charges returnCharge(String id);

//    @Query(value = "SELECT charge_id FROM venue_charges_master ORDER BY charge_id DESC LIMIT 1", nativeQuery = true)
    @Query(value = "SELECT TOP 1 charge_id FROM venue_charges_master ORDER BY charge_id DESC", nativeQuery = true)
    String returnLastId();


}
