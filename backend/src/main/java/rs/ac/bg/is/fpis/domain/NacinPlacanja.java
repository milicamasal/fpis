/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "nacinplacanja")
@NamedQueries({
    @NamedQuery(name = "NacinPlacanja.findAll", query = "SELECT n FROM NacinPlacanja n")})
public class NacinPlacanja implements  Serializable{
     @Id
    @Column(name = "nacinid", length = 10)
    private int nacinid;
    @Column
    private String opisNacinaPlacanja;

    public NacinPlacanja() {
    }

    public NacinPlacanja(int id, String opisNacinaPlacanja) {
        this.nacinid = id;
        this.opisNacinaPlacanja = opisNacinaPlacanja;
    }

    public String getOpisNacinaPlacanja() {
        return opisNacinaPlacanja;
    }

    public void setOpisNacinaPlacanja(String opisNacinaPlacanja) {
        this.opisNacinaPlacanja = opisNacinaPlacanja;
    }

    public int getNacinid() {
        return nacinid;
    }

    public void setNacinid(int nacinid) {
        this.nacinid = nacinid;
    }

    
}
