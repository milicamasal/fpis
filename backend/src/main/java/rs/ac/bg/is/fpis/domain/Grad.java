/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "grad")
public class Grad implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private Integer postanskiBroj;
    @Column(name = "naziv")
    private String naziv;
    @JoinColumn(name = "sifraDrzave", referencedColumnName = "sifraDrzave")
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Drzava drzava;

    public Grad() {
    }

    public Grad(Integer postanskiBroj) {
        this.postanskiBroj = postanskiBroj;
    }

    public Grad(Integer postanskiBroj, String naziv) {
        this.postanskiBroj = postanskiBroj;
        this.naziv = naziv;
    }

    public Integer getPostanskiBroj() {
        return postanskiBroj;
    }

    public void setPostanskiBroj(Integer postanskiBroj) {
        this.postanskiBroj = postanskiBroj;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public Drzava getSifraDrzave() {
        return drzava;
    }

    public void setSifraDrzave(Drzava sifraDrzave) {
        this.drzava = sifraDrzave;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (postanskiBroj != null ? postanskiBroj.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Grad)) {
            return false;
        }
        Grad other = (Grad) object;
        if ((this.postanskiBroj == null && other.postanskiBroj != null) || (this.postanskiBroj != null && !this.postanskiBroj.equals(other.postanskiBroj))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "postanskiBroj=" + postanskiBroj + " ]";
    }

}