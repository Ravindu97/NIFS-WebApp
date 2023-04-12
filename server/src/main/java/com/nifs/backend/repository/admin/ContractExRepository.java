package com.nifs.backend.repository.admin;

import com.nifs.backend.constant.RequestStatus;
import com.nifs.backend.model.admin.ContractExtension;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface ContractExRepository extends JpaRepository<ContractExtension, Integer> {
    @Query("select c from ContractExtension c where c.documentNo = ?1")
    ContractExtension findByDocumentNoEquals(String documentNo);

    List<ContractExtension> findAllByOrderByCreatedOnDesc();

    List<ContractExtension> findByDivisionIdOrderByCreatedOnDesc(String division);

    @Transactional
    @Modifying
    @Query("UPDATE ContractExtension r SET r.hodApproved = :hodApproved, r.modifiedBy = :modifiedBy, r.modifiedOn = :modifiedOn WHERE r.documentNo = :documentNo")
    void updateHodApproveAndModifiedFields(@Param("hodApproved") RequestStatus dirApproved, @Param("modifiedBy") String modifiedBy, @Param("modifiedOn") Date modifiedOn, @Param("documentNo") String documentNo);


    @Transactional
    @Modifying
    @Query("UPDATE ContractExtension r SET r.dirApproved = :dirApproved, r.modifiedBy = :modifiedBy, r.modifiedOn = :modifiedOn WHERE r.documentNo = :documentNo")
    void updateDirApproveAndModifiedFields(@Param("dirApproved") RequestStatus dirApproved, @Param("modifiedBy") String modifiedBy, @Param("modifiedOn") Date modifiedOn, @Param("documentNo") String documentNo);

}
