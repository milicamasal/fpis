/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "stavkaProfakture")
@IdClass(StavkaProfaktureID.class)
public class StavkaProfakture implements Serializable {

    @Id
    private Integer brojProfakture;
    @Id
    @GeneratedValue
    private Integer idStavke;
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private String napomena;
    @Column
    private String opis;
    @Column
    private double cena;

    public StavkaProfakture() {
    }

    public StavkaProfakture(Integer brojFakture, Integer idStavke, String napomena, String opis, double cena) {
        this.brojProfakture = brojFakture;
        this.idStavke = idStavke;
        this.napomena = napomena;
        this.opis = opis;
        this.cena = cena;
    }

    public Integer getBrojProfakture() {
        return brojProfakture;
    }

    public void setBrojProfakture(Integer brojProfakture) {
        this.brojProfakture = brojProfakture;
    }

    public Integer getIdStavke() {
        return idStavke;
    }

    public void setIdStavke(Integer idStavke) {
        this.idStavke = idStavke;
    }

    public String getNapomena() {
        return napomena;
    }

    public void setNapomena(String napomena) {
        this.napomena = napomena;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public double getCena() {
        return cena;
    }

    public void setCena(double cena) {
        this.cena = cena;
    }

}
