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
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "uplatnica")
@NamedQueries({
    @NamedQuery(name = "Uplatnica.findAll", query = "SELECT u FROM Uplatnica u")})
public class Uplatnica implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idUplatnice")
    private int idUplatnice;
   
    @Column
    private double iznos;
    @Column
    private String svrhaUplate;
    @JoinColumn(name = "idValute", referencedColumnName = "idValute")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Valuta valuta;
    @JoinColumn(name = "idModela", referencedColumnName = "idModela")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Model model;
    @JoinColumn(name = "sifraRadnika", referencedColumnName = "sifraRadnika")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Radnik radnik;
    @JoinColumn(name = "brojProfakture", referencedColumnName = "brojProfakture")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Profaktura profaktura;

    public Uplatnica() {
    }

   
    public int getIdUplatnice() {
        return idUplatnice;
    }

    public void setIdUplatnice(int idUplatnice) {
        this.idUplatnice = idUplatnice;
    }

  
    public double getIznos() {
        return iznos;
    }

    public void setIznos(double iznos) {
        this.iznos = iznos;
    }

  
    public String getSvrhaUplate() {
        return svrhaUplate;
    }

    public void setSvrhaUplate(String svrhaUplate) {
        this.svrhaUplate = svrhaUplate;
    }

    public Valuta getValuta() {
        return valuta;
    }

    public void setValuta(Valuta valuta) {
        this.valuta = valuta;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public Radnik getRadnik() {
        return radnik;
    }

    public void setRadnik(Radnik radnik) {
        this.radnik = radnik;
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
        final Uplatnica other = (Uplatnica) obj;
        if (this.idUplatnice != other.idUplatnice) {
            return false;
        }
        return true;
    }

    public Profaktura getProfaktura() {
        return profaktura;
    }

    public void setProfaktura(Profaktura profaktura) {
        this.profaktura = profaktura;
    }
    
    

}
