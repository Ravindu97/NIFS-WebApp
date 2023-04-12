package com.nifs.backend.model.admin;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.nifs.backend.constant.RequestStatus;
import com.nifs.backend.model.Base;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name="contract_extension")
public class ContractExtension extends Base {

    int epfNo;
    String documentNo;
    String date;
    String designationId;
    String divisionId;
    String hod;
    String remark;

    RequestStatus hodApproved;
    RequestStatus dirApproved;


}
