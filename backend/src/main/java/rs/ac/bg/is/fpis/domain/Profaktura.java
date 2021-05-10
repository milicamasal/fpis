/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "profaktura")
@NamedQueries({
    @NamedQuery(name = "Profaktura.findAll", query = "SELECT r FROM Profaktura r")})
public class Profaktura implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "brojProfakture")
    private int brojProfakture;
    @Column
    private double iznos;
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datumPrometa;
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datumIzdavanja;
    @Column
    private String pozivNaBroj;
    
    @JoinColumn(name = "sifraRadnika", referencedColumnName = "sifraRadnika")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Radnik radnik;
    
    @JoinColumn(name = "brojUgovora", referencedColumnName = "brojUgovora")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private UgovorOPrevozu ugovor;
    
    @JoinColumn(name = "postanskiBroj", referencedColumnName = "postanskiBroj")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Grad grad;
    
    @JoinColumn(name = "sifraDrzave", referencedColumnName = "sifraDrzave")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Drzava drzava;
    
    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "brojProfakture")
    private List<StavkaProfakture> stavke;
    @ManyToMany
    @JoinTable(
            name = "profaktura_nacin",
            joinColumns = @JoinColumn(name = "brojProfakture"),
            inverseJoinColumns = @JoinColumn(name = "nacinid"))
    private List<NacinPlacanja> nacinPlacanja;

    public Profaktura(int brojProfakture, double iznos, Date datumPrometa, Date datumIzdavanja, String pozivNaBroj, Radnik radnik, List<StavkaProfakture> stavke, List<NacinPlacanja> nacinPlacanja) {
        this.brojProfakture = brojProfakture;
        this.iznos = iznos;
        this.datumPrometa = datumPrometa;
        this.datumIzdavanja = datumIzdavanja;
        this.pozivNaBroj = pozivNaBroj;
        this.radnik = radnik;
        this.stavke = stavke;
        this.nacinPlacanja = nacinPlacanja;
    }

    public Profaktura(int brojProfakture, double iznos, Date datumPrometa, Date datumIzdavanja, String pozivNaBroj, Radnik radnik, UgovorOPrevozu ugovor, Grad grad, Drzava drzava, List<StavkaProfakture> stavke, List<NacinPlacanja> nacinPlacanja) {
        this.brojProfakture = brojProfakture;
        this.iznos = iznos;
        this.datumPrometa = datumPrometa;
        this.datumIzdavanja = datumIzdavanja;
        this.pozivNaBroj = pozivNaBroj;
        this.radnik = radnik;
        this.ugovor = ugovor;
        this.grad = grad;
        this.drzava = drzava;
        this.stavke = stavke;
        this.nacinPlacanja = nacinPlacanja;
    }
    

    public Profaktura() {
    }

    public int getBrojProfakture() {
        return brojProfakture;
    }

    public void setBrojProfakture(int brojProfakture) {
        this.brojProfakture = brojProfakture;
    }

    public double getIznos() {
        return iznos;
    }

    public void setIznos(double iznos) {
        this.iznos = iznos;
    }

    public Date getDatumPrometa() {
        return datumPrometa;
    }

    public void setDatumPrometa(Date datumPrometa) {
        this.datumPrometa = datumPrometa;
    }

    public Date getDatumIzdavanja() {
        return datumIzdavanja;
    }

    public void setDatumIzdavanja(Date datumIzdavanja) {
        this.datumIzdavanja = datumIzdavanja;
    }

    public String getPozivNaBroj() {
        return pozivNaBroj;
    }

    public void setPozivNaBroj(String pozivNaBroj) {
        this.pozivNaBroj = pozivNaBroj;
    }

    public List<NacinPlacanja> getNacinPlacanja() {
        return nacinPlacanja;
    }

    public void setNacinPlacanja(List<NacinPlacanja> nacinPlacanja) {
        this.nacinPlacanja = nacinPlacanja;
    }

    public Radnik getRadnik() {
        return radnik;
    }

    public void setRadnik(Radnik radnik) {
        this.radnik = radnik;
    }

    public List<StavkaProfakture> getStavke() {
        return stavke;
    }

    public void setStavke(List<StavkaProfakture> stavke) {
       
        this.stavke = stavke;
        
    }

    public UgovorOPrevozu getUgovor() {
        return ugovor;
    }

    public void setUgovor(UgovorOPrevozu ugovor) {
        this.ugovor = ugovor;
    }

    public Grad getGrad() {
        return grad;
    }

    public void setGrad(Grad grad) {
        this.grad = grad;
    }

    public Drzava getDrzava() {
        return drzava;
    }

    public void setDrzava(Drzava drzava) {
        this.drzava = drzava;
    }

}
