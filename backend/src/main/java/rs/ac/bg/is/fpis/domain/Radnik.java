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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "radnik")
@NamedQueries({
    @NamedQuery(name = "Radnik.findAll", query = "SELECT r FROM Radnik r")})
public class Radnik implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sifraRadnika")
    private int sifraRadnika;
    @Column
    private String imePrezime;

    public Radnik() {
    }

    public Radnik(int sifraRadnika, String imePrezime) {
        this.sifraRadnika = sifraRadnika;
        this.imePrezime = imePrezime;
    }

    public int getSifraRadnika() {
        return sifraRadnika;
    }

    public void setSifraRadnika(int sifraRadnika) {
        this.sifraRadnika = sifraRadnika;
    }

    public String getImePrezime() {
        return imePrezime;
    }

    public void setImePrezime(String imePrezime) {
        this.imePrezime = imePrezime;
    }
    
    
}
