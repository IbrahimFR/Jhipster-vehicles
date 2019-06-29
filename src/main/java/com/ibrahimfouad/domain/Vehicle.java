package com.ibrahimfouad.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;

import javax.persistence.*;

import java.io.Serializable;

/**
 * The Vehicle entity.
 */
@ApiModel(description = "The Vehicle entity.")
@Entity
@Table(name = "vehicle")
public class Vehicle implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "vehicle_id")
    private Long vehicleId;

    @Column(name = "v_in")
    private String vIN;

    @Column(name = "reg_num")
    private String regNum;

    @Column(name = "status")
    private Boolean status;

    @ManyToOne
    @JsonIgnoreProperties("vehicles")
    private Customer customer;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public Vehicle vehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getvIN() {
        return vIN;
    }

    public Vehicle vIN(String vIN) {
        this.vIN = vIN;
        return this;
    }

    public void setvIN(String vIN) {
        this.vIN = vIN;
    }

    public String getRegNum() {
        return regNum;
    }

    public Vehicle regNum(String regNum) {
        this.regNum = regNum;
        return this;
    }

    public void setRegNum(String regNum) {
        this.regNum = regNum;
    }

    public Boolean isStatus() {
        return status;
    }

    public Vehicle status(Boolean status) {
        this.status = status;
        return this;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Vehicle customer(Customer customer) {
        this.customer = customer;
        return this;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vehicle)) {
            return false;
        }
        return id != null && id.equals(((Vehicle) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
            "id=" + getId() +
            ", vehicleId=" + getVehicleId() +
            ", vIN='" + getvIN() + "'" +
            ", regNum='" + getRegNum() + "'" +
            ", status='" + isStatus() + "'" +
            "}";
    }
}
