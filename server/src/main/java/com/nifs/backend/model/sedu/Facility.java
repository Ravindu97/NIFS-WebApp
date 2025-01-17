package com.nifs.backend.model.sedu;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="venue_facility_master")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Facility {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id", nullable = false)
//    private Integer id;

    @Id
    @Column(name="facility_id", nullable = false, length = 10)
    private String facilityId;

    @Column(name = "facility_name",  nullable = false, length = 50)
    private String name;

    @Column(name = "CreatedOn", nullable = false)
    @CreationTimestamp
    private Date createdOn;
    @Column(name = "ModifiedOn")
    @UpdateTimestamp
    private Date modifiedOn;
    @Column(name = "IsDeleted")
    private boolean isDeleted;
    @Column(name = "CreatedBy", nullable = false)
    private Integer createdBy;
    @Column(name = "ModifiedBy")
    private Integer modifiedBy;





//    relationships
//    @JsonBackReference
    @OneToMany(mappedBy = "facilityId", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<VenueFacility> venueFacilities;


}
