/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "valuta")
@NamedQueries({
    @NamedQuery(name = "Valuta.findAll", query = "SELECT v FROM Valuta v")})
public class Valuta implements Serializable{
    @Id
    @Column(name = "idValute")
    private int idValute;
    @Column
    private String nazivValute;

    public Valuta() {
    }

    public Valuta(int idValute, String nazivValute) {
        this.idValute = idValute;
        this.nazivValute = nazivValute;
    }

    public String getNazivValute() {
        return nazivValute;
    }

    public void setNazivValute(String nazivValute) {
        this.nazivValute = nazivValute;
    }

    public int getIdValute() {
        return idValute;
    }

    public void setIdValute(int idValute) {
        this.idValute = idValute;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Valuta other = (Valuta) obj;
        if (this.idValute != other.idValute) {
            return false;
        }
        if (!Objects.equals(this.nazivValute, other.nazivValute)) {
            return false;
        }
        return true;
    }
    
}
