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
@Table(name = "korisnik")
@NamedQueries({
    @NamedQuery(name = "Korisnik.findAll", query = "SELECT k FROM Korisnik k")})
public class Korisnik implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sifraKorisnika")
    private int sifraKorisnika;
    @Column
    private String imePrezime;

    public Korisnik() {
    }

    public Korisnik(int sifraKorisnika, String imePrezime) {
        this.sifraKorisnika = sifraKorisnika;
        this.imePrezime = imePrezime;
    }

    public int getSifraKorisnika() {
        return sifraKorisnika;
    }

    public void setSifraKorisnika(int sifraKorisnika) {
        this.sifraKorisnika = sifraKorisnika;
    }

    public String getImePrezime() {
        return imePrezime;
    }

    public void setImePrezime(String imePrezime) {
        this.imePrezime = imePrezime;
    }
    
    

}
